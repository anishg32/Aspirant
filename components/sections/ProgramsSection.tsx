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
    <section id="training-programs" className="py-20 lg:py-28 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Official Site */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(240,0,255,0.25)]">
            <Laptop className="w-3.5 h-3.5 text-cyan-400" />
            <span>Accelerate Your Growth</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Explore Our Programs
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-body">
            Accelerate your career with industry-focused bootcamps designed to equip you with the practical skills needed to lead in tech.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="card-cosmic rounded-2xl p-4 sm:p-6 mb-12 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. React, Docker, Python)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#120529] border border-fuchsia-500/30 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
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
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'btn-infini-primary scale-105'
                      : 'bg-[#15062e] text-slate-300 hover:text-white border border-fuchsia-500/20 hover:border-cyan-400/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-fuchsia-500/20">
            <span>
              Showing {filteredPrograms.length} of {TRAINING_PROGRAMS.length} verified programs
            </span>
            <span className="text-cyan-300 font-medium">All cohorts feature 1-on-1 code reviews & live labs</span>
          </div>
        </div>

        {/* Empty State */}
        {filteredPrograms.length === 0 && (
          <div className="text-center py-16 card-cosmic rounded-2xl border-dashed border-fuchsia-500/30 space-y-3">
            <Layers className="w-8 h-8 text-cyan-400 mx-auto" />
            <p className="text-base font-semibold text-slate-200">
              No programs found matching &ldquo;{searchQuery}&rdquo; in this category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-cyan-400 hover:underline"
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
              className="card-cosmic rounded-3xl flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Card Top Header */}
                <div className="p-6 border-b border-fuchsia-500/20 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {prog.badge && (
                        <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-fuchsia-950/80 text-fuchsia-300 border border-fuchsia-500/40 uppercase font-readex">
                          {prog.badge}
                        </span>
                      )}
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-400/40 font-readex">
                        {prog.category}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => handleShareProgram(prog, e)}
                        className="p-1 rounded-md text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                        title="Share pathway"
                        aria-label={`Share ${prog.title}`}
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400 font-readex">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{prog.duration}</span>
                    </div>
                  </div>

                  {/* Enrollments & Rating */}
                  {(prog.enrollments || prog.rating) && (
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 pt-0.5 font-readex">
                      <span className="text-cyan-300 font-bold">{prog.enrollments}</span>
                      <span className="text-amber-300">⭐ {prog.rating}</span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug font-display">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-body">
                    {prog.shortDesc}
                  </p>
                </div>

                {/* Key Skills Tags */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2 font-readex">
                      Core Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.skills.slice(0, 6).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-[#160633] border border-fuchsia-500/20 text-cyan-300 text-[11px] font-medium font-readex"
                        >
                          {skill}
                        </span>
                      ))}
                      {prog.skills.length > 6 && (
                        <span className="px-2 py-0.5 rounded-md bg-[#160633] text-slate-400 text-[11px] font-readex">
                          +{prog.skills.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Capstone Preview */}
                  <div className="p-3 rounded-xl bg-[#14052e] border border-fuchsia-500/30 text-xs space-y-1">
                    <span className="font-bold text-white flex items-center gap-1.5 text-[11px] font-readex">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>Featured Capstone Project:</span>
                    </span>
                    <p className="text-slate-300 text-[11px] leading-relaxed font-body">
                      {prog.capstoneProjects[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Actions matching Official Site */}
              <div className="p-6 pt-0 space-y-2.5">
                <button
                  type="button"
                  onClick={() => setActiveModalProgram(prog)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold btn-infini-cyan flex items-center justify-center gap-1.5 font-readex cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Explore {prog.title}</span>
                </button>

                <Link
                  href={`/contact?program=${prog.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold btn-infini-primary flex items-center justify-center gap-1.5 text-center font-readex uppercase tracking-wider"
                >
                  <span>Enroll in {prog.title}</span>
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActiveModalProgram(null)}
          >
            <div
              className="bg-[#0b031b] text-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(240,0,255,0.4)] border-2 border-fuchsia-500/40 p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-fuchsia-500/20 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-400/40">
                      {activeModalProgram.category}
                    </span>
                    <span className="text-xs text-slate-300 font-medium">
                      {activeModalProgram.duration} • {activeModalProgram.format}
                    </span>
                  </div>
                  <h3 id="modal-program-title" className="text-2xl font-black text-white">
                    {activeModalProgram.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProgram(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Overview & Prerequisites */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>{activeModalProgram.fullDesc}</p>
                <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-400/40 text-amber-200 text-xs">
                  <strong className="text-amber-300">Prerequisites: </strong>
                  {activeModalProgram.prerequisites}
                </div>
              </div>

              {/* Module Breakdown */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider">
                  Curriculum Modules Breakdown
                </h4>
                <div className="space-y-3">
                  {activeModalProgram.modules.map((mod, i) => (
                    <div key={i} className="p-4 rounded-xl border border-fuchsia-500/20 bg-[#13062d] space-y-2">
                      <div className="font-bold text-xs sm:text-sm text-white">
                        {mod.title}
                      </div>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {mod.topics.map((topic, ti) => (
                          <li key={ti} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
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
                <h4 className="text-sm font-bold text-fuchsia-400 uppercase tracking-wider">
                  Hands-on Capstones Built for GitHub
                </h4>
                <ul className="space-y-2 text-xs text-slate-200">
                  {activeModalProgram.capstoneProjects.map((cap, ci) => (
                    <li key={ci} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#180838] border border-fuchsia-500/30">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer CTAs */}
              <div className="pt-4 border-t border-fuchsia-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => handleShareProgram(activeModalProgram)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-fuchsia-500/20 transition-colors"
                    title="Share syllabus link"
                  >
                    <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Share</span>
                  </button>
                  <button
                    type="button"
                    onClick={handlePrintSyllabus}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-fuchsia-500/20 transition-colors"
                    title="Print or Save PDF"
                  >
                    <Printer className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Print / PDF</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setActiveModalProgram(null)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                  >
                    Close Preview
                  </button>
                  <Link
                    href={`/contact?program=${activeModalProgram.slug}`}
                    onClick={() => setActiveModalProgram(null)}
                    className="w-full sm:w-auto btn-infini-primary inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold"
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
