import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EnquiryForm from '@/components/forms/EnquiryForm';
import GuidanceAssistant from '@/components/assistant/GuidanceAssistant';
import {
  Compass,
  CheckCircle2,
  Clock,
  ArrowRight,
  UserCheck,
} from 'lucide-react';
import { GUIDANCE_TRACKS } from '@/data/content';

export const metadata: Metadata = {
  title: 'Career Guidance Services | Karka AI & Tech Academy - Nagercoil',
  description:
    'Explore personalized 1-on-1 career guidance, diagnostic stream mapping, code reviews, and mock interview preparation at Karka AI & Tech Academy.',
};

export default function GuidancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#4a044e] selection:text-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Page Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a044e]/10 border border-[#4a044e]/20 text-[#4a044e] text-xs font-bold uppercase tracking-wider font-readex">
              <Compass className="w-3.5 h-3.5 text-[#4a044e]" />
              <span>Independent &amp; Objective Mentorship</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight font-display">
              Personalized Career Guidance &amp; <span className="text-[#4a044e]">Mentorship</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-body">
              We cut through the noise of conflicting career advice. Receive honest diagnostics on your technical aptitude, personalized roadmap planning, and 1-on-1 coaching from senior software engineers.
            </p>
          </div>
        </div>

        {/* 4 Guidance Tracks Deep-Dive */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 space-y-12">
          {GUIDANCE_TRACKS.map((track, idx) => (
            <div
              key={track.id}
              id={track.id}
              className="bg-white rounded-3xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-slate-200/90 shadow-sm"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#4a044e]/10 text-[#4a044e] border border-[#4a044e]/20 font-readex">
                    Track 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium font-readex">
                    <Clock className="w-3.5 h-3.5 text-[#4a044e]" />
                    <span>Timeline: {track.timeline}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                  {track.title}
                </h2>
                <p className="text-sm font-bold text-[#4a044e] font-readex">
                  {track.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                  {track.description}
                </p>

                <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-100 text-xs text-slate-700 font-body">
                  <strong className="text-slate-900 font-readex">Ideal for: </strong>
                  {track.audience}
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block font-readex">
                    Deliverables &amp; Takeaways:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {track.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 font-body">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right CTA Box */}
              <div className="lg:col-span-4 bg-purple-50/70 rounded-2xl p-6 border border-purple-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4a044e] text-white flex items-center justify-center mx-auto shadow-md">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 font-display">Reserve Track Slot</h3>
                  <p className="text-xs text-slate-600 mt-1 font-body">
                    Conducted 1-on-1 at SRV Towers Nagercoil campus or live online.
                  </p>
                </div>
                <Link
                  href={`/contact?track=${track.id}`}
                  className="w-full btn-karka-primary inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  <span>Book This Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Form Anchor */}
        <div id="booking-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Request Your 1-on-1 Guidance Session
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-body">
              Fill in your academic profile below to schedule a discussion with our mentors.
            </p>
          </div>

          <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading booking form...</div>}>
            <EnquiryForm defaultInterest="career_guidance" />
          </Suspense>
        </div>

      </main>
      <Footer />
      <GuidanceAssistant />
    </div>
  );
}
