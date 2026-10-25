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
    <section id="how-it-works" className="py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a044e]/10 border border-[#4a044e]/20 text-[#4a044e] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#7c3aed]" />
            <span>Structured & Transparent Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            The 5-Step Learner Journey
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From your very first diagnostic consultation to deploying verifiable capstones and mock technical interviews, here is how we guide your growth.
          </p>
        </div>

        {/* Process Steps Timeline */}
        <div className="relative">
          
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-200 via-[#4a044e]/30 to-purple-200 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || Sparkles;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-3xl p-6 flex flex-col justify-between group border border-slate-200/80 hover:bg-white hover:border-[#4a044e]/30 hover:shadow-xl hover:shadow-purple-900/5 transition-all"
                >
                  <div className="space-y-4">
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-black text-[#4a044e] bg-purple-100 px-2.5 py-1 rounded-md border border-purple-200">
                        {step.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 text-[#4a044e] flex items-center justify-center group-hover:bg-[#4a044e] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-base text-slate-900 group-hover:text-[#4a044e] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#7c3aed] mt-1 font-semibold">
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Highlight pill at bottom */}
                  <div className="pt-4 mt-4 border-t border-slate-200/60">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
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
            className="btn-karka-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-purple-900/20"
          >
            <span>Start Step 1: Book Your Diagnostic Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
