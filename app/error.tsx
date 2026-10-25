'use client';

import React, { useEffect } from 'react';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Application Error Boundary]', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 p-4 selection:bg-[#4a044e] selection:text-white">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center space-y-6 border border-slate-200/80 shadow-xl shadow-purple-900/5">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto shadow-sm">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Unexpected <span className="text-gradient-plum">Disruption</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We encountered a temporary issue rendering this view. Our engineering mentors have been notified.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="btn-karka-primary flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs cursor-pointer shadow-md shadow-purple-900/20"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="btn-karka-secondary flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#4a044e]" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
