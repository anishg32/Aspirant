'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { FAQS } from '@/data/content';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-transparent relative border-t border-fuchsia-500/20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#F000FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#00FFFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Official Site */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(240,0,255,0.25)] font-readex">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-body">
            Still have questions? We&apos;ve answered the most common ones below.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.slice(0, 6).map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`card-cosmic rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-cyan-400/50 shadow-[0_0_20px_rgba(0,255,255,0.1)]' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-fuchsia-950/80 border border-fuchsia-500/30 text-cyan-400 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-cyan-950/60 border-cyan-400/50 text-cyan-300' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-slate-300 leading-relaxed font-body border-t border-fuchsia-500/15 mt-1 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for doubts */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#12052b]/80 border border-fuchsia-500/25">
          <p className="text-sm text-slate-300 mb-3 font-body">
            Have a specific doubt about your career transition or the Nagercoil physical labs?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-white font-readex"
          >
            <span>Ask a mentor directly or book a free phone consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
