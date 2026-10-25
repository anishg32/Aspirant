'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle,
  Users2,
  ArrowRight,
  Sparkles,
  Zap,
  Building2,
  GraduationCap,
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
    <section id="why-karka" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-14 border-b border-slate-100">
          {COMPANY_DETAILS.stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#4a044e] tracking-tight font-display">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider font-readex">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Heading matching Official Site */}
        <div className="text-center max-w-2xl mx-auto pt-14 mb-14 space-y-3 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a044e]/10 border border-[#4a044e]/20 text-[#4a044e] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4a044e]" />
            <span>The Karka Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-display">
            Why <span className="text-[#4a044e]">Karka?</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-body">
            Six reasons ambitious learners in Nagercoil choose Karka over every other institute.
          </p>
        </div>

        {/* 6 Reasons Grid - Matching Official Website */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 max-w-6xl mx-auto scroll-reveal delay-100">
          {WHY_KARKA_REASONS.map((reason, idx) => {
            const Icon = pillarIcons[idx] || Sparkles;
            return (
              <div
                key={reason.number}
                className="group p-7 rounded-3xl border border-slate-200/80 bg-slate-50 hover:bg-white hover:border-[#4a044e]/30 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Number Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-[#4a044e]/10 text-[#4a044e] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#4a044e] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {reason.badge && (
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#4a044e]/10 text-[#4a044e] font-readex border border-[#4a044e]/20">
                        {reason.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-[#4a044e] transition-colors font-display">
                    {reason.number}. {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed font-normal font-body">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table / Transparency Feature Banner */}
        <div className="bg-gradient-to-br from-purple-50 via-slate-50 to-white rounded-3xl p-8 sm:p-12 border border-purple-200/60 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4a044e] flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4a044e]" />
                Radical Transparency Pledge
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight font-display">
                How Karka Differs From Outdated Institutes
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-body">
                We believe in verifiable outcomes and working engineer accountability, not hollow sales promises.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#4a044e] hover:text-[#5e0563] group"
                >
                  <span>Book an on-site lab walkthrough at SRV Towers</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4 text-xs sm:text-sm font-body">
                
                {/* Comparison Row 1 */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <div className="font-bold text-slate-900 font-readex">Career Outcome Policy</div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="text-slate-500 border-r border-slate-200 pr-2">
                      <span className="block font-semibold text-rose-600 mb-0.5">Typical Institutes</span>
                      Dubious &ldquo;100% placement guarantees&rdquo; with fine print and non-refundable upfront fees.
                    </div>
                    <div className="text-slate-700 pl-2">
                      <span className="block font-semibold text-[#4a044e] mb-0.5">Karka Academy</span>
                      Pay After You Get Hired: ₹0 upfront tuition. You only pay after landing a tech job.
                    </div>
                  </div>
                </div>

                {/* Comparison Row 2 */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <div className="font-bold text-slate-900 font-readex">Curriculum &amp; Project Depth</div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="text-slate-500 border-r border-slate-200 pr-2">
                      <span className="block font-semibold text-rose-600 mb-0.5">Typical Institutes</span>
                      Generic todo-apps and cookie-cutter tutorial copies with outdated decade-old slides.
                    </div>
                    <div className="text-slate-700 pl-2">
                      <span className="block font-semibold text-[#4a044e] mb-0.5">Karka Academy</span>
                      Production architecture with live sandboxes, pull request code reviews, and GenAI workflows.
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
