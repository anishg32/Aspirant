'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GuidanceAssistant from '@/components/assistant/GuidanceAssistant';
import {
  MessageSquare,
  Star,
  CheckCircle2,
  ShieldCheck,
  Send,
  PlusCircle,
  X,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '@/data/content';
import { useToast } from '@/components/ui/Toast';

export default function TestimonialsPage() {
  const { showToast } = useToast();
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFeedback, setNewFeedback] = useState({
    name: '',
    role: '',
    service: 'Full-Stack Web Engineering',
    feedback: '',
    rating: 5,
  });
  const [submitted, setSubmitted] = useState(false);

  // Load user submissions from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ya_user_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews([...parsed, ...TESTIMONIALS]);
        }
      }
    } catch (e) {
      console.warn('Failed to load local reviews', e);
    }
  }, []);

  const categories = ['All', 'Full-Stack', 'Cloud & DevOps', 'Data Science', 'Mentorship'];

  const filteredReviews = useMemo(() => {
    if (selectedFilter === 'All') return reviews;
    return reviews.filter((r) =>
      r.service.toLowerCase().includes(selectedFilter.toLowerCase())
    );
  }, [reviews, selectedFilter]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeedback.name || !newFeedback.feedback) return;

    const reviewObj: Testimonial = {
      id: `test-user-${Date.now()}`,
      author: newFeedback.name,
      role: newFeedback.role || 'Alumnus',
      organizationOrCollege: 'Student Review',
      service: newFeedback.service,
      feedback: newFeedback.feedback,
      rating: newFeedback.rating,
      date: 'Just now',
      verified: false, // Labeled transparently pending editorial review
    };

    const updated = [reviewObj, ...reviews];
    setReviews(updated);

    try {
      const existingSaved = localStorage.getItem('ya_user_reviews');
      const parsedSaved = existingSaved ? JSON.parse(existingSaved) : [];
      localStorage.setItem('ya_user_reviews', JSON.stringify([reviewObj, ...parsedSaved]));
    } catch (err) {
      console.warn('Failed to save review to localStorage', err);
    }

    setSubmitted(true);
    showToast('Your honest review has been published!', 'success', 'Review Submitted');

    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
      setNewFeedback({
        name: '',
        role: '',
        service: 'Full-Stack Web Engineering',
        feedback: '',
        rating: 5,
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
              <span>Authentic Student Experiences</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              What Students & Parents Say About Us
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Transparent, unedited reflections from candidates who took our diagnostic sessions, technical training cohorts, and mock interview preparations.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <PlusCircle className="w-4 h-4 text-teal-400" />
                <span>Submit Your Experience</span>
              </button>
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center justify-center gap-2 pt-6 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedFilter === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="card-interactive bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    {rev.verified ? (
                      <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-teal-600" />
                        <span>Verified Alumnus</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        Recently Submitted
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{rev.feedback}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-3">
                  {rev.avatar ? (
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-purple-200 shadow-xs flex-shrink-0">
                      <Image
                        src={rev.avatar}
                        alt={rev.author}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-purple-800 to-fuchsia-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-xs">
                      {rev.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 leading-tight">
                      {rev.author}
                    </h3>
                    <p className="text-xs text-slate-500">{rev.role}</p>
                    <p className="text-[11px] text-purple-700 font-medium">{rev.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Review Modal */}
        {isModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-modal-title"
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 id="feedback-modal-title" className="text-lg font-bold text-slate-900">
                  Submit Your Experience
                </h3>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-teal-500 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">Thank you for your feedback!</h4>
                  <p className="text-xs text-slate-500">
                    Your review has been recorded and posted to the community feed.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={newFeedback.name}
                      onChange={(e) =>
                        setNewFeedback({ ...newFeedback, name: e.target.value })
                      }
                      placeholder="e.g. S. Prakash"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Your College or Role
                    </label>
                    <input
                      type="text"
                      value={newFeedback.role}
                      onChange={(e) =>
                        setNewFeedback({ ...newFeedback, role: e.target.value })
                      }
                      placeholder="e.g. Final Year B.Tech, Coimbatore"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Service or Program Completed
                    </label>
                    <select
                      value={newFeedback.service}
                      onChange={(e) =>
                        setNewFeedback({ ...newFeedback, service: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-slate-800"
                    >
                      <option value="Full-Stack Web Engineering">Full-Stack Web Engineering</option>
                      <option value="Applied Cloud & DevOps Essentials">Applied Cloud & DevOps Essentials</option>
                      <option value="Data Science & Applied AI">Data Science & Applied AI</option>
                      <option value="1-on-1 Career Mentorship">1-on-1 Career Mentorship</option>
                      <option value="Resume & Mock Interview Prep">Resume & Mock Interview Prep</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Rating
                    </label>
                    <select
                      value={newFeedback.rating}
                      onChange={(e) =>
                        setNewFeedback({ ...newFeedback, rating: Number(e.target.value) })
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 text-slate-800"
                    >
                      <option value={5}>5 Stars - Excellent Guidance</option>
                      <option value={4}>4 Stars - Very Good</option>
                      <option value={3}>3 Stars - Good</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Your Honest Review <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newFeedback.feedback}
                      onChange={(e) =>
                        setNewFeedback({ ...newFeedback, feedback: e.target.value })
                      }
                      placeholder="What was your experience with the mentors and coursework?"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors"
                    >
                      Publish Feedback
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </main>
      <Footer />
      <GuidanceAssistant />
    </div>
  );
}
