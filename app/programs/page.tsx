import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProgramsSection from '@/components/sections/ProgramsSection';
import GuidanceAssistant from '@/components/assistant/GuidanceAssistant';
import {
  Laptop,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Training Programs | Karka AI & Tech Academy - Nagercoil',
  description:
    'Explore verified, project-first training programs in Full-Stack Web Development, Cloud & DevOps, Data Science & AI, and Cyber Security at Karka AI & Tech Academy.',
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030014] text-white selection:bg-[#F000FF] selection:text-white cosmic-nebula-bg">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Page Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-fuchsia-950/70 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider">
              <Laptop className="w-3.5 h-3.5 text-cyan-300" />
              <span>Project-Centric Cohorts</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Production-Grade{' '}
              <span className="text-gradient-infini">Training Programs</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Curricula designed to build real capability. You write production code, submit pull requests, get code reviews from practicing engineers, and deploy verifiable applications to GitHub.
            </p>
          </div>
        </div>

        {/* Programs Interactive Section */}
        <ProgramsSection />

        {/* Transparency Feature Callout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
          <div className="card-cosmic p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-fuchsia-950/80 border border-fuchsia-500/40 text-cyan-300 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-bold text-base text-white">Code Reviews by Engineers</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every homework and capstone repository undergoes line-by-line review for architectural patterns, security, and cleanliness.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-bold text-base text-white">Live Sandboxes & Cloud Labs</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Work directly with Docker, PostgreSQL databases, AWS services, and Linux terminals rather than simulation slides.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-400/40 text-amber-300 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-bold text-base text-white">7-Day Unconditional Refund</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Experience the live lectures for one full week. If the teaching format is not the right fit, receive a 100% refund.
              </p>
            </div>
          </div>
        </div>

      </main>
      <Footer />
      <GuidanceAssistant />
    </div>
  );
}
