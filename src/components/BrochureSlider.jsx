import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function BrochureSlider({ pages = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const sliderRef = useRef(null);

  // Responsive visible slide count:
  // Mobile (< 480px): 1 slide
  // Tablet (480px - 1023px): 2 slides
  // Desktop (>= 1024px): 4 slides
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setVisibleSlides(1);
      } else if (width < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(4);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const totalPages = pages.length;
  const maxIndex = Math.max(0, totalPages - visibleSlides);
  // Clamped active index to handle window resizing smoothly without cascading renders
  const activeIndex = Math.min(currentIndex, maxIndex);

  const handlePrev = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex(Math.max(0, activeIndex - 1));
  };

  const handleNext = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex(Math.min(maxIndex, activeIndex + 1));
  };

  // Touch Swipe Handlers for mobile & tablet
  const minSwipeDistance = 40;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    if (touchStart && Math.abs(e.targetTouches[0].clientX - touchStart) > 10) {
      setIsSwiping(true);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
    setTimeout(() => setIsSwiping(false), 80);
  };

  const isAtStart = activeIndex === 0;
  const isAtEnd = activeIndex >= maxIndex;

  const startPageNum = activeIndex + 1;
  const endPageNum = Math.min(activeIndex + visibleSlides, totalPages);

  return (
    <div className="w-full select-none" ref={sliderRef}>
      
      {/* Slider Controls Bar (Counter & Navigation Arrows) */}
      <div className="flex items-center justify-between gap-4 mb-5 px-1">
        {/* Slide Counter Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3F5EC] border border-[#E7E5DA] text-xs text-[#303D32]">
          <span className="font-semibold text-[#42634B]">Pages {startPageNum}–{endPageNum}</span>
          <span className="text-[#8FA58A]">of</span>
          <span className="font-medium text-[#73796F]">{totalPages} Slides</span>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={isAtStart}
            aria-label="Previous brochure slides"
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${
              isAtStart
                ? 'bg-white/60 border-[#E7E5DA] text-[#B0B5AB] cursor-not-allowed opacity-50'
                : 'bg-white border-[#E7E5DA] text-[#303D32] hover:bg-[#F3F5EC] hover:text-[#42634B] hover:border-[#8FA58A] shadow-2xs hover:scale-105 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={isAtEnd}
            aria-label="Next brochure slides"
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${
              isAtEnd
                ? 'bg-white/60 border-[#E7E5DA] text-[#B0B5AB] cursor-not-allowed opacity-50'
                : 'bg-white border-[#E7E5DA] text-[#303D32] hover:bg-[#F3F5EC] hover:text-[#42634B] hover:border-[#8FA58A] shadow-2xs hover:scale-105 active:scale-95'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track Container */}
      <div
        className="overflow-hidden relative rounded-2xl touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out -mx-2 sm:-mx-2.5"
          style={{
            transform: `translateX(-${activeIndex * (100 / visibleSlides)}%)`
          }}
        >
          {pages.map((sheet) => (
            <div
              key={sheet.page}
              className="px-2 sm:px-2.5 shrink-0"
              style={{
                width: `${100 / visibleSlides}%`
              }}
            >
              <Link
                to="/gallery"
                onClick={(e) => {
                  if (isSwiping) {
                    e.preventDefault();
                  }
                }}
                className="group relative block rounded-2xl overflow-hidden border border-[#E7E5DA] shadow-xs hover:shadow-lg transition-all duration-300 aspect-9/16 bg-[#F3F5EC]"
              >
                {/* Brochure Slide Image */}
                <img
                  src={sheet.src}
                  alt={sheet.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                />

                {/* Top Corner Page Number Badge */}
                <div className="absolute top-2.5 left-2.5 z-10 bg-white/95 backdrop-blur-xs text-[#303D32] text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border border-[#E7E5DA] shadow-2xs">
                  Page {sheet.page}
                </div>

                {/* Hover / Tap Zoom Action Pill */}
                <div className="absolute top-2.5 right-2.5 z-10 w-6 h-6 rounded-full bg-white/90 text-[#42634B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-2xs">
                  <Eye className="w-3.5 h-3.5" />
                </div>

                {/* Title Overlay: Accessible always on small screens, smooth hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-3.5 transition-opacity duration-300 opacity-90 sm:opacity-0 sm:group-hover:opacity-100">
                  <span className="text-[11px] text-white font-medium leading-snug line-clamp-2 drop-shadow-sm">
                    {sheet.title}
                  </span>
                  <span className="text-[9px] text-[#C59A56] font-semibold uppercase tracking-wider mt-1 flex items-center gap-1">
                    Click to enlarge →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dot Navigation */}
      <div className="flex items-center justify-center gap-1.5 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to brochure slide page ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                isActive
                  ? 'w-6 h-2 bg-[#42634B]'
                  : 'w-2 h-2 bg-[#E7E5DA] hover:bg-[#8FA58A]'
              }`}
            />
          );
        })}
      </div>

    </div>
  );
}
