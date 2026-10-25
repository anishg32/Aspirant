'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Play,
  Pause,
  MapPin,
  Sparkles,
  Maximize2,
  Tv,
  Film,
  Image as ImageIcon,
  CheckCircle2,
} from 'lucide-react';

interface CampusAdVideoPlayerProps {
  initialMode?: 'youtube' | 'mp4' | 'photo';
  className?: string;
}

export default function CampusAdVideoPlayer({
  initialMode = 'youtube',
  className = '',
}: CampusAdVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeMedia, setActiveMedia] = useState<'youtube' | 'mp4' | 'photo'>(initialMode);

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Media Type Switcher Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-purple-50/80 border border-purple-200">
          <button
            type="button"
            onClick={() => {
              setActiveMedia('youtube');
              setIsPlaying(true);
            }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMedia === 'youtube'
                ? 'bg-[#4a044e] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#4a044e]'
            }`}
          >
            <Tv className="w-3.5 h-3.5 text-amber-300" />
            <span>Campus Ad (YouTube)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveMedia('mp4');
              setIsPlaying(true);
            }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMedia === 'mp4'
                ? 'bg-[#4a044e] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#4a044e]'
            }`}
          >
            <Film className="w-3.5 h-3.5 text-amber-300" />
            <span>Graduate Ad (MP4)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveMedia('photo');
              setIsPlaying(false);
            }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeMedia === 'photo'
                ? 'bg-[#4a044e] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#4a044e]'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5 text-purple-400" />
            <span>Lab Photo</span>
          </button>
        </div>

        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Interactive Ad Player</span>
        </span>
      </div>

      {/* Main Video / Photo Screen */}
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-purple-200 shadow-xl bg-slate-950 group">
        
        {/* State 1: YouTube Official Campus Walkthrough Ad */}
        {activeMedia === 'youtube' && (
          <div className="w-full h-full relative">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/t541Ju_-L2U?autoplay=${isPlaying ? '1' : '0'}&rel=0&modestbranding=1`}
              title="Karka AI & Tech Academy Campus Advertisement & Lab Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        )}

        {/* State 2: Gabriel Samraj Official Ad Video (MP4) */}
        {activeMedia === 'mp4' && (
          <div className="w-full h-full relative flex items-center justify-center bg-black">
            <video
              src="/videos/gabrielsamraj.mp4"
              controls
              playsInline
              autoPlay={isPlaying}
              className="w-full h-full object-contain bg-black"
              title="Official Karka Academy Graduate Advertisement"
            >
              Your browser does not support HTML5 video.
            </video>
          </div>
        )}

        {/* State 3: Static Photo with Play Overlay */}
        {activeMedia === 'photo' && (
          <div className="relative w-full h-full">
            <Image
              src="/images/official/pic.webp"
              alt="Karka AI Innovation Lab at SRV Towers Nagercoil"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
            
            {/* Center Play Button to launch video */}
            <div
              onClick={() => {
                setActiveMedia('youtube');
                setIsPlaying(true);
              }}
              className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
            >
              <button
                type="button"
                aria-label="Play Advertisement Video"
                className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#4a044e] to-fuchsia-600 text-white flex items-center justify-center shadow-2xl shadow-purple-950/60 hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Play className="w-8 h-8 fill-white translate-x-0.5" />
              </button>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10 pointer-events-none">
              <div className="flex items-center gap-2 text-xs font-bold drop-shadow">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Karka AI Innovation Lab · SRV Towers, Nagercoil</span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMedia('youtube');
                  setIsPlaying(true);
                }}
                className="pointer-events-auto px-3.5 py-1.5 rounded-xl bg-white hover:bg-amber-300 text-[#4a044e] text-xs font-black flex items-center gap-1.5 shadow-lg transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-[#4a044e]" />
                <span>Play Ad Video</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Metadata Pill */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <div className="flex items-center gap-1.5 font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#4a044e]" />
          <span>SRV Towers, 2nd Floor, Veppamoodu, Nagercoil 629001</span>
        </div>
        <span className="font-bold text-[#4a044e] uppercase text-[10px] tracking-wider">
          Official Karka Media
        </span>
      </div>
    </div>
  );
}
