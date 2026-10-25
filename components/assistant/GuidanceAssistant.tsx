'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Compass,
  ArrowRight,
  RotateCcw,
  Bot,
  User,
  ShieldCheck,
  Square,
  Copy,
  Check,
  RefreshCw,
  Info,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import ChatMessageContent from './ChatMessageContent';

interface ChatMessage {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: string;
  error?: boolean;
}

const OPTIONAL_STARTER_PROMPTS = [
  'Where is Karka Academy located?',
  'What programs and Pay After Placement are offered?',
  'Teach me Python from scratch',
  'Tell me about Spike AI & Karka Infini AI',
  'What is the difference between Java & Python?',
];

let chatMsgCounter = 0;
const generateChatMsgId = (role: 'user' | 'assistant') =>
  `${role}-${++chatMsgCounter}-${Math.random().toString(36).substring(2, 7)}`;

export default function GuidanceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showConfigNotice, setShowConfigNotice] = useState(false);
  const [providerNotice, setProviderNotice] = useState<string | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hey! 👋 I'm **Karka AI Navigator**, your AI assistant for **Karka AI & Tech Academy** in Nagercoil.\n\nWe can talk about anything: **coding** (Python, Next.js, algorithms), **science & tech ideas**, or our **headquarters address in Nagercoil, Pay After Placement**, and official courses.\n\nHow can I help you today?",
      timestamp: 'Just now',
    },
  ]);

  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Auto-scroll on message updates
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isStreaming]);

  // Focus textarea when opened
  useEffect(() => {
    if (isOpen) {
      textareaRef.current?.focus();
    }
  }, [isOpen]);

  // Auto-resize textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  const handleCopyMessage = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  const handleStopGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setIsStreaming(false);
    }
  };

  const handleNewConversation = () => {
    handleStopGeneration();
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        content:
          "New chat started! What's on your mind? You can ask a coding question, brainstorm, or explore any topic.",
        timestamp: 'Just now',
      },
    ]);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const rawText = textToSend !== undefined ? textToSend : input;
    const trimmed = rawText.trim();
    if (!trimmed || isStreaming) return;

    // Reset input
    if (textToSend === undefined) {
      setInput('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }

    const userMessage: ChatMessage = {
      id: generateChatMsgId('user'),
      role: 'user',
      content: trimmed,
      timestamp: 'Just now',
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);

    // Create placeholder assistant message for streaming
    const assistantMessageId = generateChatMsgId('assistant');
    const assistantMessagePlaceholder: ChatMessage = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, assistantMessagePlaceholder]);
    setIsStreaming(true);

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      // Build clean message array for the server
      const payloadMessages = newHistory.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: payloadMessages, stream: true }),
        signal: abortController.signal,
      });

      // Check custom header for provider info
      const providerHeader = res.headers.get('X-Provider-Notice');
      if (providerHeader) {
        setProviderNotice(providerHeader);
      }

      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }

      const reader = res.body?.getReader();
      if (!reader) {
        throw new Error('No readable stream available.');
      }

      const decoder = new TextDecoder();
      let streamBuffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        streamBuffer = `${streamBuffer}${chunk}`;
        const currentText = streamBuffer;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? { ...msg, content: currentText }
              : msg
          )
        );
      }
    } catch (error: unknown) {
      const isAbort = error instanceof Error && error.name === 'AbortError';
      if (isAbort) {
        // Generation stopped by user
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? { ...msg, content: msg.content + ' *(Generation stopped by user)*' }
              : msg
          )
        );
      } else {
        console.error('[Assistant Chat Error]', error);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? {
                  ...msg,
                  content:
                    'Sorry, I encountered an issue connecting to the model service. Please try again or check network connectivity.',
                  error: true,
                }
              : msg
          )
        );
      }
    } finally {
      setIsStreaming(false);
      abortControllerRef.current = null;
    }
  };

  const handleRetryLast = () => {
    const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user');
    if (lastUserMsg) {
      // Remove last failed assistant message
      setMessages((prev) => prev.filter((m) => !m.error));
      handleSendMessage(lastUserMsg.content);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-full transition-all duration-300 font-bold text-sm ${
            isOpen
              ? 'bg-[#2a0a2e] text-white border border-purple-400/40 hover:bg-[#3d0340] shadow-lg shadow-purple-950/30'
              : 'bg-gradient-to-r from-[#4a044e] via-[#630b69] to-[#892a92] text-white border border-purple-300/30 shadow-xl shadow-purple-900/25 hover:shadow-purple-900/40 hover:scale-105 active:scale-95'
          } focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4a044e]/30`}
          aria-label={isOpen ? 'Close Assistant' : 'Open Karka AI Assistant'}
          aria-expanded={isOpen}
          id="chatgpt-assistant-launcher"
        >
          {isOpen ? (
            <>
              <X className="w-5 h-5 text-purple-200" />
              <span>Close AI Assistant</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
              <span>Karka AI Assistant</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
            </>
          )}
        </button>
      </div>

      {/* Main Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Karka AI Navigator Conversational Assistant"
          aria-modal="true"
          className={`fixed bottom-20 right-4 sm:right-6 ${
            isExpanded
              ? 'w-[calc(100vw-2rem)] sm:w-[650px] h-[88vh] max-h-[820px]'
              : 'w-[calc(100vw-2rem)] sm:w-[450px] h-[78vh] max-h-[640px]'
          } bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-purple-950/20 border border-slate-200 flex flex-col z-50 overflow-hidden transition-all duration-300 animate-in fade-in zoom-in-95`}
        >
          {/* Window Header */}
          <div className="bg-linear-to-r from-[#4a044e] via-[#5e0563] to-[#2a0a2e] px-4 py-3.5 text-white flex items-center justify-between border-b border-purple-900/20">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-white/20 flex items-center justify-center text-white shadow-xs">
                <Bot className="w-5 h-5 text-purple-100" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm tracking-tight text-white">
                    Karka AI Navigator
                  </h3>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/20 text-purple-100 border border-white/20">
                    Infini AI
                  </span>
                </div>
                <p className="text-[11px] text-purple-200 flex items-center gap-1">
                  <span>General Knowledge • Coding • Nagercoil HQ</span>
                </p>
              </div>
            </div>

            {/* Header Action Controls */}
            <div className="flex items-center gap-1 text-purple-200">
              <button
                type="button"
                onClick={() => setShowConfigNotice(!showConfigNotice)}
                className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                title="Model Provider & Configuration Info"
                aria-label="Configuration information"
              >
                <Info className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNewConversation}
                className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                title="Start New Conversation"
                aria-label="Start New Conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors hidden sm:block"
                title={isExpanded ? 'Restore window size' : 'Expand window'}
                aria-label="Toggle window size"
              >
                {isExpanded ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                title="Close chat window"
                aria-label="Close chat window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Model Provider Info Drawer (Collapsible) */}
          {showConfigNotice && (
            <div className="bg-purple-950/90 text-purple-100 p-3.5 text-xs border-b border-purple-800 space-y-1.5 animate-in slide-in-from-top duration-150">
              <div className="flex items-center justify-between font-bold text-white">
                <span>AI Model Provider Integration:</span>
                <button
                  type="button"
                  onClick={() => setShowConfigNotice(false)}
                  className="text-purple-300 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-purple-200 text-[11px] leading-relaxed">
                {providerNotice ||
                  'The AI backend supports live Google Gemini, OpenAI GPT-4o, and Groq streaming. If no API key is set in .env.local, it seamlessly uses the built-in conversational multi-turn engine.'}
              </p>
              <div className="font-mono text-[10px] bg-slate-900/60 p-2 rounded border border-purple-700 text-amber-300">
                # In .env.local:
                <br />
                GEMINI_API_KEY=your_key_here
                <br />
                # or OPENAI_API_KEY=your_key_here
              </div>
            </div>
          )}

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#4a044e] flex items-center justify-center flex-shrink-0 mt-0.5 border border-purple-200 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className="max-w-[88%] sm:max-w-[82%] space-y-1.5">
                  <div
                    className={`p-4 rounded-2xl shadow-xs leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#4a044e] text-white rounded-br-xs shadow-sm'
                        : msg.error
                        ? 'bg-rose-50 text-rose-800 border border-rose-200 rounded-bl-xs'
                        : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs shadow-xs'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    ) : (
                      <ChatMessageContent content={msg.content} />
                    )}
                  </div>

                  {/* Assistant Footer Actions: Copy & Timestamp */}
                  {msg.role === 'assistant' && msg.content && (
                    <div className="flex items-center gap-2 px-1 text-[11px] text-slate-500">
                      <button
                        type="button"
                        onClick={() => handleCopyMessage(msg.id, msg.content)}
                        className="inline-flex items-center gap-1 hover:text-[#4a044e] transition-colors"
                        title="Copy assistant response"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600 font-semibold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>

                      {msg.error && (
                        <button
                          type="button"
                          onClick={handleRetryLast}
                          className="inline-flex items-center gap-1 text-[#4a044e] font-semibold hover:underline"
                        >
                          <RefreshCw className="w-3 h-3" />
                          <span>Retry</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-purple-100 border border-purple-200 text-[#4a044e] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Streaming Typing Indicator */}
            {isStreaming && (
              <div className="flex items-center gap-2 text-xs text-slate-500 pl-9 py-1 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-[#4a044e] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[#4a044e] animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-[#4a044e] animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] text-[#4a044e] font-semibold ml-1">
                  Karka AI Navigator is thinking...
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Optional Starter Chips (Only shown if short conversation) */}
          {messages.length <= 3 && !isStreaming && (
            <div className="px-3 py-2 bg-purple-50/70 border-t border-purple-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap pl-1">
                Try:
              </span>
              {OPTIONAL_STARTER_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(prompt)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white hover:bg-purple-100 text-[11px] text-slate-700 hover:text-[#4a044e] border border-purple-200 transition-colors cursor-pointer shadow-xs"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Area with Shift+Enter Support & Stop Button */}
          <div className="p-3 bg-white border-t border-slate-200 relative">
            {isStreaming && (
              <div className="flex justify-center -mt-8 mb-2">
                <button
                  type="button"
                  onClick={handleStopGeneration}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4a044e] text-white text-xs font-semibold shadow-md hover:bg-[#3d0340] transition-colors"
                >
                  <Square className="w-3 h-3 fill-white" />
                  <span>Stop generating</span>
                </button>
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-end gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-200 focus-within:border-[#4a044e] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#4a044e]/20 transition-all"
            >
              <textarea
                ref={textareaRef}
                rows={1}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything... (Enter to send, Shift+Enter for new line)"
                disabled={isStreaming}
                className="flex-1 bg-transparent border-0 text-sm text-slate-900 placeholder-slate-400 focus:outline-none resize-none max-h-32 px-1 py-1"
              />

              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                className="btn-karka-primary p-2.5 rounded-xl disabled:opacity-40 text-white transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer shadow-sm shadow-purple-900/20"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="text-[10px] text-center text-slate-400 pt-1.5">
              General-purpose AI assistant • Press Shift+Enter for new lines
            </div>
          </div>
        </div>
      )}
    </>
  );
}
