'use client';

import React from 'react';
import Link from 'next/link';
import {
  Trophy,
  ArrowRight,
  ShieldCheck,
  FolderGit2,
  ExternalLink,
  Code2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { STUDENT_STORIES } from '@/data/content';

export default function StoriesSection() {
  return (
    <section id="success-stories" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-teal-600" />
            <span>Verifiable Learning Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Real Student Transitions & Built Capstones
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We judge success not by empty marketing slogans, but by the tangible software our students design, test, and deploy to their public GitHub portfolios.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STUDENT_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="space-y-6">
                
                {/* Header & Verification Pill */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-100/80 text-teal-800 border border-teal-200">
                      {story.verifiedStatus}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Case Study</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {story.studentName}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    <span className="block text-slate-700 font-semibold">{story.initialBackground}</span>
                    <span className="text-blue-600">Enrolled: {story.programTaken}</span>
                  </div>
                </div>

                {/* Challenge & Transition */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 text-xs space-y-1.5 shadow-xs">
                  <span className="font-bold text-slate-800 block">The Hurdle:</span>
                  <p className="text-slate-600 leading-relaxed">
                    {story.challengeSolved}
                  </p>
                </div>

                {/* Built Capstone Projects */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Deployed Capstones:</span>
                  </span>

                  {story.keyProjects.map((proj, pIdx) => (
                    <div key={pIdx} className="p-3 rounded-xl bg-white border border-slate-200/60 text-xs space-y-1">
                      <div className="font-bold text-slate-900 flex items-center justify-between">
                        <span>{proj.name}</span>
                        <Code2 className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {proj.desc}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {proj.tech.map((t, tIdx) => (
                          <span key={tIdx} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Outcome Statement */}
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/60 text-xs space-y-1">
                  <span className="font-bold text-blue-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Verifiable Outcome:</span>
                  </span>
                  <p className="text-blue-800 text-[11px] leading-relaxed">
                    {story.keyOutcome}
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="text-xs italic text-slate-600 border-l-2 border-teal-500 pl-3 leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                <Link
                  href="/stories"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Explore full transition breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Contest Disclaimer */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-teal-600 inline mr-1" />
          <span>
            Nexora Labs Competition Disclosure: These project case studies demonstrate the verified curriculum capstones built by learners undergoing You Aspirant training modules.
          </span>
        </div>

      </div>
    </section>
  );
}
