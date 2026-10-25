'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Clock,
  Layers,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
  Laptop,
  Share2,
  Printer,
  Check,
} from 'lucide-react';
import { TRAINING_PROGRAMS, Program } from '@/data/content';
import { useToast } from '@/components/ui/Toast';

export default function ProgramsSection() {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const categories = ['All', 'Full-Stack', 'Cloud & DevOps', 'Data & AI', 'Security', 'Career Readiness'];

  const handleShareProgram = async (prog: Program, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const url = typeof window !== 'undefined' ? `${window.location.origin}/programs#${prog.slug}` : '';
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${prog.title} - Karka AI & Tech Academy`,
          text: prog.shortDesc,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        showToast(`Copied pathway link for ${prog.title}`, 'success', 'Link Copied');
      }
    } catch {
      if (url) {
        await navigator.clipboard.writeText(url);
        showToast(`Copied pathway link for ${prog.title}`, 'success', 'Link Copied');
      }
    }
  };

  const handlePrintSyllabus = () => {
    window.print();
  };

  const filteredPrograms = useMemo(() => {
    return TRAINING_PROGRAMS.filter((prog) => {
      const matchesCategory =
        selectedCategory === 'All' || prog.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        prog.title.toLowerCase().includes(q) ||
        prog.shortDesc.toLowerCase().includes(q) ||
        prog.skills.some((s) => s.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#4a044e] text-white relative overflow-hidden">
      <span id="training-programs" className="sr-only">Training Programs</span>
      {/* Decorative ambient elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Official Site */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider font-readex">
            <Laptop className="w-3.5 h-3.5 text-amber-300" />
            <span>Accelerate Your Growth</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Explore Our Programs
          </h2>
          <p className="text-purple-100 text-base sm:text-lg leading-relaxed font-body">
            Accelerate your career with industry-focused bootcamps designed to equip you with the practical skills needed to lead in tech.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="rounded-3xl p-5 sm:p-6 mb-12 space-y-4 bg-white/10 backdrop-blur-md border border-white/15 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-purple-200 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. React, Docker, Python)..."
                className="w-full pl-10 pr-4 py-2.5 bg-black/20 border border-white/20 rounded-xl text-xs sm:text-sm text-white placeholder-purple-200/70 focus:outline-none focus:border-white"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-200 hover:text-white text-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-white text-[#4a044e] shadow-md scale-105 font-extrabold'
                      : 'bg-white/10 text-white/90 hover:bg-white/20 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          <div className="flex items-center justify-between text-xs text-purple-200/90 pt-1 border-t border-white/10">
            <span>
              Showing {filteredPrograms.length} of {TRAINING_PROGRAMS.length} verified programs
            </span>
            <span className="text-amber-300 font-semibold">All cohorts feature 1-on-1 code reviews &amp; live labs</span>
          </div>
        </div>

        {/* Empty State */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16 rounded-3xl bg-white/10 border-dashed border border-white/20 space-y-3">
            <Layers className="w-8 h-8 text-amber-300 mx-auto" />
            <p className="text-base font-semibold text-white">
              No programs found matching &ldquo;{searchQuery}&rdquo; in this category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-amber-300 hover:underline"
            >
              Reset search &amp; filter criteria
            </button>
          </div>
        )}

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              id={prog.slug}
              className="card-karka-plum rounded-3xl flex flex-col justify-between overflow-hidden group hover:border-white/40 hover:bg-white/15 transition-all duration-300"
            >
              <div>
                {/* Card Top Header */}
                <div className="p-6 border-b border-white/10 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {prog.badge && (
                        <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-readex uppercase">
                          {prog.badge}
                        </span>
                      )}
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/15 text-white border border-white/20 font-readex">
                        {prog.category}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleShareProgram(prog, e)}
                        className="p-1 rounded-md text-purple-200 hover:text-white hover:bg-white/10 transition-colors"
                        title="Share pathway"
                        aria-label={`Share ${prog.title}`}
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-purple-200 font-readex">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      <span>{prog.duration}</span>
                    </div>
                  </div>

                  {/* Enrollments & Rating */}
                  {(prog.enrollments || prog.rating) && (
                    <div className="flex items-center justify-between text-[11px] font-semibold text-purple-200 pt-0.5 font-readex">
                      <span className="text-white font-bold">{prog.enrollments}</span>
                      <span className="text-amber-300 font-bold">⭐ {prog.rating}</span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug font-display">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-purple-100 line-clamp-3 leading-relaxed font-body">
                    {prog.shortDesc}
                  </p>
                </div>

                {/* Key Skills Tags */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 block mb-2 font-readex">
                      Core Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.skills.slice(0, 6).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/10 text-white text-[11px] font-medium font-readex"
                        >
                          {skill}
                        </span>
                      ))}
                      {prog.skills.length > 6 && (
                        <span className="px-2 py-0.5 rounded-md bg-white/5 text-purple-200 text-[11px] font-readex">
                          +{prog.skills.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Capstone Preview */}
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-xs space-y-1">
                    <span className="font-bold text-white flex items-center gap-1.5 text-[11px] font-readex">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Featured Capstone Project:</span>
                    </span>
                    <p className="text-purple-100 text-[11px] leading-relaxed font-body">
                      {prog.capstoneProjects[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-white/10 mt-2 space-y-2.5">
                <div className="flex items-center gap-2 pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveModalProgram(prog)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-white/30 text-white text-xs font-bold hover:bg-white/10 transition-colors font-readex"
                    aria-label={`Explore syllabus for ${prog.title}`}
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                    <span>Explore {prog.title.split(' ')[0]}</span>
                  </button>

                  <Link
                    href={`/contact?program=${prog.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl btn-karka-white text-xs font-bold transition-all font-readex uppercase tracking-wide"
                    aria-label={`Enroll in ${prog.title}`}
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Syllabus Modal */}
      {activeModalProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setActiveModalProgram(null)}
        >
          <div
            className="bg-[#2a0a2e] text-white border border-purple-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/15">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-readex uppercase">
                    {activeModalProgram.badge || activeModalProgram.category}
                  </span>
                  <span className="text-xs text-purple-200 font-readex">
                    {activeModalProgram.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white font-display">
                  {activeModalProgram.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProgram(null)}
                className="p-2 rounded-xl text-purple-200 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-purple-200 uppercase tracking-wider mb-2 font-readex">
                  Program Description
                </h4>
                <p className="text-sm text-purple-100 leading-relaxed font-body">
                  {activeModalProgram.fullDesc}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold text-purple-200 uppercase tracking-wider mb-2 font-readex">
                  Skills &amp; Technologies Covered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProgram.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white font-medium font-readex"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Capstones */}
              <div>
                <h4 className="text-xs font-bold text-purple-200 uppercase tracking-wider mb-2 font-readex">
                  Production Capstone Projects
                </h4>
                <div className="space-y-2">
                  {activeModalProgram.capstoneProjects.map((cap, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/10 border border-white/15 text-xs text-purple-100 flex items-start gap-2.5 font-body"
                    >
                      <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrintSyllabus}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/30 text-white text-xs font-bold hover:bg-white/10 transition-colors"
              >
                <Printer className="w-4 h-4 text-purple-200" />
                <span>Print Syllabus</span>
              </button>

              <Link
                href={`/contact?program=${activeModalProgram.slug}`}
                onClick={() => setActiveModalProgram(null)}
                className="btn-karka-white inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide"
              >
                <span>Enroll in Cohort</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
