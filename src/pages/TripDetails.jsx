import { useState } from 'react';
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
  Backpack,
  MessageCircle
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import FAQAccordion from '../components/FAQAccordion';
import GalleryLightbox from '../components/GalleryLightbox';
import Logo from '../components/Logo';
import SEO from '../components/SEO';
import { TRIP_CONFIG } from '../data/tripData';

export default function TripDetails() {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [brochureLightboxOpen, setBrochureLightboxOpen] = useState(false);
  const [currentBrochureIdx, setCurrentBrochureIdx] = useState(0);

  const openBrochureLightbox = (idx) => {
    setCurrentBrochureIdx(idx);
    setBrochureLightboxOpen(true);
  };

  const whatsappDossierUrl = `https://wa.me/918586020962?text=${encodeURIComponent(
    "Hi Healing Circle team! I'm reviewing the Shangarh trip itinerary and had a quick question regarding the schedule and booking."
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFCF6] text-[#303D32]">
      <SEO
        title="Shangarh Girls Trip Itinerary & Package | Healing Circle Retreats"
        description="Explore the complete 3D/2N Shangarh girls trip itinerary, traditional wooden homestay stay, inclusions, waterfall hikes, yoga sessions, and brochure dossier."
        canonical="/trip-details"
        image="/images/real-waterfall-traveler.jpg"
      />
      
      {/* 1. HERO HEADER - BRIGHT LIGHT THEME */}
      <section className="relative py-24 sm:py-32 overflow-hidden text-center border-b border-[#E7E5DA]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/real-waterfall-traveler.jpg"
            alt="Barshangarh waterfall hike"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFCF6]/90 via-[#FFFCF6]/75 to-[#FFFCF6]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E7E5DA] text-xs uppercase tracking-widest text-[#42634B] font-semibold mb-6 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A56]" />
            <span>Complete Trip Dossier & Original Brochure</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-4 leading-tight text-[#303D32]">
            Shangarh Girls Retreat Dossier
          </h1>

          <p className="text-base sm:text-xl text-[#73796F] font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            Complete day-by-day expedition schedule, authentic wooden homestay gallery, transport logistics, and official 14-page brochure sheets.
          </p>

          {/* Quick info bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 bg-white/95 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-[#E7E5DA] shadow-md max-w-3xl mx-auto text-xs sm:text-sm text-[#303D32]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C59A56]" />
              <span className="font-medium">3 Days / 2 Nights + Overnight Bus</span>
            </div>
            <span className="text-[#E7E5DA] font-bold">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C59A56]" />
              <span className="font-medium">Sainj Valley, Kullu, HP</span>
            </div>
            <span className="text-[#E7E5DA] font-bold">•</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#C59A56]" />
              <span className="font-medium">10-14 Girls Only</span>
            </div>
            <span className="text-[#E7E5DA] font-bold">•</span>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-[#42634B] text-base">₹{TRIP_CONFIG.basePrice.toLocaleString()}*</span>
              <span className="text-[10px] text-[#73796F]">Double Sharing</span>
            </div>
          </div>
        </div>
      </section>


      {/* 2. SUB-NAVIGATION TABS */}
      <div className="sticky top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-[#E7E5DA] shadow-2xs">
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
                  ? 'bg-[#42634B] text-white shadow-xs'
                  : 'text-[#73796F] hover:text-[#303D32] hover:bg-[#F3F5EC]'
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
                  className="bg-white rounded-3xl border border-[#E7E5DA] overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12"
                >
                  {/* Photo column */}
                  <div className="lg:col-span-5 relative min-h-72 lg:min-h-full bg-[#F3F5EC]">
                    <img
                      src={day.image}
                      alt={day.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#42634B] text-white px-3.5 py-1 rounded-full text-xs font-semibold shadow-xs">
                      {day.day} • {day.date}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#E7E5DA] text-[#303D32] text-xs shadow-md">
                      <span className="text-[#C59A56] font-semibold block uppercase tracking-wider text-[10px]">
                        Focus of the Day
                      </span>
                      {day.theme}
                    </div>
                  </div>

                  {/* Day breakdown */}
                  <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#42634B] font-semibold">
                        {day.day} ({day.date}) Schedule
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303D32] mt-1 mb-3">
                        {day.title}
                      </h3>
                      <p className="text-sm text-[#73796F] leading-relaxed mb-6">
                        {day.description}
                      </p>

                      <div className="border-t border-[#E7E5DA] pt-5 space-y-3.5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#303D32] mb-3">
                          Detailed Timeline:
                        </h4>
                        {day.schedule.map((item) => (
                          <div key={item.time} className="flex items-start gap-3 text-xs sm:text-sm">
                            <span className="font-mono text-xs font-semibold text-[#42634B] bg-[#F3F5EC] px-2.5 py-1 rounded-md shrink-0 border border-[#E7E5DA]/60">
                              {item.time}
                            </span>
                            <span className="text-[#303D32] leading-relaxed mt-0.5">
                              {item.activity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#E7E5DA] flex items-center justify-between text-xs text-[#73796F]">
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
                  <div key={img.url} className="rounded-2xl overflow-hidden shadow-xs aspect-4/3 border border-[#E7E5DA] group relative bg-white">
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] text-white font-medium line-clamp-1">{img.caption}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5 space-y-6 bg-white p-7 sm:p-9 rounded-3xl border border-[#E7E5DA] shadow-xs">
                <span className="text-xs uppercase tracking-widest text-[#42634B] font-semibold">
                  Handcrafted Himalayan Comfort
                </span>
                <h3 className="font-serif text-3xl font-semibold text-[#303D32]">
                  {TRIP_CONFIG.accommodation.name}
                </h3>
                <p className="text-sm text-[#73796F] leading-relaxed">
                  {TRIP_CONFIG.accommodation.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#303D32]">
                    Homestay Features & Amenities:
                  </h4>
                  {TRIP_CONFIG.accommodation.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-[#303D32]">
                      <div className="w-4 h-4 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center shrink-0 mt-0.5 border border-[#E7E5DA]">
                        <Check className="w-3 h-3 text-[#42634B]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-[#F3F5EC] rounded-2xl border border-[#E7E5DA] text-xs text-[#73796F] space-y-2">
                  <strong className="text-[#303D32] block">Double Sharing Setup:</strong>
                  <p>
                    All girls share cozy rooms on double-sharing basis with attached washrooms, continuous running hot water geysers, clean plush duvets, and heated blankets.
                  </p>
                </div>
              </div>
            </div>

            {/* Meals details */}
            <div className="mt-16 bg-white rounded-3xl border border-[#E7E5DA] p-8 sm:p-12 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs uppercase tracking-widest text-[#42634B] font-semibold">
                  Farm-to-Table Meals
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#303D32] mt-1 mb-4">
                  Wholesome Pahadi & Vegetarian Dining
                </h3>
                <p className="text-sm text-[#73796F] leading-relaxed mb-6">
                  Freshly cooked meals prepared with love at our property kitchen using organic village ingredients:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 bg-[#F3F5EC] rounded-xl border border-[#E7E5DA]">
                    <strong className="text-[#303D32] block mb-1">Day 1 Meals</strong>
                    <span className="text-[#73796F]">Warm breakfast at property upon arrival, home-style pahadi lunch, and comforting dinner.</span>
                  </div>
                  <div className="p-4 bg-[#F3F5EC] rounded-xl border border-[#E7E5DA]">
                    <strong className="text-[#303D32] block mb-1">Day 2 Meals</strong>
                    <span className="text-[#73796F]">Breakfast after morning yoga, afternoon cafe visit snacks, and celebration dinner by the bonfire.</span>
                  </div>
                  <div className="p-4 bg-[#F3F5EC] rounded-xl border border-[#E7E5DA]">
                    <strong className="text-[#303D32] block mb-1">Day 3 & Teas</strong>
                    <span className="text-[#73796F]">Wholesome early breakfast before checkout. Morning & evening pahadi herbal teas served daily.</span>
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
              <div className="bg-white rounded-3xl border border-[#E7E5DA] p-8 sm:p-10 shadow-sm">
                <h3 className="font-serif text-2xl font-semibold text-[#303D32] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center border border-[#E7E5DA]">
                    <Check className="w-5 h-5 text-[#42634B]" />
                  </div>
                  Package Inclusions
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm text-[#73796F]">
                  {TRIP_CONFIG.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center shrink-0 mt-0.5 border border-[#E7E5DA]">
                        <Check className="w-3 h-3 text-[#42634B]" />
                      </div>
                      <span className="leading-relaxed text-[#303D32]">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F3F5EC] rounded-3xl border border-[#E7E5DA] p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#303D32] mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white text-[#73796F] flex items-center justify-center border border-[#E7E5DA]">
                      <X className="w-5 h-5" />
                    </div>
                    Package Exclusions
                  </h3>

                  <ul className="space-y-3.5 text-xs sm:text-sm text-[#73796F]">
                    {TRIP_CONFIG.exclusions.map((exc) => (
                      <li key={exc} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full bg-white text-[#73796F] flex items-center justify-center shrink-0 mt-0.5 border border-[#E7E5DA]">
                          <X className="w-3 h-3" />
                        </div>
                        <span className="leading-relaxed text-[#4E564F]">{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 p-5 bg-white rounded-2xl border border-[#E7E5DA] text-xs text-[#42634B] space-y-2">
                  <strong className="text-[#303D32] block">Official Booking Policy:</strong>
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
                <div key={route.mode} className="bg-white rounded-3xl border border-[#E7E5DA] p-6 sm:p-8 shadow-xs">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3F5EC] text-[#42634B] flex items-center justify-center mb-5 border border-[#E7E5DA]">
                    {i === 0 ? <Bus className="w-6 h-6 text-[#42634B]" /> : i === 1 ? <Plane className="w-6 h-6 text-[#42634B]" /> : <Train className="w-6 h-6 text-[#42634B]" />}
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[#303D32] mb-2">
                    {route.mode}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#73796F] leading-relaxed">
                    {route.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Packing List */}
            <div className="bg-white rounded-3xl border border-[#E7E5DA] p-8 sm:p-10 shadow-xs">
              <h3 className="font-serif text-2xl font-semibold text-[#303D32] mb-6 flex items-center gap-3">
                <Backpack className="w-6 h-6 text-[#C59A56]" />
                Recommended Packing Essentials
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {TRIP_CONFIG.logistics.packingList.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F3F5EC] border border-[#E7E5DA] text-xs sm:text-sm text-[#303D32]">
                    <Check className="w-4 h-4 text-[#42634B] shrink-0 mt-0.5" />
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
                  className="group relative rounded-2xl overflow-hidden border border-[#E7E5DA] shadow-xs hover:shadow-lg transition-all aspect-9/16 bg-[#F3F5EC] cursor-pointer"
                >
                  <img
                    src={sheet.src}
                    alt={sheet.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 text-[#303D32] text-[10px] px-2 py-0.5 rounded-md font-mono font-bold shadow-xs">
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


      {/* 4. BOTTOM BOOKING CTA - LIGHT NATURE BANNER WITH WHATSAPP */}
      <section className="py-20 bg-gradient-to-r from-[#F3F5EC] via-[#FFFCF6] to-[#F3F5EC] text-[#303D32] text-center border-t border-[#E7E5DA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-5 flex justify-center">
            <div className="bg-white p-2.5 px-6 rounded-2xl shadow-sm border border-[#E7E5DA] inline-flex">
              <Logo className="max-w-[170px] max-h-14" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-xs uppercase tracking-widest text-[#42634B] font-semibold mb-4 border border-[#E7E5DA] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A56]" />
            <span>Join the Circle</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4 text-[#303D32]">
            Ready to Experience Shangarh?
          </h2>
          <p className="text-sm sm:text-base text-[#73796F] mb-8 font-normal leading-relaxed">
            Check upcoming batch dates and calculate your estimated total with real-time feedback.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/book" variant="primary" size="lg" icon={Sparkles}>
              Reserve Your Spot (₹9,499*)
            </Button>
            <a
              href={whatsappDossierUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm text-[#0F5132] bg-[#E8F8EE] border border-[#A3E6BA] hover:bg-[#D4F4DF] transition-all duration-200 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>Ask on WhatsApp (+91 8586020962)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
