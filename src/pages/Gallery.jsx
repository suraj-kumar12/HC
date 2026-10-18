import { useState } from 'react';
import { Sparkles, Maximize2, MessageCircle } from 'lucide-react';
import GalleryLightbox from '../components/GalleryLightbox';
import Button from '../components/Button';
import Logo from '../components/Logo';
import SEO from '../components/SEO';
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

  const whatsappGalleryUrl = `https://wa.me/918586020962?text=${encodeURIComponent(
    "Hi Healing Circle team! I'm browsing the Shangarh retreat gallery and would love more details about upcoming batches."
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFCF6] text-[#303D32]">
      <SEO
        title="Retreat Photo Gallery & Brochure | Healing Circle Shangarh"
        description="Browse real photographs and the official 14-page brochure of our Shangarh girls retreat. Scenic alpine meadows, wooden homestay spaces, waterfall treks, and unforgettable memories."
        canonical="/gallery"
        image="/images/real-group-mountain.jpg"
      />
      
      {/* 1. HERO HEADER - BRIGHT LIGHT THEME */}
      <section className="relative py-24 sm:py-32 overflow-hidden text-center border-b border-[#E7E5DA]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/real-temple-meadow.jpg"
            alt="Pristine alpine meadows and temple of Shangarh"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFCF6]/90 via-[#FFFCF6]/75 to-[#FFFCF6]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E7E5DA] text-xs uppercase tracking-widest text-[#42634B] font-semibold mb-6 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A56]" />
            <span>Retreat Visual Catalog</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-4 leading-tight text-[#303D32]">
            Memories in the Pines
          </h1>

          <p className="text-base sm:text-xl text-[#73796F] font-normal max-w-2xl mx-auto leading-relaxed">
            Real captured moments from our girls group retreat in Shangarh, featuring cozy homestay spaces, wood painting sessions, waterfall treks, and the official brochure.
          </p>
        </div>
      </section>


      {/* 2. CATEGORY FILTER BAR */}
      <section className="py-6 bg-white/95 backdrop-blur-md border-b border-[#E7E5DA] sticky top-[69px] z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#42634B] text-white shadow-xs'
                    : 'bg-[#F3F5EC] text-[#73796F] border border-[#E7E5DA] hover:border-[#8FA58A] hover:text-[#303D32]'
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
        
        <div className="mb-8 flex items-center justify-between text-xs text-[#73796F] px-1">
          <span className="font-medium">Showing {filteredImages.length} authentic images & documents</span>
          <span className="hidden sm:inline">Click any image to enlarge in full screen</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => {
            const isBrochure = img.category === "Official Brochure";

            return (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className={`group relative rounded-3xl overflow-hidden bg-white border border-[#E7E5DA] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col ${
                  isBrochure ? 'aspect-9/16 sm:aspect-3/4' : 'aspect-4/3'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Category badge on top */}
                <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-md text-[#303D32] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#E7E5DA] shadow-2xs">
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
          <div className="text-center py-20 text-[#73796F]">
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


      {/* 5. FOOTER INVITATION - LIGHT NATURE BANNER WITH WHATSAPP */}
      <section className="py-20 bg-gradient-to-r from-[#F3F5EC] via-[#FFFCF6] to-[#F3F5EC] text-[#303D32] text-center border-t border-[#E7E5DA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-5 flex justify-center">
            <div className="bg-white p-2.5 px-6 rounded-2xl shadow-sm border border-[#E7E5DA] inline-flex">
              <Logo className="max-w-[170px] max-h-14" />
            </div>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4 text-[#303D32]">
            Experience These Views Firsthand
          </h2>
          <p className="text-sm sm:text-base text-[#73796F] mb-8 font-normal leading-relaxed">
            Our Shangarh retreat brings together women for 3 nights of wellness, nature, and unforgettable memories in the Himalayan pines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/book" variant="primary" size="lg" icon={Sparkles}>
              Book Your Spot (₹6,999*)
            </Button>
            <a
              href={whatsappGalleryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm text-[#0F5132] bg-[#E8F8EE] border border-[#A3E6BA] hover:bg-[#D4F4DF] transition-all duration-200 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>WhatsApp Us (+91 8586020962)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
