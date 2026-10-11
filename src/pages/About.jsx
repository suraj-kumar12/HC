import { Sparkles, Heart, ShieldCheck, Sun, Leaf, ArrowRight, Quote, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Logo from '../components/Logo';
import SEO from '../components/SEO';

export default function About() {
  const whatsappUrl = `https://wa.me/918586020962?text=${encodeURIComponent(
    "Hi Healing Circle team! I read about the Shangarh retreat philosophy and would love to know more."
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFCF6] text-[#303D32]">
      <SEO
        title="Our Story & Philosophy | Healing Circle – Women-Only Himalayan Travel"
        description="Learn why Healing Circle was founded. Discover our 4 pillars of mindful women-only travel, slow mountain living, and restorative retreats in Himachal Pradesh."
        canonical="/about"
        image="/images/real-forest-trek.jpg"
      />
      
      {/* 1. HERO HEADER - BRIGHT, SUNLIT DAYLIGHT THEME */}
      <section className="relative py-24 sm:py-32 overflow-hidden text-center border-b border-[#E7E5DA]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/real-forest-trek.jpg"
            alt="Pine forest trail in Sainj Valley"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFCF6]/90 via-[#FFFCF6]/75 to-[#FFFCF6]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Brand Card */}
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="bg-white/95 backdrop-blur-md px-6 sm:px-8 py-3 rounded-2xl shadow-md border border-[#E7E5DA] inline-flex items-center justify-center">
              <Logo className="max-w-[190px] sm:max-w-[220px] max-h-16" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3F5EC] border border-[#E7E5DA] text-xs uppercase tracking-widest text-[#42634B] font-semibold mb-6 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A56]" />
            <span>Our Origin & Purpose</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight text-[#303D32]">
            The Story Behind Healing Circle
          </h1>

          <p className="text-base sm:text-xl text-[#73796F] font-normal max-w-2xl mx-auto leading-relaxed">
            Born from a simple belief: that every woman deserves a space to set down her burdens, breathe unfiltered cedar air, and be held by the mountain sisterhood.
          </p>
        </div>
      </section>


      {/* 2. PHILOSOPHY & STORY WITH REAL PHOTOGRAPHY */}
      <section className="py-20 sm:py-28 bg-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story text (Col 1-6) */}
            <div className="lg:col-span-6 text-left space-y-6 text-[#73796F] leading-relaxed text-sm sm:text-base">
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
                <strong className="text-[#303D32]">Healing Circle</strong> was founded to offer a different kind of getaway. Not a commercial tour bus packed with strangers, and not an intimidating fitness boot camp.
              </p>

              <p>
                We wanted a gentle circle. A safe, beautiful, grounded gathering where you can show up exactly as you are—introverted or extroverted, seasoned hiker or complete beginner, tired or full of wonder.
              </p>

              <div className="p-6 bg-[#F3F5EC] rounded-2xl border border-[#E7E5DA] italic text-[#303D32]">
                <Quote className="w-6 h-6 text-[#C59A56] mb-2" />
                "When women sit together in a circle under tall deodar trees, without titles or expectations, something very ancient and healing clicks back into place."
              </div>
            </div>

            {/* Real Photos Collage (Col 7-12) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-md aspect-3/4 border-4 border-white bg-[#F3F5EC]">
                <img
                  src="/images/real-painting-girl-1.jpg"
                  alt="Girl traveler holding her handcrafted wood painting"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-md aspect-4/3 border-4 border-white bg-[#F3F5EC]">
                  <img
                    src="/images/real-group-mountain.jpg"
                    alt="Real group of 10 girls smiling together on the mountain ridge"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-md aspect-square border-4 border-white bg-[#F3F5EC]">
                  <img
                    src="/images/real-stay-flower-garden.jpg"
                    alt="Chamomile flower garden outside the wooden cottage"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. FOUR PILLARS - LIGHT SAGE BACKGROUND */}
      <section className="py-20 sm:py-28 bg-[#F3F5EC] border-y border-[#E7E5DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            tag="Guiding Values"
            title="The 4 Pillars of Our Retreat"
            subtitle="The core foundations that make our journeys deeply nourishing and distinct."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            
            <div className="bg-white p-8 rounded-3xl border border-[#E7E5DA] shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#F3F5EC] text-[#42634B] flex items-center justify-center mb-6 border border-[#E7E5DA]">
                <Heart className="w-6 h-6 text-[#42634B]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#303D32] mb-2">
                1. Safe Sisterhood
              </h3>
              <p className="text-xs sm:text-sm text-[#73796F] leading-relaxed">
                An all-women sanctuary curated for psychological safety, emotional warmth, mutual respect, and genuine friendship without competition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E7E5DA] shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#F3F5EC] text-[#42634B] flex items-center justify-center mb-6 border border-[#E7E5DA]">
                <Leaf className="w-6 h-6 text-[#42634B]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#303D32] mb-2">
                2. Slow Mountain Living
              </h3>
              <p className="text-xs sm:text-sm text-[#73796F] leading-relaxed">
                No 5:00 AM alarms for commercial shopping. Unhurried mornings, home-brewed herbal teas, barefoot meadow walks, and time to daydream.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E7E5DA] shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#F3F5EC] text-[#42634B] flex items-center justify-center mb-6 border border-[#E7E5DA]">
                <Sun className="w-6 h-6 text-[#42634B]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#303D32] mb-2">
                3. Gentle Mindfulness
              </h3>
              <p className="text-xs sm:text-sm text-[#73796F] leading-relaxed">
                Accessible breathwork, sound baths, watercolor journaling, and forest bathing that require zero prior experience and leave you centered.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E7E5DA] shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#F3F5EC] text-[#42634B] flex items-center justify-center mb-6 border border-[#E7E5DA]">
                <ShieldCheck className="w-6 h-6 text-[#42634B]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#303D32] mb-2">
                4. Conscious Local Roots
              </h3>
              <p className="text-xs sm:text-sm text-[#73796F] leading-relaxed">
                We stay in indigenous Himachali Kathkuni homestays, employ local Pahadi guides, and support sustainable village eco-tourism.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 4. FACILITATOR SPOTLIGHT - LIGHT THEME */}
      <section className="py-20 sm:py-28 bg-[#FFFCF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E7E5DA] p-8 sm:p-12 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
              
              <div className="md:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden aspect-3/4 border-4 border-[#F3F5EC] shadow-sm">
                  <img
                    src="/images/real-waterfall-traveler.jpg"
                    alt="Retreat Guide by the Barshangarh Waterfall"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-[#42634B] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-xs">
                  Trip Lead Facilitator
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#42634B] font-semibold">
                  Meet Your Guide
                </span>
                <h3 className="font-serif text-3xl font-semibold text-[#303D32]">
                  Tara & The Healing Circle Guides
                </h3>
                <p className="text-xs text-[#C59A56] font-semibold uppercase tracking-wider">
                  Certified Hatha Yoga & Mindful Travel Facilitators
                </p>

                <p className="text-sm text-[#73796F] leading-relaxed">
                  "Having explored the remote valleys of Himachal for years, Shangarh remains our deepest sanctuary. Our purpose on every Healing Circle trip is to hold a warm, grounding container where every girl feels completely safe to unpack her inner self, breathe clean air, and laugh freely."
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#42634B] font-medium">
                  <span>• 100% Women-Led Facilitation</span>
                  <span>• Wilderness Safety Certified</span>
                  <span>• Local Pahadi Guides & Drivers</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* 5. CALL TO ACTION - LIGHT NATURE BANNER WITH WHATSAPP */}
      <section className="py-20 bg-gradient-to-r from-[#F3F5EC] via-[#FFFCF6] to-[#F3F5EC] text-[#303D32] text-center border-t border-[#E7E5DA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-xs uppercase tracking-widest text-[#42634B] font-semibold mb-4 border border-[#E7E5DA] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A56]" />
            <span>Join Our Next Circle</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4 text-[#303D32]">
            Come Sit in the Circle
          </h2>
          <p className="text-sm sm:text-base text-[#73796F] mb-8 font-normal leading-relaxed">
            We keep each batch intimate (10 to 14 women) so that real connections can flourish. We would love to welcome you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/book" variant="primary" size="lg" icon={Sparkles}>
              Join Upcoming Batch (₹9,499*)
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm text-[#0F5132] bg-[#E8F8EE] border border-[#A3E6BA] hover:bg-[#D4F4DF] transition-all duration-200 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>Chat with Guides on WhatsApp</span>
            </a>
            <Button to="/trip-details" variant="outline" size="lg" icon={ArrowRight}>
              Explore Full Details
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
