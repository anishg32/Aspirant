import { TRAINING_PROGRAMS, GUIDANCE_TRACKS, FAQS, COMPANY_DETAILS } from '@/data/content';

export interface ChatMessageItem {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const YOU_ASPIRANT_SYSTEM_PROMPT = `You are Karka AI Navigator, a friendly, brilliant, and open-ended AI assistant built by Team NEXORA LABS for the Karka AI & Tech Academy platform.

PRIMARY DIRECTIVE:
You are a general-purpose, open-ended conversational AI like ChatGPT. You are NOT restricted to career advice or courses. Users can talk with you about ANYTHING appropriate:
- Programming and computer science (Python, Java, JavaScript, C++, algorithms, debugging, web development, cloud, AI, system design).
- General knowledge, science, space, history, mathematics, and trivia.
- Writing, brainstorming, email drafting, essay structure, storytelling, and problem-solving.
- Everyday casual conversations, humor, friendly greetings, and philosophical questions.
- Contextual follow-up questions: understand pronouns, remember previous code snippets, explain specific lines, and adapt across multi-turn discussions.

FORMATTING REQUIREMENTS:
- Provide clean, beautifully formatted Markdown.
- Use bolding, numbered lists, bullet points, and headers (###) for structure.
- When sharing code, ALWAYS use syntax-highlighted code blocks with the language identifier (e.g. \`\`\`python, \`\`\`java, \`\`\`javascript).
- Adapt response length: short and punchy for quick queries; detailed and structured for coding lessons or in-depth explanations.

OFFICIAL KARKA AI & TECH ACADEMY KNOWLEDGE:
- Karka AI & Tech Academy is the exclusive AI and technology learning center in Nagercoil, Tamil Nadu.
- Headquarters Address: Ground Floor, SRV Towers, Muthamizh Street (near Girias), Veppamoodu, Nagercoil, Tamil Nadu – 629001, India.
- Landmark: Near Girias, Veppamoodu Junction.
- Contact: contact@karka.academy, Admissions: admissions@karka.academy, Hotline / WhatsApp: +91 9487530243.
- Key Programs & Offerings:
  1. Full-Stack Web Engineering (16 Weeks: Next.js, React, Node.js, PostgreSQL, Docker)
  2. Applied Cloud & DevOps Essentials (12 Weeks: Docker, Kubernetes, Terraform, AWS, CI/CD)
  3. Data Science & Applied AI Foundations (14 Weeks: Python, SQL, ML, LangChain, RAG)
  4. Cyber Security & Network Defense Primer (10 Weeks: OWASP Top 10, Wireshark, SOC triage)
  5. Professional Employability Accelerator (6 Weeks: Quantitative aptitude, STAR framework)
- Ecosystem Platforms:
  - Spike AI: The AI-powered learning platform by Karka Academy (https://spike.karka.academy/)
  - Karka Infini AI: Inter-college tech competition with ₹1,00,000 prize pool (https://infini.karka.academy/)
- Admissions & Pay After Placement: Flexible payment models including Pay After Placement for eligible cohorts.
- Redesign Team: NEXORA LABS ("Innovate. Design. Transform.").
`;

/**
 * Calls Google Gemini REST API if GEMINI_API_KEY is present
 */
export async function callGeminiStream(
  messages: ChatMessageItem[],
  apiKey: string,
  model = process.env.GEMINI_MODEL || 'gemini-2.0-flash'
): Promise<ReadableStream<Uint8Array>> {
  // Format history for Gemini
  const contents = messages
    .filter((m) => m.role !== 'system')
    .map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents,
      systemInstruction: {
        parts: [{ text: YOU_ASPIRANT_SYSTEM_PROMPT }],
      },
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error (${response.status}): ${errorText}`);
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  // Transform Gemini SSE stream into plain text chunk stream
  return new ReadableStream({
    async start(controller) {
      const reader = response.body?.getReader();
      if (!reader) {
        controller.close();
        return;
      }

      let buffer = '';
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const jsonStr = line.slice(6).trim();
              if (jsonStr === '[DONE]') continue;
              try {
                const parsed = JSON.parse(jsonStr);
                const textChunk =
                  parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
                if (textChunk) {
                  controller.enqueue(encoder.encode(textChunk));
                }
              } catch (e) {
                // Ignore parse errors on partial chunks
              }
            }
          }
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
  });
}

/**
 * Calls OpenAI / Groq / OpenRouter compatible chat completions endpoint
 */
export async function callOpenAICompatibleStream(
  messages: ChatMessageItem[],
  apiKey: string,
  endpoint = 'https://api.openai.com/v1/chat/completions',
  model = process.env.OPENAI_MODEL || 'gpt-4o-mini'
): Promise<ReadableStream<Uint8Array>> {
  const payloadMessages = [
    { role: 'system', content: YOU_ASPIRANT_SYSTEM_PROMPT },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: payloadMessages,
      stream: true,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`AI Provider error (${response.status}): ${errorText}`);
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  return new ReadableStream({
    async start(controller) {
      const reader = response.body?.getReader();
      if (!reader) {
        controller.close();
        return;
      }

      let buffer = '';
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const jsonStr = line.slice(6).trim();
              if (jsonStr === '[DONE]') continue;
              try {
                const parsed = JSON.parse(jsonStr);
                const delta = parsed?.choices?.[0]?.delta?.content;
                if (delta) {
                  controller.enqueue(encoder.encode(delta));
                }
              } catch (e) {
                // ignore
              }
            }
          }
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
  });
}

/**
 * Conversational Fallback Engine with Full Multi-Turn Context Memory
 * Used when no cloud API key is configured or during offline testing.
 */
export function generateLocalConversationalResponse(
  messages: ChatMessageItem[]
): { reply: string; quickActions?: { label: string; href: string }[] } {
  const currentMsg = messages[messages.length - 1]?.content || '';
  const q = currentMsg.toLowerCase().trim();

  // Combine conversation history into a unified thread context
  const fullThread = messages
    .map((m) => `${m.role}: ${m.content.toLowerCase()}`)
    .join(' ');

  const previousAssistantMsg =
    [...messages].reverse().find((m) => m.role === 'assistant')?.content || '';
  const previousUserMsg =
    [...messages].slice(0, -1).reverse().find((m) => m.role === 'user')?.content.toLowerCase() || '';

  // 1. GREETINGS & CASUAL CONVERSATION
  if (/^(hi|hello|hey|howdy|hola|greetings)(\s|$|[!.,])/i.test(q)) {
    return {
      reply: `Hey! 👋 How's it going? What would you like to talk about today?\n\nWe can dive into **programming** (Python, Java, web development), explore **space & science**, brainstorm **project ideas**, or talk about career pathways. What's on your mind?`,
    };
  }

  if (q.includes("how are you") || q.includes("how's it going") || q.includes("whats up") || q.includes("what's up")) {
    return {
      reply: `I'm doing great, thank you for asking! 😊 I'm ready to chat about anything—whether you want to learn a new coding concept, bounce ideas around, or ask about tech topics. How is your day going?`,
    };
  }

  // 2. BORED / FACTS / SCIENCE TRIVIA
  if (q.includes('bored') || q.includes('tell me something interesting') || q.includes('fun fact') || q.includes('interesting fact')) {
    return {
      reply: `Here's something mind-bending from planetary science:\n\n🌌 **A day on Venus is longer than its entire year!**\n\nVenus has an extraordinarily slow retrograde axial rotation—it takes **243 Earth days** to spin just once on its axis, but only **225 Earth days** to complete a full orbit around the Sun.\n\nWant to hear more space trivia, discuss quantum physics, or talk about something else?`,
    };
  }

  if (q.includes('joke') || q.includes('tell me a joke') || q.includes('make me laugh')) {
    const jokes = [
      `Why do programmers prefer dark mode?\n\nBecause light attracts bugs! 🐛💻\n\nWant another one, or should we talk about code?`,
      `There are only 10 types of people in the world:\n\nThose who understand binary, and those who don't! 😄`,
      `Why was the JavaScript developer sad?\n\nBecause they didn't \`null\` their feelings! ☕`,
    ];
    return {
      reply: jokes[Math.floor(Math.random() * jokes.length)],
    };
  }

  // 3. PROGRAMMING: LINE-BY-LINE EXPLANATION (Follow-up contextual request)
  if (
    q.includes('explain each line') ||
    q.includes('explain the code') ||
    q.includes('how does that work') ||
    q.includes('break it down') ||
    (q.includes('explain') && (previousAssistantMsg.includes('print(') || previousAssistantMsg.includes('System.out.println')))
  ) {
    if (previousAssistantMsg.includes('System.out.println')) {
      return {
        reply: `Here is the line-by-line explanation of the **Java** program we just looked at:

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

1. **\`public class Main\`**: In Java, all code lives inside a class. \`public\` means this class is accessible from anywhere. The class name (\`Main\`) must match the filename (\`Main.java\`).
2. **\`public static void main(String[] args)\`**: This is the entry point where every Java application starts execution.
   - \`public\`: JVM can execute it from outside.
   - \`static\`: Can be invoked without creating an instance of \`Main\`.
   - \`void\`: It returns no value.
   - \`String[] args\`: Accepts optional command-line string arguments.
3. **\`System.out.println("Hello, World!");\`**:
   - \`System\`: A pre-built class providing system-level access.
   - \`out\`: The standard output stream (usually the console).
   - \`println()\`: Prints the string and moves to a new line.

Would you like to see how variables, conditionals, or loops work in Java next?`,
      };
    } else {
      return {
        reply: `Here is the line-by-line breakdown of our **Python** program:

\`\`\`python
print("Hello, world!")
\`\`\`

1. **\`print(...)\`**: This is a built-in Python function that outputs whatever is passed inside the parentheses to your console or terminal.
2. **\`"Hello, world!"\`**: This is a string literal (text enclosed in quotation marks). Python outputs this exact sequence of characters.

In Python, you don't need semicolons, class boilerplate, or manual memory cleanup—it executes statements line by line!

Shall we create a program that asks for your name using \`input()\`, or explore loops?`,
      };
    }
  }

  // 4. PROGRAMMING: SIMPLE PROGRAM / FIRST CODE
  if (
    (q === 'yes' || q === 'yes please' || q.includes('sure') || q.includes('give me a simple program') || q.includes('write first program')) &&
    (fullThread.includes('python') || fullThread.includes('programming') || fullThread.includes('write your first program'))
  ) {
    return {
      reply: `Great! Let's write your first Python program:

\`\`\`python
print("Hello, world!")
\`\`\`

This displays the text \`Hello, world!\` on the screen.

You can also assign variables and do math like this:

\`\`\`python
# Simple variable calculation
name = "Alex"
age = 20
print(f"Welcome, {name}! Next year you will be {age + 1}.")
\`\`\`

Would you like me to explain each line, or would you like to see how Java or JavaScript compares?`,
    };
  }

  // 5. PROGRAMMING: TEACH PYTHON / START PYTHON
  if (q.includes('teach me python') || q.includes('learn python') || (q.includes('python') && !q.includes('course') && !q.includes('fee'))) {
    if (q.includes('loop')) {
      return {
        reply: `Loops in Python let you repeat instructions efficiently. Here are the two primary loop types:

### 1. \`for\` Loop (Iterating over a sequence)
\`\`\`python
# Prints numbers 1 through 5
for i in range(1, 6):
    print(f"Step {i}: Keep building!")
\`\`\`

### 2. \`while\` Loop (Runs while a condition remains True)
\`\`\`python
count = 3
while count > 0:
    print(f"Countdown: {count}")
    count -= 1
print("Blast off! 🚀")
\`\`\`

Notice Python uses **clean 4-space indentation** instead of curly braces \`{}\`. Would you like to try a mini exercise using loops?`,
      };
    }

    return {
      reply: `Absolutely! Let's start with the basics. Python is one of the most versatile, beginner-friendly languages in the world because its syntax reads like plain English.

We can learn:
1. **Variables & Data Types** (strings, integers, floats, booleans)
2. **Conditionals** (\`if\`, \`elif\`, \`else\`)
3. **Loops** (\`for\`, \`while\`)
4. **Functions & Data Structures** (lists, dictionaries)

Would you like to write your first Python program right now?`,
    };
  }

  // 6. PROGRAMMING: JAVA COMPARISON
  if (q.includes('what about java') || q.includes('teach me java') || q.includes('how does java work') || (q.includes('java') && !q.includes('javascript') && !q.includes('course'))) {
    return {
      reply: `Java is another powerhouse programming language! Unlike Python, Java is **statically typed** and compiled to bytecode that runs on the **Java Virtual Machine (JVM)** under the principle: *"Write Once, Run Anywhere."*

Here is the classic starter program in Java:

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

### Key Differences Between Python & Java:
- **Structure:** Java requires an explicit \`class\` and \`main\` method; Python executes top-to-bottom directly.
- **Types:** In Java, you must declare variable types (\`int count = 5;\`), while Python figures it out dynamically (\`count = 5\`).
- **Speed & Scale:** Java is widely used in high-throughput enterprise backends and Android development.

Would you like me to explain each line of this Java code, or compare it with C++ or TypeScript?`,
    };
  }

  // 7. WRITING & BRAINSTORMING
  if (q.includes('email') || q.includes('help me write') || q.includes('draft')) {
    return {
      reply: `I can certainly help you draft that! Here is a polished, professional email template you can customize:

**Subject:** Request for Project Submission Extension — [Course Name / Your Name]

Dear Professor [Last Name],

I hope this email finds you well.

I am writing to respectfully request a short extension of [Number of Days, e.g., 2 days] on the [Assignment/Project Name], currently due on [Original Due Date]. 

Due to [brief, honest reason: e.g., an unexpected technical constraint during database deployment / academic scheduling conflicts], I want to ensure my submission meets the highest standard and includes thorough automated test coverage.

I will submit the finalized work no later than [Proposed New Date & Time]. Thank you very much for your time and understanding.

Warm regards,  
**[Your Name]**  
[Student ID / Roll Number]  
[Department/Program]

Would you like me to adjust the tone (more formal, casual, or tailored to a corporate manager)?`,
    };
  }

  if (q.includes('brainstorm') || q.includes('project ideas') || q.includes('hackathon')) {
    return {
      reply: `Here are **4 high-impact project ideas** combining modern full-stack development, AI, and practical problem-solving:

1. **Autonomous Git PR Review Bot**
   - *Tech:* Next.js, Node.js, GitHub Webhooks, OpenAI/Gemini API.
   - *Idea:* Automatically parses incoming pull requests, audits code for security vulnerabilities, and comments inline with test suggestions.
2. **Local Vector Document Intelligence Engine**
   - *Tech:* Python, FastAPI, ChromaDB, LangChain, React.
   - *Idea:* Lets users drop in technical PDFs and chat with their documents with citation highlights and zero external cloud data leak.
3. **Cloud FinOps Cost Visualizer**
   - *Tech:* Go or TypeScript, Docker, AWS SDK, Tailwind CSS.
   - *Idea:* Connects to cloud accounts and flags idle resources, unattached EBS volumes, and oversized EC2 instances.
4. **Real-time Collaborative Architecture Whiteboard**
   - *Tech:* Next.js, WebSockets, Canvas API, PostgreSQL.
   - *Idea:* Multiplayer system architecture canvas where teams drag and drop servers, databases, and microservices with latency simulation.

Which domain excites you most? We can break down the exact tech stack and database schema!`,
    };
  }

  // 8. GENERAL KNOWLEDGE: WHY IS THE SKY BLUE / SCIENCE
  if (q.includes('why is the sky blue')) {
    return {
      reply: `The sky appears blue because of an atmospheric phenomenon called **Rayleigh scattering**! ☀️🌍

Here's how it works:
1. Sunlight reaches Earth's atmosphere as white light, which is a mix of all colors of the rainbow.
2. Each color travels in waves: red and orange have long, lazy wavelengths, while blue and violet have short, choppy wavelengths.
3. Earth's atmosphere is packed with nitrogen and oxygen molecules. Because blue light travels in shorter, smaller waves, it collides with these gas molecules and **scatters in every direction across the sky**.

**Why not violet?** Violet light has even shorter wavelengths and scatters even more, but human eyes have color receptors (cones) that are much more sensitive to blue, and the Sun emits more blue light than violet!`,
    };
  }

  // 9. ADDRESS, CONTACT & LOCATION QUESTIONS
  if (
    q.includes('address') ||
    q.includes('location') ||
    q.includes('where are you') ||
    q.includes('where is karka') ||
    q.includes('where is the academy') ||
    q.includes('office') ||
    q.includes('headquarters') ||
    q.includes('contact number') ||
    q.includes('phone') ||
    q.includes('email') ||
    q.includes('nagercoil')
  ) {
    return {
      reply: `Here are the official headquarters and contact details for **Karka AI & Tech Academy**:

📍 **Physical Campus Address:**
${COMPANY_DETAILS.contact.address}
*(Landmark: ${COMPANY_DETAILS.contact.landmark})*

📞 **Direct Helpline / WhatsApp:** [${COMPANY_DETAILS.contact.phone}](tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')})
✉️ **Official Email:** [${COMPANY_DETAILS.contact.email}](mailto:${COMPANY_DETAILS.contact.email})
⏰ **Hours:** ${COMPANY_DETAILS.contact.workingHours}

🌐 **Ecosystem Platforms:**
- **Spike AI:** ${COMPANY_DETAILS.platforms.spikeAi}
- **Karka Infini AI (₹1,00,000 Prize Pool):** ${COMPANY_DETAILS.platforms.infiniAi}

You are welcome to visit our campus in Nagercoil for direct consultations, walk-in evaluations, or project demonstrations!`,
      quickActions: [
        { label: 'View Contact Page & Map', href: '/contact' },
        { label: 'Open in Google Maps', href: COMPANY_DETAILS.contact.mapsUrl },
        { label: 'Chat on WhatsApp', href: `https://wa.me/919487530243` },
      ],
    };
  }

  // 10. COMPANY-SPECIFIC QUESTIONS (KARKA AI & TECH ACADEMY)
  if (
    q.includes('karka') ||
    q.includes('you aspirant') ||
    q.includes('aspirant') ||
    q.includes('courses') ||
    q.includes('what programs') ||
    q.includes('what training') ||
    q.includes('fee') ||
    q.includes('placement') ||
    q.includes('admission')
  ) {
    if (q.includes('placement') || q.includes('pay after placement')) {
      return {
        reply: `At **Karka AI & Tech Academy**, we offer industry-aligned career preparation with **Pay After Placement** options:
- We believe in real software engineering ability, rigorous GitHub projects, and working engineer code reviews.
- Learners gain deep hands-on expertise in Full Stack Development, Data Science, AI/GenAI, and Cloud Infrastructure.
- Physical campus located at **SRV Towers, Veppamoodu, Nagercoil** with dedicated 1-on-1 mentorship.`,
        quickActions: [
          { label: 'Explore Programs', href: '/programs' },
          { label: 'Contact Nagercoil HQ', href: '/contact' },
        ],
      };
    }

    return {
      reply: `I can help with that! Here is the verified information for **Karka AI & Tech Academy** (Nagercoil, Tamil Nadu):

### 🎯 Practical Technical Programs:
1. **Full-Stack Web Engineering** (16 Weeks): Next.js App Router, React 19, Node.js, PostgreSQL, Docker, CI/CD.
2. **Applied Cloud & DevOps Essentials** (12 Weeks): Linux systems, Docker, Kubernetes, Terraform IaC, AWS.
3. **Data Science & Applied AI Foundations** (14 Weeks): Python, SQL analytics, Scikit-learn, LangChain, RAG.
4. **Cyber Security & Network Defense Primer** (10 Weeks): OWASP Top 10, Wireshark, SOC triage.
5. **Professional Employability Accelerator** (6 Weeks): Quantitative aptitude, STAR interview method.

### 📍 Headquarters:
Ground Floor, SRV Towers, Muthamizh Street (near Girias), Veppamoodu, Nagercoil, Tamil Nadu – 629001.

Would you like details on a specific curriculum, Pay After Placement, or to book an in-person campus visit?`,
      quickActions: [
        { label: 'Explore All Programs', href: '/programs' },
        { label: 'View Contact & Location', href: '/contact' },
        { label: 'Take 60-Sec Career Quiz', href: '/#career-quiz' },
      ],
    };
  }

  // 10. GENERAL DEFAULT OPEN-ENDED RESPONSE
  return {
    reply: `That's an interesting question! As your open-ended conversational AI, I'm here to explore ideas, solve problems, or discuss concepts with you.

Here are a few things we can do:
- **Code & Build:** Ask me to write or debug code in Python, Java, JavaScript, C++, or SQL.
- **Learn Concepts:** Ask for explanations of computer science, cloud computing, physics, or mathematics.
- **Write & Brainstorm:** Ask me to draft emails, summarize articles, or design system architectures.
- **Career & Skills:** Ask about Karka AI Academy programs, Nagercoil campus, resume strategies, or technical interview tips.

Could you tell me a bit more about what you're working on or what you'd like to dive into?`,
  };
}
