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
            ? 'bg-white/90 text-[#303D32] border border-white/60 shadow-xs'
            : 'bg-[#F3F5EC] text-[#42634B] border border-[#E7E5DA]'
        }`}>
          <Sparkles className="w-3 h-3 text-[#C59A56]" />
          <span>{tag}</span>
        </div>
      )}

      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-4 ${
        light ? 'text-white drop-shadow-sm' : 'text-[#303D32]'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-white/95 font-light' : 'text-[#73796F]'
        }`}>
          {subtitle}
        </p>
      )}

      <div className="w-16 h-0.5 rounded-full mt-4 bg-[#C59A56]" />
    </div>
  );
}
