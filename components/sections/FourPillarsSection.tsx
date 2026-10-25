'use client';

import React from 'react';
import {
  MessageSquare,
  Code2,
  Bot,
  UserCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { FOUR_PILLARS } from '@/data/content';

export default function FourPillarsSection() {
  const pillarIcons = [MessageSquare, Code2, Bot, UserCheck];

  return (
    <section id="four-pillars" className="py-16 lg:py-24 bg-purple-50 relative overflow-hidden">
      <span id="pillars" className="sr-only">Four Pillars</span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching Official Site */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a044e]/10 border border-[#4a044e]/20 text-[#4a044e] text-xs font-bold uppercase tracking-wider font-readex">
            <Sparkles className="w-3.5 h-3.5 text-[#4a044e]" />
            <span>Holistic Career Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            4 Pillars of a <span className="text-[#4a044e]">Job-Ready Tech Career</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-body">
            We don&apos;t just teach code; we build careers. Our holistic curriculum is designed to transform you into a complete professional.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 scroll-reveal delay-100">
          {FOUR_PILLARS.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || Sparkles;
            return (
              <div
                key={pillar.pillar}
                className="bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden border border-purple-100/90 shadow-sm hover:border-[#4a044e]/30 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300"
              >
                {/* Top Pillar Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#4a044e]/10 text-[#4a044e] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#4a044e] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-mono font-black text-[#4a044e] bg-purple-50 px-3 py-1 rounded-full border border-purple-200 font-readex">
                    {pillar.pillar}
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#4a044e] transition-colors font-display">
                    {pillar.title}
                  </h3>

                  <div className="text-xs font-bold text-[#4a044e] font-readex tracking-wide">
                    {pillar.subtitle}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-body">
                    {pillar.description}
                  </p>

                  {/* Skills tags */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-purple-50 text-slate-700 border border-purple-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#4a044e]">
                  <span className="font-readex">Core Competency</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
