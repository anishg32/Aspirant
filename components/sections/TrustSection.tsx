'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle,
  FileCode2,
  Users2,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
  Zap,
  Building2,
  GraduationCap,
  Briefcase,
  Layers,
} from 'lucide-react';
import { COMPANY_DETAILS, WHY_KARKA_REASONS } from '@/data/content';

export default function TrustSection() {
  const pillarIcons = [
    Zap, // Pay After Hired
    Sparkles, // AI First
    Layers, // Live Internships
    Users2, // On-Site Mentorship
    Building2, // Hiring Pipelines
    GraduationCap, // 4-Pillar System
  ];

  return (
    <section id="why-karka" className="py-20 lg:py-24 bg-transparent border-y border-fuchsia-500/20 relative">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#F000FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 border-b border-fuchsia-500/20">
          {COMPANY_DETAILS.stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-gradient-infini tracking-tight font-display">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider font-readex">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Heading matching Official Site */}
        <div className="text-center max-w-3xl mx-auto pt-16 mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(240,0,255,0.25)]">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Karka Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Why Karka?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-body">
            Six reasons ambitious learners in Nagercoil choose Karka over every other institute.
          </p>
        </div>

        {/* 6 Reasons Grid - Matching Official Website */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {WHY_KARKA_REASONS.map((reason, idx) => {
            const Icon = pillarIcons[idx] || Sparkles;
            return (
              <div
                key={reason.number}
                className="card-cosmic rounded-3xl p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Corner Watermark */}
                <div className="absolute top-4 right-4 text-3xl font-black font-display text-white/5 pointer-events-none select-none group-hover:text-cyan-400/10 transition-colors">
                  {reason.number}
                </div>

                <div className="space-y-4">
                  {/* Badge & Number Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-fuchsia-950/70 border border-fuchsia-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400/60 group-hover:bg-cyan-950/40 transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    {reason.badge && (
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 font-readex">
                        {reason.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                    {reason.number}. {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed font-body">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-fuchsia-500/20 flex items-center justify-between text-xs font-bold text-cyan-400">
                  <span className="font-readex">Karka Standard</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00FFFF]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy & Transparency Pledge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-fuchsia-500/20">
          
          {/* Left: Core Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight font-display">
              Honest Guidance Over Empty Promises.{' '}
              <span className="text-gradient-infini">Verifiable Code</span> Over Outdated Slides.
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
              The modern tech hiring landscape has changed dramatically. Generic certificates and algorithmic memorization no longer impress engineering leaders. Recruiters look for candidate depth: architecture understanding, automated testing, real database design, and clear problem articulation.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
              At Karka AI & Tech Academy, we strip away misleading marketing claims. We give every learner personalized diagnostic clarity, pair them with practicing engineers, and guide them to build verifiable software proof on GitHub.
            </p>

            {/* Transparency Checklist */}
            <div className="space-y-3 pt-2">
              {COMPANY_DETAILS.transparencyPledge.map((pledge, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed font-body">
                    {pledge}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-white transition-colors group font-readex"
              >
                <span>Read our full educational mission and mentorship standards</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Comparative Trust Matrix (6 cols) */}
          <div className="lg:col-span-6">
            <div className="card-cosmic rounded-3xl p-6 sm:p-8 space-y-6">
              
              <div className="border-b border-fuchsia-500/20 pb-4">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block font-readex">
                  Transparency Matrix
                </span>
                <h4 className="text-lg font-bold text-white mt-1 font-display">
                  How Karka Academy Compares
                </h4>
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-body">
                
                {/* Comparison Row 1 */}
                <div className="bg-[#13062c] p-4 rounded-xl border border-fuchsia-500/20 shadow-xs space-y-2">
                  <div className="font-bold text-white font-readex">Career Outcome Policy</div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="text-slate-400 border-r border-fuchsia-500/20 pr-2">
                      <span className="block font-semibold text-rose-400 mb-0.5">Typical Institutes</span>
                      Dubious &ldquo;100% placement guarantees&rdquo; with fine print and non-refundable upfront fees.
                    </div>
                    <div className="text-slate-200 pl-2">
                      <span className="block font-semibold text-cyan-300 mb-0.5">Karka Academy</span>
                      Pay After You Get Hired: ₹0 upfront tuition. You only pay after landing a tech job.
                    </div>
                  </div>
                </div>

                {/* Comparison Row 2 */}
                <div className="bg-[#13062c] p-4 rounded-xl border border-fuchsia-500/20 shadow-xs space-y-2">
                  <div className="font-bold text-white font-readex">Curriculum & Project Depth</div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="text-slate-400 border-r border-fuchsia-500/20 pr-2">
                      <span className="block font-semibold text-rose-400 mb-0.5">Typical Institutes</span>
                      Generic todo-apps and cookie-cutter tutorial copies with outdated decade-old slides.
                    </div>
                    <div className="text-slate-200 pl-2">
                      <span className="block font-semibold text-cyan-300 mb-0.5">Karka Academy</span>
                      AI-First curriculum: Generative AI, Prompt Engineering, Spike AI, and live client apps.
                    </div>
                  </div>
                </div>

                {/* Comparison Row 3 */}
                <div className="bg-[#13062c] p-4 rounded-xl border border-fuchsia-500/20 shadow-xs space-y-2">
                  <div className="font-bold text-white font-readex">Mentorship Model</div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="text-slate-400 border-r border-fuchsia-500/20 pr-2">
                      <span className="block font-semibold text-rose-400 mb-0.5">Typical Institutes</span>
                      Batch broadcasts with 200+ students and slow automated ticket queues.
                    </div>
                    <div className="text-slate-200 pl-2">
                      <span className="block font-semibold text-cyan-300 mb-0.5">Karka Academy</span>
                      Daily on-site physical labs at SRV Towers Nagercoil with 1:1 engineer mentorship.
                    </div>
                  </div>
                </div>

              </div>

              <div className="pt-2 text-center text-xs text-slate-400">
                Official Standards of{' '}
                <strong className="text-fuchsia-400 font-bold">Karka AI & Tech Academy</strong> · Nagercoil
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
