'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, ArrowRight, ShieldCheck } from 'lucide-react';

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
    <section id="hiring-partners" className="py-16 lg:py-24 bg-linear-to-b from-[#4a044e] via-[#630b69] to-[#892a92] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-72 bg-white/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching Official Site */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider font-readex">
            <Building2 className="w-3.5 h-3.5 text-amber-300" />
            <span>Proven Placement Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Where Our Karka Graduates Work
          </h2>
          <p className="text-purple-100 text-base sm:text-lg font-body">
            From classrooms in Nagercoil to careers across India, our students are making their mark at leading tech companies.
          </p>
        </div>

        {/* SCROLLING ANIMATION 1: Left-to-right infinite logo marquee */}
        <div className="relative w-full overflow-hidden mb-6 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-scroll flex items-center gap-5 py-2">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, pIdx) => (
              <div
                key={`scroll-1-${pIdx}`}
                className="w-56 shrink-0 p-5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/25 hover:border-white/40 transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="relative h-11 w-32 mb-2 bg-white/90 rounded-lg p-1.5 flex items-center justify-center shadow-xs">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.src}
                      alt={`${partner.name} hiring partner`}
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                  {partner.name}
                </div>
                <div className="text-[10px] text-purple-200 font-readex mt-0.5">
                  {partner.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SCROLLING ANIMATION 2: Reverse direction marquee */}
        <div className="relative w-full overflow-hidden mb-12 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-scroll-reverse flex items-center gap-5 py-2">
            {[...partnerLogos.slice().reverse(), ...partnerLogos.slice().reverse(), ...partnerLogos.slice().reverse()].map((partner, pIdx) => (
              <div
                key={`scroll-2-${pIdx}`}
                className="w-56 shrink-0 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-md hover:bg-white/20 hover:border-white/30 transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="relative h-11 w-32 mb-2 bg-white/90 rounded-lg p-1.5 flex items-center justify-center shadow-xs">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.src}
                      alt={`${partner.name} hiring partner`}
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors font-display">
                  {partner.name}
                </div>
                <div className="text-[10px] text-purple-200 font-readex mt-0.5">
                  {partner.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification banner */}
        <div className="rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs bg-white/15 backdrop-blur-md border border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center flex-shrink-0 font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-purple-100 font-body">
              All placements verified by company offer letters and active alumni LinkedIn profiles. Zero artificial claims.
            </span>
          </div>

          <Link
            href="/stories"
            className="text-amber-300 font-bold hover:text-white flex items-center gap-1.5 whitespace-nowrap font-readex"
          >
            <span>View Verified Graduate Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
