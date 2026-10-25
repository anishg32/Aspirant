'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Code,
  Cloud,
  Database,
  Shield,
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

  const calculateRecommendation = (_bg: string, interest: string, _goal: string) => {
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
      matchReason: 'Web engineering offers the highest number of entry-level openings in regional tech corridors with immediate portfolio demonstration.',
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

  const handleCopyRecommendation = async () => {
    if (!recommendation) return;
    const shareText = `Karka Academy Pathway Recommendation: ${recommendation.title} (${recommendation.duration})\nMatch: ${recommendation.matchReason}\nExplore: https://karka.academy${recommendation.actionLink}`;
    await navigator.clipboard.writeText(shareText);
    setCopied(true);
    showToast('Career recommendation copied to clipboard!', 'success', 'Copied');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="career-quiz" className="py-16 lg:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a044e]/10 border border-[#4a044e]/20 text-[#4a044e] text-xs font-bold uppercase tracking-wider font-readex">
            <Sparkles className="w-3.5 h-3.5 text-[#4a044e]" />
            <span>Interactive Pathway Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
            Find Your Recommended <span className="text-[#4a044e]">Career Pathway</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-body">
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
                  ? 'w-8 bg-[#4a044e]'
                  : currentStep > step
                  ? 'w-3 bg-purple-300'
                  : 'w-3 bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* Step 1: Background */}
        {currentStep === 1 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200 shadow-md">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#4a044e] uppercase tracking-wider font-readex">
                Step 1 of 3
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-display">
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
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-purple-50/70 hover:border-[#4a044e]/50 text-left transition-all group flex flex-col justify-between"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-[#4a044e]">
                    {opt.label}
                  </span>
                  <span className="text-xs text-slate-500 mt-1">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Interest */}
        {currentStep === 2 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200 shadow-md">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#4a044e] uppercase tracking-wider font-readex">
                  Step 2 of 3
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  What type of technical work excites you most?
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                Back
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { id: 'web', label: 'Building Web & Interactive Applications', desc: 'React, Next.js, full-stack architectures', icon: Code },
                { id: 'devops', label: 'Cloud Systems, Automation & Docker', desc: 'AWS, CI/CD pipelines, Kubernetes', icon: Cloud },
                { id: 'data_ai', label: 'Data Science, Machine Learning & GenAI', desc: 'Python, predictive models, LLMs', icon: Database },
                { id: 'security', label: 'Ethical Hacking & Systems Defense', desc: 'Vulnerability assessment, network security', icon: Shield },
                { id: 'unsure', label: 'I am not sure yet; need stream guidance', desc: 'Diagnostic counseling & strength analysis', icon: HelpCircle },
              ].map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelect('interest', opt.id)}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-purple-50/70 hover:border-[#4a044e]/50 text-left transition-all group flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#4a044e]/10 text-[#4a044e] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-sm text-slate-900 group-hover:text-[#4a044e] block">
                        {opt.label}
                      </span>
                      <span className="text-xs text-slate-500 mt-0.5 block">
                        {opt.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Goal */}
        {currentStep === 3 && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200 shadow-md">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#4a044e] uppercase tracking-wider font-readex">
                  Step 3 of 3
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  What is your primary timeline and goal?
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="text-xs text-slate-500 hover:text-slate-900"
              >
                Back
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { id: 'immediate_job', label: 'Landing a software job within 4–6 months', desc: 'Intensive cohort + Capstone GitHub portfolio' },
                { id: 'college_projects', label: 'Mastering tech stack for final-year project', desc: 'Production-tier architecture guidance' },
                { id: 'career_pivot', label: 'Transitioning from non-tech to tech', desc: 'Foundations first, followed by live internship' },
                { id: 'clarity_first', label: 'Evaluating my fit before committing money', desc: '1-on-1 counseling session first' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelect('goal', opt.id)}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-purple-50/70 hover:border-[#4a044e]/50 text-left transition-all group flex flex-col justify-between"
                >
                  <span className="font-bold text-sm text-slate-900 group-hover:text-[#4a044e]">
                    {opt.label}
                  </span>
                  <span className="text-xs text-slate-500 mt-1">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Result */}
        {currentStep === 4 && recommendation && (
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-6 sm:p-10 border border-purple-200 shadow-lg space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#4a044e] text-white font-readex uppercase">
                  Personalized Recommendation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 font-display">
                  {recommendation.title}
                </h3>
                {recommendation.duration && (
                  <p className="text-xs font-semibold text-[#4a044e] mt-1 font-readex">
                    Recommended Duration: {recommendation.duration}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-semibold"
                title="Restart Quiz"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-xs space-y-1.5">
              <span className="text-xs font-bold text-[#4a044e] uppercase tracking-wider block font-readex">
                Why this matches your diagnostic answers:
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-body">
                {recommendation.matchReason}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2 font-readex">
                Key Skills You Will Master:
              </span>
              <div className="flex flex-wrap gap-2">
                {recommendation.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-purple-50 text-slate-800 border border-purple-200 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-200/70 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href={recommendation.actionLink}
                className="w-full sm:w-auto btn-karka-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wide font-readex"
              >
                <span>View Full Curriculum &amp; Next Cohort</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={handleCopyRecommendation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Share Pathway Recommendation'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
