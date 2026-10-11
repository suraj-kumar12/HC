import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryLightbox({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onPrev,
  onNext
}) {
  // Keyboard event listener for Escape, Left arrow, Right arrow
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Backdrop click */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Top bar controls */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white px-2 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[#E5C66C] bg-white/10 px-3 py-1 rounded-full border border-white/20">
            {currentImage.category || 'Shangarh'}
          </span>
          <span className="text-sm text-white/70">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5C66C] cursor-pointer"
          aria-label="Close image lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative z-10 max-w-5xl max-h-[85vh] p-4 flex flex-col items-center justify-center">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black/40 flex items-center justify-center">
          <img
            src={currentImage.src}
            alt={currentImage.title || 'Shangarh Gallery Image'}
            className="max-h-[72vh] max-w-full object-contain rounded-xl select-none"
          />
        </div>

        {/* Caption bar */}
        {(currentImage.title || currentImage.description) && (
          <div className="mt-4 text-center max-w-2xl text-white px-4">
            <h4 className="font-serif text-lg sm:text-xl font-medium text-white">
              {currentImage.title}
            </h4>
            {currentImage.description && (
              <p className="text-xs sm:text-sm text-white/70 mt-1 font-light">
                {currentImage.description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E5C66C] cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E5C66C] cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
}
