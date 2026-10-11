import React from 'react';
import { Sparkles } from 'lucide-react';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = ''
}) {
  const alignClass = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  }[align] || 'text-center mx-auto items-center';

  return (
    <div className={`max-w-3xl flex flex-col ${alignClass} ${className}`}>
      {tag && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-semibold mb-3 ${
          light
            ? 'bg-white/15 text-white/90 border border-white/20'
            : 'bg-[#E7EEE9] text-[#294D3F] border border-[#CFDDD3]'
        }`}>
          <Sparkles className="w-3 h-3 text-[#C99E32]" />
          <span>{tag}</span>
        </div>
      )}

      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-4 ${
        light ? 'text-white' : 'text-[#142820]'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-[#FAF8F5]/80 font-light' : 'text-[#4A5D53]'
        }`}>
          {subtitle}
        </p>
      )}

      <div className={`w-16 h-0.5 rounded-full mt-4 ${
        light ? 'bg-[#C99E32]/70' : 'bg-[#C99E32]'
      }`} />
    </div>
  );
}
