import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GuidanceAssistant from '@/components/assistant/GuidanceAssistant';
import {
  Compass,
  ShieldCheck,
  CheckCircle2,
  Users2,
  Target,
  Award,
  Sparkles,
  ArrowRight,
  BookOpen,
  Code2,
} from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';

export const metadata: Metadata = {
  title: 'About Us | You Aspirant - Career Guidance & Practical Training',
  description:
    'Learn about You Aspirant, our verified educational mission, ethical guidance pledge, and practical engineering mentorship redesigned by Team Nexora Labs.',
};

export default function AboutPage() {
  const mentors = [
    {
      name: 'R. Vigneshwar',
      role: 'Principal Cloud & Systems Mentor',
      background: 'Ex-Senior Infrastructure Architect, 12+ years in Distributed Systems and Kubernetes.',
      focus: 'Guides the Applied Cloud & DevOps and Linux Systems tracks.',
    },
    {
      name: 'Dr. S. Gayathri',
      role: 'Head of Career Diagnostics & Assessment',
      background: 'Ph.D in Cognitive Informatics, 10+ years advising engineering institutions across South India.',
      focus: 'Leads the Stream & Specialization Discovery and Aptitude Diagnostic tracks.',
    },
    {
      name: 'Arvind Swaminathan',
      role: 'Lead Full-Stack Engineering Mentor',
      background: 'Staff Software Engineer, Next.js contributor, and experienced production architect.',
      focus: 'Mentors Full-Stack Web cohorts and supervises production capstone code reviews.',
    },
    {
      name: 'Kavitha Balasubramanian',
      role: 'Director of Employability & Technical Communication',
      background: 'Former Technical Talent Partner, evaluated 1,500+ campus hires across global tech hubs.',
      focus: 'Coaches students in STAR behavioral interviews and resume narrative engineering.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Page Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              <span>Our Story & Mission</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Transforming Ambition into{' '}
              <span className="text-blue-600">Verifiable Engineering Competence</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Founded on the belief that every student deserves honest, transparent career direction without inflated marketing claims or empty placement guarantees.
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {COMPANY_DETAILS.mission}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {COMPANY_DETAILS.vision}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Ethical Education</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We reject misleading commercial promises. We train students to build real systems, write clean tests, and present authentic GitHub code that recruiters actually trust.
              </p>
            </div>
          </div>
        </div>

        {/* Mentors & Academic Leadership */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="space-y-4 text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Guidance Mentors
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Learn from Practicing Engineers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Our mentors are not generic slide presenters; they are software architects and talent leaders who understand current production standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((m, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-slate-800 to-blue-700 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                  {m.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">{m.name}</h3>
                  <p className="text-xs font-semibold text-blue-600">{m.role}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {m.background}
                </p>
                <div className="pt-2 border-t border-slate-100 text-[11px] text-teal-700 font-medium">
                  {m.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nexora Labs Redesign Attribution Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest">
                  Redesign Challenge Submission
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Engineered by Team NEXORA LABS
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                  Redesigned for the <em>SiteSprint Website Redesign Challenge</em> under Karka Infini AI. Nexora Labs brings modern frontend engineering, WCAG 2.2 accessibility, zero-fluff transparency, and verified data architecture to empower the next generation of tech aspirants.
                </p>
                <div className="flex items-center gap-2 pt-2 text-xs text-teal-300 font-semibold">
                  <span>Tagline: {COMPANY_DETAILS.redesignTagline}</span>
                </div>
              </div>

              <div className="md:col-span-4 flex justify-center md:justify-end">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-colors text-center"
                >
                  Contact Our Redesign Team
                </Link>
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
      <GuidanceAssistant />
    </div>
  );
}
