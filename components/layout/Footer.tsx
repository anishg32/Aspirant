'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY_DETAILS, TRAINING_PROGRAMS } from '@/data/content';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setSubscribed(true);
  };

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-16 pb-12 mt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-9 w-36 flex-shrink-0">
                <Image
                  src="/images/karka-official-logo.webp"
                  alt="Karka AI Academy"
                  fill
                  sizes="144px"
                  className="object-contain object-left group-hover:scale-105 transition-transform"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-600 max-w-sm leading-relaxed font-body">
              {COMPANY_DETAILS.mission}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#4a044e]" />
                <span>Ethical Education &amp; Verifiable Skills Pledge</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-4 max-w-sm">
              <label htmlFor="newsletter-input" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 font-readex">
                Subscribe to Career Insights &amp; Cohort Alerts
              </label>
              {subscribed ? (
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Subscribed! We respect your inbox with zero spam.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-1.5">
                  <div className="flex rounded-xl overflow-hidden border border-slate-300 focus-within:border-[#4a044e] transition-colors bg-white shadow-xs">
                    <input
                      id="newsletter-input"
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="btn-karka-primary px-4 py-2 font-bold text-xs transition-colors flex items-center justify-center cursor-pointer shrink-0"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  {errorMsg && <p className="text-xs text-rose-500 font-medium">{errorMsg}</p>}
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Official Programs */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-readex">
              Our Programs
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 font-body">
              {TRAINING_PROGRAMS.slice(0, 6).map((prog) => (
                <li key={prog.id}>
                  <Link
                    href={`/programs#${prog.slug}`}
                    className="hover:text-[#4a044e] transition-colors block py-0.5"
                  >
                    {prog.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-1 text-[#4a044e] font-bold hover:text-[#5e0563] pt-1 font-readex text-xs"
                >
                  <span>View All Bootcamps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Browse by Learner Track */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-readex">
              Learner Tracks
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 font-body">
              <li>
                <Link href="/guidance?audience=school" className="hover:text-[#4a044e] transition-colors block py-0.5">
                  School Students (8th - 12th)
                </Link>
              </li>
              <li>
                <Link href="/guidance?audience=college" className="hover:text-[#4a044e] transition-colors block py-0.5">
                  College Students (B.E/BCA/B.Sc)
                </Link>
              </li>
              <li>
                <Link href="/guidance?audience=graduates" className="hover:text-[#4a044e] transition-colors block py-0.5">
                  Graduates (Pay After Hired)
                </Link>
              </li>
              <li>
                <Link href="/guidance?audience=professionals" className="hover:text-[#4a044e] transition-colors block py-0.5">
                  Working Professionals
                </Link>
              </li>
              <li>
                <Link href="/#platforms" className="hover:text-[#4a044e] transition-colors block py-0.5 text-[#4a044e] font-semibold">
                  ⚡ Karka Infini AI &amp; Spike AI
                </Link>
              </li>
              <li>
                <Link
                  href="/#career-quiz"
                  className="inline-flex items-center gap-1.5 text-[#4a044e] font-bold hover:text-[#5e0563] pt-1 font-readex text-xs"
                >
                  <span>60-Sec Career Matcher</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact & Office */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-readex">
              Nagercoil Headquarters
            </h3>
            <div className="space-y-2.5 text-xs text-slate-600 font-body">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#4a044e] mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  {COMPANY_DETAILS.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4a044e] shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.contact.email}`}
                  className="hover:text-[#4a044e] transition-colors"
                >
                  {COMPANY_DETAILS.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#4a044e] shrink-0" />
                <a
                  href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#4a044e] transition-colors font-bold text-slate-900 font-readex"
                >
                  {COMPANY_DETAILS.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{COMPANY_DETAILS.contact.workingHours}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <Link
                href="/contact"
                className="btn-karka-secondary inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer font-readex"
              >
                <span>Book Free Career Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Ethical Non-Guarantee Statement */}
        <div className="py-6 border-b border-slate-200 text-xs text-slate-500 leading-relaxed max-w-4xl">
          <p>
            <strong className="text-slate-700 font-semibold">Ethical Academic Disclosure: </strong>
            Karka AI &amp; Tech Academy provides career diagnostics, skill acceleration bootcamps, and 1-on-1 industry mentorship. We explicitly reject false marketing promises or guaranteed employment claims. Career advancement and hiring outcomes depend on market availability, personal dedication, and employer interview evaluations.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Nexora Labs Team Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {COMPANY_DETAILS.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#4a044e] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#4a044e] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact#faq" className="hover:text-[#4a044e] transition-colors">
              FAQ
            </Link>
          </div>

          <div className="inline-flex items-center gap-1.5 text-slate-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <span>Redesigned by</span>
            <span className="font-bold text-slate-900 tracking-wide">
              {COMPANY_DETAILS.redesignTeam}
            </span>
            <span className="text-[10px] text-[#4a044e] font-bold px-1.5 py-0.5 rounded bg-purple-50 border border-purple-200">
              {COMPANY_DETAILS.redesignTagline}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
