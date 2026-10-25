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
    <section id="platforms" className="relative py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Official Site */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/60 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(240,0,255,0.25)] font-readex">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Karka Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Explore Karka Platforms
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-body">
            Empowering students across Tamil Nadu through cutting-edge AI learning platforms and high-stakes inter-college technology arenas.
          </p>
        </div>

        {/* 2-Card Grid (Infini AI 3 cols & Spike AI 2 cols on lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          
          {/* Card 1: Karka Infini AI (lg:col-span-3) */}
          <div className="lg:col-span-3 relative flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#12002b] via-[#1a0038] to-[#080017] text-white p-7 sm:p-10 overflow-hidden shadow-[0_0_50px_rgba(240,0,255,0.25)] border-2 border-fuchsia-500/40">
            {/* Ambient decorative glow */}
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#F000FF]/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#00FFFF]/20 blur-3xl pointer-events-none" />

            <div>
              {/* Header: Title + Prize Pool */}
              <div className="relative flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="h-13 w-13 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 p-0.5 shadow-[0_0_20px_rgba(240,0,255,0.4)]">
                    <div className="h-full w-full bg-[#0e0020] rounded-[14px] flex items-center justify-center">
                      <Trophy className="h-7 w-7 text-amber-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-gradient-infini tracking-tight">Karka Infini AI</h3>
                    <p className="text-xs sm:text-sm text-cyan-300 font-bold uppercase tracking-wider">A GenZ Tech Fest · Inter-College Arena</p>
                  </div>
                </div>

                <div className="text-left sm:text-right bg-amber-400/10 px-4 py-2.5 rounded-2xl border border-amber-400/40 shadow-[0_0_20px_rgba(255,223,0,0.2)]">
                  <p className="text-2xl sm:text-3xl font-black text-amber-300 leading-none">₹1,00,000</p>
                  <p className="mt-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-400">Total prize pool</p>
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
                      className="rounded-2xl bg-white/5 border border-fuchsia-500/20 p-3 hover:bg-fuchsia-950/40 hover:border-cyan-400/50 transition-all group"
                    >
                      <Icon className="h-5 w-5 text-cyan-400 group-hover:text-amber-300 transition-colors" />
                      <p className="mt-2 font-black text-sm text-white">{c.title}</p>
                      <p className="text-[11px] text-slate-300 leading-tight">{c.subtitle}</p>
                    </div>
                  );
                })}
              </div>

              {/* Round Details */}
              <div className="relative mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex gap-2.5">
                  <Building2 className="h-5 w-5 shrink-0 text-cyan-400 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Round 1</p>
                    <p className="text-[11px] text-slate-300">Campus arena at your college</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <MapPin className="h-5 w-5 shrink-0 text-fuchsia-400 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Round 2</p>
                    <p className="text-[11px] text-slate-300">District-level grand finale</p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <Award className="h-5 w-5 shrink-0 text-amber-300 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Rewards</p>
                    <p className="text-[11px] text-slate-300">Cash prizes & Rolling Trophy</p>
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
                className="group btn-infini-primary inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-black"
              >
                <span>Register for Infini</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-xs font-semibold text-slate-300">Free entry · Join multiple contests · Teams of 1–4</p>
            </div>
          </div>

          {/* Card 2: Spike AI (lg:col-span-2) */}
          <div className="lg:col-span-2 relative flex flex-col justify-between rounded-3xl bg-[#0b031c] text-white p-7 sm:p-9 overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.15)] border-2 border-cyan-400/30">
            {/* Ambient glows */}
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#00FFFF]/15 blur-3xl pointer-events-none" />
            <div className="absolute -top-20 -right-16 h-52 w-52 rounded-full bg-[#F000FF]/15 blur-3xl pointer-events-none" />

            <div>
              {/* Header */}
              <div className="relative flex items-center gap-3.5">
                <div className="h-13 w-13 rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-400/30">
                  <Zap className="h-6 w-6 fill-slate-950 text-slate-950" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Spike AI</h3>
                  <p className="text-xs sm:text-sm text-cyan-300 font-bold uppercase tracking-wider">Learning platform</p>
                </div>
              </div>

              {/* Tagline */}
              <p className="relative mt-6 text-base sm:text-lg font-semibold text-white">
                The <span className="text-gradient-infini font-black">AI-powered</span> learning platform by Karka Academy
              </p>

              {/* Mock Chat Prompt */}
              <div className="relative mt-5 flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-[#12062c] px-4 py-3 shadow-inner">
                <Sparkles className="h-4 w-4 shrink-0 text-cyan-300" />
                <p className="text-xs sm:text-sm text-slate-300 truncate">Ask Spike anything you&apos;re learning…</p>
                <span className="ml-auto h-4 w-0.5 shrink-0 bg-cyan-400 animate-pulse" />
              </div>

              {/* 4 Feature Pills */}
              <div className="relative mt-6 grid grid-cols-2 gap-3 content-start">
                {spikeFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-2xl bg-white/5 border border-cyan-400/20 p-3.5 hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all"
                    >
                      <Icon className="h-5 w-5 text-cyan-400" />
                      <p className="mt-2 font-bold text-sm text-white">{f.title}</p>
                      <p className="text-[11px] text-slate-300">{f.subtitle}</p>
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
                className="group relative w-full inline-flex items-center justify-center gap-2 rounded-full btn-infini-cyan px-6 py-3.5 text-sm font-bold transition-all shadow-lg hover:scale-105 active:scale-95"
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
