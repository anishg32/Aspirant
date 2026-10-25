'use client';

import React from 'react';
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
} from 'lucide-react';
import { GUIDANCE_TRACKS } from '@/data/content';

export default function CareerGuidanceSection() {
  const iconMap: Record<string, React.ElementType> = {
    Compass: Compass,
    Code: Code2,
    FileText: FileText,
    UserCheck: UserCheck,
  };

  return (
    <section id="guidance-services" className="py-20 lg:py-28 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(240,0,255,0.25)]">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Personalized Advising</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Personalized Career Guidance Tracks
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you are choosing your first academic stream or preparing for rigorous tech hiring rounds, our guidance mentors provide objective, tailored direction without sales bias.
          </p>
        </div>

        {/* 4 Guidance Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GUIDANCE_TRACKS.map((track) => {
            const Icon = iconMap[track.icon] || Compass;
            return (
              <div
                key={track.id}
                id={track.id}
                className="card-cosmic rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-fuchsia-950/60 border border-fuchsia-500/30 text-cyan-400 flex items-center justify-center group-hover:border-cyan-400/60 group-hover:bg-cyan-950/40 transition-colors duration-200 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 bg-fuchsia-950/50 border border-fuchsia-500/30 px-3 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{track.timeline}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-xs font-medium text-fuchsia-400 mt-1">
                      {track.tagline}
                    </p>
                  </div>

                  {/* Target Audience Badge */}
                  <div className="p-2.5 rounded-xl bg-[#13052c] border border-fuchsia-500/20 text-xs text-slate-300">
                    <strong className="text-cyan-300 font-semibold block mb-0.5">
                      Intended Audience:
                    </strong>
                    {track.audience}
                  </div>

                  {/* Explanation */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {track.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2 border-t border-fuchsia-500/20">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      What is Included:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {track.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-6 border-t border-fuchsia-500/20 flex items-center justify-between gap-4">
                  <Link
                    href={`/contact?type=guidance&track=${track.id}`}
                    className="btn-infini-primary inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold"
                  >
                    <span>Book Diagnostic Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/guidance"
                    className="text-xs font-bold text-cyan-400 hover:text-white transition-colors"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 card-cosmic rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-base text-white">
              Not sure which career guidance track fits your current stage?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak with a guidance advisor or use our 60-second interactive career matcher.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/#career-quiz"
              className="w-full sm:w-auto btn-infini-cyan inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Take Career Quiz</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
