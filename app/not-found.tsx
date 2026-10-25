import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Compass, Home, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030014] text-white selection:bg-[#F000FF] selection:text-white cosmic-nebula-bg">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="relative inline-flex items-center justify-center">
            <div className="w-24 h-24 rounded-3xl bg-[#0c041c] border border-fuchsia-500/40 flex items-center justify-center text-cyan-300 shadow-[0_0_30px_rgba(240,0,255,0.3)]">
              <Compass className="w-12 h-12 animate-spin-slow" />
            </div>
            <span className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#F000FF] to-[#00FFFF] text-black text-xs font-black tracking-wider shadow-md">
              404
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Direction <span className="text-gradient-infini">Not Found</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
              The pathway you navigated to doesn&apos;t exist or has moved. Let&apos;s get your career navigation back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="btn-infini-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
            <Link
              href="/programs"
              className="btn-infini-cyan w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-cyan-300" />
              <span>Explore Programs</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
