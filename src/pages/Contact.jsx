import React from 'react';
import {
  Sparkles,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  AlertCircle,
  MessageCircle
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import { TRIP_CONFIG } from '../data/tripData';

export default function Contact() {
  const whatsappUrl = `https://wa.me/918586020962?text=${encodeURIComponent(
    "Hi Healing Circle team! I'd like to ask a few questions about the Shangarh retreat."
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFCF6] text-[#303D32]">
      
      {/* 1. HERO HEADER - BRIGHT LIGHT NATURE THEME */}
      <section className="relative py-24 sm:py-32 overflow-hidden text-center border-b border-[#E7E5DA]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/real-stay-flower-garden.jpg"
            alt="Chamomile flower garden and wooden homestay in Shangarh"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFCF6]/90 via-[#FFFCF6]/75 to-[#FFFCF6]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E7E5DA] text-xs uppercase tracking-widest text-[#42634B] font-semibold mb-6 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A56]" />
            <span>Connect with Healing Circle</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight mb-4 leading-tight text-[#303D32]">
            We Are Here to Guide You
          </h1>

          <p className="text-base sm:text-xl text-[#73796F] font-normal max-w-2xl mx-auto leading-relaxed">
            Have questions about traveling solo, batch availability, bus routes, or what to expect in the circle? Reach out to our team.
          </p>
        </div>
      </section>


      {/* 2. CONTACT CONTENT GRID */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Demo Disclaimer Alert */}
        <div className="bg-[#F3F5EC] border border-[#E7E5DA] rounded-2xl p-4 mb-12 text-xs text-[#4E564F] flex items-start gap-3 shadow-2xs">
          <AlertCircle className="w-5 h-5 text-[#C59A56] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-[#303D32]">Demonstration Website Notice:</strong> This contact page is built for frontend presentation. Form inquiries and calculator validation operate locally in React client state. You can reach out directly via WhatsApp for real retreat inquiries.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Contact Details & Info (Col 1-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Logo className="max-w-[170px] max-h-12 mb-3" />
              <span className="text-xs uppercase tracking-widest text-[#42634B] font-semibold">
                Trip Concierge
              </span>
              <h2 className="font-serif text-3xl font-semibold text-[#303D32] mt-1 mb-3">
                Healing Circle Office
              </h2>
              <p className="text-sm text-[#73796F] leading-relaxed">
                Our team is based between New Delhi and Shangarh, ensuring seamless logistics, female safety, and personalized support from the moment you plan until you return home.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-[#E7E5DA] shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center shrink-0 border border-[#E7E5DA]">
                  <MapPin className="w-5 h-5 text-[#42634B]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#303D32] mb-1">
                    Retreat Location
                  </h4>
                  <p className="text-xs sm:text-sm text-[#73796F] leading-snug">
                    {TRIP_CONFIG.contactInfo.address}
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E7E5DA] shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F3F5EC] text-[#42634B] flex items-center justify-center shrink-0 border border-[#E7E5DA]">
                  <Mail className="w-5 h-5 text-[#42634B]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#303D32] mb-1">
                    Direct Email
                  </h4>
                  <a
                    href={`mailto:${TRIP_CONFIG.contactInfo.email}`}
                    className="text-xs sm:text-sm text-[#42634B] hover:text-[#C59A56] hover:underline font-medium"
                  >
                    {TRIP_CONFIG.contactInfo.email}
                  </a>
                  <span className="text-[11px] text-[#73796F] block mt-0.5">Average reply time: 6-12 hours</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E7E5DA] shadow-2xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E7EEE9] text-[#25D366] flex items-center justify-center shrink-0 border border-[#A3E6BA]">
                  <Phone className="w-5 h-5 text-[#0F5132]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#303D32] mb-1">
                      Helpline & WhatsApp
                    </h4>
                    <span className="text-[10px] bg-[#E8F8EE] text-[#0F5132] px-2 py-0.5 rounded-full font-semibold border border-[#A3E6BA]">
                      Active
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#303D32] font-semibold">
                    {TRIP_CONFIG.contactInfo.phone}
                  </p>
                  <span className="text-[11px] text-[#73796F] block mt-0.5">Mon - Sat (10:00 AM - 7:00 PM IST)</span>
                  
                  <div className="mt-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0F5132] bg-[#E8F8EE] border border-[#A3E6BA] hover:bg-[#D4F4DF] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick trust box */}
            <div className="bg-[#F3F5EC] rounded-2xl p-6 border border-[#E7E5DA]">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#42634B]" />
                <h4 className="font-serif text-lg font-semibold text-[#303D32]">
                  Safe & Welcoming
                </h4>
              </div>
              <p className="text-xs text-[#73796F] leading-relaxed">
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
