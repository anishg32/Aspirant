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
    <div className="min-h-screen flex items-center justify-center bg-[#030014] text-white p-4 cosmic-nebula-bg">
      <div className="max-w-md w-full card-cosmic p-8 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-950/70 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(244,63,94,0.3)]">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-black text-white tracking-tight">
            Unexpected <span className="text-gradient-infini">Disruption</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We encountered a temporary issue rendering this view. Our team has been notified.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="btn-infini-primary flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="btn-infini-cyan flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs cursor-pointer"
          >
            <Home className="w-4 h-4 text-cyan-300" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
