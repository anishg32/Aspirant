# YOU ASPIRANT — REDESIGN CHALLENGE (SITESPRINT)
**Team:** NEXORA LABS  
**Tagline:** Innovate. Design. Transform.  
**Project:** You Aspirant Career Guidance & Training Platform Redesign  
**Technology Stack:** Next.js 16 (App Router) • TypeScript • Tailwind CSS • Lucide Icons  

---

## 🚀 Executive Summary & Objective

This project is the official submission by **Team NEXORA LABS** for the **SiteSprint Website Redesign Challenge** (hosted by Karka Infini AI).

The core challenge was to redesign the digital presence of **You Aspirant**—a career guidance and professional tech training platform—to:
1. Elevate brand trust and clarity through a modern, premium design system.
2. Transparently present verified career counseling tracks and technical training programs.
3. Replace misleading "100% placement guarantee" marketing gimmicks with an **Ethical Career Policy** focusing on demonstrable capstone projects and verifiable GitHub portfolios.
4. Drive qualified student enquiries through an interactive 60-second Career Pathway Matcher, an intelligent real-time Guidance Assistant, and a validated multi-step Smart Enquiry Form.
5. Achieve strict adherence to **WCAG 2.2 AA accessibility**, fast loading performance, and technical SEO best practices.

---

## 🎨 Creative Direction & Design System

- **Primary Background:** `#F8FAFC` (Slate-50) and Crisp White `#FFFFFF`
- **Main Typography / Text:** Deep Charcoal Navy (`#0F172A`)
- **Primary Accent:** Confident Royal Cobalt (`#2563EB`)
- **Secondary Accent:** Luminous Teal (`#0D9488` / `#14B8A6`)
- **Warning / Featured Badges:** Warm Amber (`#F59E0B`)
- **Micro-interactions:** Smooth CSS transitions, subtle mesh background patterns, glassmorphic headers (`backdrop-blur-md`), and full `prefers-reduced-motion` compliance.

---

## 🗺️ Website Architecture & Navigation

The platform features a complete multi-page architecture with dynamic routing and server rendering:

| Route | Page | Purpose & Key Features |
| :--- | :--- | :--- |
| `/` | **Home** | Compelling hero viewport, live metric bar, transparency matrix, 4 career guidance tracks, 5 training programs with search/filters, interactive 60-second quiz, 5-step learner journey, student success stories, testimonials, and high-converting CTA. |
| `/about` | **About Us** | Official mission, vision, ethical education pledge, mentor leadership profiles, and Nexora Labs competition attribution. |
| `/guidance` | **Career Guidance** | Deep dive into 4 diagnostic guidance tracks, deliverables checklist, timeline, and embedded consultation booking flow. |
| `/programs` | **Training Programs** | Filterable catalog by category (Full-Stack, Cloud & DevOps, Data & AI, Security, Career Readiness), live search, hands-on capstone previews, and interactive syllabus breakdown modal. |
| `/stories` | **Success Stories** | Verifiable case studies highlighting student learning transitions, capstones built, and GitHub repositories. |
| `/testimonials` | **Reviews & Feedback** | Verified reviews from students and parents, with an interactive review submission dialog. |
| `/contact` | **Contact & Admissions** | Official phone, email, and address channels, 24-hr response commitment, interactive FAQ accordion, and Smart Enquiry Form. |
| `/privacy` | **Privacy Policy** | Explicit zero-spam pledge, data rights, and encryption disclosures. |
| `/terms` | **Terms & Conditions** | Non-guarantee ethical career disclosure and 7-day unconditional refund policy. |
| `/api/enquiry` | **Enquiry API** | Server-side validation, field-level sanitization, and structured reference ID generator. |
| `/api/assistant` | **Guidance Assistant API** | Grounded natural language query answering for courses, admissions, and guidance pathways. |

---

## 🧠 Interactive Key Features

### 1. 60-Second Interactive Career Pathway Matcher (`/#career-quiz`)
An interactive 3-step diagnostic tool that guides students through their academic background, preferred technical domain, and near-term milestones to recommend the exact training program or counseling track matching their profile.

### 2. Aspirant Navigator — General-Purpose Conversational AI (ChatGPT-Style)
A floating interactive AI counselor available across every page. Upgraded into an open-ended, general-purpose conversational partner:
- **Free-Talk Capabilities:** Ask about programming (Python, Java, JavaScript, algorithms), general knowledge, science trivia (planetary science, physics), email drafting, project brainstorming, and everyday questions.
- **Multi-Turn Context Memory:** Understands follow-up questions without repeating context (e.g., "Teach me Python" -> "Yes" -> delivers code block -> "Explain each line" -> breaks down the code line by line).
- **Streaming Responses:** Real-time token streaming with simulated typing effects and an instant "Stop generating" button via `AbortController`.
- **Formatted Code Blocks & Markdown:** Syntax-highlighted code blocks with language indicators and one-click "Copy Code" clipboard integration.
- **Copy & Actions:** One-click response copying with checkmark visual feedback, retry failed requests, and "New Chat" session reset.
- **Multi-Model Provider Architecture:** Connects to live cloud LLMs via environment variables:
  - `GEMINI_API_KEY`: Google Gemini 2.0 Flash / 1.5 Flash
  - `OPENAI_API_KEY`: OpenAI GPT-4o / GPT-4o-mini
  - `GROQ_API_KEY`: Groq Llama-3.3-70B
  - `OPENROUTER_API_KEY`: OpenRouter Universal
  - *Out-of-the-Box Fallback:* Built-in multi-turn conversational reasoning engine for zero-setup execution.
- **Verified Company Grounding:** When asked about You Aspirant, seamlessly delivers verified course, guidance, fee, and policy details without hallucination.

### 3. Validated Smart Enquiry Form (`/contact#enquiry-form`)
- Real-time client-side validation synchronized with accessibility states (`:user-invalid`, `aria-invalid`, `aria-describedby`).
- URL query param pre-fill support (`?program=fullstack-web` or `?type=guidance`).
- Server-side validation and sanitization via Next.js Route Handler (`/api/enquiry`).
- Instant reference ID generation and response timeframe commitment.

---

## 🛠️ Verification & Test Results

All quality, build, and accessibility checks were executed directly:

```bash
# 1. Production Build & TypeScript Typecheck
npm run build
# Result: ✓ Compiled successfully in 261ms (16 static & dynamic routes generated with zero errors)

# 2. Server-side Form API Endpoint Test
curl -s -X POST http://localhost:3000/api/enquiry -H "Content-Type: application/json" -d '{"fullName":"Rahul Sharma","email":"rahul@example.com","phone":"9876543210","currentStatus":"3rd / Final Year College Student","interestType":"training_program","programOrTrack":"fullstack-web-engineering","consent":true}'
# Result: HTTP 200 OK -> Reference ID generated (e.g. YA-MVL32CKX-5627)

# 3. Guidance Assistant Knowledge Endpoint Test
curl -s -X POST http://localhost:3000/api/assistant -H "Content-Type: application/json" -d '{"message":"Do you offer 100% placement guarantees?"}'
# Result: Correctly articulates You Aspirant's ethical non-guarantee policy and links to FAQ.

# 4. XML Sitemap & Robots.txt Verification
curl -s http://localhost:3000/robots.txt
curl -s http://localhost:3000/sitemap.xml
# Result: Valid XML sitemap with 9 canonical URLs and crawl directives.
```

---

## 📦 Local Setup Instructions

```bash
# Clone or navigate to the directory
cd website

# Install dependencies
npm install

# Run the development server
npm run dev

# Open http://localhost:3000 in your browser
```

---

## 👥 Credits & Team Attribution

- **Challenge:** SiteSprint Website Redesign Challenge (Karka Infini AI)
- **Organization:** You Aspirant Career Guidance & Professional Training
- **Redesign Team:** **NEXORA LABS**
- **Tagline:** *Innovate. Design. Transform.*
