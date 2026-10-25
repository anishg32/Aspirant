'use client';

import React from 'react';
import Link from 'next/link';
import {
  Compass,
  Code2,
  ArrowRight,
  Bot,
  Layers,
  Palette,
  Film,
  TrendingUp,
  Cpu,
  Briefcase,
  GraduationCap,
} from 'lucide-react';
import { CAREER_TRACKS, AUDIENCE_NAV_ITEMS } from '@/data/content';

export default function CareerGuidanceSection() {
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
    <section id="career-tracks" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Official Site */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a044e]/10 border border-[#4a044e]/20 text-[#4a044e] text-xs font-bold uppercase tracking-wider font-readex">
            <Compass className="w-3.5 h-3.5 text-[#4a044e]" />
            <span>Internships &amp; Career Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            Choose Your <span className="text-[#4a044e]">Career Track</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-body">
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
                className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 flex flex-col justify-between group hover:bg-white hover:border-[#4a044e]/30 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#4a044e]/10 text-[#4a044e] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#4a044e] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    {track.badge && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#4a044e]/10 text-[#4a044e] border border-[#4a044e]/20 font-readex">
                        {track.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#4a044e] transition-colors font-display">
                    {track.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#4a044e] mt-1 mb-4 font-readex">
                    {track.tagline}
                  </p>

                  {/* Courses List */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-200">
                    {track.courses.map((course, cIdx) => (
                      <div
                        key={cIdx}
                        className="text-xs text-slate-600 flex items-center gap-2 py-0.5 font-body"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4a044e] flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href={`/contact?track=${track.id}`}
                    className="text-xs font-bold text-[#4a044e] hover:text-[#5e0563] inline-flex items-center gap-1 group/btn font-readex"
                  >
                    <span>Explore Track</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Audience Pathways Section (School, College, Graduates, Professionals) */}
        <div className="bg-purple-50/70 rounded-3xl p-8 sm:p-12 border border-purple-200/70">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4a044e] font-readex">
              Tailored For You
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Programs For Every Career Stage
            </h3>
            <p className="text-sm text-slate-600 font-body">
              Whether you are in school, college, graduating, or switching careers, we have a structured path for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCE_NAV_ITEMS.map((aud) => (
              <div
                key={aud.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#4a044e]/30 transition-all"
              >
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#4a044e]/10 text-[#4a044e] flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-display">
                    {aud.name}
                  </h4>
                  <div className="text-[11px] font-bold text-[#4a044e] font-readex">
                    {aud.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-body">
                    {aud.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={aud.href}
                    className="text-xs font-bold text-[#4a044e] hover:text-[#5e0563] inline-flex items-center gap-1 font-readex"
                  >
                    <span>View Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
