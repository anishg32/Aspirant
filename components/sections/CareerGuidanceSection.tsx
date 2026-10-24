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
    <section id="guidance-services" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>Personalized Advising</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Personalized Career Guidance Tracks
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{track.timeline}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-xs font-medium text-teal-700 mt-1">
                      {track.tagline}
                    </p>
                  </div>

                  {/* Target Audience Badge */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                    <strong className="text-slate-800 font-semibold block mb-0.5">
                      Intended Audience:
                    </strong>
                    {track.audience}
                  </div>

                  {/* Explanation */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {track.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      What is Included:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {track.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                  <Link
                    href={`/contact?type=guidance&track=${track.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs hover:bg-blue-600 hover:text-white transition-all shadow-xs"
                  >
                    <span>Book Diagnostic Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/guidance"
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-base text-slate-900">
              Not sure which career guidance track fits your current stage?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              Speak with a guidance advisor or use our 60-second interactive career matcher.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/#career-quiz"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              <span>Take Career Quiz</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
