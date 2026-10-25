import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
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
  MapPin,
  Play,
  Building2,
  Code2,
  Laptop,
} from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';

export const metadata: Metadata = {
  title: 'About Us | Karka AI & Tech Academy - Nagercoil, Tamil Nadu',
  description:
    'Learn about Karka AI & Tech Academy, our physical innovation labs at SRV Towers Nagercoil, ethical guidance pledge, and working engineer mentorship redesigned by Team Nexora Labs.',
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
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-purple-900 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Page Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-[#4a044e] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-purple-700" />
              <span>Our Mission & Physical Campus</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Transforming Ambition into{' '}
              <span className="bg-gradient-to-r from-[#4a044e] via-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
                Verifiable Engineering Competence
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Founded on the belief that every aspirant deserves transparent career direction, working engineer mentorship, and physical lab immersion without inflated claims or fake guarantees.
            </p>
          </div>
        </div>

        {/* Campus & Facilities Visual Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Photo: Innovation Lab */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-md group bg-slate-900">
                  <Image
                    src="/images/hero-campus.jpg"
                    alt="Karka AI Innovation Lab at SRV Towers Nagercoil"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2 text-xs font-bold">
                      <MapPin className="w-4 h-4 text-amber-400" />
                      <span>Karka AI Innovation Lab · Nagercoil</span>
                    </div>
                    <Link
                      href="/#academy-tour"
                      className="px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white text-[#4a044e] text-xs font-bold flex items-center gap-1.5 shadow transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-[#4a044e]" />
                      <span>Watch Tour</span>
                    </Link>
                  </div>
                </div>

                {/* Sub-grid with Mentorship Photo & Mascot */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 group">
                    <Image
                      src="/images/mentor-session.jpg"
                      alt="1-on-1 Code Review and Senior Mentorship at Karka Academy"
                      fill
                      sizes="(max-width: 768px) 50vw, 30vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-3">
                      <span className="text-[11px] font-bold text-white">1-on-1 Engineer Mentorship</span>
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-900 group">
                    <Image
                      src="/images/karka-mascot.jpg"
                      alt="Karka AI Smart Learning Companion"
                      fill
                      sizes="(max-width: 768px) 50vw, 30vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent flex items-end p-3">
                      <span className="text-[11px] font-bold text-purple-200">Karka AI Virtual Companion</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Physical Academy Highlights */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-900 border border-purple-200 text-xs font-bold">
                  <Building2 className="w-3.5 h-3.5 text-purple-700" />
                  <span>Physical Nagercoil Headquarters</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                  Modern Hardware, Dedicated Linux Pods & Real Mentors
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Unlike remote video repositories where students struggle alone, Karka AI Academy operates physical developer labs located at Veppamoodu, Nagercoil. Learners sit side-by-side with experienced practitioners, writing real code every single day.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-purple-50/70 border border-purple-100">
                    <MapPin className="w-5 h-5 text-purple-700 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-slate-900 block">SRV Towers, Muthamizh Street</span>
                      <span className="text-slate-600">Near Girias, Veppamoodu, Nagercoil – 629001</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-slate-900 block">Pay After Placement Option</span>
                      <span className="text-slate-600">Study with confidence and pay after securing your tech role.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-[#4a044e] hover:bg-purple-900 shadow-md transition-all"
                  >
                    <span>Schedule Campus Visit & Diagnostic Test</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-800 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {COMPANY_DETAILS.mission}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
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
            <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#4a044e] to-purple-700 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                  {m.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">{m.name}</h3>
                  <p className="text-xs font-semibold text-purple-700">{m.role}</p>
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
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                  Redesign Challenge Submission
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Engineered by Team NEXORA LABS
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                  Redesigned for the <em>SiteSprint Website Redesign Challenge</em> under Karka Infini AI. Nexora Labs brings modern frontend engineering, WCAG 2.2 accessibility, zero-fluff transparency, and verified data architecture to empower the next generation of tech aspirants.
                </p>
                <div className="flex items-center gap-2 pt-2 text-xs text-purple-300 font-semibold">
                  <span>Tagline: {COMPANY_DETAILS.redesignTagline}</span>
                </div>
              </div>

              <div className="md:col-span-4 flex justify-center md:justify-end">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-[#4a044e] hover:bg-purple-900 text-white font-bold text-xs shadow-md transition-colors text-center border border-purple-500/30"
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
