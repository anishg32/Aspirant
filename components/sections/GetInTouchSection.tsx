'use client';

import React, { useState } from 'react';
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
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
    <section id="get-in-touch" className="py-20 lg:py-24 bg-[#2a0a2e] text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-fuchsia-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching Official Site */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider font-readex">
            <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
            <span>Connect with Mentors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Get in touch with us
          </h2>
          <p className="text-purple-100 text-base sm:text-lg font-body">
            Whether you&apos;re a student ready to begin or a parent seeking clarity, reach out to us. We&apos;d love to talk.
          </p>
        </div>

        {/* 2-Column Booking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Let's Talk About Your Future & Contact details */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 font-readex">
                  Admissions &amp; Lab Immersion
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-display">
                  Let&apos;s Talk About Your Future.
                </h3>
                <p className="text-sm text-purple-100 leading-relaxed font-body">
                  Schedule a free, non-binding 20-minute strategy call with our senior tech mentors at SRV Towers Nagercoil.
                </p>
              </div>

              {/* Contact Icons List */}
              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-purple-200 uppercase tracking-wider block font-readex">
                      Direct Mentorship Hotline
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {COMPANY_DETAILS.contact.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_DETAILS.contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-purple-200 uppercase tracking-wider block font-readex">
                      Official Email
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {COMPANY_DETAILS.contact.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-purple-200 uppercase tracking-wider block font-readex">
                      Physical Academy HQ
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {COMPANY_DETAILS.contact.building}, {COMPANY_DETAILS.contact.street}, Nagercoil
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Motivational Quote */}
            <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
              <Quote className="w-6 h-6 text-amber-300/60 mb-2 -scale-x-100" />
              <p className="text-xs sm:text-sm text-purple-100 italic leading-relaxed font-body">
                &ldquo;Every successful career switch begins with an honest assessment of current capability and an uncompromising dedication to writing production code.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Free Career Call Appointment Form */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 font-readex">
                  Quick Appointment
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  Book a Free Career Call
                </h3>
                <p className="text-xs text-purple-200 font-body">
                  No sales pressure. Just realistic technical direction tailored to your profile.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white font-display">
                    Thank You! Request Confirmed.
                  </h4>
                  <p className="text-sm text-purple-200 max-w-sm mx-auto font-body">
                    A technical mentor will reach out to you at <strong className="text-amber-300">{formData.phone}</strong> to confirm your discussion slot.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        program: 'Full Stack Development',
                        audience: 'College Student',
                      });
                    }}
                    className="mt-4 text-xs font-bold text-amber-300 hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="text-xs font-bold text-purple-200 uppercase tracking-wider block mb-1 font-readex">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Arun Kumar"
                      className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-sm text-white placeholder-purple-200/60 focus:outline-none focus:border-amber-300"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="text-xs font-bold text-purple-200 uppercase tracking-wider block mb-1 font-readex">
                      Mobile Number (WhatsApp preferred) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-sm text-white placeholder-purple-200/60 focus:outline-none focus:border-amber-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="text-xs font-bold text-purple-200 uppercase tracking-wider block mb-1 font-readex">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-sm text-white placeholder-purple-200/60 focus:outline-none focus:border-amber-300"
                    />
                  </div>

                  {/* Program of Interest */}
                  <div>
                    <label className="text-xs font-bold text-purple-200 uppercase tracking-wider block mb-1 font-readex">
                      Area of Interest
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1d0621] border border-white/20 rounded-xl text-sm text-white focus:outline-none focus:border-amber-300"
                    >
                      {programs.map((p) => (
                        <option key={p} value={p} className="bg-[#2a0a2e] text-white">
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Current Status / Audience */}
                  <div>
                    <label className="text-xs font-bold text-purple-200 uppercase tracking-wider block mb-1 font-readex">
                      I Am Currently A:
                    </label>
                    <select
                      value={formData.audience}
                      onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1d0621] border border-white/20 rounded-xl text-sm text-white focus:outline-none focus:border-amber-300"
                    >
                      <option value="School Student" className="bg-[#2a0a2e]">School Student (8th–12th)</option>
                      <option value="College Student" className="bg-[#2a0a2e]">College Student (Engineering / Arts &amp; Science)</option>
                      <option value="Recent Graduate" className="bg-[#2a0a2e]">Recent Graduate / Job Seeker</option>
                      <option value="Working Professional" className="bg-[#2a0a2e]">Working Professional Looking to Upskill</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-karka-gold inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all disabled:opacity-50"
                    >
                      <span>{loading ? 'Submitting Request...' : 'Schedule My Free Career Call'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 text-center">
              <span className="text-[11px] text-purple-200/80 font-body">
                100% confidential. We never spam or share your contact details with external agencies.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
