'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Compass,
  Code,
  Cloud,
  Database,
  Shield,
  Briefcase,
  HelpCircle,
  Copy,
  Check,
} from 'lucide-react';
import { TRAINING_PROGRAMS, GUIDANCE_TRACKS } from '@/data/content';
import { useToast } from '@/components/ui/Toast';

export default function CareerQuiz() {
  const { showToast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [answers, setAnswers] = useState({
    background: '',
    interest: '',
    goal: '',
  });

  const [recommendation, setRecommendation] = useState<{
    type: 'program' | 'guidance';
    title: string;
    description: string;
    matchReason: string;
    actionLink: string;
    skills: string[];
    duration?: string;
  } | null>(null);

  const calculateRecommendation = (bg: string, interest: string, goal: string) => {
    if (interest === 'unsure') {
      const track = GUIDANCE_TRACKS.find((t) => t.id === 'stream-discovery')!;
      return {
        type: 'guidance' as const,
        title: track.title,
        description: track.description,
        matchReason: 'Since you are exploring your direction, our diagnostic counseling track will evaluate your cognitive strengths before committing to a technical stack.',
        actionLink: '/guidance#stream-discovery',
        skills: ['Aptitude Diagnostic', 'Stream Selection Matrix', '1-on-1 Senior Mentor Call'],
        duration: track.timeline,
      };
    }

    if (interest === 'devops') {
      const prog = TRAINING_PROGRAMS.find((p) => p.id === 'cloud-devops')!;
      return {
        type: 'program' as const,
        title: prog.title,
        description: prog.shortDesc,
        matchReason: 'Your interest in cloud automation and distributed systems aligns with high-demand DevOps engineering practices.',
        actionLink: `/contact?program=${prog.slug}`,
        skills: prog.skills.slice(0, 5),
        duration: prog.duration,
      };
    }

    if (interest === 'data_ai') {
      const prog = TRAINING_PROGRAMS.find((p) => p.id === 'data-ai')!;
      return {
        type: 'program' as const,
        title: prog.title,
        description: prog.shortDesc,
        matchReason: 'Your interest in analytical modeling and Python logic matches our hands-on data science & applied AI curriculum.',
        actionLink: `/contact?program=${prog.slug}`,
        skills: prog.skills.slice(0, 5),
        duration: prog.duration,
      };
    }

    if (interest === 'security') {
      const prog = TRAINING_PROGRAMS.find((p) => p.id === 'cyber-security')!;
      return {
        type: 'program' as const,
        title: prog.title,
        description: prog.shortDesc,
        matchReason: 'Your focus on systems defense and ethical audit is primed for network defense and SOC operations.',
        actionLink: `/contact?program=${prog.slug}`,
        skills: prog.skills.slice(0, 5),
        duration: prog.duration,
      };
    }

    // Default: Full-Stack Web Engineering
    const prog = TRAINING_PROGRAMS.find((p) => p.id === 'fullstack-web')!;
    return {
      type: 'program' as const,
      title: prog.title,
      description: prog.shortDesc,
      matchReason: 'Full-Stack Web Engineering gives you the highest versatile breadth to build end-to-end applications and showcase verifiable code.',
      actionLink: `/contact?program=${prog.slug}`,
      skills: prog.skills.slice(0, 5),
      duration: prog.duration,
    };
  };

  const handleSelect = (field: 'background' | 'interest' | 'goal', value: string) => {
    const updated = { ...answers, [field]: value };
    setAnswers(updated);

    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      const rec = calculateRecommendation(updated.background, updated.interest, value);
      setRecommendation(rec);
      setCurrentStep(4);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setAnswers({ background: '', interest: '', goal: '' });
    setRecommendation(null);
  };

  return (
    <section id="career-quiz" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Interactive Pathway Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Find Your Recommended Career Pathway
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Answer 3 quick questions to receive a transparent, personalized career recommendation matching your background and ambitions.
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentStep === step
                  ? 'w-8 bg-blue-500'
                  : currentStep > step
                  ? 'w-3 bg-teal-400'
                  : 'w-3 bg-slate-700'
              }`}
            />
          ))}
        </div>

        {/* Step 1: Background */}
        {currentStep === 1 && (
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6 animate-in fade-in duration-200">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                Step 1 of 3
              </span>
              <h3 className="text-xl font-bold text-white">
                What describes your current background?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { id: 'cs_engg', label: 'Computer Science / IT Engineering Student', desc: 'Pre-final or final year in CS/IT' },
                { id: 'non_cs_engg', label: 'Non-CS Engineering (Mech / Civil / EEE)', desc: 'Transitioning into software engineering' },
                { id: 'bca_bsc', label: 'BCA / B.Sc / MCA / Science Graduate', desc: 'Seeking production-grade tech skills' },
                { id: 'working_pro', label: 'Working Professional / Career Switcher', desc: 'Looking for a structured career pivot' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelect('background', opt.id)}
                  className="p-4 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700/80 hover:border-blue-500 text-left transition-all group flex flex-col justify-between"
                >
                  <span className="font-semibold text-sm text-white group-hover:text-blue-300">
                    {opt.label}
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Interest */}
        {currentStep === 2 && (
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                  Step 2 of 3
                </span>
                <h3 className="text-xl font-bold text-white">
                  What type of technical work excites you most?
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Back
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { id: 'web_dev', label: 'Building Web Apps & SaaS Products', desc: 'React, Next.js, Node.js, Databases', icon: Code },
                { id: 'devops', label: 'Cloud Infrastructure & Deployments', desc: 'Linux, Docker, Kubernetes, AWS CI/CD', icon: Cloud },
                { id: 'data_ai', label: 'Data Analytics, ML & AI Solutions', desc: 'Python, SQL, Machine Learning, RAG', icon: Database },
                { id: 'security', label: 'Network Defense & Ethical Auditing', desc: 'Wireshark, OWASP Top 10, SOC logs', icon: Shield },
                { id: 'unsure', label: 'I am not sure yet — Need Guidance', desc: 'Personalized strength assessment first', icon: HelpCircle },
              ].map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelect('interest', opt.id)}
                    className="p-4 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700/80 hover:border-blue-500 text-left transition-all group flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-slate-700 group-hover:bg-blue-600 transition-colors flex-shrink-0 text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-sm text-white group-hover:text-blue-300 block">
                        {opt.label}
                      </span>
                      <span className="text-xs text-slate-400 mt-0.5 block">
                        {opt.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Immediate Goal */}
        {currentStep === 3 && (
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                  Step 3 of 3
                </span>
                <h3 className="text-xl font-bold text-white">
                  What is your primary goal over the next 3 to 6 months?
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Back
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {[
                { id: 'campus_placement', label: 'Clear Placement Drives', desc: 'Structured technical prep & mock rounds' },
                { id: 'portfolio_projects', label: 'Build Standout Projects', desc: 'Verifiable capstones deployed on GitHub' },
                { id: 'career_transition', label: 'Structured Career Pivot', desc: 'Transition from non-tech to tech roles' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelect('goal', opt.id)}
                  className="p-4 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700/80 hover:border-blue-500 text-left transition-all group"
                >
                  <span className="font-semibold text-sm text-white group-hover:text-blue-300 block">
                    {opt.label}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Tailored Recommendation Result */}
        {currentStep === 4 && recommendation && (
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-teal-500/40 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 animate-in zoom-in-95 duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Personalized Recommendation</span>
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-2">
                  {recommendation.title}
                </h3>
              </div>

              {recommendation.duration && (
                <div className="text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 self-start sm:self-auto">
                  Duration: {recommendation.duration}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <p className="text-sm text-slate-300 leading-relaxed">
                {recommendation.description}
              </p>

              <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200 leading-relaxed">
                <strong className="text-blue-300 font-semibold">Why this fits: </strong>
                {recommendation.matchReason}
              </div>
            </div>

            {/* Recommended Skills */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Core Competencies Covered:
              </span>
              <div className="flex flex-wrap gap-2">
                {recommendation.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-700/80">
              <Link
                href={recommendation.actionLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 font-bold text-sm text-white shadow-lg shadow-blue-500/25 transition-all text-center hover:scale-[1.02] active:scale-95"
              >
                <span>Enquire with this Pathway</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={async () => {
                  const text = `Karka AI Academy Assessment Result:\nRecommended: ${recommendation.title}\nFit: ${recommendation.matchReason}\nSkills: ${recommendation.skills.join(', ')}\nCampus: SRV Towers, Nagercoil\nWebsite: https://karka.academy`;
                  await navigator.clipboard.writeText(text);
                  setCopied(true);
                  showToast('Assessment summary copied to clipboard!', 'success', 'Result Copied');
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
                title="Copy result summary"
              >
                {copied ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
