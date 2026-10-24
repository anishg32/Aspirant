import { NextRequest, NextResponse } from 'next/server';
import {
  ChatMessageItem,
  callGeminiStream,
  callOpenAICompatibleStream,
  generateLocalConversationalResponse,
} from '@/lib/ai-engine';

// In-memory rate limiting map: IP -> timestamp[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_MINUTE = 40;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_MINUTE) {
    return false;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'anonymous-client';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded. Please wait a moment before sending more messages.',
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { messages, stream = true } = body as {
      messages: ChatMessageItem[];
      stream?: boolean;
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array cannot be empty.' },
        { status: 400 }
      );
    }

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || typeof lastMessage.content !== 'string' || !lastMessage.content.trim()) {
      return NextResponse.json(
        { error: 'Message content cannot be empty.' },
        { status: 400 }
      );
    }

    if (lastMessage.content.length > 4000) {
      return NextResponse.json(
        { error: 'Message is too long (maximum 4000 characters).' },
        { status: 400 }
      );
    }

    // Truncate history to last 15 messages for context safety
    const recentMessages = messages.slice(-15);

    // Check Available Providers
    const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;
    const groqKey = process.env.GROQ_API_KEY;
    const openrouterKey = process.env.OPENROUTER_API_KEY;

    let activeProvider = 'local-engine';
    let responseStream: ReadableStream<Uint8Array> | null = null;

    // 1. Try Gemini
    if (geminiKey) {
      try {
        activeProvider = 'gemini-live';
        responseStream = await callGeminiStream(recentMessages, geminiKey);
      } catch (err) {
        console.warn('[Gemini Provider Error, falling back]', err);
      }
    }

    // 2. Try OpenAI
    if (!responseStream && openaiKey) {
      try {
        activeProvider = 'openai-live';
        responseStream = await callOpenAICompatibleStream(
          recentMessages,
          openaiKey,
          'https://api.openai.com/v1/chat/completions',
          process.env.OPENAI_MODEL || 'gpt-4o-mini'
        );
      } catch (err) {
        console.warn('[OpenAI Provider Error, falling back]', err);
      }
    }

    // 3. Try Groq
    if (!responseStream && groqKey) {
      try {
        activeProvider = 'groq-live';
        responseStream = await callOpenAICompatibleStream(
          recentMessages,
          groqKey,
          'https://api.groq.com/openai/v1/chat/completions',
          process.env.GROQ_MODEL || 'llama-3.3-70b-versatile'
        );
      } catch (err) {
        console.warn('[Groq Provider Error, falling back]', err);
      }
    }

    // 4. Try OpenRouter
    if (!responseStream && openrouterKey) {
      try {
        activeProvider = 'openrouter-live';
        responseStream = await callOpenAICompatibleStream(
          recentMessages,
          openrouterKey,
          'https://openrouter.ai/api/v1/chat/completions',
          'meta-llama/llama-3.3-70b-instruct'
        );
      } catch (err) {
        console.warn('[OpenRouter Provider Error, falling back]', err);
      }
    }

    // 5. Fallback Conversational Engine with Multi-Turn Memory
    if (!responseStream) {
      const localResult = generateLocalConversationalResponse(recentMessages);
      activeProvider = 'conversational-engine-active';

      if (!stream) {
        return NextResponse.json({
          success: true,
          provider: activeProvider,
          providerNotice:
            'Running on Built-in Conversational Engine. To connect live Gemini or GPT-4o, set GEMINI_API_KEY or OPENAI_API_KEY in .env.local.',
          reply: localResult.reply,
          quickActions: localResult.quickActions,
        });
      }

      // Stream the local response with realistic human reading pace
      const encoder = new TextEncoder();
      const chunks = localResult.reply.match(/.{1,4}/g) || [localResult.reply];

      responseStream = new ReadableStream({
        async start(controller) {
          for (const chunk of chunks) {
            controller.enqueue(encoder.encode(chunk));
            await new Promise((resolve) => setTimeout(resolve, 8));
          }
          controller.close();
        },
      });
    }

    return new Response(responseStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'X-AI-Provider': activeProvider,
        'X-Provider-Notice':
          activeProvider === 'conversational-engine-active'
            ? 'API Key not detected. To connect live cloud LLMs, add GEMINI_API_KEY or OPENAI_API_KEY to .env.local'
            : 'Live Cloud LLM Connected',
      },
    });
  } catch (error) {
    console.error('[API Assistant Error]', error);
    return NextResponse.json(
      {
        error: 'An internal error occurred while generating the assistant response.',
      },
      { status: 500 }
    );
  }
}
