import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Compass, Home, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#4a044e] selection:text-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="relative inline-flex items-center justify-center">
            <div className="w-24 h-24 rounded-3xl bg-purple-50 border border-purple-200 flex items-center justify-center text-[#4a044e] shadow-lg shadow-purple-900/5">
              <Compass className="w-12 h-12 text-[#4a044e]" />
            </div>
            <span className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-[#4a044e] text-white text-xs font-black tracking-wider shadow-md">
              404
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Direction <span className="text-gradient-plum">Not Found</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
              The pathway you navigated to doesn&apos;t exist or has moved. Let&apos;s get your career navigation back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="btn-karka-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm cursor-pointer shadow-md shadow-purple-900/20"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
            <Link
              href="/programs"
              className="btn-karka-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#4a044e]" />
              <span>Explore Programs</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
