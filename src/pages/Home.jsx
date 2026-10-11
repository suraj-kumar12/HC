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
  FileText,
  MessageCircle
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import TripCard from '../components/TripCard';
import FAQAccordion from '../components/FAQAccordion';
import Logo from '../components/Logo';
import BrochureSlider from '../components/BrochureSlider';
import { TRIP_CONFIG } from '../data/tripData';
import { TESTIMONIALS_DATA } from '../data/testimonials';

export default function Home() {
  const [selectedDay, setSelectedDay] = useState(0);

  const whatsappHeroUrl = `https://wa.me/918586020962?text=${encodeURIComponent(
    "Hi Healing Circle! I'm interested in the Shangarh Girls Trip. Could you please share the batch availability and details?"
  )}`;

  const whatsappBannerUrl = `https://wa.me/918586020962?text=${encodeURIComponent(
    "Hi Healing Circle team! I'd love to chat with a trip guide about joining the upcoming Shangarh retreat."
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFCF6] text-[#303D32]">
      
      {/* 1. HERO SECTION - BRIGHT & AIRY LIGHT NATURE THEME */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#E7E5DA]">
        {/* Real Shangarh Meadow & Temple Background with luminous light overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/real-temple-meadow.jpg"
            alt="Sacred Shangchul Mahadev Temple in the lush Shangarh Meadow"
            className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
          />
          {/* Luminous, daylight-enhancing gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFCF6]/88 via-[#FFFCF6]/72 to-[#FFFCF6]" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#F3F5EC]/30 to-[#FFFCF6]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center text-[#303D32] flex flex-col items-center">
          
          {/* Official Brand Logo */}
          <div className="mb-6 animate-fade-in">
            <div className="bg-white/95 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl sm:rounded-3xl shadow-lg border border-[#E7E5DA] inline-flex items-center justify-center">
              <Logo className="max-w-[210px] sm:max-w-[250px] max-h-16 sm:max-h-20" />
            </div>
          </div>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E7E5DA] text-xs uppercase tracking-widest text-[#42634B] font-semibold mb-6 shadow-xs animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A56]" />
            <span>Healing Circle • Shangarh Girls Trip • 10-14 Women Only</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold tracking-tight leading-[1.12] mb-6 text-[#303D32] max-w-4xl">
            Sisterhood, Stillness & Alpine Meadows
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-[#73796F] font-normal max-w-2xl leading-relaxed mb-8">
            An intimate girls' group travel & wellness retreat in the sacred pine forests of Shangarh, Sainj Valley, Himachal Pradesh.
          </p>

          {/* Key Trip Meta Card */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#303D32] mb-10 bg-white/95 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-[#E7E5DA] shadow-md">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C59A56]" />
              <span>Featured Batch: <strong className="text-[#303D32] font-semibold">{TRIP_CONFIG.batches[0].dates}</strong></span>
            </div>
            <span className="hidden sm:inline text-[#E7E5DA] font-bold">•</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#C59A56]" />
              <span className="font-medium">{TRIP_CONFIG.groupSize}</span>
            </div>
            <span className="hidden sm:inline text-[#E7E5DA] font-bold">•</span>
            <div className="flex items-center gap-2">
              <span className="text-[#C59A56] font-serif font-bold text-base sm:text-lg">
                ₹{TRIP_CONFIG.basePrice.toLocaleString()}*
              </span>
              <span className="text-[11px] text-[#73796F]">Double Sharing</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              to="/book"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-md hover:shadow-lg font-semibold"
              icon={Sparkles}
            >
              Book Your Spot (₹9,499)
            </Button>

            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-[#0F5132] bg-[#E8F8EE] border border-[#A3E6BA] hover:bg-[#D4F4DF] transition-all duration-200 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>Quick WhatsApp Enquiry</span>
            </a>

            <Button
              to="/trip-details"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              icon={ArrowRight}
            >
              View Full Itinerary
            </Button>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#73796F]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#42634B]" /> AC Bus & Taxi Included from Delhi/Chandigarh
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#C59A56]" /> 100% Solo-Traveler Friendly & Safe
            </span>
            <span className="flex items-center gap-1.5">
              <HomeIcon className="w-4 h-4 text-[#42634B]" /> Authentic Kathkuni Wooden Homestay
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#73796F]">
          <span className="text-[10px] uppercase tracking-widest font-semibold">Explore</span>
          <div className="w-4 h-8 rounded-full border border-[#8FA58A] flex items-start justify-center p-1 bg-white/60">
            <div className="w-1 h-2 bg-[#42634B] rounded-full animate-bounce" />
          </div>
        </div>
      </section>


      {/* 2. STATS & TRUST STRIP - LIGHT SAGE BACKGROUND */}
      <section className="bg-[#F3F5EC] text-[#303D32] py-9 border-b border-[#E7E5DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E7E5DA]">
            {TRIP_CONFIG.stats.map((s, idx) => (
              <div key={s.label} className={idx > 1 ? 'pt-4 md:pt-0' : ''}>
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#42634B] block">
                  {s.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#303D32] font-semibold block mt-1">
                  {s.label}
                </span>
                <span className="text-[11px] text-[#73796F] block mt-0.5">
                  {s.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 3. ABOUT THE EXPERIENCE SECTION WITH REAL PHOTOGRAPHY */}
      <section className="py-20 sm:py-28 bg-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Collage with Real Photos (Col 1-6) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-[#42634B]/10 border-4 border-white aspect-4/3">
                <img
                  src="/images/real-group-mountain.jpg"
                  alt="Real photo of 10 girls smiling together on the Shangarh mountain ridge"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping secondary real photo */}
              <div className="hidden sm:block absolute -bottom-10 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-4/3">
                <img
                  src="/images/real-group-bridge.jpg"
                  alt="Girls cheering on the stone bridge over mountain stream"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge card */}
              <div className="absolute -top-6 -left-4 sm:left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#E7E5DA] max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-[#C59A56] fill-[#C59A56]" />
                  <span className="text-xs font-bold text-[#303D32]">100% Women Safe Circle</span>
                </div>
                <p className="text-[11px] text-[#73796F] leading-snug">
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

              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#73796F] leading-relaxed">
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
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#303D32]">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#42634B]" />
                  </div>
                  <span className="font-medium">Shangarh Meadows & Temple</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#42634B]" />
                  </div>
                  <span className="font-medium">Barshangarh & Rupi Raila Falls</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#42634B]" />
                  </div>
                  <span className="font-medium">Handcrafted Wood Plank Painting</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#42634B]" />
                  </div>
                  <span className="font-medium">Bonfire, Dance & Music Nights</span>
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


      {/* 4. ACTIVITIES SECTION - LIGHT SAGE BACKGROUND */}
      <section className="py-20 sm:py-28 bg-[#F3F5EC] border-t border-[#E7E5DA]">
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
      <section className="py-20 sm:py-28 bg-[#FFFCF6]">
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
                    ? 'bg-[#42634B] text-white shadow-sm'
                    : 'bg-white text-[#73796F] border border-[#E7E5DA] hover:border-[#8FA58A] hover:text-[#303D32]'
                }`}
              >
                {item.day}: {item.theme}
              </button>
            ))}
          </div>

          {/* Active Day Detail Card */}
          <div className="mt-10 max-w-5xl mx-auto bg-white rounded-3xl border border-[#E7E5DA] overflow-hidden shadow-lg shadow-[#42634B]/5 animate-fade-in text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Day Image */}
              <div className="lg:col-span-5 relative min-h-64 lg:min-h-full bg-[#F3F5EC]">
                <img
                  src={TRIP_CONFIG.itinerary[selectedDay].image}
                  alt={TRIP_CONFIG.itinerary[selectedDay].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#42634B] text-white px-3.5 py-1 rounded-full text-xs font-semibold shadow-xs">
                  {TRIP_CONFIG.itinerary[selectedDay].day} ({TRIP_CONFIG.itinerary[selectedDay].date})
                </div>
              </div>

              {/* Day Details */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#42634B] font-semibold">
                    {TRIP_CONFIG.itinerary[selectedDay].theme}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303D32] mt-1 mb-3">
                    {TRIP_CONFIG.itinerary[selectedDay].title}
                  </h3>
                  <p className="text-sm text-[#73796F] leading-relaxed mb-6">
                    {TRIP_CONFIG.itinerary[selectedDay].description}
                  </p>

                  {/* Schedule bullet list */}
                  <div className="space-y-3 border-t border-[#E7E5DA] pt-4">
                    {TRIP_CONFIG.itinerary[selectedDay].schedule.map((slot) => (
                      <div key={slot.time} className="flex items-start gap-3 text-xs sm:text-sm">
                        <span className="font-semibold text-[#42634B] bg-[#F3F5EC] px-2.5 py-1 rounded-md shrink-0 font-mono text-[11px] border border-[#E7E5DA]/60">
                          {slot.time}
                        </span>
                        <span className="text-[#303D32] mt-0.5 leading-snug">
                          {slot.activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E7E5DA] flex items-center justify-between">
                  <span className="text-xs text-[#8FA58A] font-medium">
                    Step {selectedDay + 1} of {TRIP_CONFIG.itinerary.length}
                  </span>
                  <Link
                    to="/trip-details"
                    className="text-xs sm:text-sm font-semibold text-[#42634B] hover:text-[#C59A56] inline-flex items-center gap-1 transition-colors"
                  >
                    View Full Schedule & Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* 6. ACCOMMODATION SPOTLIGHT - BRIGHT & HOMEY LIGHT SAGE */}
      <section className="py-20 sm:py-28 bg-[#F3F5EC] border-t border-[#E7E5DA] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            tag="Authentic Living"
            title={TRIP_CONFIG.accommodation.name}
            subtitle={TRIP_CONFIG.accommodation.tagline}
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
            
            {/* Gallery grid with real homestay photos */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {TRIP_CONFIG.accommodation.gallery.slice(0, 6).map((img, i) => (
                <div
                  key={img.url}
                  className={`relative rounded-2xl overflow-hidden shadow-sm border border-[#E7E5DA] group bg-white ${
                    i === 0 ? 'col-span-2 aspect-16/10' : 'aspect-4/3'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[11px] text-white font-medium line-clamp-1">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Description & Features */}
            <div className="lg:col-span-5 space-y-6 bg-white p-7 sm:p-9 rounded-3xl border border-[#E7E5DA] shadow-sm">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303D32]">
                {TRIP_CONFIG.accommodation.type}
              </h3>
              <p className="text-sm text-[#73796F] leading-relaxed">
                {TRIP_CONFIG.accommodation.description}
              </p>

              <div className="space-y-3 pt-2">
                {TRIP_CONFIG.accommodation.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-[#303D32]">
                    <div className="w-5 h-5 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center shrink-0 mt-0.5 border border-[#E7E5DA]">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Button to="/gallery" variant="primary" size="md" icon={ArrowRight}>
                  View All Retreat Photos
                </Button>
                <a
                  href={`https://wa.me/918586020962?text=${encodeURIComponent(
                    "Hi! I would like to see more pictures and details of the homestay in Shangarh."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#0F5132] bg-[#E8F8EE] border border-[#A3E6BA] hover:bg-[#D4F4DF] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 7. OFFICIAL BROCHURE PREVIEW STRIP */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E7E5DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E7E5DA]">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F5EC] text-xs uppercase tracking-wider text-[#42634B] font-semibold mb-2 border border-[#E7E5DA]">
                <FileText className="w-3.5 h-3.5 text-[#C59A56]" />
                <span>Original Documents</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303D32]">
                Official 14-Page Retreat Brochure
              </h3>
              <p className="text-xs sm:text-sm text-[#73796F] mt-1">
                Browse through all 14 official itinerary slides, stay sheets, pricing breakdown, and trip terms.
              </p>
            </div>
            <Button to="/gallery" variant="outline" size="sm" icon={Eye}>
              View All 14 Slides in Lightbox
            </Button>
          </div>

          <div className="mt-8">
            <BrochureSlider pages={TRIP_CONFIG.brochurePages} />
          </div>
        </div>
      </section>


      {/* 8. INCLUSIONS & EXCLUSIONS - LIGHT THEME */}
      <section className="py-20 sm:py-28 bg-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Transparency & Care"
            title="What's Included & Excluded"
            subtitle="Clear, honest details directly aligned with the official brochure."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Inclusions Box */}
            <div className="bg-white rounded-3xl border border-[#E7E5DA] p-6 sm:p-10 shadow-md">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E7E5DA]">
                <div className="w-10 h-10 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center font-bold border border-[#E7E5DA]">
                  <Check className="w-5 h-5 text-[#42634B]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#303D32]">
                    What's Included
                  </h3>
                  <span className="text-xs text-[#42634B] font-medium">All-inclusive travel & wellness package</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#73796F]">
                {TRIP_CONFIG.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#42634B]" />
                    </div>
                    <span className="leading-relaxed text-[#303D32]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions Box */}
            <div className="bg-[#F3F5EC] rounded-3xl border border-[#E7E5DA] p-6 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E7E5DA]">
                  <div className="w-10 h-10 rounded-full bg-white text-[#73796F] flex items-center justify-center font-bold border border-[#E7E5DA]">
                    <X className="w-5 h-5 text-[#73796F]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#303D32]">
                      What's Excluded
                    </h3>
                    <span className="text-xs text-[#73796F]">Plan your personal budget smoothly</span>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-[#73796F]">
                  {TRIP_CONFIG.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-white text-[#73796F] flex items-center justify-center shrink-0 mt-0.5 border border-[#E7E5DA]">
                        <X className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed text-[#4E564F]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-4 bg-white rounded-2xl border border-[#E7E5DA] text-xs text-[#42634B]">
                <strong>Official Booking Terms:</strong> 50% advance deposit to reserve your seat. Remaining balance cleared at least 5 days prior to trip departure.
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 9. PRICING CARD & BATCHES - LIGHT SAGE BACKGROUND */}
      <section className="py-20 sm:py-28 bg-[#F3F5EC] border-t border-[#E7E5DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Investment in Yourself"
            title="Retreat Pricing & Dates"
            subtitle="Transparent rate for 3 Days / 2 Nights in Shangarh + overnight travel."
          />

          <div className="mt-14 max-w-4xl mx-auto bg-white rounded-3xl border border-[#E7E5DA] shadow-xl shadow-[#42634B]/5 overflow-hidden text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Pricing breakdown (Left) */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F5EC] text-[#42634B] border border-[#E7E5DA]">
                      All-Inclusive Package
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF8E7] text-[#9E7428] border border-[#EAD79D]">
                      Double Sharing
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-semibold text-[#303D32] mb-2">
                    Shangarh Circle Retreat
                  </h3>
                  <p className="text-sm text-[#73796F] mb-6">
                    3D / 2N in Shangarh • Ex-Delhi / Chandigarh AC Bus & Mountain Taxi
                  </p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-[#42634B]">
                      ₹{TRIP_CONFIG.basePrice.toLocaleString()}*
                    </span>
                    <span className="text-sm text-[#73796F]">
                      / person (50% advance deposit to confirm)
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#303D32] mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#42634B]" /> AC Bus & Mountain Taxi (Delhi / Chandigarh)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#42634B]" /> 2 Nights Boutique Wooden Homestay (Double Sharing)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#42634B]" /> All Specified Breakfasts, Lunch & Dinners
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#42634B]" /> Barshangarh & Rupi Raila Waterfall Treks
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#42634B]" /> Wood Plank Painting Session + Art Materials
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#42634B]" /> Nightly Bonfires with Music & Stargazing
                    </li>
                  </ul>
                </div>

                <Button
                  to="/book"
                  variant="primary"
                  size="lg"
                  className="w-full text-center shadow-md font-semibold"
                  icon={Sparkles}
                >
                  Book Your Spot (₹9,499*)
                </Button>
              </div>

              {/* Batches calendar (Right) */}
              <div className="lg:col-span-5 bg-[#FFFCF6] p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-[#E7E5DA] flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg font-semibold text-[#303D32] mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C59A56]" />
                    Upcoming Retreat Batches
                  </h4>

                  <div className="space-y-3">
                    {TRIP_CONFIG.batches.map((b) => (
                      <div
                        key={b.id}
                        className="bg-white p-3.5 rounded-xl border border-[#E7E5DA] hover:border-[#42634B] transition-all shadow-2xs"
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-[#303D32]">
                          <span>{b.dates}</span>
                          <span className="text-[#C59A56] font-mono text-[11px] font-bold">{b.status}</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[#73796F] mt-1">
                          <span>{b.seatsLeft} spots remaining</span>
                          <Link to="/book" className="text-[#42634B] hover:text-[#C59A56] font-semibold transition-colors">
                            Select Batch →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7E5DA] text-[11px] text-[#73796F]">
                  * 5% GST applicable additionally. Centralized booking dates update dynamically in real time.
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* 10. TESTIMONIALS */}
      <section className="py-20 sm:py-28 bg-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Circle Voices"
            title="Reflections from Sisterhood Travelers"
            subtitle="Heartfelt stories shared by women who have journeyed to Shangarh with us."
          />

          <div className="max-w-md mx-auto my-6 text-center">
            <span className="inline-block text-[11px] uppercase tracking-wider text-[#9E7428] bg-[#FFF8E7] border border-[#EAD79D] px-3.5 py-1 rounded-full font-semibold">
              {TESTIMONIALS_DATA.notice}
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS_DATA.items.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl border border-[#E7E5DA] p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#C59A56] mb-4 opacity-80" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#42634B] mb-2">
                    "{t.highlight}"
                  </p>
                  <p className="text-sm text-[#73796F] leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#E7E5DA]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#E7E5DA]"
                  />
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#303D32]">
                      {t.name}
                    </h4>
                    <span className="text-[11px] text-[#73796F] block">
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
      <section className="py-20 sm:py-28 bg-[#F3F5EC] border-t border-[#E7E5DA]">
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


      {/* 12. INVITATION BANNER - BRIGHT, ELEGANT NATURE WITH DIRECT WHATSAPP */}
      <section className="py-20 bg-gradient-to-r from-[#F3F5EC] via-[#FFFCF6] to-[#F3F5EC] text-[#303D32] text-center relative overflow-hidden border-t border-[#E7E5DA]">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="/images/real-bonfire-gathering.jpg"
            alt="Real evening campfire gathering in Shangarh"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-xs uppercase tracking-widest text-[#42634B] font-semibold mb-4 border border-[#E7E5DA] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A56]" />
            <span>Limited to 10-14 Women Only</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-semibold mb-4 leading-tight text-[#303D32]">
            Ready to Find Stillness in the Meadows?
          </h2>
          <p className="text-sm sm:text-base text-[#73796F] mb-8 font-normal leading-relaxed">
            Gift yourself 3 days of peace, sisterhood, crisp mountain winds, and unhurried days in Shangarh.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/book" variant="primary" size="lg" icon={Sparkles}>
              Reserve Your Spot (₹9,499*)
            </Button>
            <a
              href={whatsappBannerUrl}
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
