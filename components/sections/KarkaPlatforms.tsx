import React from 'react';
import Link from 'next/link';
import {
  Trophy,
  Zap,
  ArrowUpRight,
  Sparkles,
  Bot,
  CodeXml,
  TrendingUp,
  Users,
  Presentation,
  Brain,
  Bug,
  Globe,
  Palette,
  Film,
  Building2,
  MapPin,
  Award,
  LogIn,
} from 'lucide-react';

export default function KarkaPlatforms() {
  const infiniContests = [
    { title: 'PaperPulse', subtitle: 'Idea Presentation', icon: Presentation },
    { title: 'TechRush', subtitle: 'Technical Quiz', icon: Brain },
    { title: 'Bug Hunt', subtitle: 'Code Debugging', icon: Bug },
    { title: 'SiteSprint', subtitle: 'Web Design & Code', icon: Globe },
    { title: 'Graphix', subtitle: 'Graphic Design', icon: Palette },
    { title: 'VibeCut', subtitle: 'Video Editing', icon: Film },
  ];

  const spikeFeatures = [
    { title: 'AI-Guided', subtitle: 'Learn with AI at your side', icon: Bot },
    { title: 'Hands-On', subtitle: 'Practise as you learn', icon: CodeXml },
    { title: 'Progress', subtitle: 'Track your growth', icon: TrendingUp },
    { title: 'Mentor-Backed', subtitle: 'Paired with Karka mentors', icon: Users },
  ];

  return (
    <section id="platforms" className="relative py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-[#4a044e] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Karka Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Explore Karka Platforms
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Empowering students across Tamil Nadu through cutting-edge AI learning platforms and high-stakes inter-college technology arenas.
          </p>
        </div>

        {/* 2-Card Grid (Infini AI 3 cols & Spike AI 2 cols on lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          
          {/* Card 1: Karka Infini AI (lg:col-span-3) */}
          <div className="lg:col-span-3 relative flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#4a044e] via-[#3b023e] to-[#240126] text-white p-7 sm:p-10 overflow-hidden shadow-2xl border border-purple-900/50">
            {/* Ambient decorative glow */}
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />

            <div>
              {/* Header: Title + Prize Pool */}
              <div className="relative flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="h-13 w-13 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-inner">
                    <Trophy className="h-7 w-7 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Karka Infini AI</h3>
                    <p className="text-xs sm:text-sm text-fuchsia-200 font-medium">Inter-college student competition</p>
                  </div>
                </div>

                <div className="text-left sm:text-right bg-white/10 px-4 py-2.5 rounded-2xl border border-white/15">
                  <p className="text-2xl sm:text-3xl font-black text-amber-300 leading-none">₹1,00,000</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-fuchsia-200">Total prize pool</p>
                </div>
              </div>

              {/* Tagline */}
              <p className="relative mt-6 text-base sm:text-lg font-bold text-white">
                Showcase Your Skills. Compete. Get Recognized. Win Big!
              </p>

              {/* 6 Contests Grid */}
              <div className="relative mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {infiniContests.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-2xl bg-white/10 border border-white/10 p-3 hover:bg-white/15 transition-all"
                    >
                      <Icon className="h-5 w-5 text-amber-300" />
                      <p className="mt-2 font-black text-sm text-white">{c.title}</p>
                      <p className="text-[11px] text-fuchsia-100/75 leading-tight">{c.subtitle}</p>
                    </div>
                  );
                })}
              </div>

              {/* Round Details */}
              <div className="relative mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex gap-2.5">
                  <Building2 className="h-5 w-5 shrink-0 text-amber-300 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Round 1</p>
                    <p className="text-[11px] text-white/70">Campus arena at your college</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <MapPin className="h-5 w-5 shrink-0 text-amber-300 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Round 2</p>
                    <p className="text-[11px] text-white/70">District-level grand finale</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <Award className="h-5 w-5 shrink-0 text-amber-300 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Rewards</p>
                    <p className="text-[11px] text-white/70">Cash prizes & Rolling Trophy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Infini CTA */}
            <div className="relative mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              <a
                href="https://infini.karka.academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-black text-[#4a044e] hover:bg-amber-300 transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Register for Infini</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-xs font-semibold text-white/80">Free entry · Join multiple contests · Teams of 1–4</p>
            </div>
          </div>

          {/* Card 2: Spike AI (lg:col-span-2) */}
          <div className="lg:col-span-2 relative flex flex-col justify-between rounded-3xl bg-slate-950 text-white p-7 sm:p-9 overflow-hidden shadow-2xl border border-slate-800">
            {/* Ambient glows */}
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
            <div className="absolute -top-20 -right-16 h-52 w-52 rounded-full bg-fuchsia-500/20 blur-3xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="relative flex items-center gap-3.5">
                <div className="h-13 w-13 rounded-2xl bg-gradient-to-br from-amber-300 to-fuchsia-500 text-slate-950 flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
                  <Zap className="h-6 w-6 fill-slate-950 text-slate-950" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Spike AI</h3>
                  <p className="text-xs sm:text-sm text-white/60 font-medium">Learning platform</p>
                </div>
              </div>

              {/* Tagline */}
              <p className="relative mt-6 text-base sm:text-lg font-semibold text-white">
                The <span className="bg-gradient-to-r from-amber-300 to-fuchsia-400 bg-clip-text text-transparent font-black">AI-powered</span> learning platform by Karka Academy
              </p>

              {/* Mock Chat Prompt */}
              <div className="relative mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Sparkles className="h-4 w-4 shrink-0 text-amber-300" />
                <p className="text-xs sm:text-sm text-white/70 truncate">Ask Spike anything you&apos;re learning…</p>
                <span className="ml-auto h-4 w-0.5 shrink-0 bg-amber-300 animate-pulse" />
              </div>

              {/* 4 Feature Pills */}
              <div className="relative mt-6 grid grid-cols-2 gap-3 content-start">
                {spikeFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-2xl bg-white/5 border border-white/10 p-3.5 hover:bg-white/10 transition-colors"
                    >
                      <Icon className="h-5 w-5 text-amber-300" />
                      <p className="mt-2 font-bold text-sm text-white">{f.title}</p>
                      <p className="text-[11px] text-white/60">{f.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Spike CTA */}
            <div className="relative mt-8 pt-6 border-t border-white/10">
              <a
                href="https://spike.karka.academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-fuchsia-400 px-6 py-3.5 text-sm font-black text-slate-950 hover:opacity-95 transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                <LogIn className="h-4 w-4" />
                <span>Open Spike AI</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
