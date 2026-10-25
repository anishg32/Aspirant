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
    <div className="min-h-screen flex flex-col bg-[#030014] text-white selection:bg-[#F000FF] selection:text-white cosmic-nebula-bg">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Page Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-fuchsia-950/70 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-cyan-300" />
              <span>Our Mission & Physical Campus</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Transforming Ambition into{' '}
              <span className="text-gradient-infini">
                Verifiable Engineering Competence
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Founded on the belief that every aspirant deserves transparent career direction, working engineer mentorship, and physical lab immersion without inflated claims or fake guarantees.
            </p>
          </div>
        </div>

        {/* Campus & Facilities Visual Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="card-cosmic p-6 sm:p-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Campus Advertisement Video Player */}
              <div className="lg:col-span-7 space-y-4">
                <CampusAdVideoPlayer initialMode="youtube" />

                {/* Sub-grid with Mentorship Photo & Mascot */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-fuchsia-500/30 shadow-xs bg-[#09021a] group">
                    <Image
                      src="/images/mentor-session.jpg"
                      alt="1-on-1 Code Review and Senior Mentorship at Karka Academy"
                      fill
                      sizes="(max-width: 768px) 50vw, 30vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 to-transparent flex items-end p-3">
                      <span className="text-[11px] font-bold text-white">1-on-1 Engineer Mentorship</span>
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-cyan-400/30 shadow-xs bg-[#09021a] group">
                    <Image
                      src="/images/karka-mascot.jpg"
                      alt="Karka AI Smart Learning Companion"
                      fill
                      sizes="(max-width: 768px) 50vw, 30vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 to-transparent flex items-end p-3">
                      <span className="text-[11px] font-bold text-cyan-300">Karka AI Virtual Companion</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Physical Academy Highlights */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-950/70 text-cyan-300 border border-fuchsia-400/40 text-xs font-bold">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Physical Nagercoil Headquarters</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                  Modern Hardware, Dedicated Linux Pods & Real Mentors
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Unlike remote video repositories where students struggle alone, Karka AI Academy operates physical developer labs located at Veppamoodu, Nagercoil. Learners sit side-by-side with experienced practitioners, writing real code every single day.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14062c] border border-fuchsia-500/25">
                    <MapPin className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-white block">SRV Towers, Muthamizh Street</span>
                      <span className="text-slate-300">Near Girias, Veppamoodu, Nagercoil – 629001</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14062c] border border-cyan-400/30">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-white block">Pay After Placement Option</span>
                      <span className="text-slate-300">Study with confidence and pay after securing your tech role.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="btn-infini-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs cursor-pointer"
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
            <div className="card-cosmic p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-fuchsia-950/70 border border-fuchsia-500/40 text-fuchsia-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">Our Mission</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {COMPANY_DETAILS.mission}
              </p>
            </div>

            <div className="card-cosmic p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">Our Vision</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {COMPANY_DETAILS.vision}
              </p>
            </div>

            <div className="card-cosmic p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/70 border border-amber-400/40 text-amber-300 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">Ethical Education</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We reject misleading commercial promises. We train students to build real systems, write clean tests, and present authentic GitHub code that recruiters actually trust.
              </p>
            </div>
          </div>
        </div>

        {/* Mentors & Academic Leadership */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="space-y-4 text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-400/40">
              Guidance Mentors
            </span>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Learn from Practicing Engineers
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Our mentors are not generic slide presenters; they are software architects and talent leaders who understand current production standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((m, idx) => (
              <div
                key={idx}
                className="card-cosmic p-6 space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#F000FF] to-[#00FFFF] text-black font-extrabold text-lg flex items-center justify-center shadow-[0_0_15px_rgba(240,0,255,0.4)]">
                  {m.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">{m.name}</h3>
                  <p className="text-xs font-semibold text-cyan-400">{m.role}</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {m.background}
                </p>
                <div className="pt-2 border-t border-fuchsia-500/20 text-[11px] text-fuchsia-300 font-medium">
                  {m.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nexora Labs Redesign Attribution Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-r from-[#12002b] via-[#09001b] to-[#030014] text-white rounded-3xl p-8 sm:p-12 border border-fuchsia-500/35 shadow-[0_0_35px_rgba(240,0,255,0.15)] relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest">
                  Redesign Challenge Submission
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Engineered by Team NEXORA LABS
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                  Redesigned for the <em>SiteSprint Website Redesign Challenge</em> under Karka Infini AI. Nexora Labs brings modern frontend engineering, WCAG 2.2 accessibility, zero-fluff transparency, and verified data architecture to empower the next generation of tech aspirants.
                </p>
                <div className="flex items-center gap-2 pt-2 text-xs text-fuchsia-300 font-semibold">
                  <span>Tagline: {COMPANY_DETAILS.redesignTagline}</span>
                </div>
              </div>

              <div className="md:col-span-4 flex justify-center md:justify-end">
                <Link
                  href="/contact"
                  className="btn-infini-primary px-6 py-3.5 rounded-xl font-bold text-xs shadow-md transition-colors text-center cursor-pointer"
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
