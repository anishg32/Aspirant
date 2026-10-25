'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
  CalendarCheck,
  Code,
  FolderGit2,
  Trophy,
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '@/data/content';

export default function HowItWorks() {
  const stepIcons = [Compass, CalendarCheck, Code, FolderGit2, Trophy];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-transparent text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#F000FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#00FFFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(240,0,255,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Structured & Transparent Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The 5-Step Learner Journey
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From your very first diagnostic consultation to deploying verifiable capstones and mock technical interviews, here is how we guide your growth.
          </p>
        </div>

        {/* Process Steps Timeline */}
        <div className="relative">
          
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-fuchsia-500/30 via-cyan-400 to-fuchsia-500/30 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || Sparkles;
              return (
                <div
                  key={idx}
                  className="card-cosmic rounded-2xl p-6 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-black text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-400/40">
                        {step.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-fuchsia-950/60 border border-fuchsia-500/30 text-cyan-300 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-950/40 transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-cyan-400 mt-1 font-semibold">
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Highlight pill at bottom */}
                  <div className="pt-4 mt-4 border-t border-fuchsia-500/20">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{step.highlight}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-16 text-center">
          <Link
            href="/contact?type=guidance"
            className="btn-infini-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm"
          >
            <span>Start Step 1: Book Your Diagnostic Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
