'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle,
  FileCode2,
  Users2,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';

export default function TrustSection() {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 border-b border-slate-100">
          {COMPANY_DETAILS.stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 items-center">
          
          {/* Left: Philosophy & Core Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4a044e]" />
              <span>The Karka Academy Philosophy</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Honest Guidance Over Empty Promises.{' '}
              <span className="text-[#4a044e]">Verifiable Code</span> Over Outdated Slides.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The modern tech hiring landscape has changed dramatically. Generic certificates and algorithmic memorization no longer impress engineering leaders. Recruiters look for candidate depth: architecture understanding, automated testing, real database design, and clear problem articulation.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Karka AI & Tech Academy, we strip away misleading marketing claims. We give every learner personalized diagnostic clarity, pair them with practicing engineers, and guide them to build verifiable software proof on GitHub.
            </p>

            {/* Transparency Checklist */}
            <div className="space-y-3 pt-2">
              {COMPANY_DETAILS.transparencyPledge.map((pledge, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {pledge}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group"
              >
                <span>Read our full educational mission and mentorship standards</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Comparative Trust Matrix (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Transparency Matrix
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  How Karka Academy Compares
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Comparison Row 1 */}
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="font-bold text-slate-900">Career Outcome Policy</div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="text-slate-500 border-r border-slate-100 pr-2">
                      <span className="block font-semibold text-rose-500 mb-0.5">Typical Institutes</span>
                      Dubious "100% placement guarantees" with fine print and non-refundable fees.
                    </div>
                    <div className="text-slate-700 pl-2">
                      <span className="block font-semibold text-purple-700 mb-0.5">Karka Academy</span>
                      Realistic skill development, portfolio building, and active interview coaching.
                    </div>
                  </div>
                </div>

                {/* Comparison Row 2 */}
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="font-bold text-slate-900">Curriculum & Project Depth</div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="text-slate-500 border-r border-slate-100 pr-2">
                      <span className="block font-semibold text-rose-500 mb-0.5">Typical Institutes</span>
                      Generic todo-apps and cookie-cutter tutorial copies with no real database indexing.
                    </div>
                    <div className="text-slate-700 pl-2">
                      <span className="block font-semibold text-purple-700 mb-0.5">Karka Academy</span>
                      Multi-tenant SaaS architectures, Docker containerization, and AWS CI/CD pipelines.
                    </div>
                  </div>
                </div>

                {/* Comparison Row 3 */}
                <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="font-bold text-slate-900">Mentorship Model</div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="text-slate-500 border-r border-slate-100 pr-2">
                      <span className="block font-semibold text-rose-500 mb-0.5">Typical Institutes</span>
                      Batch broadcasts with 200+ students and automated ticket queues.
                    </div>
                    <div className="text-slate-700 pl-2">
                      <span className="block font-semibold text-purple-700 mb-0.5">Karka Academy</span>
                      Dedicated 1-on-1 diagnostic sessions, code audits, and simulated interview rounds.
                    </div>
                  </div>
                </div>

              </div>

              <div className="pt-2 text-center text-xs text-slate-500">
                Designed with academic rigor by{' '}
                <strong className="text-slate-800">NEXORA LABS</strong>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
