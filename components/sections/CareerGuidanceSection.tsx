'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  Code2,
  FileText,
  UserCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Bot,
  Layers,
  Palette,
  Film,
  TrendingUp,
  Cpu,
  Briefcase,
  GraduationCap,
} from 'lucide-react';
import { GUIDANCE_TRACKS, CAREER_TRACKS, AUDIENCE_NAV_ITEMS } from '@/data/content';

export default function CareerGuidanceSection() {
  const [activeAudience, setActiveAudience] = useState<string>('all');

  const trackIcons: Record<string, React.ElementType> = {
    fullstack: Code2,
    genai: Bot,
    'data-ml': Cpu,
    design: Palette,
    'digital-media': Film,
    'content-marketing': TrendingUp,
    'other-tech': Layers,
    'non-tech': Briefcase,
  };

  return (
    <section id="career-tracks" className="py-20 lg:py-24 bg-transparent relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#F000FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#00FFFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Official Site */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(240,0,255,0.25)]">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Internships &amp; Career Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Choose Your Career Track
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-body">
            Specialized internships and training pathways designed to launch your career.
          </p>
        </div>

        {/* 8 Official Career Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {CAREER_TRACKS.map((track) => {
            const Icon = trackIcons[track.id] || Code2;
            return (
              <div
                key={track.id}
                className="card-cosmic rounded-3xl p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-fuchsia-950/70 border border-fuchsia-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400/60 group-hover:bg-cyan-950/40 transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    {track.badge && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 font-readex">
                        {track.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                    {track.title}
                  </h3>
                  <p className="text-xs font-medium text-fuchsia-400 mt-1 mb-4 font-readex">
                    {track.tagline}
                  </p>

                  {/* Courses List */}
                  <div className="space-y-1.5 pt-2 border-t border-fuchsia-500/20">
                    {track.courses.map((course, cIdx) => (
                      <div
                        key={cIdx}
                        className="text-xs text-slate-300 flex items-center gap-2 py-0.5 font-body"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-fuchsia-500/20">
                  <Link
                    href={`/programs?track=${track.id}`}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-cyan-400 hover:text-white transition-colors group/btn font-readex"
                  >
                    <span>Enroll for {track.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Target Audience Pathways matching Official Website */}
        <div id="audiences" className="pt-10 border-t border-fuchsia-500/20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-readex">
              Tailored by Academic &amp; Career Stage
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
              Targeted Pathways for Every Aspirant
            </h3>
            <p className="text-slate-300 text-sm font-body">
              Whether you are in school, college, graduating, or a working professional, Karka has a specific success roadmap for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCE_NAV_ITEMS.map((aud) => (
              <div
                key={aud.id}
                className="bg-[#12052b]/80 border border-fuchsia-500/25 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-400/50 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-300 font-readex">
                      {aud.subtitle}
                    </span>
                    <GraduationCap className="w-4 h-4 text-fuchsia-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">
                    {aud.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-body">
                    {aud.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-fuchsia-500/20">
                  <Link
                    href={aud.href}
                    className="text-xs font-bold text-cyan-400 hover:text-white flex items-center gap-1 font-readex"
                  >
                    <span>Explore Pathway</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
