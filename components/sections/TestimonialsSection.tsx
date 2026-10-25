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
    <section id="testimonials" className="py-20 lg:py-28 bg-transparent relative border-t border-fuchsia-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(240,0,255,0.25)]">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Learner Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Authentic Student & Parent Feedback
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Real reflections from learners and parents on our diagnostic guidance, technical code audits, and transparent mentorship.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="card-cosmic rounded-3xl p-6 flex flex-col justify-between"
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
                    <div className="flex items-center gap-1 text-[10px] font-bold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-400/40">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      <span>Verified Review</span>
                    </div>
                  )}
                </div>

                {/* Feedback Body */}
                <p className="text-xs text-slate-200 leading-relaxed italic">
                  &ldquo;{test.feedback}&rdquo;
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-4 mt-4 border-t border-fuchsia-500/20">
                <div className="flex items-center gap-3">
                  {test.avatar ? (
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-cyan-400/40 shadow-xs flex-shrink-0">
                      <Image
                        src={test.avatar}
                        alt={test.author}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-fuchsia-600 to-cyan-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                      {test.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-xs text-white leading-tight">
                      {test.author}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {test.role}
                    </p>
                    <p className="text-[10px] text-cyan-400 font-semibold">
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
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-400 hover:text-white transition-colors group"
          >
            <span>Read more student reviews or submit your experience</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
