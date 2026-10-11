import React from 'react';

export default function PageLoader() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FFFCF6] text-[#303D32] px-4 animate-fade-in"
      role="status"
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Outer glowing pulse ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#8FA58A]/30 animate-ping" />
        {/* Inner spinning nature circle */}
        <div className="w-10 h-10 rounded-full border-2 border-[#E7E5DA] border-t-[#42634B] border-r-[#C59A56] animate-spin" />
      </div>
      <span className="mt-4 text-xs tracking-widest uppercase font-semibold text-[#8FA58A]">
        Healing Circle
      </span>
    </div>
  );
}
