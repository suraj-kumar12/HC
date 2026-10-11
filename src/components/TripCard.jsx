import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

export default function TripCard({
  image,
  title,
  subtitle,
  category,
  description,
  duration,
  badge,
  className = ""
}) {
  return (
    <div className={`group rounded-3xl overflow-hidden bg-white border border-[#E8E1D7] hover:border-[#CFDDD3] shadow-sm hover:shadow-xl hover:shadow-[#1E3A2F]/10 transition-all duration-300 flex flex-col ${className}`}>
      {/* Image container */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#E7EEE9]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {category && (
          <div className="absolute top-4 left-4 z-10 bg-[#FAF8F5]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#1E3A2F] border border-[#CFDDD3]/60 shadow-sm">
            {category}
          </div>
        )}

        {badge && (
          <div className="absolute top-4 right-4 z-10 bg-[#C99E32] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {subtitle && (
            <span className="text-xs font-medium uppercase tracking-wider text-[#6B917E] block mb-1">
              {subtitle}
            </span>
          )}
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#142820] mb-2 leading-snug group-hover:text-[#1E3A2F] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[#4A5D53] leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {duration && (
          <div className="mt-4 pt-4 border-t border-[#FAF8F5] flex items-center justify-between text-xs text-[#6B917E]">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#C99E32]" />
              {duration}
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-[#1E3A2F] group-hover:translate-x-1 transition-transform">
              Explore <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
