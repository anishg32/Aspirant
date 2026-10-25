'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';

export default function HiringPartnersSection() {
  const partnerLogos = [
    { name: 'Amazon', src: '/images/partners/amazon.webp', role: 'SDE & Cloud Engineer' },
    { name: 'TCS', src: '/images/partners/tcs.webp', role: 'System Engineer & Developer' },
    { name: 'HCL', src: '/images/partners/hcl.webp', role: 'Software Engineer' },
    { name: 'Matrimony.com', src: '/images/partners/matrimony.webp', role: 'Full Stack & Frontend' },
    { name: 'Novac Technology', src: '/images/partners/novac.webp', role: 'Product Engineer' },
    { name: 'Capecom', src: '/images/partners/capecom.webp', role: 'Web & UI/UX Developer' },
    { name: 'Flow', src: '/images/partners/flow.webp', role: 'AI & Data Specialist' },
    { name: 'Sodisys', src: '/images/partners/sodisys.webp', role: 'Associate Software Engineer' },
  ];

  return (
    <section id="hiring-partners" className="py-20 lg:py-24 bg-transparent relative border-t border-fuchsia-500/20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-gradient-to-r from-fuchsia-600/10 via-cyan-500/10 to-purple-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching Official Site */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(240,0,255,0.25)] font-readex">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proven Placement Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Where Our Karka Graduates Work
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-body">
            From classrooms in Nagercoil to careers across India, our students are making their mark at leading tech companies.
          </p>
        </div>

        {/* 8 Partner Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="card-cosmic rounded-2xl p-6 flex flex-col items-center justify-center text-center group relative overflow-hidden"
            >
              {/* Logo container */}
              <div className="relative h-12 w-28 sm:w-32 mb-3 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-105">
                <Image
                  src={partner.src}
                  alt={`${partner.name} hiring partner`}
                  fill
                  sizes="(max-width: 640px) 112px, 128px"
                  className="object-contain"
                />
              </div>

              <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                {partner.name}
              </div>
              <div className="text-[11px] text-slate-400 font-readex mt-0.5">
                {partner.role}
              </div>
            </div>
          ))}
        </div>

        {/* Verification banner */}
        <div className="card-cosmic rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-slate-300 font-body">
              All placements verified by company offer letters and active alumni LinkedIn profiles. Zero artificial claims.
            </span>
          </div>

          <Link
            href="/stories"
            className="text-cyan-400 font-bold hover:text-white flex items-center gap-1.5 whitespace-nowrap font-readex"
          >
            <span>View Verified Graduate Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
