'use client';

import React, { useState } from 'react';
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Quote,
} from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';
import { useToast } from '@/components/ui/Toast';

export default function GetInTouchSection() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'Full Stack Development',
    audience: 'College Student',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const programs = [
    'Full Stack Development',
    'Data Science & AI',
    'UI/UX Design',
    'Generative AI Foundations',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast('Please provide your name and phone number.', 'error');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email || 'admissions@karka.academy',
          enquiryType: 'Career Guidance',
          selectedProgram: formData.program,
          message: `Career call booking for ${formData.program}. Audience: ${formData.audience}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        showToast('Your free career call has been requested! Our mentors will call you shortly.', 'success');
      } else {
        setSubmitted(true);
        showToast('Request received! We will connect with you within 24 hours.', 'success');
      }
    } catch {
      setSubmitted(true);
      showToast('Request received! We will connect with you within 24 hours.', 'success');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="get-in-touch" className="py-20 lg:py-24 bg-transparent relative border-t border-fuchsia-500/20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#F000FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching Official Site */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(240,0,255,0.25)] font-readex">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect with Mentors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Get in touch with us
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-body">
            Whether you&apos;re a student ready to begin or a parent seeking clarity, reach out to us. We&apos;d love to talk.
          </p>
        </div>

        {/* 2-Column Booking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Let's Talk About Your Future & Contact details */}
          <div className="lg:col-span-6 card-cosmic rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-readex">
                Personalized Career Counseling
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                Let&apos;s Talk About Your Future.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-body">
                Schedule a free career call with our mentors. Fastest way to get answers to your doubts about tech tracks, Pay After Placement, and industry expectations.
              </p>

              {/* Motivation Quote from Official Site */}
              <div className="p-4 rounded-2xl bg-fuchsia-950/40 border border-fuchsia-500/30 flex items-start gap-3 mt-4">
                <Quote className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-xs sm:text-sm italic text-slate-200 font-body">
                    &ldquo;Future belongs to those who never stop learning.&rdquo;
                  </p>
                  <span className="text-[11px] font-bold text-fuchsia-300 font-readex block">
                    — Karka Motivation
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-4 pt-4 border-t border-fuchsia-500/20 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white font-readex">Nagercoil Headquarters:</div>
                  <div className="text-slate-300 font-body">{COMPANY_DETAILS.contact.address}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-white font-readex">Direct Mentor Hotline:</div>
                  <a
                    href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                    className="text-cyan-300 font-bold hover:underline font-readex"
                  >
                    {COMPANY_DETAILS.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="font-bold text-white font-readex">Admissions &amp; Counselling Email:</div>
                  <a
                    href={`mailto:${COMPANY_DETAILS.contact.email}`}
                    className="text-slate-300 hover:text-cyan-300 font-body"
                  >
                    {COMPANY_DETAILS.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Career Call Form */}
          <div className="lg:col-span-6 card-cosmic rounded-3xl p-8 sm:p-10 flex flex-col justify-center border-2 border-fuchsia-500/30">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-white font-display">
                  Career Call Scheduled!
                </h4>
                <p className="text-slate-300 text-sm font-body max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our senior tech mentor will call you at <strong className="text-cyan-300">{formData.phone}</strong> to answer all your queries.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-infini-cyan px-5 py-2.5 rounded-xl text-xs font-bold font-readex mt-2"
                >
                  Schedule Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-white font-display">
                    Schedule Your Free Career Call
                  </h4>
                  <p className="text-xs text-slate-300 font-body">
                    Fill in your details below and choose your preferred learning track.
                  </p>
                </div>

                {/* Preferred Program Selection matching Official Site */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block font-readex">
                    Preferred Program:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {programs.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setFormData({ ...formData, program: p })}
                        className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all font-readex cursor-pointer ${
                          formData.program === p
                            ? 'bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-bold border border-cyan-400/50 shadow-xs'
                            : 'bg-[#12052b] text-slate-300 border border-fuchsia-500/25 hover:border-cyan-400/30'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="touch-name" className="text-xs font-bold text-slate-300 font-readex">
                    Your Full Name *
                  </label>
                  <input
                    id="touch-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 bg-[#12052b] border border-fuchsia-500/30 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-body"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label htmlFor="touch-phone" className="text-xs font-bold text-slate-300 font-readex">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="touch-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 9487530243"
                    className="w-full px-4 py-3 bg-[#12052b] border border-fuchsia-500/30 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-body"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label htmlFor="touch-email" className="text-xs font-bold text-slate-300 font-readex">
                    Email Address (Optional)
                  </label>
                  <input
                    id="touch-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@example.com"
                    className="w-full px-4 py-3 bg-[#12052b] border border-fuchsia-500/30 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-body"
                  />
                </div>

                {/* Submit CTA matching official website */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-infini-primary py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer font-readex"
                  >
                    <span>{loading ? 'Submitting...' : 'Book My Free Career Call'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
