import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  Quote,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>Learner Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Authentic Student & Parent Feedback
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real reflections from learners and parents on our diagnostic guidance, technical code audits, and transparent mentorship.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {test.verified && (
                    <div className="flex items-center gap-1 text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                      <CheckCircle2 className="w-3 h-3 text-teal-600" />
                      <span>Verified Review</span>
                    </div>
                  )}
                </div>

                {/* Feedback Body */}
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  &ldquo;{test.feedback}&rdquo;
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  {test.avatar ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-purple-200 shadow-xs flex-shrink-0">
                      <Image
                        src={test.avatar}
                        alt={test.author}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-800 to-fuchsia-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                      {test.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-xs text-slate-900 leading-tight">
                      {test.author}
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      {test.role}
                    </p>
                    <p className="text-[10px] text-purple-700 font-medium">
                      {test.service}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Testimonials Page */}
        <div className="mt-12 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 group"
          >
            <span>Read more student reviews or submit your experience</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
