import React, { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import GalleryLightbox from '../components/GalleryLightbox';
import Button from '../components/Button';
import { GALLERY_DATA, GALLERY_CATEGORIES } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Filter gallery items
  const filteredImages = activeCategory === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((img) => img.category === activeCategory);

  const openLightbox = (indexInFiltered) => {
    setCurrentIdx(indexInFiltered);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-24 sm:py-32 bg-[#142820] text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/images/real-temple-meadow.jpg"
            alt="Pristine alpine meadows and temple of Shangarh"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142820] via-[#142820]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-widest text-[#E5C66C] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C66C]" />
            <span>Retreat Visual Catalog</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-4 leading-tight">
            Memories in the Pines
          </h1>

          <p className="text-base sm:text-xl text-[#CFDDD3] font-light max-w-2xl mx-auto leading-relaxed">
            Real captured moments from our girls group retreat in Shangarh, featuring cozy homestay spaces, wood painting sessions, waterfall treks, and the official brochure.
          </p>
        </div>
      </section>


      {/* 2. CATEGORY FILTER BAR */}
      <section className="py-6 bg-white border-b border-[#E8E1D7] sticky top-[69px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1E3A2F] text-white shadow-md'
                    : 'bg-[#FAF8F5] text-[#4A5D53] border border-[#CFDDD3] hover:border-[#1E3A2F] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* 3. RESPONSIVE IMAGE GRID */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        
        <div className="mb-8 flex items-center justify-between text-xs text-[#6B917E] px-1">
          <span>Showing {filteredImages.length} authentic images & documents</span>
          <span>Click any image to enlarge in full screen</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => {
            const isBrochure = img.category === "Official Brochure";

            return (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className={`group relative rounded-3xl overflow-hidden bg-white border border-[#CFDDD3] shadow-sm hover:shadow-xl hover:shadow-[#1E3A2F]/15 transition-all duration-300 cursor-pointer flex flex-col ${
                  isBrochure ? 'aspect-9/16 sm:aspect-3/4' : 'aspect-4/3'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle category badge on top */}
                <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                  {img.category}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md text-white flex items-center justify-center self-end mb-auto">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div className="text-white text-left">
                    <h3 className="font-serif text-base sm:text-lg font-semibold leading-snug">
                      {img.title}
                    </h3>
                    <p className="text-xs text-white/80 mt-1 line-clamp-2 font-light">
                      {img.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state fallback */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-[#6B917E]">
            <p>No images found in this category.</p>
          </div>
        )}
      </section>


      {/* 4. LIGHTBOX MODAL */}
      <GalleryLightbox
        images={filteredImages}
        currentIndex={currentIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />


      {/* 5. FOOTER INVITATION */}
      <section className="py-20 bg-[#1E3A2F] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-4">
            Experience These Views Firsthand
          </h2>
          <p className="text-sm sm:text-base text-[#CFDDD3] mb-8 font-light">
            Our intimate Shangarh retreat brings together 10-14 women for 3 unforgettable days of wellness and sisterhood.
          </p>

          <Button to="/book" variant="gold" size="lg" icon={Sparkles}>
            Book Your Spot (₹9,499*)
          </Button>
        </div>
      </section>

    </div>
  );
}
