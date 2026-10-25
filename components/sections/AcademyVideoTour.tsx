'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Play,
  Pause,
  Maximize2,
  Volume2,
  Sparkles,
  MapPin,
  Users,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Laptop,
  Code2,
  ShieldCheck,
  Film,
  Tv,
} from 'lucide-react';

export default function AcademyVideoTour() {
  const [videoSource, setVideoSource] = useState<'mp4' | 'youtube'>('mp4');
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const chapters = [
    {
      title: 'SRV Towers Innovation Labs',
      seconds: 0,
      timestamp: '0:00',
      description: 'Physical campus at Veppamoodu, Nagercoil with dual-monitor developer pods and dedicated Linux labs.',
      icon: MapPin,
    },
    {
      title: 'Real Capstone Coding Sprints',
      seconds: 15,
      timestamp: '0:15',
      description: 'Learners building full-stack Next.js web applications, Docker containers, and AI neural network pipelines.',
      icon: Code2,
    },
    {
      title: '1-on-1 Engineer Mentorship',
      seconds: 30,
      timestamp: '0:30',
      description: 'Line-by-line code audits and mock interviews conducted by seasoned senior software engineers.',
      icon: Users,
    },
    {
      title: 'Pay After Placement Results',
      seconds: 45,
      timestamp: '0:45',
      description: 'Honest alumni stories detailing how non-CS and fresh graduates secured engineering roles.',
      icon: ShieldCheck,
    },
  ];

  const handlePlayToggle = () => {
    if (videoSource === 'mp4' && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(true);
    }
  };

  const handleSelectChapter = (idx: number) => {
    setActiveChapter(idx);
    if (videoSource === 'mp4' && videoRef.current) {
      videoRef.current.currentTime = chapters[idx].seconds;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="academy-tour" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#4a044e]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950 border border-purple-800 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Campus Experience & Student Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Inside <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">Karka AI Academy</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Take a virtual tour through our Nagercoil innovation center at SRV Towers. See how our learners build real production code, receive 1-on-1 mentor guidance, and transition into tier-1 tech careers.
          </p>

          {/* Video Mode Selector Pill */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                setVideoSource('mp4');
                setIsPlaying(false);
              }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                videoSource === 'mp4'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50'
                  : 'bg-white/10 hover:bg-white/15 text-slate-300'
              }`}
            >
              <Film className="w-3.5 h-3.5 text-amber-300" />
              <span>Campus Tour Video (HD MP4)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setVideoSource('youtube');
                setIsPlaying(true);
              }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                videoSource === 'youtube'
                  ? 'bg-red-600 text-white shadow-md shadow-red-900/50'
                  : 'bg-white/10 hover:bg-white/15 text-slate-300'
              }`}
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Official YouTube Stream</span>
            </button>
          </div>
        </div>

        {/* Video Player & Chapters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Video Screen (8 cols) */}
          <div className="lg:col-span-8">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 group">
              
              {videoSource === 'youtube' ? (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/t541Ju_-L2U?autoplay=1&rel=0&modestbranding=1"
                  title="Karka AI & Tech Academy Campus Experience"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    controls
                    playsInline
                    poster="/images/hero-campus.jpg"
                    className="w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src="/videos/karka-tour.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play Button Overlay (shown when paused) */}
                  {!isPlaying && (
                    <div
                      onClick={handlePlayToggle}
                      className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-opacity"
                    >
                      <button
                        type="button"
                        aria-label="Play Academy Tour Video"
                        className="group/btn relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#4a044e] to-fuchsia-600 text-white shadow-2xl shadow-purple-900/60 hover:scale-110 active:scale-95 transition-all duration-300"
                      >
                        <span className="absolute inset-0 rounded-full bg-[#4a044e] animate-ping opacity-30" />
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5 group-hover/btn:scale-110 transition-transform" />
                      </button>

                      {/* Video Title Bar */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-900/80 backdrop-blur-md text-[11px] font-bold text-amber-300 mb-1">
                            <span>Karka AI Innovation Lab Tour</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white drop-shadow">
                            SRV Towers, Veppamoodu, Nagercoil
                          </h3>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-slate-200">
                          1080p HD
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Quick Metrics Bar below video */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="block text-lg sm:text-xl font-black text-amber-300">100%</span>
                <span className="text-[11px] text-slate-400 font-medium">Hands-on Labs</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="block text-lg sm:text-xl font-black text-purple-300">180+</span>
                <span className="text-[11px] text-slate-400 font-medium">Capstones Built</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
                <span className="block text-lg sm:text-xl font-black text-emerald-300">₹0 Upfront</span>
                <span className="text-[11px] text-slate-400 font-medium">Pay After Placement</span>
              </div>
            </div>
          </div>

          {/* Right Chapters & In-Person Visit Card (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900/90 border border-white/10 rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Featured Highlights
                </span>
                <span className="text-[11px] text-slate-400">4 Chapters</span>
              </div>

              <div className="space-y-2.5">
                {chapters.map((ch, idx) => {
                  const Icon = ch.icon;
                  const isActive = activeChapter === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectChapter(idx)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-purple-950/60 border-purple-500/50 shadow-md'
                          : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isActive
                              ? 'bg-purple-600 text-white'
                              : 'bg-white/10 text-slate-300'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-white truncate">
                              {ch.title}
                            </h4>
                            <span className="text-[10px] text-amber-300 font-mono font-bold">
                              {ch.timestamp}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                            {ch.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* In-Person Campus Invitation */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-[#4a044e] hover:from-purple-500 hover:to-purple-900 text-white text-xs font-bold shadow-lg shadow-purple-900/40 transition-all text-center"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Book In-Person Campus Visit</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
