import React from 'react';
import { Info } from 'lucide-react';

export default function NoticeBanner({
  message = "Frontend Demo: Pricing (₹9,499) and booking confirmations are simulated placeholders for demonstration.",
  className = ""
}) {
  return (
    <div className={`bg-[#EBF1ED] border-b border-[#D0DFD4] px-4 py-2 text-xs text-[#294D3F] flex items-center justify-center gap-2 ${className}`}>
      <Info className="w-3.5 h-3.5 text-[#C99E32] shrink-0" />
      <span className="font-medium tracking-wide">
        {message}
      </span>
    </div>
  );
}
