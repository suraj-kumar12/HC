import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Check,
  Heart,
  AlertCircle
} from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { TRIP_CONFIG } from '../data/tripData';

export default function Booking() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-20 sm:py-28 bg-[#142820] text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/real-bonfire-gathering.jpg"
            alt="Real evening campfire gathering in Shangarh"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142820] via-[#142820]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-widest text-[#E5C66C] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C66C]" />
            <span>Secure Your Place in the Circle</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight mb-4 leading-tight">
            Reserve Your Shangarh Spot
          </h1>

          <p className="text-base sm:text-xl text-[#CFDDD3] font-light max-w-2xl mx-auto leading-relaxed">
            Fill out your details below to calculate your estimated trip cost and submit your reservation enquiry.
          </p>
        </div>
      </section>


      {/* 2. MAIN BOOKING WORKFLOW */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Important Demo Notice Banner */}
        <div className="bg-[#FAF8F5] border border-[#CFDDD3] rounded-2xl p-4 sm:p-5 mb-12 text-xs sm:text-sm text-[#4A5D53] flex items-start gap-3 shadow-xs">
          <AlertCircle className="w-5 h-5 text-[#C99E32] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Demonstration Prototype Notice:</strong> The price of <strong>₹9,499 per person</strong> is a configurable placeholder. This booking interface calculates estimated costs and validates traveler details in React component state. No payments are charged, and no real database records are created.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Trip Summary & Highlights (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Summary Card */}
            <div className="bg-white rounded-3xl border border-[#CFDDD3] p-6 sm:p-8 shadow-sm">
              <span className="text-xs uppercase tracking-widest text-[#6B917E] font-semibold">
                Trip Overview
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#142820] mt-1 mb-2">
                {TRIP_CONFIG.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5D53] leading-relaxed mb-6">
                4 Days / 3 Nights • Sainj Valley, Kullu, Himachal Pradesh
              </p>

              <div className="space-y-3.5 pb-6 border-b border-[#FAF8F5] text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#6B917E]">Base Rate</span>
                  <span className="font-serif font-bold text-lg text-[#1E3A2F]">
                    ₹{TRIP_CONFIG.basePrice.toLocaleString()}* / person
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B917E]">Group Size</span>
                  <span className="font-medium text-[#142820]">{TRIP_CONFIG.groupSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B917E]">Retreat Host</span>
                  <span className="font-medium text-[#142820]">{TRIP_CONFIG.leadInstructor}</span>
                </div>
              </div>

              {/* Inclusions summary */}
              <div className="pt-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#142820] mb-3">
                  All-Inclusive Package Features:
                </h3>
                <ul className="space-y-2.5 text-xs text-[#4A5D53]">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#6B917E]" />
                    <span>3 Nights Boutique Kathkuni Wooden Homestay</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#6B917E]" />
                    <span>All Organic Vegetarian Breakfasts & Dinners</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#6B917E]" />
                    <span>Daily Morning Meadow Yoga & Breathwork</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#6B917E]" />
                    <span>Barshangarh Waterfall Guided Nature Hike</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#6B917E]" />
                    <span>Watercolor Kit & Reflection Art Journal</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#6B917E]" />
                    <span>Nightly Bonfire Circles & Stargazing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solo Traveler Assurance Card */}
            <div className="bg-[#E7EEE9] rounded-3xl p-6 sm:p-8 border border-[#CFDDD3]">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-5 h-5 text-[#C99E32] fill-current" />
                <h3 className="font-serif text-lg font-semibold text-[#142820]">
                  Joining Solo?
                </h3>
              </div>
              <p className="text-xs text-[#4A5D53] leading-relaxed">
                Most participants join by themselves. You will be warmly welcomed from the moment you reach Aut Tunnel, and matched with a lovely roommate or have your own space.
              </p>
            </div>

            {/* Verified Safe Space */}
            <div className="p-4 bg-white rounded-2xl border border-[#CFDDD3] flex items-center gap-3 text-xs text-[#6B917E]">
              <ShieldCheck className="w-5 h-5 text-[#1E3A2F] shrink-0" />
              <span>100% Women-Only Space • Verified Local Drivers & Certified Hosts</span>
            </div>

          </div>

          {/* Booking Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <BookingForm />
          </div>

        </div>
      </section>

    </div>
  );
}
