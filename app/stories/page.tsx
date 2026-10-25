import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GuidanceAssistant from '@/components/assistant/GuidanceAssistant';
import {
  Trophy,
  CheckCircle2,
  FolderGit2,
  Code2,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { STUDENT_STORIES } from '@/data/content';

export const metadata: Metadata = {
  title: 'Student Success Stories & Projects | Karka AI & Tech Academy',
  description:
    'Explore verified student transitions, capstone project architectures, and GitHub portfolios built through Karka AI & Tech Academy training in Nagercoil.',
};

export default function StoriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#4a044e] selection:text-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Page Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a044e]/10 border border-[#4a044e]/20 text-[#4a044e] text-xs font-bold uppercase tracking-wider font-readex">
              <Trophy className="w-3.5 h-3.5 text-[#4a044e]" />
              <span>Verifiable Project Portfolios</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display">
              Real Student Transformations &amp; <span className="text-[#4a044e]">Case Studies</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-body">
              We showcase verifiable proof of competence. Explore how students from varied educational backgrounds engineered production-tier web apps, cloud CI/CD pipelines, and data systems at Karka AI Academy.
            </p>
          </div>
        </div>

        {/* Stories Detailed Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
          {STUDENT_STORIES.map((story, idx) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-slate-200/90 shadow-sm"
            >
              {/* Left Column: Student Context & Outcome (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#4a044e]/10 text-[#4a044e] border border-[#4a044e]/20 font-readex">
                    {story.verifiedStatus}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Trajectory 0{idx + 1}</span>
                </div>

                <div className="flex items-center gap-4">
                  {story.avatar ? (
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-purple-200 shadow-sm shrink-0">
                      <Image
                        src={story.avatar}
                        alt={story.studentName}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-[#4a044e] text-white font-extrabold text-xl flex items-center justify-center shrink-0 shadow-md">
                      {story.studentName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 font-display">
                      {story.studentName}
                    </h2>
                    <p className="text-xs font-semibold text-[#4a044e] mt-0.5 font-readex">
                      {story.initialBackground}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <span className="font-bold text-slate-900 font-readex">Target Specialization:</span>
                  <p className="text-slate-600 font-body">{story.targetDomain}</p>
                  <p className="text-[#4a044e] font-semibold pt-1 font-readex">
                    Program: {story.programTaken}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200/80 text-xs space-y-1">
                  <span className="font-bold text-[#4a044e] flex items-center gap-1.5 font-readex">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Key Outcome:</span>
                  </span>
                  <p className="text-slate-700 leading-relaxed font-body">
                    {story.keyOutcome}
                  </p>
                </div>

                <blockquote className="text-xs italic text-slate-600 border-l-2 border-[#4a044e] pl-3 leading-relaxed font-body">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>

              {/* Right Column: Built Capstones & Technical Proof (7 cols) */}
              <div className="lg:col-span-7 space-y-6 bg-purple-50/60 rounded-2xl p-6 sm:p-8 border border-purple-200/80">
                <div className="flex items-center justify-between border-b border-purple-200/80 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 font-readex">
                    <FolderGit2 className="w-4 h-4 text-[#4a044e]" />
                    <span>Capstone Repositories Built During Cohort</span>
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold">GitHub Verified</span>
                </div>

                <div className="space-y-4">
                  {story.keyProjects.map((p, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-sm text-slate-900 font-display">
                          {p.name}
                        </h3>
                        <Code2 className="w-4 h-4 text-[#4a044e]" />
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-body">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-purple-50 text-slate-800 text-[11px] font-medium border border-purple-200 font-readex"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-slate-500 flex items-center gap-2 font-body">
                  <ShieldCheck className="w-4 h-4 text-[#4a044e]" />
                  <span>Capstone projects feature automated unit tests and Dockerized deployment configurations.</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto text-center px-4">
          <Link
            href="/contact?type=guidance"
            className="btn-karka-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide font-readex cursor-pointer"
          >
            <span>Start Building Your Technical Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </main>
      <Footer />
      <GuidanceAssistant />
    </div>
  );
}
