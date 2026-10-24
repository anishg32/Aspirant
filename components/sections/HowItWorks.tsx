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
    <section id="how-it-works" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Structured & Transparent Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The 5-Step Learner Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From your very first diagnostic consultation to deploying verifiable capstones and mock technical interviews, here is how we guide your growth.
          </p>
        </div>

        {/* Process Steps Timeline */}
        <div className="relative">
          
          {/* Vertical/Horizontal Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600/50 via-teal-500/50 to-blue-600/50 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || Sparkles;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-400/50 hover:bg-slate-800 transition-all duration-300 shadow-xl group"
                >
                  <div className="space-y-4">
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-black text-teal-400 bg-teal-950/70 px-2.5 py-1 rounded-md border border-teal-800/50">
                        {step.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-slate-700/80 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-base text-white group-hover:text-blue-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-teal-400 mt-1 font-medium">
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Highlight pill at bottom */}
                  <div className="pt-4 mt-4 border-t border-slate-700/60">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-sm text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <span>Start Step 1: Book Your Diagnostic Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
