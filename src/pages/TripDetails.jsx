import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Check,
  X,
  Sparkles,
  ArrowRight,
  Bus,
  Plane,
  Train,
  Backpack
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import FAQAccordion from '../components/FAQAccordion';
import GalleryLightbox from '../components/GalleryLightbox';
import { TRIP_CONFIG } from '../data/tripData';

export default function TripDetails() {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [brochureLightboxOpen, setBrochureLightboxOpen] = useState(false);
  const [currentBrochureIdx, setCurrentBrochureIdx] = useState(0);

  const openBrochureLightbox = (idx) => {
    setCurrentBrochureIdx(idx);
    setBrochureLightboxOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-24 sm:py-32 bg-[#142820] text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/images/real-waterfall-traveler.jpg"
            alt="Barshangarh waterfall hike"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142820] via-[#142820]/75 to-black/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-widest text-[#E5C66C] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C66C]" />
            <span>Complete Trip Dossier & Original Brochure</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-4 leading-tight">
            Shangarh Girls Retreat Dossier
          </h1>

          <p className="text-base sm:text-xl text-[#CFDDD3] font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Complete day-by-day expedition schedule, authentic wooden homestay gallery, transport logistics, and official 14-page brochure sheets.
          </p>

          {/* Quick info bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 bg-black/45 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 max-w-3xl mx-auto text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#E5C66C]" />
              <span>3 Days / 2 Nights + Overnight Bus</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E5C66C]" />
              <span>Sainj Valley, Kullu, HP</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#E5C66C]" />
              <span>10-14 Girls Only</span>
            </div>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-[#E5C66C] text-base">₹{TRIP_CONFIG.basePrice.toLocaleString()}*</span>
              <span className="text-[10px] text-white/60">Double Sharing</span>
            </div>
          </div>
        </div>
      </section>


      {/* 2. SUB-NAVIGATION TABS */}
      <div className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-[#CFDDD3] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-x-auto py-2.5 gap-2 sm:gap-3 no-scrollbar">
          {[
            { id: 'itinerary', label: 'Detailed Itinerary' },
            { id: 'stay', label: 'Our Stay & Food' },
            { id: 'inclusions', label: 'Inclusions & Exclusions' },
            { id: 'logistics', label: 'Transport & Packing' },
            { id: 'brochure', label: 'Official Brochure (14 Slides)' },
            { id: 'faqs', label: 'Trip FAQs' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#1E3A2F] text-white shadow-sm'
                  : 'text-[#4A5D53] hover:text-[#142820] hover:bg-[#FAF8F5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>


      {/* 3. TAB CONTENT SECTIONS */}
      <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TAB 1: ITINERARY */}
        {activeTab === 'itinerary' && (
          <div className="space-y-12 animate-fade-in text-left">
            <SectionHeading
              tag="Day-by-Day Expedition"
              title="A Mindful Daily Flow in the Mountains"
              subtitle="Planned to give you the perfect balance of waterfalls, temples, painting sessions, and campfire music."
              align="center"
            />

            <div className="space-y-10 mt-12">
              {TRIP_CONFIG.itinerary.map((day) => (
                <div
                  key={day.day}
                  className="bg-white rounded-3xl border border-[#CFDDD3] overflow-hidden shadow-lg shadow-[#1E3A2F]/5 grid grid-cols-1 lg:grid-cols-12"
                >
                  {/* Photo column */}
                  <div className="lg:col-span-5 relative min-h-72 lg:min-h-full">
                    <img
                      src={day.image}
                      alt={day.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#1E3A2F] text-white px-3.5 py-1 rounded-full text-xs font-semibold shadow-md">
                      {day.day} • {day.date}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-black/65 backdrop-blur-md p-3 rounded-xl text-white text-xs">
                      <span className="text-[#E5C66C] font-semibold block uppercase tracking-wider text-[10px]">
                        Focus of the Day
                      </span>
                      {day.theme}
                    </div>
                  </div>

                  {/* Day breakdown */}
                  <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#6B917E] font-semibold">
                        {day.day} ({day.date}) Schedule
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#142820] mt-1 mb-3">
                        {day.title}
                      </h3>
                      <p className="text-sm text-[#4A5D53] leading-relaxed mb-6">
                        {day.description}
                      </p>

                      <div className="border-t border-[#FAF8F5] pt-5 space-y-3.5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#142820] mb-3">
                          Detailed Timeline:
                        </h4>
                        {day.schedule.map((item) => (
                          <div key={item.time} className="flex items-start gap-3 text-xs sm:text-sm">
                            <span className="font-mono text-xs font-semibold text-[#1E3A2F] bg-[#E7EEE9] px-2.5 py-1 rounded-md shrink-0">
                              {item.time}
                            </span>
                            <span className="text-[#4A5D53] leading-relaxed mt-0.5">
                              {item.activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#E8E1D7] flex items-center justify-between text-xs text-[#6B917E]">
                      <span>Double Sharing Homestay in Shangarh</span>
                      <Button to="/book" variant="ghost" size="sm" icon={ArrowRight}>
                        Book Spot
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: STAY & FOOD */}
        {activeTab === 'stay' && (
          <div className="space-y-12 animate-fade-in text-left">
            <SectionHeading
              tag="Authentic Mountain Living"
              title="Where You Will Rest, Nourish & Breathe"
              subtitle="Explore the 8 real photos of our traditional Kathkuni wooden cottage."
              align="center"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-12">
              {/* Real Homestay Photos Grid */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TRIP_CONFIG.accommodation.gallery.map((img) => (
                  <div key={img.url} className="rounded-2xl overflow-hidden shadow-md aspect-4/3 border border-[#CFDDD3] group relative">
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] text-white font-medium line-clamp-1">{img.caption}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs uppercase tracking-widest text-[#6B917E] font-semibold">
                  Handcrafted Himalayan Comfort
                </span>
                <h3 className="font-serif text-3xl font-semibold text-[#142820]">
                  {TRIP_CONFIG.accommodation.name}
                </h3>
                <p className="text-sm text-[#4A5D53] leading-relaxed">
                  {TRIP_CONFIG.accommodation.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#142820]">
                    Homestay Features & Amenities:
                  </h4>
                  {TRIP_CONFIG.accommodation.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-[#4A5D53]">
                      <div className="w-4 h-4 rounded-full bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#6B917E]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-white rounded-2xl border border-[#CFDDD3] text-xs text-[#5C6E64] space-y-2">
                  <strong className="text-[#142820] block">Double Sharing Setup:</strong>
                  <p>
                    All girls share cozy rooms on double-sharing basis with attached washrooms, continuous running hot water geysers, clean plush duvets, and heated blankets.
                  </p>
                </div>
              </div>
            </div>

            {/* Meals details */}
            <div className="mt-16 bg-white rounded-3xl border border-[#CFDDD3] p-8 sm:p-12 shadow-lg shadow-[#1E3A2F]/5">
              <div className="max-w-3xl">
                <span className="text-xs uppercase tracking-widest text-[#6B917E] font-semibold">
                  Farm-to-Table Meals
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#142820] mt-1 mb-4">
                  Wholesome Pahadi & Vegetarian Dining
                </h3>
                <p className="text-sm text-[#4A5D53] leading-relaxed mb-6">
                  Freshly cooked meals prepared with love at our property kitchen using organic village ingredients:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E1D7]">
                    <strong className="text-[#142820] block mb-1">Day 1 Meals</strong>
                    <span>Warm breakfast at property upon arrival, home-style pahadi lunch, and comforting dinner.</span>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E1D7]">
                    <strong className="text-[#142820] block mb-1">Day 2 Meals</strong>
                    <span>Breakfast after morning yoga, afternoon cafe visit snacks, and celebration dinner by the bonfire.</span>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E1D7]">
                    <strong className="text-[#142820] block mb-1">Day 3 & Teas</strong>
                    <span>Wholesome early breakfast before checkout. Morning & evening pahadi herbal teas served daily.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INCLUSIONS & EXCLUSIONS */}
        {activeTab === 'inclusions' && (
          <div className="space-y-12 animate-fade-in text-left">
            <SectionHeading
              tag="Full Disclosure"
              title="Package Inclusions & Exclusions"
              subtitle="Everything aligned with the official brochure pricing of INR 9,499 per person."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-3xl border border-[#CFDDD3] p-8 sm:p-10 shadow-lg shadow-[#1E3A2F]/5">
                <h3 className="font-serif text-2xl font-semibold text-[#142820] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#6B917E]" />
                  </div>
                  Package Inclusions
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm text-[#4A5D53]">
                  {TRIP_CONFIG.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#6B917E]" />
                      </div>
                      <span className="leading-relaxed">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FAF8F5] rounded-3xl border border-[#E8E1D7] p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#142820] mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F4EFE6] text-[#7A6A55] flex items-center justify-center">
                      <X className="w-5 h-5" />
                    </div>
                    Package Exclusions
                  </h3>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-[#5C6E64]">
                    {TRIP_CONFIG.exclusions.map((exc) => (
                      <li key={exc} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#E8E1D7] text-[#5C6E64] flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3" />
                        </div>
                        <span className="leading-relaxed">{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 p-5 bg-white rounded-2xl border border-[#E8E1D7] text-xs text-[#6B917E] space-y-2">
                  <strong className="text-[#142820] block">Official Booking Policy:</strong>
                  <p>• 50% advance deposit to reserve your seat (strictly non-refundable).</p>
                  <p>• Remaining balance to be cleared at least 5 days prior to trip departure date.</p>
                  <p>• Mandatory Government Photo ID (Aadhar / Passport / Voter ID) required.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: HOW TO REACH & PACKING */}
        {activeTab === 'logistics' && (
          <div className="space-y-12 animate-fade-in text-left">
            <SectionHeading
              tag="Preparation & Transport"
              title="How to Reach & What to Pack"
              subtitle="Travel comfortably from Delhi or Chandigarh with included AC transport."
              align="center"
            />

            {/* How to Reach Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {TRIP_CONFIG.logistics.howToReach.map((route, i) => (
                <div key={route.mode} className="bg-white rounded-3xl border border-[#CFDDD3] p-6 sm:p-8 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center mb-5">
                    {i === 0 ? <Bus className="w-6 h-6 text-[#6B917E]" /> : i === 1 ? <Plane className="w-6 h-6 text-[#6B917E]" /> : <Train className="w-6 h-6 text-[#6B917E]" />}
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[#142820] mb-2">
                    {route.mode}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A5D53] leading-relaxed">
                    {route.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Packing List */}
            <div className="bg-white rounded-3xl border border-[#CFDDD3] p-8 sm:p-10 shadow-lg shadow-[#1E3A2F]/5">
              <h3 className="font-serif text-2xl font-semibold text-[#142820] mb-6 flex items-center gap-3">
                <Backpack className="w-6 h-6 text-[#C99E32]" />
                Recommended Packing Essentials
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {TRIP_CONFIG.logistics.packingList.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E1D7] text-xs sm:text-sm text-[#4A5D53]">
                    <Check className="w-4 h-4 text-[#6B917E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: OFFICIAL BROCHURE (14 SLIDES) */}
        {activeTab === 'brochure' && (
          <div className="space-y-12 animate-fade-in text-left">
            <SectionHeading
              tag="Original Presentation"
              title="Official 14-Page Retreat Brochure"
              subtitle="Click on any page to open in full screen view."
              align="center"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-12">
              {TRIP_CONFIG.brochurePages.map((sheet, idx) => (
                <div
                  key={sheet.page}
                  onClick={() => openBrochureLightbox(idx)}
                  className="group relative rounded-2xl overflow-hidden border border-[#CFDDD3] shadow-sm hover:shadow-xl transition-all aspect-9/16 bg-white cursor-pointer"
                >
                  <img
                    src={sheet.src}
                    alt={sheet.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-md font-mono">
                    Page {sheet.page}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[11px] text-white font-medium leading-tight">
                      {sheet.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox for Brochure */}
            <GalleryLightbox
              images={TRIP_CONFIG.brochurePages.map((b) => ({
                id: `b-${b.page}`,
                src: b.src,
                title: b.title,
                category: `Page ${b.page} of 14`,
                description: "Official Healing Circle Shangarh Girls Trip Brochure"
              }))}
              currentIndex={currentBrochureIdx}
              isOpen={brochureLightboxOpen}
              onClose={() => setBrochureLightboxOpen(false)}
              onPrev={() => setCurrentBrochureIdx((prev) => (prev === 0 ? TRIP_CONFIG.brochurePages.length - 1 : prev - 1))}
              onNext={() => setCurrentBrochureIdx((prev) => (prev === TRIP_CONFIG.brochurePages.length - 1 ? 0 : prev + 1))}
            />
          </div>
        )}

        {/* TAB 6: FAQS */}
        {activeTab === 'faqs' && (
          <div className="space-y-12 animate-fade-in text-left">
            <SectionHeading
              tag="Clarifications"
              title="Frequently Asked Questions"
              subtitle="Everything answered across safety, food, rooms, and payments."
              align="center"
            />

            <div className="mt-12">
              <FAQAccordion showFilter={true} />
            </div>
          </div>
        )}

      </div>


      {/* 4. BOTTOM BOOKING CTA */}
      <section className="py-20 bg-[#1E3A2F] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#E5C66C] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join the Circle</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-4">
            Ready to Experience Shangarh?
          </h2>
          <p className="text-sm sm:text-base text-[#CFDDD3] mb-8 font-light">
            Check upcoming batch dates and calculate your estimated total with real-time feedback.
          </p>

          <Button to="/book" variant="gold" size="lg" icon={Sparkles}>
            Reserve Your Spot (₹9,499*)
          </Button>
        </div>
      </section>

    </div>
  );
}
