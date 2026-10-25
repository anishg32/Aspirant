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
} from 'lucide-react';
import { PAY_AFTER_HIRED_MODEL } from '@/data/content';

export default function PayAfterHiredSection() {
  const stepIcons = [GraduationCap, Briefcase, Zap];

  return (
    <section id="pay-after-hired" className="py-16 lg:py-24 bg-[#4a044e] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-fuchsia-400/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-purple-900/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching Official Site */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider font-readex">
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            <span>Zero Upfront Tuition · Pay After Placement</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            {PAY_AFTER_HIRED_MODEL.headline}
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-amber-300 font-display">
            {PAY_AFTER_HIRED_MODEL.subheadline}
          </p>
          <p className="text-purple-100 text-base sm:text-lg font-body">
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
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden shadow-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                {/* Step Number Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 text-amber-300 flex items-center justify-center text-xl font-bold font-display shadow-md group-hover:scale-105 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-readex">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  <div className="text-xs font-mono font-bold text-purple-200 uppercase tracking-widest">
                    Step {item.step}
                  </div>
                  <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors font-display">
                    {item.title}
                  </h3>
                  <p className="text-purple-100 text-sm leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-300">
                  <span className="font-readex">Guaranteed Career Alignment</span>
                  <span className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_#FBBF24]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* What's Included & Enrollment Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: What's Included */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>The Full Karka Package</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                What&apos;s Included in Pay After Placement
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-body">
                {PAY_AFTER_HIRED_MODEL.included.map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 text-purple-100">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Guarantee & CTA */}
            <div className="lg:col-span-5 bg-white/10 border border-white/20 p-6 sm:p-8 rounded-2xl space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
                Zero Financial Risk
              </span>
              <h4 className="text-xl font-bold text-white font-display">
                You do not pay a single rupee until your offer letter is in hand.
              </h4>
              <p className="text-xs text-purple-200 leading-relaxed font-body">
                All candidates sign a transparent, student-friendly agreement outlining the minimum qualifying salary threshold and flexible payment schedule.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact?type=guidance"
                  className="w-full btn-karka-white inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wide"
                >
                  <span>Apply for Pay After Placement</span>
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
