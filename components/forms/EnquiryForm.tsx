'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Phone,
  Mail,
  User,
  GraduationCap,
  MessageSquare,
  Copy,
  Check,
} from 'lucide-react';
import { TRAINING_PROGRAMS, GUIDANCE_TRACKS } from '@/data/content';
import { useToast } from '@/components/ui/Toast';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  currentStatus: string;
  interestType: 'training_program' | 'career_guidance' | 'general_enquiry';
  programOrTrack: string;
  preferredMode: 'online_live' | 'in_person' | 'flexible';
  message: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  currentStatus?: string;
  interestType?: string;
  consent?: string;
  general?: string;
}

export default function EnquiryForm({
  defaultInterest,
  defaultProgram,
  className = '',
}: {
  defaultInterest?: 'training_program' | 'career_guidance' | 'general_enquiry';
  defaultProgram?: string;
  className?: string;
}) {
  const searchParams = useSearchParams();
  const { showToast } = useToast();

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    currentStatus: '3rd / Final Year College Student',
    interestType: defaultInterest || 'training_program',
    programOrTrack: defaultProgram || 'fullstack-web-engineering',
    preferredMode: 'online_live',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    referenceId?: string;
    message: string;
  } | null>(null);

  // Sync query params if present
  useEffect(() => {
    const qProgram = searchParams.get('program');
    const qType = searchParams.get('type');

    if (qProgram) {
      setFormData((prev) => ({
        ...prev,
        interestType: 'training_program',
        programOrTrack: qProgram,
      }));
    } else if (qType === 'guidance') {
      setFormData((prev) => ({
        ...prev,
        interestType: 'career_guidance',
        programOrTrack: 'stream-discovery',
      }));
    }
  }, [searchParams]);

  // Client-side validation function
  const validate = (): FormErrors => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 letters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (formData.phone.trim()) {
      const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
      if (!/^\d{7,15}$/.test(cleanPhone)) {
        errs.phone = 'Please provide a valid contact number (7 to 15 digits).';
      }
    }

    if (!formData.currentStatus) {
      errs.currentStatus = 'Please select your current academic/professional status.';
    }

    if (!formData.consent) {
      errs.consent = 'You must accept the privacy notice to proceed.';
    }

    return errs;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const currentErrors = validate();
    setErrors(currentErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all required fields as touched
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      currentStatus: true,
      consent: true,
    });

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error field
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstErrorField}`);
      el?.focus();
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmissionResult({
          success: true,
          referenceId: data.referenceId,
          message: data.message,
        });
      } else {
        setSubmissionResult({
          success: false,
          message: data.message || 'Submission failed. Please check form details.',
        });
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch (error) {
      setSubmissionResult({
        success: false,
        message: 'Could not connect to the server. Please check your network or try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      currentStatus: '3rd / Final Year College Student',
      interestType: defaultInterest || 'training_program',
      programOrTrack: defaultProgram || 'fullstack-web-engineering',
      preferredMode: 'online_live',
      message: '',
      consent: false,
    });
    setTouched({});
    setErrors({});
    setSubmissionResult(null);
  };

  if (submissionResult?.success) {
    return (
      <div
        className={`bg-white rounded-2xl p-8 border border-teal-200 shadow-xl text-center space-y-5 animate-in fade-in duration-300 ${className}`}
        role="status"
        aria-live="polite"
      >
        <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto border-4 border-teal-100 shadow-xs">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Enquiry Confirmed
          </span>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            Thank You, {formData.fullName}!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {submissionResult.message}
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-1.5">
          <div className="flex justify-between items-center text-slate-500">
            <span>Reference ID:</span>
            <button
              type="button"
              onClick={async () => {
                if (submissionResult.referenceId) {
                  await navigator.clipboard.writeText(submissionResult.referenceId);
                  showToast('Reference ID copied to clipboard!', 'success', 'Copied');
                }
              }}
              className="font-mono font-bold text-slate-800 hover:text-blue-600 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Click to copy Reference ID"
            >
              <span>{submissionResult.referenceId}</span>
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Selected Pathway:</span>
            <span className="font-medium text-slate-800">
              {formData.interestType === 'training_program'
                ? 'Technical Training Program'
                : '1-on-1 Career Guidance'}
            </span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Response Guarantee:</span>
            <span className="font-medium text-teal-700">
              Within 24 Business Hours
            </span>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Submit Another Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 ${className}`}
      id="enquiry-form"
      aria-label="Student Career Guidance & Training Enquiry Form"
    >
      <div className="border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Priority Admissions & Guidance</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Request Guidance or Program Details
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          No automated spam or high-pressure calls. Just honest advice from senior mentors.
        </p>
      </div>

      {submissionResult && !submissionResult.success && (
        <div
          className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-start gap-3"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Unable to submit enquiry</p>
            <p className="text-xs text-rose-600 mt-0.5">{submissionResult.message}</p>
          </div>
        </div>
      )}

      {/* Row 1: Full Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="field-fullName"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Full Name <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              id="field-fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, fullName: e.target.value }))
              }
              onBlur={() => handleBlur('fullName')}
              aria-invalid={touched.fullName && !!errors.fullName}
              aria-describedby={errors.fullName ? 'error-fullName' : undefined}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 transition-colors focus:bg-white focus:outline-none ${
                touched.fullName && errors.fullName
                  ? 'border-rose-300 focus:border-rose-500 bg-rose-50/30'
                  : 'border-slate-300 focus:border-blue-600'
              }`}
            />
          </div>
          {touched.fullName && errors.fullName && (
            <p id="error-fullName" className="text-xs text-rose-600 mt-1 font-medium">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="field-email"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Email Address <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <input
              id="field-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              onBlur={() => handleBlur('email')}
              aria-invalid={touched.email && !!errors.email}
              aria-describedby={errors.email ? 'error-email' : undefined}
              placeholder="e.g. rahul@example.com"
              className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 transition-colors focus:bg-white focus:outline-none ${
                touched.email && errors.email
                  ? 'border-rose-300 focus:border-rose-500 bg-rose-50/30'
                  : 'border-slate-300 focus:border-blue-600'
              }`}
            />
          </div>
          {touched.email && errors.email && (
            <p id="error-email" className="text-xs text-rose-600 mt-1 font-medium">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Current Status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="field-phone"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            id="field-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            onBlur={() => handleBlur('phone')}
            aria-invalid={touched.phone && !!errors.phone}
            aria-describedby={errors.phone ? 'error-phone' : undefined}
            placeholder="+91 98765 43210"
            className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 transition-colors focus:bg-white focus:outline-none ${
              touched.phone && errors.phone
                ? 'border-rose-300 focus:border-rose-500 bg-rose-50/30'
                : 'border-slate-300 focus:border-blue-600'
            }`}
          />
          {touched.phone && errors.phone && (
            <p id="error-phone" className="text-xs text-rose-600 mt-1 font-medium">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="field-currentStatus"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Current Status <span className="text-rose-500">*</span>
          </label>
          <select
            id="field-currentStatus"
            value={formData.currentStatus}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, currentStatus: e.target.value }))
            }
            onBlur={() => handleBlur('currentStatus')}
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-800"
          >
            <option value="1st / 2nd Year College Student">1st / 2nd Year College Student</option>
            <option value="3rd / Final Year College Student">3rd / Final Year College Student</option>
            <option value="Recent Graduate (Past 12 Months)">Recent Graduate (Past 12 Months)</option>
            <option value="Working Professional (Career Switcher)">Working Professional (Career Switcher)</option>
            <option value="Parent Inquiring on Behalf of Student">Parent Inquiring for Student</option>
          </select>
        </div>
      </div>

      {/* Row 3: Interest Type Selector (Tabs) */}
      <fieldset className="space-y-2">
        <legend className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
          Area of Interest <span className="text-rose-500">*</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            {
              id: 'training_program',
              label: 'Technical Training',
              desc: 'Hands-on project cohort',
            },
            {
              id: 'career_guidance',
              label: '1-on-1 Guidance',
              desc: 'Stream & career audit',
            },
            {
              id: 'general_enquiry',
              label: 'General Enquiry',
              desc: 'Questions & admissions',
            },
          ].map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  interestType: type.id as any,
                }))
              }
              className={`p-3 rounded-xl border text-left transition-all ${
                formData.interestType === type.id
                  ? 'border-blue-600 bg-blue-50/70 text-blue-900 shadow-xs'
                  : 'border-slate-200 bg-slate-50/40 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="font-bold text-xs">{type.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{type.desc}</div>
            </button>
          ))}
        </div>
      </fieldset>

      {/* Row 4: Specific Program or Guidance Track */}
      <div>
        <label
          htmlFor="field-programOrTrack"
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          {formData.interestType === 'training_program'
            ? 'Select Program of Interest'
            : formData.interestType === 'career_guidance'
            ? 'Select Career Guidance Track'
            : 'Subject of Interest'}
        </label>
        {formData.interestType === 'training_program' ? (
          <select
            id="field-programOrTrack"
            value={formData.programOrTrack}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, programOrTrack: e.target.value }))
            }
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-800"
          >
            {TRAINING_PROGRAMS.map((prog) => (
              <option key={prog.id} value={prog.slug}>
                {prog.title} ({prog.duration})
              </option>
            ))}
          </select>
        ) : formData.interestType === 'career_guidance' ? (
          <select
            id="field-programOrTrack"
            value={formData.programOrTrack}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, programOrTrack: e.target.value }))
            }
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-800"
          >
            {GUIDANCE_TRACKS.map((track) => (
              <option key={track.id} value={track.id}>
                {track.title}
              </option>
            ))}
          </select>
        ) : (
          <input
            id="field-programOrTrack"
            type="text"
            value={formData.programOrTrack}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, programOrTrack: e.target.value }))
            }
            placeholder="e.g. Schedule diagnostic, partnership, or custom query"
            className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-800"
          />
        )}
      </div>

      {/* Row 5: Message */}
      <div>
        <label
          htmlFor="field-message"
          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          Your Ambition or Questions <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="field-message"
          rows={3}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          placeholder="Share your goals, current challenges, or what specific guidance you are seeking..."
          className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-800 resize-none"
        />
      </div>

      {/* Row 6: Consent & Privacy Notice */}
      <div className="space-y-1">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            id="field-consent"
            type="checkbox"
            checked={formData.consent}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, consent: e.target.checked }))
            }
            onBlur={() => handleBlur('consent')}
            aria-invalid={touched.consent && !formData.consent}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I agree to receive personalized career guidance communication from You Aspirant. We adhere to a strict zero-spam policy and will never share your contact details.
          </span>
        </label>
        {touched.consent && errors.consent && (
          <p className="text-xs text-rose-600 font-medium pl-6">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit CTA */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-600/30 hover:shadow-lg hover:shadow-blue-600/40 transition-all duration-200 flex items-center justify-center gap-2 disabled:bg-slate-400 disabled:shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Verifying & Sending Enquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Career Guidance Enquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
          <span>SSL Secured • 24hr Advisor Response Time</span>
        </div>
      </div>
    </form>
  );
}
