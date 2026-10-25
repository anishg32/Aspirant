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
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { STUDENT_STORIES } from '@/data/content';

export const metadata: Metadata = {
  title: 'Student Success Stories & Projects | Karka AI & Tech Academy',
  description:
    'Explore verified student transitions, capstone project architectures, and GitHub portfolios built through Karka AI & Tech Academy training in Nagercoil.',
};

export default function StoriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-purple-900 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Page Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5 text-purple-600" />
              <span>Verifiable Project Portfolios</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Real Student Transformations & Case Studies
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We showcase verifiable proof of competence. Explore how students from varied educational backgrounds engineered production-tier web apps, cloud CI/CD pipelines, and data systems at Karka AI Academy.
            </p>
          </div>
        </div>

        {/* Stories Detailed Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
          {STUDENT_STORIES.map((story, idx) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Student Context & Outcome (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                    {story.verifiedStatus}
                  </span>
                  <span className="text-xs text-slate-400">Trajectory 0{idx + 1}</span>
                </div>

                <div className="flex items-center gap-4">
                  {story.avatar ? (
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-purple-200 shadow-sm flex-shrink-0">
                      <Image
                        src={story.avatar}
                        alt={story.studentName}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-800 font-bold text-xl flex items-center justify-center flex-shrink-0">
                      {story.studentName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900">
                      {story.studentName}
                    </h2>
                    <p className="text-xs font-semibold text-purple-700 mt-0.5">
                      {story.initialBackground}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                  <span className="font-bold text-slate-800">Target Specialization:</span>
                  <p className="text-slate-600">{story.targetDomain}</p>
                  <p className="text-teal-700 font-medium pt-1">
                    Program: {story.programTaken}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/60 text-xs space-y-1">
                  <span className="font-bold text-blue-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Key Outcome:</span>
                  </span>
                  <p className="text-blue-800 leading-relaxed font-medium">
                    {story.keyOutcome}
                  </p>
                </div>

                <blockquote className="text-xs italic text-slate-600 border-l-2 border-teal-500 pl-3 leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>

              {/* Right Column: Built Capstones & Technical Proof (7 cols) */}
              <div className="lg:col-span-7 space-y-6 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-blue-600" />
                    <span>Capstone Repositories Built During Cohort</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">GitHub Verified</span>
                </div>

                <div className="space-y-4">
                  {story.keyProjects.map((p, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-sm text-slate-900">
                          {p.name}
                        </h3>
                        <Code2 className="w-4 h-4 text-slate-400" />
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/30 transition-all"
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
