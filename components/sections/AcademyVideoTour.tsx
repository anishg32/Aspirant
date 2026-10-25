'use client';

import React, { useState, useRef } from 'react';
import {
  Play,
  Sparkles,
  MapPin,
  Users,
  ShieldCheck,
  Film,
  Tv,
  ArrowRight,
  Quote,
} from 'lucide-react';

interface Learner {
  id: string;
  name: string;
  role: string;
  companyColor: string;
  quote: string;
  video: string;
  pattern: string;
}

const LEARNERS: Learner[] = [
  {
    id: 'gabriel',
    name: 'Gabriel Samraj',
    role: 'Frontend Developer',
    companyColor: 'text-blue-600',
    quote: "Karka's UI/UX design course was a game-changer for me. The instructors are passionate and the curriculum is up-to-date with the latest design trends. I now feel confident in my ability to create stunning visuals that stand out.",
    video: '/videos/gabrielsamraj.mp4',
    pattern: 'from-[#4a044e] to-[#701a75]',
  },
  {
    id: 'prabin',
    name: 'Prabin Raj',
    role: 'Full Stack Developer',
    companyColor: 'text-purple-600',
    quote: 'I learned to build scalable applications from scratch. The environment at Karka is incredibly supportive and pushed me to be a better developer every day.',
    video: '/videos/pabinraj.mp4',
    pattern: 'from-[#2e0854] to-[#4a044e]',
  },
  {
    id: 'shiju',
    name: 'Shiju Mon',
    role: 'Graphic Designer',
    companyColor: 'text-pink-600',
    quote: "Karka's graphic design course was a game-changer for me. The instructors are passionate and the curriculum is up-to-date with the latest design trends. I now feel confident in my ability to create stunning visuals that stand out.",
    video: '/videos/shijumon.mp4',
    pattern: 'from-[#3b0764] to-[#6b21a8]',
  },
  {
    id: 'kishore',
    name: 'Kishore',
    role: 'UI/UX Designer',
    companyColor: 'text-indigo-600',
    quote: "Karka's UI/UX design course was a game-changer for me. The instructors are passionate and the curriculum is up-to-date with the latest design trends. I now feel confident in my ability to create stunning visuals that stand out.",
    video: '/videos/kishore.mp4',
    pattern: 'from-[#1e1b4b] to-[#4a044e]',
  },
  {
    id: 'sridevi',
    name: 'Sridevi',
    role: 'UI/UX Designer',
    companyColor: 'text-purple-600',
    quote: "Karka's UI/UX design course was a game-changer for me. The instructors are passionate and the curriculum is up-to-date with the latest design trends. I now feel confident in my ability to create stunning visuals that stand out.",
    video: '/videos/sridevi.mp4',
    pattern: 'from-[#581c87] to-[#4a044e]',
  },
];

export default function AcademyVideoTour() {
  const [viewMode, setViewMode] = useState<'learners' | 'campus'>('learners');
  const [activeLearnerId, setActiveLearnerId] = useState<string>('gabriel');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeLearner = LEARNERS.find((l) => l.id === activeLearnerId) || LEARNERS[0];
  const activeIndex = LEARNERS.findIndex((l) => l.id === activeLearnerId);
  const upNextLearners = [...LEARNERS.slice(activeIndex + 1), ...LEARNERS.slice(0, activeIndex)];

  // Switch learner video smoothly
  const handleSelectLearner = (id: string) => {
    setActiveLearnerId(id);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  };

  const handleNextStory = () => {
    if (upNextLearners.length > 0) {
      handleSelectLearner(upNextLearners[0].id);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log('Video playback error handled:', err);
            setIsPlaying(false);
          });
      }
    }
  };

  return (
    <section id="academy-tour" className="relative py-20 lg:py-28 bg-linear-to-b from-white via-purple-50/40 to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4a044e]/10 border border-[#4a044e]/20 text-[#4a044e] text-xs font-bold uppercase tracking-wider font-readex">
            <Sparkles className="w-3.5 h-3.5 text-[#4a044e]" />
            <span>Official Karka Academy Experience</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-display">
            Voices of Our <span className="text-[#4a044e]">Learners</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-body">
            Hear directly from our graduates about how Karka transformed their careers and helped them land their dream jobs in tech.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setViewMode('learners');
                setIsPlaying(false);
              }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewMode === 'learners'
                  ? 'btn-karka-primary shadow-md scale-105'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`}
            >
              <Film className="w-4 h-4 text-amber-300" />
              <span>Official Student Stories (5 Videos)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setViewMode('campus');
                setIsPlaying(false);
              }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewMode === 'campus'
                  ? 'btn-karka-primary shadow-md scale-105'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`}
            >
              <Tv className="w-4 h-4 text-[#4a044e]" />
              <span>Campus &amp; Lab Tour (SRV Towers)</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Voices of Our Learners (Official Filmstrip Player) */}
        {viewMode === 'learners' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            
            {/* Left Column: Student Selectors (3 cols) */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 order-1 w-full">
              {/* Active Student Highlight Card */}
              <div
                className={`relative group overflow-hidden rounded-2xl h-20 w-full ring-2 ring-[#4a044e] ring-offset-2 ring-offset-white shadow-lg mb-3 transition-all duration-300 bg-gradient-to-r ${activeLearner.pattern}`}
              >
                <div className="absolute inset-0 bg-black/25" />
                <div className="relative z-10 h-full flex items-center justify-center px-4">
                  <span className="text-xl font-black text-white uppercase tracking-wider drop-shadow-md">
                    {activeLearner.name.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Up Next Label */}
              <div className="flex items-center justify-end gap-1.5 text-xs font-black text-slate-400 uppercase tracking-widest mb-1 pr-1">
                <span>Up Next</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#4a044e]" />
              </div>

              {/* Next Students Buttons */}
              <div className="space-y-3">
                {upNextLearners.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectLearner(item.id)}
                    className="group relative overflow-hidden rounded-2xl h-16 w-full transition-all duration-300 hover:shadow-md hover:scale-102 border border-slate-200 hover:border-[#4a044e]/50 text-left bg-white"
                  >
                    <div className="relative z-10 h-full flex items-center justify-between px-5">
                      <span className="text-sm font-bold text-slate-800 uppercase tracking-wider group-hover:text-[#4a044e] transition-colors">
                        {item.name}
                      </span>
                      <Play className="w-4 h-4 text-slate-400 group-hover:text-[#4a044e] transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Center Column: Iconic Filmstrip Video Player (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 w-full">
              <div className="relative w-full max-w-[280px] h-[400px] sm:w-[320px] sm:h-[480px] bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border-x-[12px] border-slate-950 transition-all duration-500 hover:shadow-purple-900/20">
                
                {/* Flashing RED REC Indicator */}
                <div className="absolute top-5 right-5 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
                  <span className="text-white text-[10px] font-bold tracking-[0.2em]">REC</span>
                </div>

                {/* Left Filmstrip Sprocket Holes */}
                <div className="absolute left-[-8px] top-0 bottom-0 w-3 flex flex-col justify-between py-3 z-30 pointer-events-none">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={`l-${i}`}
                      className="w-2 h-3.5 bg-slate-800/80 rounded-[2px] border border-white/5"
                    />
                  ))}
                </div>

                {/* Right Filmstrip Sprocket Holes */}
                <div className="absolute right-[-8px] top-0 bottom-0 w-3 flex flex-col justify-between py-3 z-30 pointer-events-none">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={`r-${i}`}
                      className="w-2 h-3.5 bg-slate-800/80 rounded-[2px] border border-white/5"
                    />
                  ))}
                </div>

                {/* Video Container */}
                <div className="relative w-full h-full bg-black overflow-hidden group">
                  <video
                    ref={videoRef}
                    key={activeLearner.video}
                    src={activeLearner.video}
                    width={320}
                    height={480}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover relative z-10"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={handleNextStory}
                    title={`Video testimonial by ${activeLearner.name}`}
                    aria-label={`Success story of ${activeLearner.name}`}
                  >
                    Your browser does not support HTML5 video.
                  </video>

                  {/* Centered Glassmorphic Play Button */}
                  {!isPlaying && (
                    <div
                      onClick={togglePlay}
                      className="absolute inset-0 flex items-center justify-center z-20 bg-black/30 backdrop-blur-[1px] cursor-pointer"
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlay();
                        }}
                        aria-label={`Play ${activeLearner.name}'s testimonial`}
                        className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white hover:bg-white/30 hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl"
                      >
                        <Play className="w-7 h-7 fill-white translate-x-0.5" />
                      </button>
                    </div>
                  )}

                  {/* Floating Polaroid Label at bottom */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none z-20">
                    <div className="bg-[#4a044e] text-white py-1.5 px-6 shadow-xl border border-white/20 relative -rotate-2 transform">
                      <span className="font-black text-base sm:text-lg uppercase tracking-tight block text-center text-white">
                        {activeLearner.name}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Mobile Next Story Button */}
              <div className="lg:hidden mt-6 flex justify-end w-full px-6">
                <button
                  type="button"
                  onClick={handleNextStory}
                  className="group flex items-center gap-2 text-xs font-bold text-[#4a044e] uppercase tracking-widest transition-colors hover:text-[#5e0563] py-2"
                >
                  <span>Next Story</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column: Learner Details & Quote (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left order-3 lg:order-3 w-full relative py-4 sm:py-8">
              
              {/* Now Playing Status */}
              <div className="flex items-center justify-start gap-2 text-xs font-black text-[#4a044e] uppercase tracking-[0.2em] mb-4">
                <span>Now Playing</span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#4a044e] animate-pulse" />
              </div>

              {/* Student Header */}
              <div className="flex flex-col gap-1 mb-5">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
                  {activeLearner.name}
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-slate-600 uppercase">
                    {activeLearner.role}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4a044e]" />
                  <span className="text-xs font-bold text-[#4a044e] bg-[#4a044e]/10 px-2.5 py-0.5 rounded-full border border-[#4a044e]/20">
                    Karka Graduate
                  </span>
                </div>
              </div>

              {/* Quote Card */}
              <div className="relative mb-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md">
                <Quote className="w-8 h-8 text-[#4a044e]/20 fill-[#4a044e]/10 -scale-x-100 mb-2" />
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic font-body">
                  &ldquo;{activeLearner.quote}&rdquo;
                </p>
              </div>

              {/* The Karka Advantage Box */}
              <div className="p-5 bg-purple-50/80 rounded-2xl border border-purple-200/70">
                <div className="font-black text-[#4a044e] text-xs sm:text-sm tracking-wider uppercase mb-1.5 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-500 fill-amber-500" />
                  <span>THE KARKA ADVANTAGE</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                  Watch how <strong className="text-slate-900">{activeLearner.name}</strong> transformed their career with hands-on labs and 1-on-1 engineer mentorship directly from our physical campus to industry success.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* View Mode 2: Campus & Physical Labs Tour (SRV Towers, Nagercoil) */}
        {viewMode === 'campus' && (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/t541Ju_-L2U?autoplay=1&rel=0&modestbranding=1"
                title="Karka AI & Tech Academy Campus Tour at SRV Towers Nagercoil"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Campus Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#4a044e]/10 text-[#4a044e]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">SRV Towers, Veppamoodu</h4>
                  <p className="text-xs text-slate-600 mt-0.5">High-speed dual-monitor developer stations in Nagercoil.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#4a044e]/10 text-[#4a044e]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">1-on-1 Engineer Audits</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Continuous on-site guidance from seasoned industry engineers.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#4a044e]/10 text-[#4a044e]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Pay After Placement</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Learn with confidence: ₹0 upfront tuition until you get placed.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCROLLING ANIMATION: Continuous Horizontal Reviews Marquee */}
        <div className="mt-16 pt-8 border-t border-slate-200/80">
          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-scroll-slow flex items-center gap-6 py-2">
              {[...LEARNERS, ...LEARNERS, ...LEARNERS, ...LEARNERS].map((l, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectLearner(l.id)}
                  className="w-80 shrink-0 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#4a044e]/40 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900 group-hover:text-[#4a044e] transition-colors">
                      {l.name}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-[#4a044e]">
                      {l.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 italic font-body">
                    &ldquo;{l.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
