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
  ShieldCheck,
  UserCheck,
  FileCode2,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { GUIDANCE_TRACKS } from '@/data/content';

export const metadata: Metadata = {
  title: 'Career Guidance Services | Karka AI & Tech Academy - Nagercoil',
  description:
    'Explore personalized 1-on-1 career guidance, diagnostic stream mapping, code reviews, and mock interview preparation at Karka AI & Tech Academy.',
};

export default function GuidancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030014] text-white selection:bg-[#F000FF] selection:text-white cosmic-nebula-bg">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Page Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-fuchsia-950/70 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-cyan-300" />
              <span>Independent & Objective Mentorship</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Personalized Career Guidance & <span className="text-gradient-infini">Mentorship</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
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
              className="card-cosmic p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-400/40">
                    Track 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Timeline: {track.timeline}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {track.title}
                </h2>
                <p className="text-sm font-semibold text-cyan-400">
                  {track.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {track.description}
                </p>

                <div className="p-3.5 rounded-xl bg-[#14062c] border border-fuchsia-500/25 text-xs text-slate-300">
                  <strong className="text-white">Ideal for: </strong>
                  {track.audience}
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Deliverables & Takeaways:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {track.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right CTA Box */}
              <div className="lg:col-span-4 bg-[#0a0218] rounded-2xl p-6 border border-fuchsia-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F000FF] to-[#00FFFF] text-black flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(240,0,255,0.4)]">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">
                    Ready for this Guidance Track?
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Book a diagnostic call with our counselor.
                  </p>
                </div>

                <Link
                  href={`/contact?type=guidance&track=${track.id}`}
                  className="btn-infini-primary w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white font-bold text-xs cursor-pointer"
                >
                  <span>Request Track Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Booking & Enquiry Section */}
        <div id="book-guidance" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <Suspense fallback={<div className="p-8 text-center text-sm text-slate-400">Loading booking form...</div>}>
            <EnquiryForm defaultInterest="career_guidance" />
          </Suspense>
        </div>

      </main>
      <Footer />
      <GuidanceAssistant />
    </div>
  );
}
