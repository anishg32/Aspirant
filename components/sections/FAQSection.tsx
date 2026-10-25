'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { FAQS } from '@/data/content';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Official Site */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a044e]/10 border border-[#4a044e]/20 text-[#4a044e] text-xs font-bold uppercase tracking-wider font-readex">
            <HelpCircle className="w-3.5 h-3.5 text-[#4a044e]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            Frequently Asked <span className="text-[#4a044e]">Questions</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-body">
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
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#4a044e]/40 bg-purple-50/50 shadow-sm'
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-50/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4a044e] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#4a044e] text-white'
                        : 'bg-[#4a044e]/10 text-[#4a044e]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed font-body border-t border-purple-100/80 mt-1 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for doubts */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-purple-50 border border-purple-200/80">
          <p className="text-sm text-slate-700 mb-3 font-body">
            Have a specific doubt about your career transition or the Nagercoil physical labs?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#4a044e] hover:text-[#5e0563] font-readex"
          >
            <span>Ask a mentor directly or book a free phone consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
