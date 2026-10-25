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
    <div className="min-h-screen flex flex-col bg-[#030014] text-white selection:bg-[#F000FF] selection:text-white cosmic-nebula-bg">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Page Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-fuchsia-950/70 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              <span>Verifiable Project Portfolios</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Real Student Transformations & <span className="text-gradient-infini">Case Studies</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We showcase verifiable proof of competence. Explore how students from varied educational backgrounds engineered production-tier web apps, cloud CI/CD pipelines, and data systems at Karka AI Academy.
            </p>
          </div>
        </div>

        {/* Stories Detailed Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
          {STUDENT_STORIES.map((story, idx) => (
            <div
              key={story.id}
              className="card-cosmic p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Student Context & Outcome (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-400/40">
                    {story.verifiedStatus}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Trajectory 0{idx + 1}</span>
                </div>

                <div className="flex items-center gap-4">
                  {story.avatar ? (
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-fuchsia-500/40 shadow-sm flex-shrink-0">
                      <Image
                        src={story.avatar}
                        alt={story.studentName}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F000FF] to-[#00FFFF] text-black font-extrabold text-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(240,0,255,0.4)]">
                      {story.studentName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl font-extrabold text-white">
                      {story.studentName}
                    </h2>
                    <p className="text-xs font-semibold text-cyan-400 mt-0.5">
                      {story.initialBackground}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#14062c] border border-fuchsia-500/25 text-xs space-y-1">
                  <span className="font-bold text-white">Target Specialization:</span>
                  <p className="text-slate-300">{story.targetDomain}</p>
                  <p className="text-cyan-300 font-medium pt-1">
                    Program: {story.programTaken}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-fuchsia-950/40 border border-fuchsia-500/35 text-xs space-y-1">
                  <span className="font-bold text-fuchsia-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Key Outcome:</span>
                  </span>
                  <p className="text-slate-200 leading-relaxed font-medium">
                    {story.keyOutcome}
                  </p>
                </div>

                <blockquote className="text-xs italic text-slate-300 border-l-2 border-cyan-400 pl-3 leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>

              {/* Right Column: Built Capstones & Technical Proof (7 cols) */}
              <div className="lg:col-span-7 space-y-6 bg-[#0a0218] rounded-2xl p-6 sm:p-8 border border-fuchsia-500/30">
                <div className="flex items-center justify-between border-b border-fuchsia-500/20 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-cyan-400" />
                    <span>Capstone Repositories Built During Cohort</span>
                  </span>
                  <span className="text-[11px] font-mono text-cyan-300">GitHub Verified</span>
                </div>

                <div className="space-y-4">
                  {story.keyProjects.map((p, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-[#14062c] p-5 rounded-xl border border-fuchsia-500/25 shadow-xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-sm text-white">
                          {p.name}
                        </h3>
                        <Code2 className="w-4 h-4 text-cyan-400" />
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-[#1c083c] text-cyan-300 text-[11px] font-medium border border-fuchsia-500/30"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
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
            className="btn-infini-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm cursor-pointer"
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
