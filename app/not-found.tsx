import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Compass, Home, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="relative inline-flex items-center justify-center">
            <div className="w-24 h-24 rounded-3xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shadow-xl shadow-blue-500/10">
              <Compass className="w-12 h-12 animate-spin-slow" />
            </div>
            <span className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-black tracking-wider">
              404
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Direction Not Found
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
              The pathway you navigated to doesn&apos;t exist or has moved. Let&apos;s get your career navigation back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/25"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
            <Link
              href="/programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Explore Programs</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
