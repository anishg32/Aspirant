'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-linear-to-r from-[#4a044e] via-[#5e0563] to-[#2a0a2e] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left scroll-reveal">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider font-readex">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Take the Next Step Today</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-display">
                Ready to{' '}
                <span className="text-amber-300">
                  Future-Proof Your Career?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-purple-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
                Connect with our senior guidance mentors at Ground Floor, SRV Towers, Nagercoil for an objective assessment of your aptitude, Pay After Placement options, and hiring goals.
              </p>

              {/* Trust Points */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-purple-200 pt-2 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300" />
                  <span>Free 30-min Diagnostic Consultation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300" />
                  <span>24-Hour Response Commitment</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300" />
                  <span>Zero Upfront Tuition Available</span>
                </div>
              </div>
            </div>

            {/* Right Buttons (4 cols) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
              <Link
                href="/contact?type=guidance"
                className="btn-karka-white inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-center uppercase tracking-wide font-readex"
                id="cta-bottom-guidance"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 hover:bg-white/10 text-white font-bold text-sm text-center transition-colors font-readex"
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
