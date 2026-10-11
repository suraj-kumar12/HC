import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  Users,
  Check,
  X,
  ArrowRight,
  ShieldCheck,
  Heart,
  Home as HomeIcon,
  Quote,
  Eye,
  FileText
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import TripCard from '../components/TripCard';
import FAQAccordion from '../components/FAQAccordion';
import Logo from '../components/Logo';
import { TRIP_CONFIG } from '../data/tripData';
import { TESTIMONIALS_DATA } from '../data/testimonials';

export default function Home() {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Real Shangarh Meadow & Temple Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/real-temple-meadow.jpg"
            alt="Sacred Shangchul Mahadev Temple in the lush Shangarh Meadow"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Multi-layered gradient for rich text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1913] via-[#142820]/60 to-black/35" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#142820]/25 to-[#0C1913]/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center text-white flex flex-col items-center">
          
          {/* Official Brand Logo */}
          <div className="mb-5 animate-fade-in">
            <div className="bg-[#FAF8F5]/95 backdrop-blur-md px-5 sm:px-7 py-2.5 sm:py-3 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/40 inline-flex items-center justify-center">
              <Logo className="max-w-[200px] sm:max-w-[240px] max-h-16 sm:max-h-20" />
            </div>
          </div>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs uppercase tracking-widest text-[#E5C66C] mb-6 shadow-md animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C66C]" />
            <span>Healing Circle • Shangarh Girls Trip • 10-14 Women Only</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.08] mb-6 text-white text-shadow-sm max-w-4xl">
            Sisterhood, Stillness & Alpine Meadows
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-[#FAF8F5]/90 font-light max-w-2xl leading-relaxed mb-8">
            An intimate girls' group travel & wellness retreat in the sacred pine forests of Shangarh, Sainj Valley, Himachal Pradesh.
          </p>

          {/* Key Trip Meta Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/90 mb-10 bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#E5C66C]" />
              <span>Featured Batch: <strong>{TRIP_CONFIG.batches[0].dates}</strong></span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#E5C66C]" />
              <span>{TRIP_CONFIG.groupSize}</span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div className="flex items-center gap-2">
              <span className="text-[#E5C66C] font-serif font-bold text-base sm:text-lg">
                ₹{TRIP_CONFIG.basePrice.toLocaleString()}*
              </span>
              <span className="text-[11px] text-white/70">Double Sharing</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              to="/book"
              variant="gold"
              size="lg"
              className="w-full sm:w-auto shadow-xl hover:shadow-2xl font-semibold"
              icon={Sparkles}
            >
              Book Your Spot (₹9,499)
            </Button>

            <Button
              to="/trip-details"
              variant="outlineLight"
              size="lg"
              className="w-full sm:w-auto backdrop-blur-sm"
              icon={ArrowRight}
            >
              View Full Itinerary & Stay
            </Button>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 font-light">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E5C66C]" /> AC Bus & Taxi Included from Delhi/Chandigarh
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#E5C66C]" /> 100% Solo-Traveler Friendly & Safe
            </span>
            <span className="flex items-center gap-1.5">
              <HomeIcon className="w-4 h-4 text-[#E5C66C]" /> Authentic Kathkuni Wooden Homestay
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60">
          <span className="text-[10px] uppercase tracking-widest">Explore</span>
          <div className="w-4 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#E5C66C] rounded-full animate-bounce" />
          </div>
        </div>
      </section>


      {/* 2. STATS & TRUST STRIP */}
      <section className="bg-[#142820] text-white py-8 border-y border-[#294D3F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#294D3F]">
            {TRIP_CONFIG.stats.map((s, idx) => (
              <div key={s.label} className={idx > 1 ? 'pt-4 md:pt-0' : ''}>
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E5C66C] block">
                  {s.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-white/90 font-medium block mt-1">
                  {s.label}
                </span>
                <span className="text-[11px] text-[#A8C2B6] block">
                  {s.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 3. ABOUT THE EXPERIENCE SECTION WITH REAL PHOTOGRAPHY */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Collage with Real Photos (Col 1-6) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1E3A2F]/15 border-4 border-white aspect-4/3">
                <img
                  src="/images/real-group-mountain.jpg"
                  alt="Real photo of 10 girls smiling together on the Shangarh mountain ridge"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping secondary real photo */}
              <div className="hidden sm:block absolute -bottom-10 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3">
                <img
                  src="/images/real-group-bridge.jpg"
                  alt="Girls cheering on the stone bridge over mountain stream"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge card */}
              <div className="absolute -top-6 -left-4 sm:left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#CFDDD3] max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-[#C99E32] fill-current" />
                  <span className="text-xs font-semibold text-[#142820]">100% Women Safe Circle</span>
                </div>
                <p className="text-[11px] text-[#4A5D53] leading-snug">
                  "No pretense. Just open skies, pine forest scents, and sisters who listen."
                </p>
              </div>
            </div>

            {/* Narrative text (Col 7-12) */}
            <div className="lg:col-span-6 text-left">
              <SectionHeading
                tag="The Healing Circle Way"
                title="Escape into the शांत & Untouched Beauty of Shangarh"
                subtitle="Slow down in an unhurried corner of the Great Himalayan National Park."
                align="left"
              />

              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#4A5D53] leading-relaxed">
                <p>
                  From relaxing in cozy traditional homestays and exploring the lush green Shangarh meadows to chasing hidden cascades like Barshangarh and Rupi Raila waterfalls, this trip is designed around slowing down and reconnecting.
                </p>
                <p>
                  Add a touch of gentle mountain adventure with scenic forest trails, experience authentic village life, and enjoy evenings gathered around warm bonfires under a sky brilliant with stars.
                </p>
                <p>
                  Wake up to crisp deodar-scented air, spend your days walking through pine forests and open valleys, and paint your memories on handcrafted wooden planks.
                </p>
              </div>

              {/* Highlights check points */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#142820]">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6B917E]" />
                  </div>
                  <span>Shangarh Meadows & Temple</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6B917E]" />
                  </div>
                  <span>Barshangarh & Rupi Raila Falls</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6B917E]" />
                  </div>
                  <span>Handcrafted Wood Plank Painting</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6B917E]" />
                  </div>
                  <span>Bonfire, Dance & Music Nights</span>
                </div>
              </div>

              <div className="mt-10">
                <Button to="/about" variant="primary" size="md" icon={ArrowRight}>
                  Read Our Story & Philosophy
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 4. ACTIVITIES SECTION */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6]/70 border-t border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Mindful Experiences"
            title="Curated Activities in the Valley"
            subtitle="Every experience is crafted to nourish your spirit, inspire your creativity, and build real sisterhood."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {TRIP_CONFIG.activities.map((act) => (
              <TripCard
                key={act.id}
                image={act.image}
                title={act.title}
                category={act.category}
                description={act.description}
                duration={act.duration}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/trip-details" variant="outline" size="md" icon={ArrowRight}>
              Explore Day-by-Day Schedule
            </Button>
          </div>
        </div>
      </section>


      {/* 5. DAY-BY-DAY ITINERARY PREVIEW WITH REAL PHOTOS */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Curated Journey"
            title="Day-by-Day Daily Flow"
            subtitle="A thoughtful blend of group excursions, creative workshops, and relaxing leisure."
          />

          {/* Day selection tabs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {TRIP_CONFIG.itinerary.map((item, idx) => (
              <button
                key={item.day}
                type="button"
                onClick={() => setSelectedDay(idx)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedDay === idx
                    ? 'bg-[#1E3A2F] text-white shadow-md'
                    : 'bg-white text-[#4A5D53] border border-[#CFDDD3] hover:border-[#1E3A2F]'
                }`}
              >
                {item.day}: {item.theme}
              </button>
            ))}
          </div>

          {/* Active Day Detail Card */}
          <div className="mt-10 max-w-5xl mx-auto bg-white rounded-3xl border border-[#CFDDD3] overflow-hidden shadow-xl shadow-[#1E3A2F]/5 animate-fade-in text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Day Image */}
              <div className="lg:col-span-5 relative min-h-64 lg:min-h-full bg-[#E7EEE9]">
                <img
                  src={TRIP_CONFIG.itinerary[selectedDay].image}
                  alt={TRIP_CONFIG.itinerary[selectedDay].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#1E3A2F] text-white px-3.5 py-1 rounded-full text-xs font-semibold">
                  {TRIP_CONFIG.itinerary[selectedDay].day} ({TRIP_CONFIG.itinerary[selectedDay].date})
                </div>
              </div>

              {/* Day Details */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#6B917E] font-semibold">
                    {TRIP_CONFIG.itinerary[selectedDay].theme}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#142820] mt-1 mb-3">
                    {TRIP_CONFIG.itinerary[selectedDay].title}
                  </h3>
                  <p className="text-sm text-[#4A5D53] leading-relaxed mb-6">
                    {TRIP_CONFIG.itinerary[selectedDay].description}
                  </p>

                  {/* Schedule bullet list */}
                  <div className="space-y-3 border-t border-[#FAF8F5] pt-4">
                    {TRIP_CONFIG.itinerary[selectedDay].schedule.map((slot) => (
                      <div key={slot.time} className="flex items-start gap-3 text-xs sm:text-sm">
                        <span className="font-semibold text-[#1E3A2F] bg-[#E7EEE9] px-2.5 py-1 rounded-md shrink-0 font-mono text-[11px]">
                          {slot.time}
                        </span>
                        <span className="text-[#4A5D53] mt-0.5 leading-snug">
                          {slot.activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E8E1D7] flex items-center justify-between">
                  <span className="text-xs text-[#6B917E]">
                    Step {selectedDay + 1} of {TRIP_CONFIG.itinerary.length}
                  </span>
                  <Link
                    to="/trip-details"
                    className="text-xs sm:text-sm font-semibold text-[#1E3A2F] hover:text-[#C99E32] inline-flex items-center gap-1"
                  >
                    View Full Schedule & Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* 6. ACCOMMODATION SPOTLIGHT WITH REAL HOMESTAY PHOTOS */}
      <section className="py-20 sm:py-28 bg-[#1E3A2F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            tag="Authentic Living"
            title={TRIP_CONFIG.accommodation.name}
            subtitle={TRIP_CONFIG.accommodation.tagline}
            light={true}
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
            
            {/* Gallery grid with real homestay photos */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {TRIP_CONFIG.accommodation.gallery.slice(0, 6).map((img, i) => (
                <div
                  key={img.url}
                  className={`relative rounded-2xl overflow-hidden shadow-lg border border-white/10 group ${
                    i === 0 ? 'col-span-2 aspect-16/10' : 'aspect-4/3'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[11px] text-white/95 font-medium line-clamp-1">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Description & Features */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                {TRIP_CONFIG.accommodation.type}
              </h3>
              <p className="text-sm text-[#CFDDD3] leading-relaxed">
                {TRIP_CONFIG.accommodation.description}
              </p>

              <div className="space-y-3 pt-2">
                {TRIP_CONFIG.accommodation.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-[#FAF8F5]/90">
                    <div className="w-5 h-5 rounded-full bg-[#294D3F] text-[#E5C66C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-3">
                <Button to="/gallery" variant="gold" size="md" icon={ArrowRight}>
                  View All Retreat Photos
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 7. OFFICIAL BROCHURE PREVIEW STRIP */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E8E1D7]">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EEE9] text-xs uppercase tracking-wider text-[#1E3A2F] font-semibold mb-2">
                <FileText className="w-3.5 h-3.5 text-[#C99E32]" />
                <span>Original Documents</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#142820]">
                Official 14-Page Retreat Brochure
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5D53] mt-1">
                Browse through all 14 official itinerary slides, stay sheets, pricing breakdown, and trip terms.
              </p>
            </div>
            <Button to="/gallery" variant="outline" size="sm" icon={Eye}>
              View All 14 Slides in Lightbox
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mt-8">
            {TRIP_CONFIG.brochurePages.slice(0, 7).map((sheet) => (
              <Link
                key={sheet.page}
                to="/gallery"
                className="group relative rounded-xl overflow-hidden border border-[#CFDDD3] shadow-xs hover:shadow-md transition-all aspect-9/16 bg-[#FAF8F5]"
              >
                <img
                  src={sheet.src}
                  alt={sheet.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] text-white font-medium leading-tight line-clamp-2">
                    {sheet.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* 8. INCLUSIONS & EXCLUSIONS */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Transparency & Care"
            title="What's Included & Excluded"
            subtitle="Clear, honest details directly aligned with the official brochure."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Inclusions Box */}
            <div className="bg-white rounded-3xl border border-[#CFDDD3] p-6 sm:p-10 shadow-lg shadow-[#1E3A2F]/5">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8E1D7]">
                <div className="w-10 h-10 rounded-full bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center font-bold">
                  <Check className="w-5 h-5 text-[#6B917E]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#142820]">
                    What's Included
                  </h3>
                  <span className="text-xs text-[#6B917E]">All-inclusive travel & wellness package</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#4A5D53]">
                {TRIP_CONFIG.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#6B917E]" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions Box */}
            <div className="bg-[#FAF8F5] rounded-3xl border border-[#E8E1D7] p-6 sm:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8E1D7]">
                  <div className="w-10 h-10 rounded-full bg-[#F4EFE6] text-[#7A6A55] flex items-center justify-center font-bold">
                    <X className="w-5 h-5 text-[#8A7966]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#142820]">
                      What's Excluded
                    </h3>
                    <span className="text-xs text-[#7A6A55]">Plan your personal budget smoothly</span>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-[#5C6E64]">
                  {TRIP_CONFIG.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#E8E1D7] text-[#5C6E64] flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-4 bg-white rounded-2xl border border-[#E8E1D7] text-xs text-[#6B917E]">
                <strong>Official Booking Terms:</strong> 50% advance deposit to reserve your seat. Remaining balance cleared at least 5 days prior to trip departure.
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 9. PRICING CARD & BATCHES */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6]/70 border-t border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Investment in Yourself"
            title="Retreat Pricing & Dates"
            subtitle="Transparent rate for 3 Days / 2 Nights in Shangarh + overnight travel."
          />

          <div className="mt-14 max-w-4xl mx-auto bg-white rounded-3xl border border-[#CFDDD3] shadow-2xl shadow-[#1E3A2F]/10 overflow-hidden text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Pricing breakdown (Left) */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E7EEE9] text-[#1E3A2F]">
                      All-Inclusive Package
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F5E2A8]/50 text-[#8C6D1F]">
                      Double Sharing
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-semibold text-[#142820] mb-2">
                    Shangarh Circle Retreat
                  </h3>
                  <p className="text-sm text-[#6B917E] mb-6">
                    3D / 2N in Shangarh • Ex-Delhi / Chandigarh AC Bus & Mountain Taxi
                  </p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1E3A2F]">
                      ₹{TRIP_CONFIG.basePrice.toLocaleString()}*
                    </span>
                    <span className="text-sm text-[#4A5D53]">
                      / person (50% advance deposit to confirm)
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#4A5D53] mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#6B917E]" /> AC Bus & Mountain Taxi (Delhi / Chandigarh)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#6B917E]" /> 2 Nights Boutique Wooden Homestay (Double Sharing)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#6B917E]" /> All Specified Breakfasts, Lunch & Dinners
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#6B917E]" /> Barshangarh & Rupi Raila Waterfall Treks
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#6B917E]" /> Wood Plank Painting Session + Art Materials
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#6B917E]" /> Nightly Bonfires with Music & Stargazing
                    </li>
                  </ul>
                </div>

                <Button
                  to="/book"
                  variant="gold"
                  size="lg"
                  className="w-full text-center shadow-lg"
                  icon={Sparkles}
                >
                  Book Your Spot (₹9,499*)
                </Button>
              </div>

              {/* Batches calendar (Right) */}
              <div className="lg:col-span-5 bg-[#FAF8F5] p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-[#E8E1D7] flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg font-semibold text-[#142820] mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C99E32]" />
                    Upcoming Retreat Batches
                  </h4>

                  <div className="space-y-3">
                    {TRIP_CONFIG.batches.map((b) => (
                      <div
                        key={b.id}
                        className="bg-white p-3.5 rounded-xl border border-[#CFDDD3] hover:border-[#1E3A2F] transition-all"
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-[#142820]">
                          <span>{b.dates}</span>
                          <span className="text-[#C99E32] font-mono text-[11px]">{b.status}</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[#6B917E] mt-1">
                          <span>{b.seatsLeft} spots remaining</span>
                          <Link to={`/book`} className="text-[#1E3A2F] hover:underline font-semibold">
                            Select Batch →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E1D7] text-[11px] text-[#6B917E]">
                  * 5% GST applicable additionally. Centralized booking dates update dynamically in real time.
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* 10. TESTIMONIALS */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Circle Voices"
            title="Reflections from Sisterhood Travelers"
            subtitle="Heartfelt stories shared by women who have journeyed to Shangarh with us."
          />

          <div className="max-w-md mx-auto my-6 text-center">
            <span className="inline-block text-[11px] uppercase tracking-wider text-[#967117] bg-[#F5E2A8]/40 border border-[#E5C66C]/40 px-3 py-1 rounded-full font-semibold">
              {TESTIMONIALS_DATA.notice}
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS_DATA.items.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl border border-[#CFDDD3] p-6 sm:p-8 shadow-md hover:shadow-xl hover:shadow-[#1E3A2F]/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#E5C66C] mb-4 opacity-80" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B917E] mb-2">
                    "{t.highlight}"
                  </p>
                  <p className="text-sm text-[#4A5D53] leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#FAF8F5]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#CFDDD3]"
                  />
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#142820]">
                      {t.name}
                    </h4>
                    <span className="text-[11px] text-[#6B917E] block">
                      {t.city} • {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 11. FAQ ACCORDION PREVIEW */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6]/70 border-t border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Common Inquiries"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about safety, pickup points, food, and what to pack."
          />

          <div className="mt-12">
            <FAQAccordion limit={2} showFilter={false} />
          </div>

          <div className="mt-10 text-center">
            <Button to="/trip-details" variant="outline" size="md" icon={ArrowRight}>
              View All Questions in Trip Details
            </Button>
          </div>
        </div>
      </section>


      {/* 12. INVITATION BANNER (WITH REAL BONFIRE PHOTO) */}
      <section className="py-20 bg-[#142820] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/real-bonfire-gathering.jpg"
            alt="Real evening campfire gathering in Shangarh"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-[#E5C66C] mb-4 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Limited to 10-14 Women Only</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium mb-4 leading-tight">
            Ready to Find Stillness in the Meadows?
          </h2>
          <p className="text-sm sm:text-base text-[#CFDDD3] mb-8 font-light leading-relaxed">
            Gift yourself 3 days of peace, sisterhood, crisp mountain winds, and unhurried days in Shangarh.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/book" variant="gold" size="lg" icon={Sparkles}>
              Reserve Your Spot (₹9,499*)
            </Button>
            <Button to="/contact" variant="outlineLight" size="lg" icon={ArrowRight}>
              Speak with a Guide (+91 8586020962)
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
