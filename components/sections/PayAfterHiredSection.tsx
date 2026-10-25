'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  GraduationCap,
  Briefcase,
  Users,
  Award,
  FileCheck,
} from 'lucide-react';
import { PAY_AFTER_HIRED_MODEL } from '@/data/content';

export default function PayAfterHiredSection() {
  const stepIcons = [GraduationCap, Briefcase, Zap];

  return (
    <section id="pay-after-hired" className="py-20 lg:py-24 bg-transparent relative overflow-hidden border-t border-fuchsia-500/20">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#F000FF]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#00FFFF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching Official Site */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(240,0,255,0.25)]">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Zero Upfront Tuition · Pay After Placement</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            {PAY_AFTER_HIRED_MODEL.headline}
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-gradient-infini font-display">
            {PAY_AFTER_HIRED_MODEL.subheadline}
          </p>
          <p className="text-slate-300 text-base sm:text-lg font-body">
            {PAY_AFTER_HIRED_MODEL.description}
          </p>
        </div>

        {/* 3 Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {PAY_AFTER_HIRED_MODEL.steps.map((item, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            return (
              <div
                key={item.step}
                className="card-cosmic rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Step Number Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-fuchsia-950 to-[#1b0638] border border-fuchsia-500/40 text-cyan-400 flex items-center justify-center text-xl font-bold font-display shadow-xs group-hover:scale-105 group-hover:border-cyan-400/60 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 font-readex">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                    Step {item.step}
                  </div>
                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors font-display">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-fuchsia-500/20 flex items-center justify-between text-xs font-bold text-cyan-400">
                  <span className="font-readex">Guaranteed Career Alignment</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00FFFF]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* What's Included & Enrollment Card */}
        <div className="card-cosmic rounded-3xl p-8 sm:p-12 border-2 border-fuchsia-500/35 relative overflow-hidden shadow-[0_0_40px_rgba(240,0,255,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: What's Included */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-950/70 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>The Full Karka Package</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                What&apos;s Included in Pay After Placement
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {PAY_AFTER_HIRED_MODEL.included.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-200 font-readex">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Enrollment Action Box */}
            <div className="lg:col-span-5 bg-[#150730]/90 rounded-2xl p-6 border border-fuchsia-500/30 text-center space-y-4">
              <div className="space-y-1">
                <div className="text-3xl font-black text-gradient-infini font-display">
                  {PAY_AFTER_HIRED_MODEL.stats.enrollments}
                </div>
                <div className="text-xs text-slate-400 font-readex">
                  Based on 200+ ratings · ⭐ {PAY_AFTER_HIRED_MODEL.stats.rating} / 5.0
                </div>
              </div>

              <p className="text-xs text-slate-300 font-body">
                Pay ₹0 upfront. Begin your training with expert mentors in Nagercoil and settle tuition only after placement.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact?type=guidance"
                  className="w-full btn-infini-primary inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wide font-readex"
                >
                  <span>Enroll in Pay After Placement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
