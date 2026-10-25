'use client';

import React from 'react';
import Link from 'next/link';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';

export default function CTASection() {
  return (
    <section className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#12002b] via-[#24003d] to-[#09001b] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_0_50px_rgba(240,0,255,0.35)] border-2 border-fuchsia-500/40">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F000FF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FFFF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(240,0,255,0.25)]">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Take the Next Step Today</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Build Your Engineering Career with{' '}
                <span className="text-gradient-infini">
                  Verifiable Skills?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connect with our senior guidance mentors for an objective, no-pressure assessment of your aptitude, coding roadmap, and hiring goals.
              </p>

              {/* Trust Points */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Free 30-min Diagnostic Consultation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>24-Hour Response Commitment</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Zero Spam Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Right Buttons (4 cols) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
              <Link
                href="/contact?type=guidance"
                className="btn-infini-primary inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-center"
                id="cta-bottom-guidance"
              >
                <span>Get Career Guidance</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/programs"
                className="btn-infini-cyan inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-center"
              >
                <span>Explore Training Programs</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
