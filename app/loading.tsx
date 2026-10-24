import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-2xl border-4 border-blue-600/20 animate-pulse" />
        <div className="w-14 h-14 rounded-2xl border-4 border-transparent border-t-blue-600 border-r-teal-500 animate-spin" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 animate-pulse">
        Loading Pathways...
      </p>
    </div>
  );
}
