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
  name: 'You Aspirant',
  legalName: 'You Aspirant Career Guidance & Professional Training Pvt. Ltd.',
  brandTagline: 'Your Ambition. Your Skills. Your Next Opportunity.',
  mission: 'Empowering students and aspiring professionals with honest career clarity, rigorous industry skills, and personalized mentorship to build meaningful, sustainable careers.',
  vision: 'To be the most trusted, transparent career catalyst in India, replacing misleading promises with verifiable skills and personal guidance.',
  redesignTeam: 'NEXORA LABS',
  redesignTagline: 'Innovate. Design. Transform.',
  contact: {
    email: 'enquiry@youaspirant.com',
    counselingEmail: 'guidance@youaspirant.com',
    phone: '+91 44 2855 9100',
    mobile: '+91 98401 23456',
    address: 'Nexora Tower, Rajiv Gandhi Salai (OMR), Perungudi, Chennai, Tamil Nadu 600096, India',
    workingHours: 'Monday – Saturday: 9:00 AM – 6:30 PM IST',
  },
  socials: {
    linkedin: 'https://linkedin.com/company/you-aspirant',
    youtube: 'https://youtube.com/@youaspirant',
    github: 'https://github.com/you-aspirant',
    twitter: 'https://twitter.com/youaspirant',
    instagram: 'https://instagram.com/youaspirant',
  },
  stats: [
    { value: '4,800+', label: 'Students Guided in 1-on-1 Sessions' },
    { value: '94.2%', label: 'Learner Course Completion Rate' },
    { value: '180+', label: 'Practical Capstone Projects Built' },
    { value: '4.8 / 5.0', label: 'Verified Student Satisfaction Rating' },
  ],
  transparencyPledge: [
    'Zero misleading "100% placement guarantee" gimmicks — we believe in building real capability.',
    'Verified, practical curricula built with working engineers, not outdated slides.',
    'Transparent fee structure with zero hidden subscription lock-ins.',
    'Every learner receives individualized guidance tailored to their current aptitude and ambition.'
  ]
};

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
    id: 'fullstack-web',
    slug: 'fullstack-web-engineering',
    title: 'Full-Stack Web Engineering',
    category: 'Full-Stack',
    shortDesc: 'Master modern frontend, scalable backends, database architecture, and cloud deployment with React, Next.js, Node.js, and PostgreSQL.',
    fullDesc: 'A rigorous, project-first training curriculum designed to transition learners from syntax beginners into confident full-stack engineers who can architect, test, and ship complete modern web applications.',
    duration: '16 Weeks (320 Hours of Instruction & Labs)',
    format: 'Live Online + Mentorship',
    level: 'Beginner to Intermediate',
    prerequisites: 'Basic familiarity with computer operations and elementary logic. No prior web development background required.',
    skills: ['TypeScript', 'React 19', 'Next.js App Router', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST & GraphQL APIs', 'Docker Basics', 'Jest Testing', 'Git & CI/CD'],
    capstoneProjects: [
      'Multi-tenant SaaS Workspace with Role-based Authentication & Stripe Checkout',
      'Real-time Collaborative Whiteboard & Chat Engine using WebSockets',
      'Enterprise Issue Tracker with SQL indexing and automated testing'
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
        topics: ['Node.js runtime, Express/Hono server micro-patterns, Middleware security', 'Relational database design in PostgreSQL, Normalization, ACID transactions, Prisma ORM', 'Authentication protocols: JWT, OAuth 2.0, HTTP-only cookies, Session security']
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
    studentName: 'Karthik R.',
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
    quote: 'You Aspirant did not make empty guarantees. Instead, my mentor sat with me line by line through code reviews until I understood how databases and APIs actually work under the hood.'
  },
  {
    id: 'story-2',
    studentName: 'Ananya S.',
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
    quote: 'The difference between learning DevOps from YouTube and learning at You Aspirant was the rigorous hands-on troubleshooting when containers broke in real labs.'
  },
  {
    id: 'story-3',
    studentName: 'Praveen Kumar M.',
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
    role: 'Student, Computer Engineering',
    organizationOrCollege: 'Anna University Affiliated College, Chennai',
    service: '1-on-1 Career Mentorship & Tech Stack Guidance',
    feedback: 'Before meeting You Aspirant mentors, I was jumping between five different tech stacks without mastering any. They gave me clarity, told me honestly where I was wasting time, and helped me build deep competence in Next.js and relational databases.',
    rating: 5,
    date: 'August 2026',
    verified: true
  },
  {
    id: 'test-2',
    author: 'Meenakshi Sundaram',
    role: 'Parent of Engineering Student',
    organizationOrCollege: 'Coimbatore, Tamil Nadu',
    service: 'Stream & Specialization Discovery Session',
    feedback: 'What impressed me most was that they did not try to push an expensive package onto us. They gave my son an objective assessment of his strengths, suggested self-learning milestones first, and treated education with genuine integrity.',
    rating: 5,
    date: 'September 2026',
    verified: true
  },
  {
    id: 'test-3',
    author: 'Divya N.',
    role: 'Recent Graduate & Junior Full-Stack Engineer',
    organizationOrCollege: 'Bangalore Tech Park',
    service: 'Full-Stack Web Engineering Training',
    feedback: 'The capstone projects were truly real-world. In every job interview I attended, the interviewers spent 80% of the time asking questions about the multi-tenant architecture project I built at You Aspirant.',
    rating: 5,
    date: 'July 2026',
    verified: true
  },
  {
    id: 'test-4',
    author: 'Arun Balaji',
    role: 'Final Year IT Student',
    organizationOrCollege: 'SRM Institute of Science and Technology',
    service: 'Mock Interview & Resume Blueprint',
    feedback: 'The mock interviews simulated real engineering pressure. The detailed rubric they handed me pointed out bad habits in my code explanations that no college professor had ever caught. Highly recommended!',
    rating: 5,
    date: 'October 2026',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How is You Aspirant different from conventional coaching centers?',
    answer: 'Unlike institutes that rely on pre-recorded videos or make dubious 100% placement promises, You Aspirant combines personalized 1-on-1 mentorship with practical, project-centric technical training. We focus on transparent diagnostics, real code reviews, and building undeniable portfolio proof rather than marketing hype.',
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
