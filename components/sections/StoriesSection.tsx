'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Trophy,
  ArrowRight,
  FolderGit2,
  CheckCircle2,
} from 'lucide-react';
import { STUDENT_STORIES } from '@/data/content';

export default function StoriesSection() {
  return (
    <section id="success-stories" className="py-16 lg:py-24 bg-[#F8FAFC] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a044e]/10 border border-[#4a044e]/20 text-[#4a044e] text-xs font-bold uppercase tracking-wider font-readex">
            <Trophy className="w-3.5 h-3.5 text-[#4a044e]" />
            <span>Verifiable Learning Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
            Real Student Transitions &amp; <span className="text-[#4a044e]">Built Capstones</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-body">
            We judge success not by empty marketing slogans, but by the tangible software our students design, test, and deploy to their public GitHub portfolios.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STUDENT_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between group border border-slate-200/80 shadow-sm hover:border-[#4a044e]/30 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300"
            >
              <div className="space-y-6">
                
                {/* Header & Verification Pill */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#4a044e]/10 text-[#4a044e] border border-[#4a044e]/20 font-readex">
                      {story.verifiedStatus}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Case Study</span>
                  </div>

                  <div className="flex items-center gap-3.5">
                    {story.avatar ? (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-200 shadow-sm flex-shrink-0">
                        <Image
                          src={story.avatar}
                          alt={story.studentName}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-[#4a044e]/10 text-[#4a044e] font-bold flex items-center justify-center flex-shrink-0 border border-[#4a044e]/20">
                        {story.studentName.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#4a044e] transition-colors font-display">
                        {story.studentName}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">{story.initialBackground}</p>
                    </div>
                  </div>

                  <div className="text-xs text-[#4a044e] font-semibold bg-purple-50 px-3 py-1.5 rounded-xl border border-purple-100">
                    Enrolled: {story.programTaken}
                  </div>
                </div>

                {/* Challenge & Transition */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                  <span className="font-bold text-slate-900 block font-readex">The Hurdle:</span>
                  <p className="text-slate-600 leading-relaxed font-body">
                    {story.challengeSolved}
                  </p>
                </div>

                {/* Built Capstone Projects */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 font-readex">
                    <FolderGit2 className="w-3.5 h-3.5 text-[#4a044e]" />
                    <span>Deployed Capstones:</span>
                  </span>

                  {story.keyProjects.map((proj, pIdx) => (
                    <div key={pIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                      <div className="font-bold text-slate-900">{proj.name}</div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">{proj.desc}</p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {proj.tech.map((techItem, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Outcome Statement */}
                <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-200/70 text-xs space-y-1">
                  <span className="font-bold text-[#4a044e] flex items-center gap-1.5 font-readex">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4a044e]" />
                    <span>Verified Outcome:</span>
                  </span>
                  <p className="text-slate-700 leading-relaxed font-body">
                    {story.keyOutcome}
                  </p>
                </div>

              </div>

              {/* Card Footer Link */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/stories"
                  className="text-xs font-bold text-[#4a044e] hover:text-[#5e0563] inline-flex items-center gap-1 font-readex"
                >
                  <span>Read Complete Portfolio Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
