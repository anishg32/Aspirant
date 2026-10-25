export interface Program {
  id: string;
  slug: string;
  title: string;
  category: 'Full-Stack' | 'Cloud & DevOps' | 'Data & AI' | 'Security' | 'Career Readiness';
  shortDesc: string;
  fullDesc: string;
  duration: string;
  format: 'Live Online + Mentorship' | 'Hybrid Bootcamp' | 'Weekend Intensive';
  level: 'Beginner to Intermediate' | 'Intermediate' | 'All Levels';
  prerequisites: string;
  skills: string[];
  capstoneProjects: string[];
  modules: { title: string; topics: string[] }[];
  outcomes: string[];
  featured?: boolean;
  badge?: string;
  enrollments?: string;
  rating?: string;
}

export interface GuidanceTrack {
  id: string;
  title: string;
  tagline: string;
  audience: string;
  description: string;
  timeline: string;
  deliverables: string[];
  icon: string;
}

export interface StudentStory {
  id: string;
  studentName: string;
  avatar?: string;
  initialBackground: string;
  targetDomain: string;
  programTaken: string;
  challengeSolved: string;
  keyProjects: { name: string; desc: string; tech: string[] }[];
  keyOutcome: string;
  verifiedStatus: 'Verified Project Demonstration' | 'Sample Case Pathway';
  quote: string;
}

export interface Testimonial {
  id: string;
  author: string;
  avatar?: string;
  role: string;
  organizationOrCollege: string;
  service: string;
  feedback: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Career Guidance' | 'Training Programs' | 'Admissions & Policies';
}

export const COMPANY_DETAILS = {
  name: 'Karka AI & Tech Academy',
  brandName: 'Karka AI Academy',
  legalName: 'Karka AI Academy & Technology Training Pvt. Ltd.',
  brandTagline: 'AI-Driven Software Development & Practical Tech Careers in Nagercoil',
  mission: 'Empowering ambitious learners, college students, and graduates in Nagercoil and Tamil Nadu with GenAI-infused education, practical software engineering, industry mentorship, and Pay After Placement.',
  vision: 'To be the leading AI & engineering learning catalyst in Nagercoil, replacing false placement guarantees with verifiable GitHub capstones, personal mentorship, and authentic career breakthroughs.',
  redesignTeam: 'NEXORA LABS',
  redesignTagline: 'Innovate. Design. Transform.',
  officialWebsite: 'https://karka.academy',
  platforms: {
    website: 'https://karka.academy',
    spikeAi: 'https://spike.karka.academy',
    infiniAi: 'https://infini.karka.academy',
  },
  contact: {
    email: 'contact@karka.academy',
    counselingEmail: 'admissions@karka.academy',
    phone: '+91 9487530243',
    mobile: '+91 9487530243',
    whatsapp: '+91 9487530243',
    building: 'Ground Floor, SRV Towers',
    street: 'Muthamizh Street (near Girias), Veppamoodu',
    landmark: 'Near Girias, Veppamoodu Junction',
    city: 'Nagercoil',
    district: 'Kanyakumari District',
    state: 'Tamil Nadu',
    postalCode: '629001',
    country: 'India',
    address: 'Ground Floor, SRV Towers, Muthamizh Street (near Girias), Veppamoodu, Nagercoil, Tamil Nadu 629001, India',
    mapsUrl: 'https://maps.app.goo.gl/karka-academy-nagercoil',
    googleMapsSearchUrl: 'https://maps.google.com/?q=Ground+Floor+SRV+Towers+Muthamizh+Street+Veppamoodu+Nagercoil+Tamil+Nadu+629001',
    workingHours: 'Monday – Saturday: 9:00 AM – 6:00 PM IST',
  },
  socials: {
    instagram: 'https://www.instagram.com/karka.academy',
    linkedin: 'https://www.linkedin.com/company/karka-academy',
    twitter: 'https://twitter.com/karka_academy',
    facebook: 'https://www.facebook.com/karka.academy',
    youtube: 'https://youtube.com/@karka_academy',
    github: 'https://github.com/karka-academy',
  },
  hiringPartners: [
    'Amazon',
    'TCS',
    'HCL',
    'Matrimony.com',
    'Novac Technology',
    'Capecom',
    'Flow',
    'Sodisys'
  ],
  stats: [
    { value: '5,000+', label: 'Students & Aspirants Mentored' },
    { value: '94.8%', label: 'Learner Course Completion Rate' },
    { value: '250+', label: 'Practical Capstone & AI Projects Built' },
    { value: '4.9 / 5.0', label: 'Verified Student Satisfaction Rating' },
  ],
  transparencyPledge: [
    'Zero misleading "100% placement guarantee" gimmicks — we believe in building real capability.',
    'Verified, practical curricula built with working engineers, not outdated slides.',
    'Transparent fee structure with flexible Pay After Placement models.',
    'Every learner receives individualized guidance tailored to their current aptitude and ambition.'
  ]
};

export interface AudienceNavItem {
  id: string;
  name: string;
  href: string;
  subtitle: string;
  tagline: string;
}

export const AUDIENCE_NAV_ITEMS: AudienceNavItem[] = [
  {
    id: 'school',
    name: 'School Students',
    href: '/guidance?audience=school',
    subtitle: 'Class 8th - 12th',
    tagline: 'Python, game design & computational thinking foundations.',
  },
  {
    id: 'college',
    name: 'College Students',
    href: '/guidance?audience=college',
    subtitle: 'B.E / B.Tech / BCA / MCA / B.Sc',
    tagline: 'Full Stack, AI tools, Capstones & campus placement readiness.',
  },
  {
    id: 'graduates',
    name: 'Graduates',
    href: '/guidance?audience=graduates',
    subtitle: 'Passouts & Job Seekers',
    tagline: 'Pay After You Get Hired with ₹0 upfront tuition.',
  },
  {
    id: 'professionals',
    name: 'Professionals',
    href: '/guidance?audience=professionals',
    subtitle: 'Upskilling & Career Switch',
    tagline: 'GenAI, Cloud Architecture & Tech Career Acceleration.',
  },
];

export interface WhyKarkaReason {
  number: string;
  title: string;
  description: string;
  badge?: string;
}

export const WHY_KARKA_REASONS: WhyKarkaReason[] = [
  {
    number: '01',
    title: 'Pay After You Get Hired',
    description: 'Traditional institutes demand heavy upfront fees regardless of your job outcome. At Karka, you start learning with ₹0 upfront tuition because we carry the financial risk—you only pay your course fees after you successfully secure a tech job.',
    badge: '₹0 Upfront Tuition',
  },
  {
    number: '02',
    title: 'An "AI-First" Future-Proof Curriculum',
    description: 'Instead of wasting time on decade-old coding syntax, Karka natively integrates Generative AI workflows, Prompt Engineering, and AI Automation across all our tracks. You will learn how to build software and design interfaces with AI, exactly how modern tech companies build today.',
    badge: 'GenAI + Prompt Engineering',
  },
  {
    number: '03',
    title: 'Live Internships Over Paper Certificates',
    description: 'Employers ignore generic print certificates; they hire proof. Karka functions as a hands-on, AI-powered internship platform where you work on real client projects, graduating with a live, deployable portfolio and an official Internship Certificate.',
    badge: 'Live Client Projects',
  },
  {
    number: '04',
    title: 'Continuous On-Site Expert Mentorship',
    description: 'You gain daily access to fully equipped physical labs at SRV Towers Nagercoil and direct, face-to-face guidance from industry mentors who track your progress and solve your technical bugs in real time.',
    badge: 'Daily On-Site Mentorship',
  },
  {
    number: '05',
    title: 'Direct Regional & Global Hiring Pipelines',
    description: 'Direct hiring partnerships and active alumni pipelines into leading tech enterprises including Amazon, TCS, HCL, Matrimony.com, Novac Technology, Capecom, Flow, and Sodisys.',
    badge: 'Direct Tech Pipelines',
  },
  {
    number: '06',
    title: 'The 4-Pillar Job Readiness System',
    description: 'A holistic training system mastering the Language of Business, building Scalable Modern Apps, mastering AI Tools & Prompts, and cracking rigorous Technical Interviews.',
    badge: 'Complete Career System',
  },
];

export const FOUR_PILLARS = [
  {
    pillar: '01',
    title: 'Master the Language of Business',
    subtitle: 'Listening · Speaking · Reading · Writing',
    description: 'Technical competence without clear articulation stalls careers. We train you in corporate communication, client presentation, and explaining technical architectures with poise.',
    skills: ['Professional Listening', 'Executive Speaking', 'Documentation Reading', 'Technical Writing'],
    gradient: 'from-fuchsia-500 to-pink-500',
  },
  {
    pillar: '02',
    title: 'Build Scalable Modern Apps',
    subtitle: 'Web / Mobile · Data Analytics · UI/UX Design · Digital Marketing',
    description: 'Our core technical pillar. Work directly with production technologies—React, Node, Next.js, Python, PostgreSQL, and Figma—to architect robust, scalable software.',
    skills: ['Full Stack Web & Mobile', 'Data Analytics & Pipelines', 'UI/UX Design Systems', 'Modern Growth Tech'],
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    pillar: '03',
    title: 'AI Skills',
    subtitle: 'Prompt Engineering · AI Automation · AI Tools · LLMs',
    description: 'Future-proof your craft. Harness cutting-edge LLMs, write high-precision prompt chains, build automated workflows, and leverage Spike AI & Karka Infini AI.',
    skills: ['Prompt Engineering', 'AI Automation Workflows', 'Developer Copilots & Tools', 'LLM Agent Engineering'],
    gradient: 'from-purple-500 to-fuchsia-600',
  },
  {
    pillar: '04',
    title: 'Interview Skills',
    subtitle: 'ATS Friendly Profile · Mock Interview · Group Discussion · Presentation Skills',
    description: 'Convert technical interviews into job offers. Receive rigorous 1:1 simulated mock interviews, ATS resume audits, group discussion coaching, and salary negotiation tactics.',
    skills: ['ATS-Optimized Resumes', '1-on-1 Mock Interviews', 'Group Discussion Leadership', 'Presentation Delivery'],
    gradient: 'from-amber-400 to-orange-500',
  },
];

export const PAY_AFTER_HIRED_MODEL = {
  headline: 'Pay After You Get Hired',
  subheadline: 'Zero Upfront Fees. Zero Risk.',
  description: "We're so confident in our training that we don't get paid until you do.",
  stats: {
    enrollments: '800+',
    rating: '4.8',
    reviews: '200+ verified ratings',
  },
  steps: [
    {
      step: '1',
      title: 'Enroll & Learn',
      description: 'Learn from Real Mentors. Join live sessions, work on real-world projects, and get mentored by industry experts.',
      badge: 'Zero Upfront Tuition',
    },
    {
      step: '2',
      title: 'Get Job Ready',
      description: 'We help you build your resume, portfolio, and prep for interviews with real live client capstones.',
      badge: '100% Practical Proof',
    },
    {
      step: '3',
      title: 'Get Paid, Not Billed',
      description: 'Focus on learning today. Share your success once you are placed in a qualifying tech job.',
      badge: 'Guaranteed Minimum CTC',
    },
  ],
  included: [
    '1:1 Expert Mentorship',
    'Comprehensive Placement Training',
    'Resume & LinkedIn Profile Optimization',
    'Simulated 1-on-1 Mock Technical Interviews',
    'Direct Tech Company Referral Support',
  ],
};

export const CAREER_TRACKS = [
  {
    id: 'fullstack',
    title: 'Fullstack Courses',
    tagline: 'Master modern web ecosystems',
    badge: 'MOST POPULAR',
    courses: ['MERN Fullstack', 'React + Java Fullstack', 'React + Python Fullstack'],
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    id: 'genai',
    title: 'Gen AI Courses',
    tagline: 'Lead the AI revolution',
    badge: 'FUTURE PROOF',
    courses: ['Generative AI Foundations', 'Generative AI Mastery', 'Gen AI (LLM) Developer'],
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'data-ml',
    title: 'Data & ML Courses',
    tagline: 'Master data intelligence',
    badge: 'HIGH DEMAND',
    courses: ['AI & Data Science', 'Data Analytics with AI', 'Data Engineering'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'design',
    title: 'Design Courses',
    tagline: 'Create stunning UI/UX',
    badge: 'CREATIVE TECH',
    courses: ['UI/UX Design', 'Web Designing', 'Graphic Designing'],
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 'digital-media',
    title: 'Digital Media Courses',
    tagline: 'Visual storytelling & animation',
    badge: 'MULTIMEDIA',
    courses: ['Video Editing', 'Motion Graphics', 'Multimedia & Animation'],
    color: 'from-rose-500 to-pink-600',
  },
  {
    id: 'content-marketing',
    title: 'Content & Marketing',
    tagline: 'Drive growth with strategy',
    badge: 'GROWTH',
    courses: ['Digital Marketing', 'SEO Analyst', 'Storytelling & Content Writing'],
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'other-tech',
    title: 'Other Tech Courses',
    tagline: 'Advanced tech specializations',
    badge: 'INFRASTRUCTURE',
    courses: ['Cloud & DevOps', 'Data Engineering', 'Cybersecurity Foundations'],
    color: 'from-sky-400 to-blue-600',
  },
  {
    id: 'non-tech',
    title: 'Non Tech Courses',
    tagline: 'Essential business skills',
    badge: 'CORE BUSINESS',
    courses: ['HR & Corporate Talent', 'Financial Accounting & Tally', 'Business Analyst'],
    color: 'from-violet-400 to-purple-600',
  },
];

export const GUIDANCE_TRACKS: GuidanceTrack[] = [
  {
    id: 'stream-discovery',
    title: 'Stream & Specialization Discovery',
    tagline: 'Find the tech or professional discipline aligned with your natural strengths.',
    audience: '1st & 2nd Year College Students, Pre-University Students, and Explorers',
    description: 'A comprehensive diagnostic counseling track that assesses your cognitive strengths, coding affinity, analytical interest, and market trends to map your ideal 3-year academic specialization.',
    timeline: '1 to 2 Weeks (Diagnostic + 2 Interactive Sessions)',
    deliverables: [
      'Comprehensive Aptitude & Strength Diagnostic Report',
      'Personalized 3-Year Academic Skill Roadmap',
      'Curated List of Foundational Open-Source Tools to Explore',
      '1-on-1 Video Session with a Senior Technology Mentor'
    ],
    icon: 'Compass'
  },
  {
    id: 'skill-readiness',
    title: 'Practical Skills & Tech Stack Readiness',
    tagline: 'Bridge the gap between theoretical syllabus and production engineering.',
    audience: '3rd & Final Year Engineering / BCA / MCA / B.Sc Students',
    description: 'We audit your current coding knowledge, evaluate your projects, identify technical blind spots, and curate a high-yield learning pathway covering modern architecture, Git workflows, and system concepts.',
    timeline: '3 Weeks (Deep Technical Review & Guidance Plan)',
    deliverables: [
      'Line-by-line Code & Architecture Review of existing coursework',
      'High-impact learning blueprint for targeted engineering roles',
      'Custom repository of industry-standard coding exercises',
      'Dedicated pathway advisor for continuous query resolution'
    ],
    icon: 'Code'
  },
  {
    id: 'portfolio-github',
    title: 'Resume, GitHub & Portfolio Blueprint',
    tagline: 'Stand out to engineering recruiters with proof of real craft.',
    audience: 'Pre-final and Final Year Students, Active Job Seekers',
    description: 'Transform a generic single-page resume into an ATS-friendly, project-focused narrative. We guide you in documenting GitHub READMEs, structuring live demo deployments, and framing technical achievements.',
    timeline: '10 Days Intensive',
    deliverables: [
      'ATS-Optimized Professional Resume in Markdown & PDF',
      'GitHub Profile & Open-Source Readme Transformation',
      'Production-Ready Portfolio Webpage Structure & Content',
      'LinkedIn Profile Optimization Checklist for Tech Recruiters'
    ],
    icon: 'FileText'
  },
  {
    id: 'mock-interviews',
    title: '1-on-1 Mentorship & Mock Interviews',
    tagline: 'Experience real technical rounds before facing prospective employers.',
    audience: 'Aspirants preparing for Tech Assessments & Hiring Drives',
    description: 'Realistic 60-minute technical and behavioral mock interview simulations conducted by seasoned software engineers. Receive immediate, actionable feedback on problem solving, communication, and system design.',
    timeline: 'Flexible Scheduling (2 to 4 Simulated Sessions)',
    deliverables: [
      'Live recorded coding interview with detailed rubric score',
      'Behavioral & STAR-method communication coaching',
      'Targeted cheat-sheet of data structures, algorithms, and SQL patterns',
      'Post-session strategy call to refine weak points'
    ],
    icon: 'UserCheck'
  }
];

export const TRAINING_PROGRAMS: Program[] = [
  {
    id: 'mern-fullstack',
    slug: 'mern-fullstack-development',
    title: 'MERN Fullstack Development',
    badge: 'BOOTCAMP',
    enrollments: '800+ Enrollments',
    rating: '4.8 (200 ratings)',
    category: 'Full-Stack',
    shortDesc: 'Master Full-Stack web development using MongoDB, Express, React, and Node.js. Build scalable web applications from scratch.',
    fullDesc: 'A rigorous, industry-accredited bootcamp taking students from fundamental JavaScript syntax to advanced distributed system architecture with React 19, Node.js, Express, and MongoDB.',
    duration: '16 Weeks (320 Hours)',
    format: 'Hybrid Bootcamp',
    level: 'Beginner to Intermediate',
    prerequisites: 'Basic computer literacy and logical problem-solving interest. Zero prior programming required.',
    skills: ['MongoDB', 'Express.js', 'React 19', 'Node.js', 'TypeScript', 'Next.js App Router', 'Tailwind CSS', 'RESTful APIs', 'Git & GitHub'],
    capstoneProjects: [
      'Multi-tenant SaaS Workspace with Role-based Authentication & Stripe Checkout',
      'Real-time Collaborative Whiteboard & Chat Engine using WebSockets',
      'Enterprise Issue Tracker with SQL/NoSQL indexing and automated testing'
    ],
    modules: [
      {
        title: 'Module 1: Modern Web Foundations & Semantic Core',
        topics: ['HTML5 semantic hierarchy, accessibility (WCAG), CSS grid, flexbox, and modern CSS variables', 'Modern JavaScript (ES6+): Closures, Promises, Event Loop, Async/Await', 'Git workflows, branches, pull requests, and collaborative code reviews']
      },
      {
        title: 'Module 2: Frontend Engineering with React & Next.js',
        topics: ['React Component Lifecycle, Hooks, State Management (Zustand & Context)', 'Next.js App Router, Server Components vs Client Components, Suspense, and SEO', 'Design Systems with Tailwind CSS, accessible components (Radix primitives)']
      },
      {
        title: 'Module 3: Backend Architecture & Database Design',
        topics: ['Node.js runtime, Express server micro-patterns, Middleware security', 'MongoDB database modeling, aggregation pipelines, indexing, Prisma/Mongoose ORM', 'Authentication protocols: JWT, OAuth 2.0, HTTP-only cookies, Session security']
      },
      {
        title: 'Module 4: Testing, Docker & Production Cloud Deployment',
        topics: ['Unit testing with Vitest/Jest, E2E testing with Playwright', 'Containerizing multi-service apps with Docker and Docker Compose', 'Deploying on Vercel, Render, AWS EC2, and setting up GitHub Actions CI/CD pipelines']
      }
    ],
    outcomes: [
      'Ability to build and deploy complex full-stack web applications independently',
      'Production code standards compliant with linting, testing, and security best practices',
      'A standout GitHub portfolio with 3 verified multi-tier projects'
    ],
    featured: true
  },
  {
    id: 'ai-data-science',
    slug: 'ai-data-science',
    title: 'AI & Data Science',
    badge: 'AI REVOLUTION',
    enrollments: '650+ Enrollments',
    rating: '4.8 (200 ratings)',
    category: 'Data & AI',
    shortDesc: 'Comprehensive study of AI and Data Science concepts. Master the tools and machine learning models that drive the AI revolution.',
    fullDesc: 'Hands-on immersion into Python for Data Science, exploratory data analysis, statistical modeling, machine learning pipelines, and deploying predictive models into real production environments.',
    duration: '14 Weeks (280 Hours)',
    format: 'Live Online + Mentorship',
    level: 'Beginner to Intermediate',
    prerequisites: 'High school mathematics (algebra, basic probability) and familiarity with basic spreadsheet concepts.',
    skills: ['Python 3.12', 'Pandas & NumPy', 'SQL Analytics', 'Scikit-learn', 'Data Visualization (Plotly/Seaborn)', 'Machine Learning Pipelines', 'Model Deployment (FastAPI)'],
    capstoneProjects: [
      'End-to-End Customer Churn Prediction Engine with Deployed FastAPI Microservice',
      'E-commerce Transaction Fraud Detection Pipeline with Imbalanced Data Handling',
      'Healthcare Analytics Diagnostic Dashboard with Interactive Streamlit Visualization'
    ],
    modules: [
      {
        title: 'Module 1: Python for Data Science & Advanced SQL',
        topics: ['Python idioms, NumPy vectorized operations, Pandas DataFrame manipulation', 'Relational database querying, Window functions, CTEs, query optimization in PostgreSQL']
      },
      {
        title: 'Module 2: Exploratory Data Analysis & Statistical Modeling',
        topics: ['Hypothesis testing, distributions, regression diagnostics, correlation vs causation', 'Feature engineering: encoding categorical variables, handling missing values, scaling']
      },
      {
        title: 'Module 3: Machine Learning Algorithms in Production',
        topics: ['Supervised learning: Random Forests, Gradient Boosting (XGBoost/LightGBM)', 'Unsupervised learning: K-Means clustering, PCA dimensional reduction', 'Model evaluation metrics: ROC-AUC, Precision-Recall curves, cross-validation strategies']
      },
      {
        title: 'Module 4: Applied AI & Generative Workflows',
        topics: ['Introduction to Neural Networks and transfer learning with PyTorch', 'Building RAG (Retrieval-Augmented Generation) applications with LangChain and vector stores', 'Packaging machine learning models into production REST APIs with Docker and FastAPI']
      }
    ],
    outcomes: [
      'Deep competence in manipulating datasets and deriving verifiable statistical insights',
      'Production deployment capability for machine learning predictive microservices',
      'A verifiable data science portfolio with reproducible Jupyter notebooks and GitHub repos'
    ],
    featured: true
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    badge: 'CREATIVE TECH',
    enrollments: '450+ Enrollments',
    rating: '4.8 (200 ratings)',
    category: 'Full-Stack',
    shortDesc: 'Master the art of designing intuitive, beautiful user interfaces and experiences using industry-standard design tools.',
    fullDesc: 'Transform from a beginner into an intuitive product designer. Master user empathy, research methodologies, wireframing, high-fidelity Figma components, design systems, and frontend developer handoff.',
    duration: '10 Weeks (200 Hours)',
    format: 'Hybrid Bootcamp',
    level: 'All Levels',
    prerequisites: 'Curiosity for visual aesthetics, empathy for end-users, and basic computer proficiency. No code required.',
    skills: ['Figma Mastery', 'Design Systems & Tokens', 'Wireframing & Prototyping', 'User Research & Personas', 'Information Architecture', 'Usability Testing', 'Developer Handoff'],
    capstoneProjects: [
      'Fintech Mobile App Complete End-to-End UX Case Study & Interactive Prototype',
      'Healthcare Portal Design System with 40+ Accessible Component Primitives',
      'B2B SaaS Analytics Dashboard Redesign with High-Fidelity Micro-interactions'
    ],
    modules: [
      {
        title: 'Module 1: Design Fundamentals & User Research',
        topics: ['Visual hierarchy, color theory, typography scales, spacing tokens', 'User interviews, competitive analysis, journey mapping, affinity diagramming']
      },
      {
        title: 'Module 2: Wireframing & Information Architecture',
        topics: ['Low-fidelity sketching, site maps, user flows, navigation paradigms', 'Content architecture and accessibility guidelines (WCAG AAA contrast)']
      },
      {
        title: 'Module 3: High-Fidelity UI & Figma Design Systems',
        topics: ['Auto-layout 5.0, component variants, interactive component states', 'Design tokens, dark mode theming, responsive screen layouts']
      },
      {
        title: 'Module 4: Prototyping, Usability Testing & Handoff',
        topics: ['Micro-interactions, smart animate, mobile gestures, user testing sessions', 'Design documentation, developer inspection, asset exports, portfolio creation']
      }
    ],
    outcomes: [
      'Comprehensive product design portfolio with 3 published Behance/Dribbble case studies',
      'Fluency in enterprise-grade Figma components and design system tokens',
      'Ability to articulate user experience decisions with data-driven design rationale'
    ],
    featured: true
  },
  {
    id: 'python-kids',
    slug: 'python-for-kids',
    title: 'Python for Kids',
    badge: 'YOUNG MINDS',
    enrollments: '200+ Enrollments',
    rating: '4.8 (200 ratings)',
    category: 'Career Readiness',
    shortDesc: 'Interactive introduction to programming logic using Python. Build games and animations while learning core coding concepts.',
    fullDesc: 'Tailored specifically for school students (Classes 6 through 12). Demystifies coding through playful interactive projects, turtle geometry, Pygame animations, and algorithmic logic drills.',
    duration: '8 Weeks (80 Hours)',
    format: 'Live Online + Mentorship',
    level: 'Beginner to Intermediate',
    prerequisites: 'School students with basic typing skills and enthusiasm for games, puzzles, and technology.',
    skills: ['Python Syntax', 'Variables & Data Types', 'Loops & Conditionals', 'Turtle Graphics', 'Pygame Game Building', 'Problem-Solving Mindset'],
    capstoneProjects: [
      'Retro Arcade Space Shooter Game using Pygame',
      'Interactive Smart Quiz & Story Generator with Python Functions',
      'Algorithmic Geometric Art Showcase built with Python Turtle'
    ],
    modules: [
      {
        title: 'Module 1: First Steps with Python & Turtle Graphics',
        topics: ['Computer anatomy, Python REPL, drawing shapes and colors with Turtle', 'Variables, numbers, strings, and taking user inputs']
      },
      {
        title: 'Module 2: Logic, Decisions & Loops',
        topics: ['If-else conditionals, boolean logic, comparison operators', 'While loops, for loops, and repeating patterns']
      },
      {
        title: 'Module 3: Functions, Lists & Data Structures',
        topics: ['Reusable functions, passing parameters, returning values', 'Lists, random choices, organizing game data and high scores']
      },
      {
        title: 'Module 4: Game Development with Pygame',
        topics: ['Game loop, event handling, keyboard controls, sprite animation', 'Collision detection, scoreboards, sound effects, and publishing your game']
      }
    ],
    outcomes: [
      'Strong algorithmic intuition and analytical thinking applicable to school mathematics',
      'Creation of 3 playable arcade games to share with classmates and family',
      'Official Junior Coder Certificate of Achievement from Karka Academy'
    ],
    featured: true
  },
  {
    id: 'fullstack-internship',
    slug: 'full-stack-developer-internship',
    title: 'Full Stack Developer Internship',
    badge: 'LIVE INTERNSHIP',
    enrollments: '800+ Enrollments',
    rating: '4.8 (200 ratings)',
    category: 'Full-Stack',
    shortDesc: 'Rigorous MERN stack training for students. Master DevOps, System Design, and Production best practices on large-scale apps.',
    fullDesc: 'An intensive internship program matching candidates with live client projects and enterprise engineering practices. Eliminates the "0 experience" gap on resumes through verifiable code contributions.',
    duration: '20 Weeks (400 Hours)',
    format: 'Hybrid Bootcamp',
    level: 'Intermediate',
    prerequisites: 'Completion of college coding coursework or foundational programming experience.',
    skills: ['MERN Stack', 'System Design & Scalability', 'Docker & CI/CD', 'Client Project Collaboration', 'Production Code Reviews', 'Internship Certificate'],
    capstoneProjects: [
      'Live Client Web Application deployed on AWS with 99.9% uptime SLA',
      'High-throughput Notification Engine with BullMQ and Redis caching',
      'Microservices-based Content Platform with automated CI/CD pipelines'
    ],
    modules: [
      {
        title: 'Module 1: Advanced Frontend & State Architecture',
        topics: ['Next.js App Router performance, code-splitting, custom hook abstractions', 'Zustand, TanStack Query, optimistic UI updates, client-side caching']
      },
      {
        title: 'Module 2: Enterprise Backend & Database Scaling',
        topics: ['Express/NestJS microservices, Redis caching layers, PostgreSQL indexing', 'Message queues (BullMQ/RabbitMQ), rate limiting, automated backup cron jobs']
      },
      {
        title: 'Module 3: Live Client Internship Practicum',
        topics: ['Sprint planning, daily standups, Jira ticket triage, Git branch protections', 'Building live features for active partner businesses with senior code reviews']
      },
      {
        title: 'Module 4: DevOps, Observability & Placement Drive',
        topics: ['Dockerizing multi-container services, GitHub Actions pipelines, AWS ECS deployment', 'Sentry error logging, Prometheus metrics, executive interview rounds']
      }
    ],
    outcomes: [
      'Official Karka Academy Internship Certificate with verifiable project credits',
      'Real-world client software running live on the internet with verifiable traffic',
      'Direct placement referrals to Karka hiring partners across South India'
    ],
    featured: true
  },
  {
    id: 'gen-ai-foundations',
    slug: 'generative-ai-foundations',
    title: 'Generative AI Foundations',
    badge: 'FUTURE PROOF',
    enrollments: '900+ Enrollments',
    rating: '4.8 (200 ratings)',
    category: 'Data & AI',
    shortDesc: 'Master the basics of Generative AI, prompt engineering, and fundamental AI concepts. Start your journey into the tech future.',
    fullDesc: 'Designed to propel software developers, analysts, and aspiring engineers into the frontier of Generative AI. Master LLMs, chain-of-thought prompt engineering, LangChain, vector retrieval (RAG), and autonomous AI agents.',
    duration: '12 Weeks (240 Hours)',
    format: 'Live Online + Mentorship',
    level: 'All Levels',
    prerequisites: 'Basic familiarity with Python or JavaScript programming and curiosity about modern AI capabilities.',
    skills: ['LLM Architecture', 'Prompt Engineering', 'LangChain & LlamaIndex', 'Vector Databases (Chroma/Pinecone)', 'RAG Systems', 'AI Copilots & Spike AI', 'Autonomous AI Agents'],
    capstoneProjects: [
      'Enterprise Document Intelligence RAG Engine with Semantic PDF Search',
      'Autonomous Code Review & Refactoring AI Agent with GitHub Webhook Integration',
      'Multi-modal Voice & Vision Assistant powered by Gemini & Claude APIs'
    ],
    modules: [
      {
        title: 'Module 1: LLM Foundations & Prompt Engineering Mastery',
        topics: ['Transformer architecture intuitively explained, tokens, temperature, context windows', 'Zero-shot, few-shot, chain-of-thought, system prompts, prompt injection defense']
      },
      {
        title: 'Module 2: Embeddings & Vector Databases',
        topics: ['Vector embeddings concepts, cosine similarity, chunking strategies', 'Working with ChromaDB, Pinecone, pgvector in PostgreSQL for semantic search']
      },
      {
        title: 'Module 3: Retrieval-Augmented Generation (RAG)',
        topics: ['Building production RAG pipelines with LangChain and LlamaIndex', 'Hybrid search, re-ranking models, reducing hallucinations, hallucination benchmarks']
      },
      {
        title: 'Module 4: AI Agents & Automated Workflows',
        topics: ['Function calling, tools, LangGraph stateful multi-agent workflows', 'Building autonomous AI assistants and connecting LLMs to external SQL databases and APIs']
      }
    ],
    outcomes: [
      'Capability to architect and deploy production-grade RAG and AI agent solutions',
      'Mastery of prompt engineering techniques for enterprise software teams',
      'A distinguished portfolio of deployed GenAI applications on GitHub'
    ],
    featured: true
  },
  {
    id: 'cloud-devops',
    slug: 'applied-cloud-devops-essentials',
    title: 'Applied Cloud & DevOps Essentials',
    category: 'Cloud & DevOps',
    shortDesc: 'Learn Linux systems, Docker containerization, Kubernetes orchestration, Infrastructure as Code, and CI/CD automation pipelines.',
    fullDesc: 'Equips students with hands-on infrastructure automation skills. Learn how modern tech companies deploy, monitor, scale, and secure high-traffic distributed services across AWS and GCP clouds.',
    duration: '12 Weeks (240 Hours)',
    format: 'Live Online + Mentorship',
    level: 'Intermediate',
    prerequisites: 'Basic programming knowledge in any language (Python, JS, Bash) and comfort with command-line interfaces.',
    skills: ['Linux System Administration', 'Docker', 'Kubernetes (k8s)', 'AWS Core Services', 'Terraform (IaC)', 'GitHub Actions', 'Prometheus & Grafana', 'Nginx & Load Balancing'],
    capstoneProjects: [
      'Zero-Downtime Blue-Green Deployment Pipeline on AWS EKS with Terraform',
      'Automated Multi-Environment CI/CD Workflow with Security Scanning (Trivy/SonarQube)',
      'High-Availability Microservices Infrastructure with Auto-scaling and Grafana Alerting'
    ],
    modules: [
      {
        title: 'Module 1: Linux Kernel, Shell Scripting & Networking Fundamentals',
        topics: ['File systems, permissions, process management, systemd, bash automation', 'TCP/IP, DNS, SSL/TLS, firewalls, reverse proxies, and Nginx server configuration']
      },
      {
        title: 'Module 2: Containers & Orchestration with Docker & Kubernetes',
        topics: ['Building lightweight multi-stage Dockerfiles, image security best practices', 'Kubernetes architecture: Pods, Deployments, Services, Ingress, ConfigMaps, Secrets', 'Helm chart package management and stateful set management']
      },
      {
        title: 'Module 3: Infrastructure as Code & Continuous Integration',
        topics: ['Declarative provisioning with Terraform (VPC, Subnets, EC2, S3, RDS)', 'Designing resilient CI/CD pipelines with GitHub Actions and GitLab CI', 'Secret management, automated artifact versioning, and test gates']
      },
      {
        title: 'Module 4: Observability, SRE & Cloud Security Basics',
        topics: ['Metric collection with Prometheus, Dashboards in Grafana, Log aggregation', 'Cost optimization strategies and AWS Well-Architected Framework principles', 'Disaster recovery, backup automation, and container security compliance']
      }
    ],
    outcomes: [
      'Deploy and manage production Kubernetes clusters and containerized microservices',
      'Automate cloud infrastructure from scratch using standard Terraform templates',
      'Configure automated CI/CD pipelines delivering sub-5-minute release cycles'
    ],
    featured: true
  },
  {
    id: 'data-ai',
    slug: 'data-science-applied-ai',
    title: 'Data Science & Applied AI Foundations',
    category: 'Data & AI',
    shortDesc: 'Unlock practical machine learning, advanced SQL analytics, Python data engineering, and modern LLM application workflows.',
    fullDesc: 'A grounded, mathematics-sensible curriculum focused on real-world data problem solving. Transition from data exploration to shipping AI-powered features and analytical dashboards.',
    duration: '14 Weeks (280 Hours)',
    format: 'Live Online + Mentorship',
    level: 'Beginner to Intermediate',
    prerequisites: 'High school mathematics (basic algebra, statistics). No prior coding experience required.',
    skills: ['Python 3', 'Pandas & NumPy', 'SQL Analytics', 'Scikit-learn', 'Data Visualization (Seaborn/Plotly)', 'Feature Engineering', 'FastAPI', 'Vector Databases & LLM Prompts'],
    capstoneProjects: [
      'Customer Churn Prediction Engine with Model Interpretability (SHAP)',
      'Interactive Financial Analytics Dashboard with Streamlit and BigQuery SQL',
      'Retrieval-Augmented Generation (RAG) Document Assistant using LangChain & ChromaDB'
    ],
    modules: [
      {
        title: 'Module 1: Python for Data Science & Advanced SQL',
        topics: ['Data structures, OOP, vectorized computing with NumPy and Pandas', 'Complex SQL queries: Window functions, CTEs, self-joins, query plan analysis', 'Data ingestion, cleaning messy datasets, and missing-value imputation']
      },
      {
        title: 'Module 2: Exploratory Data Analysis & Statistical Modeling',
        topics: ['Descriptive and inferential statistics, hypothesis testing, A/B test analysis', 'Visual storytelling: Seaborn, Plotly interactive heatmaps and distributions', 'Feature selection, scaling, categorical encoding, and variance analysis']
      },
      {
        title: 'Module 3: Machine Learning Algorithms in Production',
        topics: ['Supervised learning: Linear/Logistic regression, Decision trees, XGBoost, Random Forests', 'Unsupervised learning: K-Means clustering, PCA dimensionality reduction', 'Model evaluation metrics: Precision, Recall, F1, ROC-AUC, cross-validation']
      },
      {
        title: 'Module 4: Applied AI & Generative Workflows',
        topics: ['Serving models as microservice REST APIs via FastAPI and Docker', 'Introduction to embeddings, semantic search, and Vector DBs', 'Building a RAG application for intelligent company document QA']
      }
    ],
    outcomes: [
      'Comfortably extract, clean, and analyze enterprise-scale datasets with SQL & Python',
      'Train, validate, tune, and deploy predictive machine learning models',
      'Integrate LLM API capabilities into web applications with guardrails'
    ],
    featured: true
  },
  {
    id: 'cyber-security',
    slug: 'cyber-security-network-defense',
    title: 'Cyber Security & Network Defense Primer',
    category: 'Security',
    shortDesc: 'Master threat intelligence, network packet inspection, web application vulnerabilities (OWASP Top 10), and foundational SOC operations.',
    fullDesc: 'Hands-on security lab program covering defensive and offensive principles. Understand vulnerability assessments, secure coding baselines, and how cyber incidents are detected and remediated.',
    duration: '10 Weeks (200 Hours)',
    format: 'Live Online + Mentorship',
    level: 'All Levels',
    prerequisites: 'Basic familiarity with computer operating systems and networking fundamentals.',
    skills: ['Network Security', 'Wireshark Packet Analysis', 'Linux CLI', 'OWASP Top 10', 'Nmap Scanning', 'Burp Suite Basics', 'SOC Incident Response', 'Cryptography Essentials'],
    capstoneProjects: [
      'Comprehensive Web Application Penetration Test & Remediation Audit Report',
      'Home Lab Security Operations Center (SOC) with Wazuh SIEM & Snort IDS',
      'Automated Vulnerability Scanner Script using Python and Nmap'
    ],
    modules: [
      {
        title: 'Module 1: Computer Networking & Cyber Threat Landscape',
        topics: ['OSI model, TCP/UDP protocols, DNS vulnerabilities, IP routing', 'Common attack vectors: Phishing, Ransomware, DDoS, Man-in-the-Middle', 'Security architecture: Firewalls, DMZ, IDS/IPS, VPN protocols']
      },
      {
        title: 'Module 2: Web Application Security & OWASP Top 10',
        topics: ['SQL Injection, Cross-Site Scripting (XSS), CSRF, Broken Access Control', 'Hands-on vulnerability exploitation and patch verification in lab sandbox', 'Secure API design, authentication tokens, and cryptographic hashing']
      },
      {
        title: 'Module 3: Defensive Security, SIEM & Incident Handling',
        topics: ['Log analysis across Linux auth logs, Windows event viewers, and web server logs', 'Configuring open-source SIEM solutions and writing detection alert rules', 'Incident triage, containment procedures, and chain-of-custody documentation']
      }
    ],
    outcomes: [
      'Ability to audit web applications against standard OWASP benchmarks',
      'Proficiency in network packet triage and log analysis during simulated incidents',
      'Foundational preparation for CompTIA Security+ or CEH credentials'
    ],
    featured: false
  },
  {
    id: 'career-readiness',
    slug: 'professional-employability-accelerator',
    title: 'Professional Employability & Soft Skills Accelerator',
    category: 'Career Readiness',
    shortDesc: 'Master corporate communication, technical problem articulation, quantitative aptitude, and behavioral interview dynamics.',
    fullDesc: 'Designed to eliminate the non-technical hurdles that prevent capable students from clearing campus placements and corporate screening rounds. Combines logic drills with executive communication training.',
    duration: '6 Weeks (Weekend Intensive, 60 Hours)',
    format: 'Weekend Intensive',
    level: 'All Levels',
    prerequisites: 'Open to all college students, freshers, and job seekers.',
    skills: ['Quantitative Aptitude', 'Logical Reasoning', 'Verbal Communication', 'Email & Slack Etiquette', 'STAR Interview Framework', 'Salary & Offer Negotiation', 'Group Discussion Leadership'],
    capstoneProjects: [
      'Live 30-Minute Video Interview Portfolio Submission with Detailed Peer Feedback',
      'Personal Brand Kit: Tailored Resume, Cover Letter Template, and LinkedIn Bio',
      'Timed Aptitude & Problem Solving Assessment Suite'
    ],
    modules: [
      {
        title: 'Module 1: Aptitude & Cognitive Reasoning Mastery',
        topics: ['Speed mathematics, arithmetic shortcuts, probability, permutations', 'Logical deductions, seating arrangements, pattern recognition, data sufficiency']
      },
      {
        title: 'Module 2: High-Impact Business & Technical Communication',
        topics: ['Speaking with clarity, explaining complex technical concepts simply', 'Group discussion dynamics: opening constructively, handling disagreement', 'Professional email writing and workplace etiquette']
      },
      {
        title: 'Module 3: The Tech Interview Playbook',
        topics: ['Deconstructing typical interview question patterns and manager expectations', 'The STAR method for situational questions: Situation, Task, Action, Result', 'Questions to ask the interviewer and negotiating first offers professionally']
      }
    ],
    outcomes: [
      'Significantly higher confidence in both technical and non-technical interview stages',
      'A structured approach to solving timed quantitative assessment tests',
      'Polished interpersonal and verbal presence suitable for global tech teams'
    ],
    featured: false
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Diagnostic Exploration & Aptitude Audit',
    subtitle: 'Understand where you are before deciding where to go.',
    description: 'We begin with a personalized skills assessment and career aspiration dialogue. Rather than selling a pre-packaged course, our mentors listen to your background, interests, and current capabilities.',
    highlight: 'No sales pressure, 100% objective feedback.'
  },
  {
    step: '02',
    title: '1-on-1 Strategy & Pathway Mapping',
    subtitle: 'Receive a personalized, step-by-step career blueprint.',
    description: 'Based on your diagnostic, we co-create a realistic learning plan detailing exact technologies to master, recommended timelines, milestones, and prerequisites.',
    highlight: 'Clear milestones with weekly accountability.'
  },
  {
    step: '03',
    title: 'Hands-on, Project-Driven Training',
    subtitle: 'Learn by building real software, not watching passive videos.',
    description: 'Engage in live interactive mentor-led sessions combined with hands-on coding labs. You write production-grade code, participate in code reviews, and deploy live applications.',
    highlight: 'Real code reviews from experienced engineers.'
  },
  {
    step: '04',
    title: 'Portfolio & Technical Profile Construction',
    subtitle: 'Showcase authentic proof of competence to hiring teams.',
    description: 'We help you document your capstone projects with clear architecture diagrams, comprehensive GitHub documentation, and live deployed demos that speak louder than buzzwords on paper.',
    highlight: 'Verifiable GitHub commits and live URLs.'
  },
  {
    step: '05',
    title: 'Interview Preparation & Long-term Mentorship',
    subtitle: 'Step into hiring rounds with poise and deep technical clarity.',
    description: 'Experience simulated technical interviews, algorithmic problem solving drills, behavioral communication coaching, and continuous guidance until you land your target career milestone.',
    highlight: 'Simulated rounds matching real company standards.'
  }
];

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: 'story-1',
    studentName: 'Karthik R. (Sanjay)',
    avatar: '/images/students/sanjay.jpg',
    initialBackground: 'Mechanical Engineering Student, Non-CS Background',
    targetDomain: 'Full-Stack Web Engineering',
    programTaken: 'Full-Stack Web Engineering (16 Weeks)',
    challengeSolved: 'Lacked coding foundations and felt intimidated by JavaScript frameworks and databases.',
    keyProjects: [
      {
        name: 'InventoryFlow (Live SaaS Demo)',
        desc: 'A full-stack multi-warehouse inventory tracker with real-time stock sync via WebSockets and PostgreSQL indexing.',
        tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS']
      },
      {
        name: 'DevIssueTracker',
        desc: 'GitHub-integrated issue tracking board with automated CI/CD deployment pipeline.',
        tech: ['React', 'Node.js', 'Docker', 'Jest']
      }
    ],
    keyOutcome: 'Transitioned from zero coding knowledge to successfully completing 3 production web apps and securing a Junior Developer role.',
    verifiedStatus: 'Verified Project Demonstration',
    quote: 'Karka Academy did not make empty guarantees. Instead, my mentor sat with me line by line through code reviews until I understood how databases and APIs actually work under the hood.'
  },
  {
    id: 'story-2',
    studentName: 'Ananya S. (Divya)',
    avatar: '/images/students/divya.jpg',
    initialBackground: 'BCA 3rd Year Student',
    targetDomain: 'Cloud & DevOps Engineering',
    programTaken: 'Applied Cloud & DevOps Essentials (12 Weeks)',
    challengeSolved: 'College syllabus covered only theoretical networking without any cloud deployment experience.',
    keyProjects: [
      {
        name: 'Automated EKS Microservices Pipeline',
        desc: 'Terraform script provisioning VPC, EKS cluster, and GitHub Actions CI/CD deploying containerized Node apps.',
        tech: ['AWS', 'Kubernetes', 'Docker', 'Terraform']
      },
      {
        name: 'SRE Observability Dashboard',
        desc: 'Full Prometheus and Grafana monitoring stack with custom alert rules for latency spikes.',
        tech: ['Prometheus', 'Grafana', 'Linux', 'Nginx']
      }
    ],
    keyOutcome: 'Built a standout GitHub repository of DevOps IaC configurations that helped her clear 3 campus placement technical rounds.',
    verifiedStatus: 'Verified Project Demonstration',
    quote: 'The difference between learning DevOps from YouTube and learning at Karka Academy was the rigorous hands-on troubleshooting when containers broke in real labs.'
  },
  {
    id: 'story-3',
    studentName: 'Praveen Kumar M. (Arun)',
    avatar: '/images/students/arun.jpg',
    initialBackground: 'B.Sc Computer Science Graduate',
    targetDomain: 'Data Analytics & Applied AI',
    programTaken: 'Data Science & Applied AI Foundations (14 Weeks)',
    challengeSolved: 'Knew basic Python syntax but struggled with relational SQL data pipelines and model evaluation.',
    keyProjects: [
      {
        name: 'Retail Customer Churn Predictor',
        desc: 'End-to-end pipeline processing 100k transactions with feature engineering, XGBoost modeling, and Streamlit UI.',
        tech: ['Python', 'Pandas', 'XGBoost', 'Streamlit']
      },
      {
        name: 'Healthcare Document RAG Assistant',
        desc: 'Semantic search engine querying medical PDFs using ChromaDB and local vector embeddings.',
        tech: ['FastAPI', 'LangChain', 'ChromaDB', 'SQL']
      }
    ],
    keyOutcome: 'Developed a comprehensive data science portfolio and transitioned into an Associate Data Analyst position.',
    verifiedStatus: 'Verified Project Demonstration',
    quote: 'The career guidance sessions helped me structure my LinkedIn profile and talk intelligently about data trade-offs during interviews.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Sanjay V.',
    avatar: '/images/students/sanjay.jpg',
    role: 'Student, Computer Engineering',
    organizationOrCollege: 'Anna University Affiliated College, Chennai',
    service: '1-on-1 Career Mentorship & Tech Stack Guidance',
    feedback: 'Before meeting Karka Academy mentors in Nagercoil, I was jumping between five different tech stacks without mastering any. They gave me clarity, told me honestly where I was wasting time, and helped me build deep competence in Next.js and relational databases.',
    rating: 5,
    date: 'August 2026',
    verified: true
  },
  {
    id: 'test-2',
    author: 'Meenakshi Sundaram',
    avatar: '/images/mentor-session.jpg',
    role: 'Parent of Engineering Student',
    organizationOrCollege: 'Kanyakumari District, Tamil Nadu',
    service: 'Stream & Specialization Discovery Session',
    feedback: 'What impressed me most was that they did not try to push an expensive package onto us. They gave my son an objective assessment of his strengths, suggested self-learning milestones first, and treated education with genuine integrity.',
    rating: 5,
    date: 'September 2026',
    verified: true
  },
  {
    id: 'test-3',
    author: 'Divya N.',
    avatar: '/images/students/divya.jpg',
    role: 'Recent Graduate & Junior Full-Stack Engineer',
    organizationOrCollege: 'Technopark / IT Corridor',
    service: 'Full-Stack Web Engineering Training',
    feedback: 'The capstone projects were truly real-world. In every job interview I attended, the interviewers spent 80% of the time asking questions about the multi-tenant architecture project I built at Karka Academy.',
    rating: 5,
    date: 'July 2026',
    verified: true
  },
  {
    id: 'test-4',
    author: 'Arun Balaji',
    avatar: '/images/students/arun.jpg',
    role: 'Final Year IT Student',
    organizationOrCollege: 'Nagercoil Engineering College',
    service: 'Mock Interview & Resume Blueprint',
    feedback: 'The mock interviews simulated real engineering pressure. The detailed rubric they handed me pointed out bad habits in my code explanations that no college professor had ever caught. Highly recommended!',
    rating: 5,
    date: 'October 2026',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is Pay After Placement?',
    answer: "We want you to focus entirely on your learning without worrying about upfront costs. You only share your success (and the fees) after you land a tech job with a guaranteed minimum salary. It's our way of saying we're in this together.",
    category: 'Admissions & Policies'
  },
  {
    question: 'Is placement guaranteed?',
    answer: "While no one can strictly 'guarantee' a job, our Pay After Placement model means we are as invested in your career as you are. We don't succeed unless you do, which is why we go the extra mile to ensure you are job-ready.",
    category: 'Admissions & Policies'
  },
  {
    question: 'Who are the mentors at Karka?',
    answer: 'Our mentors are industry veterans from top tech companies. They bring real-world experience, ensuring the curriculum is relevant and up-to-date with current industry standards.',
    category: 'General'
  },
  {
    question: 'Do I need a background in coding or CSE?',
    answer: "Absolutely not! We've designed our curriculum to take you from a curious beginner to a confident professional. Whether you're from arts, science, or are a complete career-switcher, we've got you covered.",
    category: 'Training Programs'
  },
  {
    question: 'How long does the course take?',
    answer: 'The duration varies by course but typically ranges from 4 to 6 months for foundational tracks and 16 to 20 weeks for comprehensive full-stack and data science bootcamps with live internships.',
    category: 'Training Programs'
  },
  {
    question: 'How is Karka AI & Tech Academy different from conventional coaching centers?',
    answer: 'Unlike institutes that rely on pre-recorded videos or make dubious claims, Karka AI & Tech Academy in Nagercoil combines personalized 1-on-1 mentorship with practical, project-centric technical training, Pay After Placement options, and modern AI platforms like Spike AI.',
    category: 'General'
  },
  {
    question: 'Do you offer a job placement guarantee?',
    answer: 'No, and we are proud to say this openly. Ethical educational institutions cannot ethically guarantee employment because hiring depends on market factors, individual effort, and interview performance. What we guarantee is rigorous, industry-aligned training, verifiable capstone projects, personalized resume reviews, and complete interview preparation support.',
    category: 'Admissions & Policies'
  },
  {
    question: 'Can non-computer science students enroll in technical programs?',
    answer: 'Yes. More than 35% of our learners come from Mechanical, Civil, Commerce, or Science backgrounds. Our foundational modules start from core computational logic and build upwards with dedicated mentor support.',
    category: 'Training Programs'
  },
  {
    question: 'What is the format of the training programs?',
    answer: 'Our programs are conducted via live interactive online sessions supplemented by hands-on lab sandboxes, weekly 1-on-1 mentorship checkpoints, and collaborative group project work. All live sessions are recorded for permanent student reference.',
    category: 'Training Programs'
  },
  {
    question: 'How do I book a 1-on-1 Career Guidance Session?',
    answer: 'You can submit an enquiry via our Smart Guidance Form on the website, select "1-on-1 Career Guidance", and our counseling coordinator will reach out within 24 business hours to schedule an online or in-person diagnostic session at your preferred time slot.',
    category: 'Career Guidance'
  },
  {
    question: 'What happens if I miss a live class?',
    answer: 'Every session is archived in your student portal along with code repositories, lecture notes, and assignments. In addition, you can book a 15-minute catchup slot with your teaching assistant to clarify any doubts.',
    category: 'Training Programs'
  },
  {
    question: 'Will I receive a certificate upon course completion?',
    answer: 'Yes. Learners who complete the required attendance, pass code reviews, and successfully deploy their capstone project will receive a verifiable Certificate of Completion with a unique verification code and GitHub project endorsement.',
    category: 'Training Programs'
  },
  {
    question: 'What is your refund and transfer policy?',
    answer: 'We provide a 7-day unconditional refund window from the start of the first cohort lecture. If you feel the program is not the right fit for your learning style, you can request a 100% refund without questions asked.',
    category: 'Admissions & Policies'
  }
];
