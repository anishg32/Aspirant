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
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-[#3d0340] to-slate-950 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-purple-900/50">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 border border-purple-800 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Take the Next Step Today</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Ready to Build Your Engineering Career with{' '}
                <span className="bg-gradient-to-r from-amber-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  Verifiable Skills?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connect with our senior guidance mentors for an objective, no-pressure assessment of your aptitude, coding roadmap, and hiring goals.
              </p>

              {/* Trust Points */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Free 30-min Diagnostic Consultation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>24-Hour Response Commitment</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Zero Spam Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Right Buttons (4 cols) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
              <Link
                href="/contact?type=guidance"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-95 font-black text-sm text-slate-950 shadow-xl shadow-amber-500/20 hover:scale-105 transition-all text-center"
                id="cta-bottom-guidance"
              >
                <span>Get Career Guidance</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 font-semibold text-sm text-white hover:border-white/40 transition-all text-center"
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
