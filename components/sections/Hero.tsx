'use client';

import React from 'react';
import Link from 'next/link';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Cpu,
  Sparkles,
  Award,
  Users,
  Target,
} from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-radial-glow">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-[#4a044e] text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#4a044e] animate-ping" />
              <span>The Exclusive AI & Tech Learning Center in Nagercoil</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              AI-Driven{' '}
              <span className="bg-gradient-to-r from-[#4a044e] via-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
                Software Developer
              </span>{' '}
              & Career Platform
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Master Full Stack Development, Data Science, and GenAI at Karka AI & Tech Academy. Build real production capstones with working engineer mentorship and Pay After Placement opportunities in Nagercoil.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#4a044e] hover:bg-purple-900 active:bg-purple-950 shadow-lg shadow-purple-950/25 hover:shadow-xl hover:shadow-purple-950/30 hover:-translate-y-0.5 transition-all text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                id="hero-primary-cta"
              >
                <span>Explore Training Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 shadow-xs transition-all text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                id="hero-secondary-cta"
              >
                <span>Visit Nagercoil Campus / Contact</span>
              </Link>
            </div>

            {/* Micro Trust Bullets */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Zero fake placement gimmicks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Working engineer code reviews</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Beginner to advanced cohorts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Trust Card & Key Metrics (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Decorative Glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 relative z-10 border border-slate-200/90 shadow-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-teal-500 flex items-center justify-center text-white shadow-md">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-base text-slate-900 leading-tight">
                      Career Roadmap Blueprint
                    </h2>
                    <p className="text-xs text-teal-600 font-medium">
                      Personalized & Verified Pathway
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                  Live Cohorts
                </span>
              </div>

              {/* 3 Step Interactive Visual in Card */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    01
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Diagnostic Career Assessment</span>
                    <span className="text-slate-500">Uncover aptitude, strengths & target domain</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    02
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Hands-on Engineering Labs</span>
                    <span className="text-slate-500">Next.js, Cloud, DevOps, or Data Science capstones</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    03
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">1-on-1 Senior Mock Interviews</span>
                    <span className="text-slate-500">Rigorous technical rounds with line-by-line feedback</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Test Tool Link */}
              <div className="pt-2 border-t border-slate-100">
                <Link
                  href="/#career-quiz"
                  className="w-full inline-flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200/60 text-xs font-bold text-blue-900 hover:border-blue-400 transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-600" />
                    <span>Take the 60-Second Career Matcher</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Subtle Floating Verified Pill */}
            <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-4 -left-6 bg-white py-2.5 px-4 rounded-xl border border-slate-200 shadow-lg text-xs font-semibold text-slate-800 z-20">
              <ShieldCheck className="w-4 h-4 text-teal-500" />
              <span>4,800+ Students Mentored 1-on-1</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
