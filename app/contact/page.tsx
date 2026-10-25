'use client';

import React, { useState, Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EnquiryForm from '@/components/forms/EnquiryForm';
import GuidanceAssistant from '@/components/assistant/GuidanceAssistant';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  Navigation,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_DETAILS, FAQS } from '@/data/content';
import { useToast } from '@/components/ui/Toast';

export default function ContactPage() {
  const { showToast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleCopyAddress = async () => {
    await navigator.clipboard.writeText(COMPANY_DETAILS.contact.address);
    setCopiedAddress(true);
    showToast('Official Academy address copied to clipboard!', 'success', 'Address Copied');
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#030014] text-white selection:bg-[#F000FF] selection:text-white cosmic-nebula-bg">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-fuchsia-950/70 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-cyan-300" />
              <span>Official Academy Headquarters · Nagercoil, Tamil Nadu</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Visit or Contact <span className="text-gradient-infini">Karka AI & Tech Academy</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Align your ambition with market demand. Connect with our admissions counselors, mentors, or visit our primary campus at Veppamoodu, Nagercoil.
            </p>
          </div>
        </div>

        {/* Highlight Banner: Exact Address & Quick Contact Actions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-gradient-to-r from-[#12002b] via-[#09001b] to-[#030014] text-white rounded-3xl p-6 sm:p-8 border border-fuchsia-500/35 shadow-[0_0_35px_rgba(240,0,255,0.2)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-xs font-bold text-cyan-300 uppercase tracking-wide">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Physical Campus & Inquiry Center</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  {COMPANY_DETAILS.contact.building}, {COMPANY_DETAILS.contact.street}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {COMPANY_DETAILS.contact.address}
                </p>
                <div className="flex items-center gap-2 text-xs text-fuchsia-300 font-medium pt-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Landmark: {COMPANY_DETAILS.contact.landmark}</span>
                  <span className="text-slate-500">•</span>
                  <span>{COMPANY_DETAILS.contact.city}, {COMPANY_DETAILS.contact.state} – {COMPANY_DETAILS.contact.postalCode}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#150734] hover:bg-fuchsia-950/80 border border-fuchsia-500/40 text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  {copiedAddress ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedAddress ? 'Address Copied!' : 'Copy Address'}</span>
                </button>

                <a
                  href={COMPANY_DETAILS.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-infini-cyan flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-cyan-300" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                  className="btn-infini-primary flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call {COMPANY_DETAILS.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid: Contact Channels (5 cols) & Enquiry Form (7 cols) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Contact Channels & Office Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="card-cosmic p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-white">
                    Official Contact Channels
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct access to our admissions, training counselors, and leadership desk.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Channel 1: Phone & WhatsApp */}
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#14062c] border border-fuchsia-500/25">
                    <div className="w-9 h-9 rounded-xl bg-fuchsia-950/70 border border-fuchsia-500/40 text-fuchsia-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-white block text-xs">
                        Admissions Hotline & WhatsApp
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <a
                          href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                          className="text-cyan-400 font-bold hover:underline text-sm"
                        >
                          {COMPANY_DETAILS.contact.phone}
                        </a>
                        <button
                          type="button"
                          onClick={async () => {
                            await navigator.clipboard.writeText(COMPANY_DETAILS.contact.phone);
                            showToast('Hotline phone number copied!', 'success', 'Copied');
                          }}
                          className="text-slate-400 hover:text-cyan-300 p-0.5 cursor-pointer"
                          title="Copy phone number"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <a
                          href={`https://wa.me/919487530243?text=Hi%20Karka%20Academy%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20admissions`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600 text-white font-semibold text-[11px] hover:bg-emerald-500 transition-colors shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Chat on WhatsApp</span>
                        </a>
                        <span className="text-[11px] text-slate-400">Direct response</span>
                      </div>
                    </div>
                  </div>

                  {/* Channel 2: Email */}
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#14062c] border border-fuchsia-500/25">
                    <div className="w-9 h-9 rounded-xl bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-white block text-xs">
                        Official Email Inquiries
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <a
                          href={`mailto:${COMPANY_DETAILS.contact.email}`}
                          className="text-cyan-400 font-semibold hover:underline text-xs"
                        >
                          {COMPANY_DETAILS.contact.email}
                        </a>
                        <button
                          type="button"
                          onClick={async () => {
                            await navigator.clipboard.writeText(COMPANY_DETAILS.contact.email);
                            showToast('Email address copied to clipboard!', 'success', 'Copied');
                          }}
                          className="text-slate-400 hover:text-cyan-300 p-0.5 cursor-pointer"
                          title="Copy email"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="block text-[11px] text-slate-400 mt-1">
                        Admissions desk: <a href={`mailto:${COMPANY_DETAILS.contact.counselingEmail}`} className="text-fuchsia-300 font-medium hover:underline">{COMPANY_DETAILS.contact.counselingEmail}</a>
                      </span>
                    </div>
                  </div>

                  {/* Channel 3: Exact Address */}
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#14062c] border border-fuchsia-500/25">
                    <div className="w-9 h-9 rounded-xl bg-fuchsia-950/70 border border-fuchsia-500/40 text-fuchsia-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white block text-xs">
                          Academy Headquarters Location
                        </span>
                        <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-400/40">
                          Nagercoil HQ
                        </span>
                      </div>
                      <p className="text-slate-200 text-xs leading-relaxed mt-1 font-medium">
                        {COMPANY_DETAILS.contact.building}, {COMPANY_DETAILS.contact.street}
                      </p>
                      <p className="text-slate-400 text-[11px] leading-relaxed mt-0.5">
                        {COMPANY_DETAILS.contact.city}, {COMPANY_DETAILS.contact.district}, {COMPANY_DETAILS.contact.state} – {COMPANY_DETAILS.contact.postalCode}, India
                      </p>
                      <p className="text-[11px] text-cyan-300 font-semibold mt-1">
                        Landmark: {COMPANY_DETAILS.contact.landmark}
                      </p>
                      <div className="mt-2.5 flex items-center gap-3">
                        <a
                          href={COMPANY_DETAILS.contact.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:underline"
                        >
                          <span>Open in Google Maps</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <span className="text-slate-600">•</span>
                        <button
                          type="button"
                          onClick={handleCopyAddress}
                          className="text-[11px] font-semibold text-slate-300 hover:text-white cursor-pointer"
                        >
                          Copy Address
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Channel 4: Hours */}
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#14062c] border border-fuchsia-500/25">
                    <div className="w-9 h-9 rounded-xl bg-purple-950/70 border border-purple-500/40 text-purple-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-white block text-xs">
                        Campus & Mentorship Hours
                      </span>
                      <p className="text-slate-200 text-xs font-semibold mt-0.5">
                        {COMPANY_DETAILS.contact.workingHours}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Sunday: Prior appointments & technical project labs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-fuchsia-500/20 text-xs text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Strict privacy pledge: No spam marketing. Consult directly with engineers.</span>
                </div>
              </div>

              {/* Interactive OpenStreetMap Embed */}
              <div className="card-cosmic p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="font-bold text-xs text-white">
                      Live Map View · Nagercoil Center
                    </span>
                  </div>
                  <a
                    href={COMPANY_DETAILS.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-cyan-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Full Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-fuchsia-500/30 bg-[#060112]">
                  <iframe
                    title="Karka AI & Tech Academy Location at SRV Towers Nagercoil"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d77.4311084!3d8.1801487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f15dde0aa367%3A0xd5eb331016b805d0!2sKarka%20AI%20%26%20Tech%20Academy!5e0!3m2!1sen!2sin!4v1700000000000"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-[#0c041c]/95 backdrop-blur-md px-3 py-2 rounded-xl text-[11px] shadow-sm flex items-center justify-between border border-fuchsia-500/30">
                    <span className="font-bold text-white truncate">
                      SRV Towers, Veppamoodu, Nagercoil
                    </span>
                    <a
                      href={COMPANY_DETAILS.contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-infini-primary px-2.5 py-1 text-white font-bold rounded-lg text-[10px] shrink-0 ml-2"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Official Platforms Callout: Spike AI & Infini */}
              <div className="card-cosmic p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                    Official Platforms
                  </span>
                  <span className="text-[10px] bg-fuchsia-950/70 border border-fuchsia-500/40 px-2 py-0.5 rounded text-fuchsia-300">
                    Ecosystem
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-[#14062c] border border-fuchsia-500/25 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Spike AI</h4>
                      <p className="text-[11px] text-slate-400">AI-guided hands-on learning platform</p>
                    </div>
                    <a
                      href={COMPANY_DETAILS.platforms.spikeAi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-amber-300 hover:text-amber-200 inline-flex items-center gap-1"
                    >
                      <span>Open Spike</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#14062c] border border-fuchsia-500/25 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Karka Infini AI</h4>
                      <p className="text-[11px] text-slate-400">Inter-college tech contest · ₹1,00,000 pool</p>
                    </div>
                    <a
                      href={COMPANY_DETAILS.platforms.infiniAi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1"
                    >
                      <span>Register</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Validated Smart Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 text-center text-sm text-slate-400">Loading form...</div>}>
                <EnquiryForm />
              </Suspense>
            </div>

          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/70 px-3 py-1 rounded-full border border-cyan-400/40">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Clear Answers to Common Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Transparent facts about our teaching, admissions, refund policy, and mentorship.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#0c041c]/90 rounded-2xl border border-fuchsia-500/25 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 hover:bg-fuchsia-950/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 cursor-pointer"
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 transition-transform duration-200 flex-shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-fuchsia-400' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-fuchsia-500/20 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
      <GuidanceAssistant />
    </div>
  );
}
