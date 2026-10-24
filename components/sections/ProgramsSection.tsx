'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Code,
  Search,
  Filter,
  Clock,
  Layers,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
  ExternalLink,
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
          title: `${prog.title} - You Aspirant`,
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
    <section id="training-programs" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Laptop className="w-3.5 h-3.5 text-teal-600" />
            <span>Practical Engineering Curricula</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Industry-Aligned Training Programs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Engineered with working software professionals. Every program focuses on demonstrable capstone projects, clean architectural habits, and verifiable GitHub code.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-6 mb-12 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. React, Docker, Python)..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-200/60">
            <span>
              Showing {filteredPrograms.length} of {TRAINING_PROGRAMS.length} verified programs
            </span>
            <span>All cohorts feature 1-on-1 code reviews & live labs</span>
          </div>
        </div>

        {/* Empty State */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-3">
            <Layers className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-base font-semibold text-slate-700">
              No programs found matching &ldquo;{searchQuery}&rdquo; in this category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 underline"
            >
              Reset search & filter criteria
            </button>
          </div>
        )}

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              id={prog.slug}
              className="card-interactive bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Card Top Header */}
                <div className="p-6 border-b border-slate-100 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                        {prog.category}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleShareProgram(prog, e)}
                        className="p-1 rounded-md text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        title="Share pathway"
                        aria-label={`Share ${prog.title}`}
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{prog.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {prog.shortDesc}
                  </p>
                </div>

                {/* Key Skills Tags */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Core Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.skills.slice(0, 6).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {prog.skills.length > 6 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-400 text-[11px]">
                          +{prog.skills.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Capstone Preview */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5 text-[11px]">
                      <Sparkles className="w-3 h-3 text-teal-600" />
                      <span>Featured Capstone Project:</span>
                    </span>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      {prog.capstoneProjects[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => setActiveModalProgram(prog)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                  <span>View Detailed Syllabus & Modules</span>
                </button>

                <Link
                  href={`/contact?program=${prog.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5 shadow-sm shadow-blue-600/30 text-center"
                >
                  <span>Enquire for Cohort</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Detailed Syllabus Modal */}
        {activeModalProgram && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-program-title"
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActiveModalProgram(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                      {activeModalProgram.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {activeModalProgram.duration} • {activeModalProgram.format}
                    </span>
                  </div>
                  <h3 id="modal-program-title" className="text-2xl font-extrabold text-slate-900">
                    {activeModalProgram.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProgram(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Overview & Prerequisites */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>{activeModalProgram.fullDesc}</p>
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs">
                  <strong>Prerequisites: </strong>
                  {activeModalProgram.prerequisites}
                </div>
              </div>

              {/* Module Breakdown */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Curriculum Modules Breakdown
                </h4>
                <div className="space-y-3">
                  {activeModalProgram.modules.map((mod, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                      <div className="font-bold text-xs sm:text-sm text-slate-900">
                        {mod.title}
                      </div>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {mod.topics.map((topic, ti) => (
                          <li key={ti} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capstones */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Hands-on Capstones Built for GitHub
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {activeModalProgram.capstoneProjects.map((cap, ci) => (
                    <li key={ci} className="flex items-start gap-2 p-2.5 rounded-lg bg-teal-50/60 border border-teal-200/70">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer CTAs */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => handleShareProgram(activeModalProgram)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    title="Share syllabus link"
                  >
                    <Share2 className="w-3.5 h-3.5 text-slate-600" />
                    <span>Share</span>
                  </button>
                  <button
                    type="button"
                    onClick={handlePrintSyllabus}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    title="Print or Save PDF"
                  >
                    <Printer className="w-3.5 h-3.5 text-slate-600" />
                    <span>Print / PDF</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setActiveModalProgram(null)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Close Preview
                  </button>
                  <Link
                    href={`/contact?program=${activeModalProgram.slug}`}
                    onClick={() => setActiveModalProgram(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 shadow-md shadow-blue-600/30 transition-transform active:scale-95"
                  >
                    <span>Enquire for this Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
