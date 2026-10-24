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
} from 'lucide-react';
import { COMPANY_DETAILS, FAQS } from '@/data/content';
import { useToast } from '@/components/ui/Toast';

export default function ContactPage() {
  const { showToast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>Direct Mentorship Desk</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Get in Touch with Our Guidance Team
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Have questions about program curricula, diagnostic consultations, or admissions? Reach out directly via phone, email, or our validated enquiry portal.
            </p>
          </div>
        </div>

        {/* Main Grid: Contact Channels (5 cols) & Enquiry Form (7 cols) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Contact Channels & Office Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    Official Contact Channels
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct access to our admissions and guidance coordinators.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Channel 1: Email */}
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-slate-900 block text-xs">
                        Admissions & General Enquiries
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <a
                          href={`mailto:${COMPANY_DETAILS.contact.email}`}
                          className="text-blue-600 font-medium hover:underline text-xs"
                        >
                          {COMPANY_DETAILS.contact.email}
                        </a>
                        <button
                          type="button"
                          onClick={async () => {
                            await navigator.clipboard.writeText(COMPANY_DETAILS.contact.email);
                            showToast('Email address copied to clipboard!', 'success', 'Copied');
                          }}
                          className="text-slate-400 hover:text-blue-600 p-0.5"
                          title="Copy email"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="block text-[11px] text-slate-400 mt-0.5">
                        Counseling desk: {COMPANY_DETAILS.contact.counselingEmail}
                      </span>
                    </div>
                  </div>

                  {/* Channel 2: Phone */}
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-slate-900 block text-xs">
                        Counseling Hotline
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <a
                          href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                          className="text-slate-800 font-semibold hover:text-blue-600 text-xs"
                        >
                          {COMPANY_DETAILS.contact.phone}
                        </a>
                        <button
                          type="button"
                          onClick={async () => {
                            await navigator.clipboard.writeText(COMPANY_DETAILS.contact.phone);
                            showToast('Hotline phone number copied!', 'success', 'Copied');
                          }}
                          className="text-slate-400 hover:text-blue-600 p-0.5"
                          title="Copy phone number"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="block text-[11px] text-slate-500">
                        Mobile / WhatsApp: {COMPANY_DETAILS.contact.mobile}
                      </span>
                    </div>
                  </div>

                  {/* Channel 3: Address */}
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block text-xs">
                        Office Location
                      </span>
                      <p className="text-slate-600 text-xs leading-relaxed mt-0.5">
                        {COMPANY_DETAILS.contact.address}
                      </p>
                    </div>
                  </div>

                  {/* Channel 4: Hours */}
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block text-xs">
                        Office & Mentorship Hours
                      </span>
                      <p className="text-slate-600 text-xs mt-0.5">
                        {COMPANY_DETAILS.contact.workingHours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>No spam or marketing calls. All enquiries handled by mentors.</span>
                </div>
              </div>

              {/* Consultation Booking Process Info */}
              <div className="bg-blue-900 text-white rounded-3xl p-6 sm:p-8 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300">
                  Appointment Scheduling
                </span>
                <h3 className="text-lg font-bold">1-on-1 Consultation Process</h3>
                <p className="text-xs text-blue-200 leading-relaxed">
                  1. Fill out the form on the right.<br />
                  2. Choose your preferred guidance track or program.<br />
                  3. Our advisor will confirm your Google Meet or in-person time slot within 24 hours.
                </p>
              </div>

            </div>

            {/* Right: Validated Smart Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 text-center text-sm text-slate-500">Loading form...</div>}>
                <EnquiryForm />
              </Suspense>
            </div>

          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Clear Answers to Common Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Transparent facts about our teaching, admissions, refund policy, and mentorship.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
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
