import React from 'react';
import { Sparkles, Heart, ShieldCheck, Sun, Leaf, ArrowRight, Quote } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Logo from '../components/Logo';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-24 sm:py-32 bg-[#142820] text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/images/real-forest-trek.jpg"
            alt="Pine forest trail in Sainj Valley"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142820] via-[#142820]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Brand Card */}
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="bg-[#FAF8F5]/95 backdrop-blur-md px-5 sm:px-6 py-2.5 rounded-2xl shadow-xl inline-flex items-center justify-center">
              <Logo className="max-w-[180px] sm:max-w-[210px] max-h-14" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-widest text-[#E5C66C] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C66C]" />
            <span>Our Origin & Purpose</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6 leading-tight">
            The Story Behind Healing Circle
          </h1>

          <p className="text-base sm:text-xl text-[#CFDDD3] font-light max-w-2xl mx-auto leading-relaxed">
            Born from a simple belief: that every woman deserves a space to set down her burdens, breathe unfiltered cedar air, and be held by the mountain sisterhood.
          </p>
        </div>
      </section>


      {/* 2. PHILOSOPHY & STORY WITH REAL PHOTOGRAPHY */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story text (Col 1-6) */}
            <div className="lg:col-span-6 text-left space-y-6 text-[#4A5D53] leading-relaxed text-sm sm:text-base">
              <SectionHeading
                tag="Why We Began"
                title="Slowing Down in an Accelerating World"
                subtitle="Travel should not be an exhausting checklist; it should be an act of restorative reclamation."
                align="left"
              />

              <p>
                In our modern city lives, women are constantly expected to juggle deadlines, caretaking, expectations, and digital noise. We curate our responses, swallow our weariness, and keep moving.
              </p>

              <p>
                <strong>Healing Circle</strong> was founded to offer a different kind of getaway. Not a commercial tour bus packed with strangers, and not an intimidating fitness boot camp.
              </p>

              <p>
                We wanted a gentle circle. A safe, beautiful, grounded gathering where you can show up exactly as you are—introverted or extroverted, seasoned hiker or complete beginner, tired or full of wonder.
              </p>

              <div className="p-6 bg-[#F4EFE6] rounded-2xl border border-[#E8E1D7] italic text-[#142820]">
                <Quote className="w-6 h-6 text-[#C99E32] mb-2" />
                "When women sit together in a circle under tall deodar trees, without titles or expectations, something very ancient and healing clicks back into place."
              </div>
            </div>

            {/* Real Photos Collage (Col 7-12) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-3/4 border-2 border-white">
                <img
                  src="/images/real-painting-girl-1.jpg"
                  alt="Girl traveler holding her handcrafted wood painting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-4/3 border-2 border-white">
                  <img
                    src="/images/real-group-mountain.jpg"
                    alt="Real group of 10 girls smiling together on the mountain ridge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-square border-2 border-white">
                  <img
                    src="/images/real-stay-flower-garden.jpg"
                    alt="Chamomile flower garden outside the wooden cottage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. FOUR PILLARS */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6]/70 border-y border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            tag="Guiding Values"
            title="The 4 Pillars of Our Retreat"
            subtitle="The core foundations that make our journeys deeply nourishing and distinct."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            
            <div className="bg-white p-8 rounded-3xl border border-[#CFDDD3] shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-[#6B917E]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#142820] mb-2">
                1. Safe Sisterhood
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5D53] leading-relaxed">
                An all-women sanctuary curated for psychological safety, emotional warmth, mutual respect, and genuine friendship without competition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#CFDDD3] shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-[#6B917E]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#142820] mb-2">
                2. Slow Mountain Living
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5D53] leading-relaxed">
                No 5:00 AM alarms for commercial shopping. Unhurried mornings, home-brewed herbal teas, barefoot meadow walks, and time to daydream.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#CFDDD3] shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center mb-6">
                <Sun className="w-6 h-6 text-[#6B917E]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#142820] mb-2">
                3. Gentle Mindfulness
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5D53] leading-relaxed">
                Accessible breathwork, sound baths, watercolor journaling, and forest bathing that require zero prior experience and leave you centered.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#CFDDD3] shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-[#6B917E]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#142820] mb-2">
                4. Conscious Local Roots
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5D53] leading-relaxed">
                We stay in indigenous Himachali Kathkuni homestays, employ local Pahadi guides, and support sustainable village eco-tourism.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 4. FACILITATOR SPOTLIGHT */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#CFDDD3] p-8 sm:p-12 shadow-xl shadow-[#1E3A2F]/5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
              
              <div className="md:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden aspect-3/4 border-4 border-[#FAF8F5] shadow-lg">
                  <img
                    src="/images/real-waterfall-traveler.jpg"
                    alt="Retreat Guide by the Barshangarh Waterfall"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-[#1E3A2F] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                  Trip Lead Facilitator
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#6B917E] font-semibold">
                  Meet Your Guide
                </span>
                <h3 className="font-serif text-3xl font-semibold text-[#142820]">
                  Tara & The Healing Circle Guides
                </h3>
                <p className="text-xs text-[#C99E32] font-medium uppercase tracking-wider">
                  Certified Hatha Yoga & Mindful Travel Facilitators
                </p>

                <p className="text-sm text-[#4A5D53] leading-relaxed">
                  "Having explored the remote valleys of Himachal for years, Shangarh remains our deepest sanctuary. Our purpose on every Healing Circle trip is to hold a warm, grounding container where every girl feels completely safe to unpack her inner self, breathe clean air, and laugh freely."
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#6B917E]">
                  <span>• 100% Women-Led Facilitation</span>
                  <span>• Wilderness Safety Certified</span>
                  <span>• Local Pahadi Guides & Drivers</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* 5. CALL TO ACTION */}
      <section className="py-20 bg-[#142820] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-4">
            Come Sit in the Circle
          </h2>
          <p className="text-sm sm:text-base text-[#CFDDD3] mb-8 font-light">
            We keep each batch intimate (10 to 14 women) so that real connections can flourish. We would love to welcome you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/book" variant="gold" size="lg" icon={Sparkles}>
              Join Upcoming Batch (₹9,499*)
            </Button>
            <Button to="/trip-details" variant="outlineLight" size="lg" icon={ArrowRight}>
              Explore Full Details
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
