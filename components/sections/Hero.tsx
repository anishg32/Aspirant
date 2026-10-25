'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Play,
  Zap,
  X,
  MapPin,
} from 'lucide-react';

export default function Hero() {
  const partnerLogos = [
    { name: 'Amazon', src: '/images/partners/amazon.webp' },
    { name: 'TCS', src: '/images/partners/tcs.webp' },
    { name: 'HCL', src: '/images/partners/hcl.webp' },
    { name: 'Matrimony', src: '/images/partners/matrimony.webp' },
    { name: 'Novac', src: '/images/partners/novac.webp' },
    { name: 'Capecom', src: '/images/partners/capecom.webp' },
    { name: 'Flow', src: '/images/partners/flow.webp' },
    { name: 'Sodisys', src: '/images/partners/sodisys.webp' },
  ];

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // max 8 deg 3D tilt
    const tiltX = ((y - centerY) / centerY) * -8;
    const tiltY = ((x - centerX) / centerX) * 8;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative pt-36 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-linear-to-b from-[#4a044e]/5 via-purple-50/30 to-white">
      {/* Subtle ambient gradients */}
      <div className="absolute top-10 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#4a044e]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 -z-10 h-[400px] w-[400px] rounded-full bg-purple-200/40 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4a044e]/10 border border-[#4a044e]/20 text-[#4a044e] text-xs font-bold font-readex">
              <Sparkles className="w-3.5 h-3.5 text-[#4a044e] fill-[#4a044e]" />
              <span>The one and only exclusive AI Learning Center in Nagercoil</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] font-display">
              <span className="text-gradient-plum block">
                AI-Driven
              </span>
              <span className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl block mt-1">
                Software Developer
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
              Master Full Stack Web Engineering, Data Science, and GenAI at Karka AI &amp; Tech Academy. Build real production capstones with working senior engineer mentorship and Pay After Placement at SRV Towers, Nagercoil.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm text-white btn-karka-primary text-center uppercase tracking-wide font-readex"
                id="hero-primary-cta"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm btn-karka-secondary text-center group font-readex cursor-pointer"
                id="hero-video-cta"
              >
                <span className="w-6 h-6 rounded-full bg-[#4a044e] text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </span>
                <span>Watch Campus Tour Video</span>
              </button>
            </div>

            {/* Micro Trust Bullets */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-600 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4a044e]" />
                <span>Pay After Placement</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4a044e]" />
                <span>1-on-1 Code Reviews</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4a044e]" />
                <span>SRV Towers, Nagercoil Campus</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated 3D Preview Image (Mascot & Interactive Tech Frame) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Decorative Glows & Holographic Conic Ring */}
            <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-purple-600 via-fuchsia-500 to-cyan-400 opacity-20 blur-xl animate-hologram-spin pointer-events-none" />
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-purple-300/35 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-fuchsia-300/35 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            
            {/* Mascot Container Card with Interactive 3D Parallax Tilt */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
                transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.5s ease-in-out',
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-purple-200/90 shadow-2xl bg-white p-3.5 group select-none transition-shadow hover:shadow-purple-900/20"
            >
              
              {/* Inner Display Area */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-linear-to-b from-purple-950/5 via-slate-50 to-purple-100/40 border border-purple-100/80 flex items-center justify-center">
                
                {/* High-Tech HUD Viewfinder Corner Reticles */}
                <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#4a044e]/40 rounded-tl-xs pointer-events-none z-20" />
                <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#4a044e]/40 rounded-tr-xs pointer-events-none z-20" />
                <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#4a044e]/40 rounded-bl-xs pointer-events-none z-20" />
                <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#4a044e]/40 rounded-br-xs pointer-events-none z-20" />

                {/* Cyber Radial Ambient Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(124,58,237,0.12),transparent_70%)] pointer-events-none" />

                {/* Holographic Shimmer Light Sheen Sweep */}
                <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/50 to-transparent animate-shimmer-sweep pointer-events-none z-10" />

                {/* Animated 3D Bot Mascot Preview Image with Levitation Physics */}
                <div className="relative w-full h-full flex items-center justify-center p-2">
                  <div className="relative w-full h-full animate-float-bot flex items-center justify-center">
                    <Image
                      src="/images/karka-official-bot.webp"
                      alt="Karka AI Official Robot Mascot"
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-contain object-center drop-shadow-[0_20px_35px_rgba(74,4,78,0.22)] transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>

                  {/* Breathing Ground Levitation Shadow */}
                  <div className="absolute bottom-4 w-44 h-4 bg-purple-950/20 rounded-full blur-md animate-bot-shadow pointer-events-none" />
                </div>

                {/* Floating Glassy Badge: Top Left (AI Learning) */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-100 shadow-md text-[11px] font-bold text-slate-800 flex items-center gap-1.5 pointer-events-none z-20 animate-badge-float-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>AI Powered Learning</span>
                </div>

                {/* Floating Glassy Badge: Top Right (Neural Equalizer) */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-purple-500/30 shadow-md text-[10px] font-bold text-white flex items-center gap-1.5 pointer-events-none z-20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-emerald-300">AI ACTIVE</span>
                  <div className="flex items-end gap-0.5 h-3.5 pl-0.5">
                    <span className="w-0.5 bg-emerald-400 rounded-full animate-eq-1" />
                    <span className="w-0.5 bg-emerald-300 rounded-full animate-eq-2" />
                    <span className="w-0.5 bg-cyan-300 rounded-full animate-eq-3" />
                    <span className="w-0.5 bg-emerald-400 rounded-full animate-eq-4" />
                  </div>
                </div>

                {/* Floating Glassy Badge: Bottom Right (Pay After Placement) */}
                <div className="absolute bottom-4 right-4 bg-[#4a044e] backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg text-[11px] font-black text-white flex items-center gap-1.5 pointer-events-none z-20 animate-badge-float-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>Pay After Placement</span>
                </div>

                {/* Floating Tour Video Trigger Pill: Bottom Left */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="absolute bottom-4 left-4 bg-white/95 hover:bg-white text-slate-800 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-100 shadow-md text-[11px] font-bold flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer z-20 group/btn"
                  title="Watch Campus Tour Video"
                >
                  <span className="w-5 h-5 rounded-full bg-[#4a044e] text-white flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                    <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                  </span>
                  <span>Campus Tour</span>
                </button>

              </div>
            </div>

          </div>

        </div>

        {/* Official Hiring Partners Logo Marquee (SCROLLING ANIMATION) */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#4a044e]" />
              <span>Where Our Learners are Making an Impact</span>
            </span>
          </div>

          {/* Continuous Infinite Scrolling Marquee Track */}
          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-scroll flex items-center gap-6 py-2">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, pIdx) => (
                <div
                  key={pIdx}
                  className="h-14 w-36 px-4 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-[#4a044e]/40 hover:shadow-md transition-all flex items-center justify-center shrink-0 group cursor-pointer"
                  title={`Hiring Partner: ${partner.name}`}
                >
                  <div className="relative w-full h-8">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      fill
                      sizes="120px"
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-75 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

    </div>

      {/* Cinematic Tour Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-purple-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-slate-900/90 border-b border-white/10 text-white">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-sm font-display">Karka AI &amp; Tech Academy — Campus Tour</span>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Tour Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                src="/videos/karka-tour.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
