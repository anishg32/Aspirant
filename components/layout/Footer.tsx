'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Heart,
} from 'lucide-react';
import { COMPANY_DETAILS, TRAINING_PROGRAMS, GUIDANCE_TRACKS } from '@/data/content';

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
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Mission (2 spans on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4a044e] to-fuchsia-600 flex items-center justify-center text-white shadow-md shadow-purple-900/30">
                <Compass className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-purple-400 transition-colors">
                  KARKA<span className="text-purple-400">.AI</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-300">
                  AI & Tech Academy · Nagercoil
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {COMPANY_DETAILS.mission}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Ethical Education & Verifiable Skills Pledge</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-4 max-w-sm">
              <label htmlFor="newsletter-input" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Subscribe to Career Insights & Cohort Alerts
              </label>
              {subscribed ? (
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-purple-950/80 border border-purple-800 text-xs text-purple-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Subscribed! We respect your inbox with zero spam.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-1.5">
                  <div className="flex rounded-lg overflow-hidden border border-slate-700 focus-within:border-purple-500 transition-colors">
                    <input
                      id="newsletter-input"
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-3.5 py-2 bg-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#4a044e] hover:bg-purple-900 text-white font-medium text-xs transition-colors flex items-center justify-center"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  {errorMsg && <p className="text-xs text-rose-400">{errorMsg}</p>}
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Guidance Tracks */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Career Guidance
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {GUIDANCE_TRACKS.map((track) => (
                <li key={track.id}>
                  <Link
                    href={`/guidance#${track.id}`}
                    className="hover:text-blue-400 transition-colors block py-0.5"
                  >
                    {track.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#career-quiz"
                  className="inline-flex items-center gap-1.5 text-amber-300 font-medium hover:text-amber-200 pt-1"
                >
                  <span>60-Sec Career Matcher</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Training Programs */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Training Programs
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {TRAINING_PROGRAMS.map((prog) => (
                <li key={prog.id}>
                  <Link
                    href={`/programs#${prog.id}`}
                    className="hover:text-blue-400 transition-colors block py-0.5"
                  >
                    {prog.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-1 text-blue-400 font-medium hover:text-blue-300 pt-1"
                >
                  <span>Explore Full Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact & Office */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Official Contact
            </h3>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  {COMPANY_DETAILS.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_DETAILS.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_DETAILS.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span>{COMPANY_DETAILS.contact.workingHours}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Ethical Non-Guarantee Statement */}
        <div className="py-6 border-b border-slate-800/80 text-xs text-slate-400 leading-relaxed max-w-4xl">
          <p>
            <strong className="text-slate-300 font-semibold">Ethical Academic Disclosure: </strong>
            Karka AI & Tech Academy provides career diagnostics, skill acceleration bootcamps, and 1-on-1 industry mentorship. We explicitly reject false marketing promises or guaranteed employment claims. Career advancement and hiring outcomes depend on market availability, personal dedication, and employer interview evaluations.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Nexora Labs Team Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 {COMPANY_DETAILS.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact#faq" className="hover:text-slate-200 transition-colors">
              FAQ
            </Link>
          </div>

          <div className="inline-flex items-center gap-1.5 text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-full border border-slate-700/50">
            <span>Redesigned by</span>
            <span className="font-bold text-white tracking-wide">
              {COMPANY_DETAILS.redesignTeam}
            </span>
            <span className="text-[10px] text-amber-300 font-semibold px-1 py-0.5 rounded bg-purple-950/80">
              {COMPANY_DETAILS.redesignTagline}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
