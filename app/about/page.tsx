import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GuidanceAssistant from '@/components/assistant/GuidanceAssistant';
import CampusAdVideoPlayer from '@/components/sections/CampusAdVideoPlayer';
import {
  Compass,
  ShieldCheck,
  CheckCircle2,
  Target,
  Sparkles,
  ArrowRight,
  MapPin,
  Building2,
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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#4a044e] selection:text-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Page Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a044e]/10 border border-[#4a044e]/20 text-[#4a044e] text-xs font-bold uppercase tracking-wider font-readex">
              <Compass className="w-3.5 h-3.5 text-[#4a044e]" />
              <span>Our Mission &amp; Physical Campus</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display">
              Transforming Ambition into{' '}
              <span className="text-[#4a044e]">
                Verifiable Engineering Competence
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-body">
              Founded on the belief that every aspirant deserves transparent career direction, working engineer mentorship, and physical lab immersion without inflated claims or fake guarantees.
            </p>
          </div>
        </div>

        {/* Campus & Facilities Visual Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Campus Advertisement Video Player */}
              <div className="lg:col-span-7 space-y-4">
                <CampusAdVideoPlayer initialMode="youtube" />

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
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-3">
                      <span className="text-[11px] font-bold text-white">1-on-1 Engineer Mentorship</span>
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 group">
                    <Image
                      src="/images/karka-mascot.jpg"
                      alt="Karka AI Smart Learning Companion"
                      fill
                      sizes="(max-width: 768px) 50vw, 30vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-3">
                      <span className="text-[11px] font-bold text-amber-300">Karka AI Virtual Companion</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Physical Academy Highlights */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4a044e]/10 text-[#4a044e] border border-[#4a044e]/20 text-xs font-bold font-readex">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Physical Nagercoil Headquarters</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug font-display">
                  Modern Hardware, Dedicated Linux Pods &amp; Real Mentors
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed font-body">
                  Unlike remote video repositories where students struggle alone, Karka AI Academy operates physical developer labs located at Veppamoodu, Nagercoil. Learners sit side-by-side with experienced practitioners, writing real code every single day.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-50/70 border border-purple-100">
                    <MapPin className="w-5 h-5 text-[#4a044e] shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-slate-900 block font-readex">SRV Towers, Muthamizh Street</span>
                      <span className="text-slate-600">Near Girias, Veppamoodu, Nagercoil – 629001</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-50/70 border border-purple-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-slate-900 block font-readex">Pay After Placement Option</span>
                      <span className="text-slate-600">Study with confidence and pay after securing your tech role.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="btn-karka-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs cursor-pointer font-readex uppercase tracking-wide"
                  >
                    <span>Schedule Campus Visit &amp; Diagnostic Test</span>
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
            <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#4a044e]/10 text-[#4a044e] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-display">Our Mission</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                {COMPANY_DETAILS.mission}
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#4a044e]/10 text-[#4a044e] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-display">Our Vision</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                {COMPANY_DETAILS.vision}
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-display">Ethical Education</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                We reject misleading commercial promises. We train students to build real systems, write clean tests, and present authentic GitHub code that recruiters actually trust.
              </p>
            </div>
          </div>
        </div>

        {/* Mentors & Academic Leadership */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="space-y-4 text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4a044e] bg-[#4a044e]/10 px-3 py-1 rounded-full border border-[#4a044e]/20 font-readex">
              Guidance Mentors
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight font-display">
              Learn from Practicing Engineers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-body">
              Our mentors are not generic slide presenters; they are software architects and talent leaders who understand current production standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((m, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm hover:shadow-md hover:border-[#4a044e]/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#4a044e] text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                  {m.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 font-display">{m.name}</h3>
                  <p className="text-xs font-semibold text-[#4a044e] font-readex">{m.role}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-body">
                  {m.background}
                </p>
                <div className="pt-2 border-t border-slate-100 text-[11px] text-[#4a044e] font-medium font-readex">
                  {m.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nexora Labs Redesign Attribution Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-linear-to-r from-[#4a044e] via-[#5e0563] to-[#2a0a2e] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                  Redesign Challenge Submission
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  Engineered by Team NEXORA LABS
                </h3>
                <p className="text-purple-100 text-xs sm:text-sm leading-relaxed max-w-xl font-body">
                  Redesigned for the <em>SiteSprint Website Redesign Challenge</em> under Karka Infini AI. Nexora Labs brings modern frontend engineering, WCAG 2.2 accessibility, zero-fluff transparency, and verified data architecture to empower the next generation of tech aspirants.
                </p>
                <div className="flex items-center gap-2 pt-2 text-xs text-purple-200 font-semibold font-readex">
                  <span>Tagline: {COMPANY_DETAILS.redesignTagline}</span>
                </div>
              </div>

              <div className="md:col-span-4 flex justify-center md:justify-end">
                <Link
                  href="/contact"
                  className="btn-karka-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wide text-center cursor-pointer font-readex"
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
