'use client';

import React from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  Code2,
  Bot,
  UserCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { FOUR_PILLARS } from '@/data/content';

export default function FourPillarsSection() {
  const pillarIcons = [MessageSquare, Code2, Bot, UserCheck];

  return (
    <section id="pillars" className="py-20 lg:py-24 bg-transparent relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#F000FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#00FFFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching Official Site */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(240,0,255,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Holistic Career Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            4 Pillars of a Job-Ready Tech Career
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-body">
            We don&apos;t just teach code; we build careers. Our holistic curriculum is designed to transform you into a complete professional.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {FOUR_PILLARS.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || Sparkles;
            return (
              <div
                key={pillar.pillar}
                className="card-cosmic rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Pillar Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-fuchsia-950/70 border border-fuchsia-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400/60 group-hover:bg-cyan-950/40 transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-mono font-black text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-400/40 font-readex">
                    {pillar.pillar}
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                    {pillar.title}
                  </h3>

                  <div className="text-xs font-bold text-fuchsia-400 font-readex tracking-wide">
                    {pillar.subtitle}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body">
                    {pillar.description}
                  </p>

                  {/* Skills tags */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {pillar.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#13062c] text-slate-300 border border-fuchsia-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-fuchsia-500/20 flex items-center justify-between text-xs font-bold text-cyan-400">
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
