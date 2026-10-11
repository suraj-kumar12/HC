import React from 'react';
import {
  Sparkles,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import { TRIP_CONFIG } from '../data/tripData';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-24 sm:py-32 bg-[#142820] text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/real-stay-flower-garden.jpg"
            alt="Chamomile flower garden and wooden homestay in Shangarh"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142820] via-[#142820]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-widest text-[#E5C66C] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C66C]" />
            <span>Connect with Healing Circle</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-4 leading-tight">
            We Are Here to Guide You
          </h1>

          <p className="text-base sm:text-xl text-[#CFDDD3] font-light max-w-2xl mx-auto leading-relaxed">
            Have questions about traveling solo, batch availability, bus routes, or what to expect in the circle? Reach out to our team.
          </p>
        </div>
      </section>


      {/* 2. CONTACT CONTENT GRID */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Demo Disclaimer Alert */}
        <div className="bg-[#FAF8F5] border border-[#CFDDD3] rounded-2xl p-4 mb-12 text-xs text-[#4A5D53] flex items-start gap-3 shadow-xs">
          <AlertCircle className="w-5 h-5 text-[#C99E32] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Demonstration Website Notice:</strong> This contact page is built for frontend presentation. Contact details and forms function locally using React client state and do not send network requests to a live backend.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Contact Details & Info (Col 1-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Logo className="max-w-[170px] max-h-12 mb-3" />
              <span className="text-xs uppercase tracking-widest text-[#6B917E] font-semibold">
                Trip Concierge
              </span>
              <h2 className="font-serif text-3xl font-semibold text-[#142820] mt-1 mb-3">
                Healing Circle Office
              </h2>
              <p className="text-sm text-[#4A5D53] leading-relaxed">
                Our team is based between New Delhi and Shangarh, ensuring seamless logistics, female safety, and personalized support from the moment you plan until you return home.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-[#CFDDD3] shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#6B917E]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#142820] mb-1">
                    Retreat Location
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A5D53] leading-snug">
                    {TRIP_CONFIG.contactInfo.address}
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#CFDDD3] shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#6B917E]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#142820] mb-1">
                    Direct Email
                  </h4>
                  <a
                    href={`mailto:${TRIP_CONFIG.contactInfo.email}`}
                    className="text-xs sm:text-sm text-[#1E3A2F] hover:underline font-medium"
                  >
                    {TRIP_CONFIG.contactInfo.email}
                  </a>
                  <span className="text-[11px] text-[#6B917E] block mt-0.5">Average reply time: 6-12 hours</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#CFDDD3] shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E7EEE9] text-[#1E3A2F] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#6B917E]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#142820] mb-1">
                    Helpline & WhatsApp
                  </h4>
                  <p className="text-xs sm:text-sm text-[#142820] font-medium">
                    {TRIP_CONFIG.contactInfo.phone}
                  </p>
                  <span className="text-[11px] text-[#6B917E] block mt-0.5">Mon - Sat (10:00 AM - 7:00 PM IST)</span>
                </div>
              </div>
            </div>

            {/* Quick trust box */}
            <div className="bg-[#E7EEE9] rounded-2xl p-6 border border-[#CFDDD3]">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#1E3A2F]" />
                <h4 className="font-serif text-lg font-semibold text-[#142820]">
                  Safe & Welcoming
                </h4>
              </div>
              <p className="text-xs text-[#4A5D53] leading-relaxed">
                Whether you have never traveled alone before or have special dietary needs, our female guides are always happy to schedule a quick 1-on-1 audio call to answer all questions.
              </p>
            </div>
          </div>

          {/* Contact Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
