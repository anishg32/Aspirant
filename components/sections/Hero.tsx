'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Play,
  Zap,
} from 'lucide-react';

export default function Hero() {
  const partnerLogos = [
    { name: 'Amazon', src: '/images/partners/amazon.webp' },
    { name: 'TCS', src: '/images/partners/tcs.webp' },
    { name: 'HCL', src: '/images/partners/hcl.webp' },
    { name: 'Matrimony', src: '/images/partners/matrimony.webp' },
    { name: 'Novac', src: '/images/partners/novac.webp' },
    { name: 'Capecom', src: '/images/partners/capecom.webp' },
    { name: 'Flow', src: '/images/partners/flow.webp' },
    { name: 'Sodisys', src: '/images/partners/sodisys.webp' },
  ];

  return (
    <section className="relative pt-36 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-linear-to-b from-[#4a044e]/5 via-purple-50/30 to-white">
      {/* Subtle ambient gradients */}
      <div className="absolute top-10 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#4a044e]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 -z-10 h-[400px] w-[400px] rounded-full bg-purple-200/40 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4a044e]/10 border border-[#4a044e]/20 text-[#4a044e] text-xs font-bold font-readex">
              <Sparkles className="w-3.5 h-3.5 text-[#4a044e] fill-[#4a044e]" />
              <span>The one and only exclusive AI Learning Center in Nagercoil</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] font-display">
              <span className="text-gradient-plum block">
                AI-Driven
              </span>
              <span className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl block mt-1">
                Software Developer
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
              Master Full Stack Web Engineering, Data Science, and GenAI at Karka AI &amp; Tech Academy. Build real production capstones with working senior engineer mentorship and Pay After Placement at SRV Towers, Nagercoil.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm text-white btn-karka-primary text-center uppercase tracking-wide font-readex"
                id="hero-primary-cta"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#academy-tour"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm btn-karka-secondary text-center group font-readex"
                id="hero-video-cta"
              >
                <span className="w-6 h-6 rounded-full bg-[#4a044e] text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </span>
                <span>Watch Campus Tour Video</span>
              </a>
            </div>

            {/* Micro Trust Bullets */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-600 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4a044e]" />
                <span>Pay After Placement</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4a044e]" />
                <span>1-on-1 Code Reviews</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4a044e]" />
                <span>SRV Towers, Nagercoil Campus</span>
              </div>
            </div>
          </div>

          {/* Right Column: Official 3D Bot Mascot & Campus Preview (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Decorative Glow */}
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-purple-200/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-fuchsia-200/50 rounded-full blur-3xl pointer-events-none" />
            
            {/* Mascot Container Card with Floating Badges */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl bg-white p-4">
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner bg-slate-50">
                <Image
                  src="/images/karka-official-bot.webp"
                  alt="Karka AI Official Robot Mascot"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating Glassy Badge: Top Left */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-md text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>AI Powered Learning</span>
              </div>

              {/* Floating Glassy Badge: Bottom Right */}
              <div className="absolute bottom-6 right-6 bg-[#4a044e] backdrop-blur-md px-4 py-2 rounded-xl shadow-lg text-[11px] font-black text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Pay After Placement</span>
              </div>

              {/* Play Video Pill Overlay: Bottom Left */}
              <a
                href="#academy-tour"
                className="absolute bottom-6 left-6 bg-white/95 hover:bg-slate-50 text-slate-800 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-md text-[11px] font-bold flex items-center gap-1.5 transition-transform hover:scale-105"
              >
                <Play className="w-3.5 h-3.5 fill-[#4a044e] text-[#4a044e]" />
                <span>Tour Video</span>
              </a>
            </div>

          </div>

        </div>

        {/* Official Hiring Partners Logo Marquee (SCROLLING ANIMATION) */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#4a044e]" />
              <span>Where Our Learners are Making an Impact</span>
            </span>
          </div>

          {/* Continuous Infinite Scrolling Marquee Track */}
          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-scroll flex items-center gap-6 py-2">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, pIdx) => (
                <div
                  key={pIdx}
                  className="h-14 w-36 px-4 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-[#4a044e]/40 hover:shadow-md transition-all flex items-center justify-center shrink-0 group cursor-pointer"
                  title={`Hiring Partner: ${partner.name}`}
                >
                  <div className="relative w-full h-8">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      fill
                      sizes="120px"
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-75 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
