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
    <div className={`group rounded-3xl overflow-hidden bg-white border border-[#E7E5DA] hover:border-[#CCD4C3] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col ${className}`}>
      {/* Image container */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#F3F5EC]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {category && (
          <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#42634B] border border-[#E7E5DA] shadow-xs">
            {category}
          </div>
        )}

        {badge && (
          <div className="absolute top-4 right-4 z-10 bg-[#C59A56] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-xs">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {subtitle && (
            <span className="text-xs font-medium uppercase tracking-wider text-[#8FA58A] block mb-1">
              {subtitle}
            </span>
          )}
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#303D32] mb-2 leading-snug group-hover:text-[#42634B] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[#73796F] leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {duration && (
          <div className="mt-4 pt-4 border-t border-[#F3F5EC] flex items-center justify-between text-xs text-[#73796F]">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#C59A56]" />
              {duration}
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-[#42634B] group-hover:translate-x-1 transition-transform">
              Explore <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
