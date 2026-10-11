import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Mail, Phone, Calendar, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { TRIP_CONFIG } from '../data/tripData';

const currentYear = 2026;

export default function Footer() {

  return (
    <footer className="bg-[#142820] text-[#FAF8F5] pt-16 pb-12 border-t border-[#294D3F] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#294D3F]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C99E32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand & Mission (Col 1-2) */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center p-2 px-3.5 rounded-2xl bg-[#FAF8F5] mb-5 shadow-md shadow-black/20 hover:bg-white transition-all duration-300 group"
              aria-label="Healing Circle Home"
            >
              <Logo className="max-w-[140px] sm:max-w-[155px] max-h-11" />
            </Link>
            
            <p className="text-sm text-[#CFDDD3] leading-relaxed max-w-sm mb-6">
              A curated Himalayan wellness and travel collective dedicated exclusively to women. Slow travel, gentle mindfulness, creative arts, and deep sisterhood in the whispering pine meadows of Shangarh.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#E5C66C] bg-[#1E3A2F]/80 border border-[#294D3F] px-3.5 py-2 rounded-full w-fit">
              <ShieldCheck className="w-4 h-4 text-[#E5C66C]" />
              <span>100% Women-Only Safe Space & Verified Local Hosts</span>
            </div>
          </div>

          {/* Navigation Links (Col 3) */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4 tracking-wide flex items-center gap-2">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#CFDDD3] hover:text-[#E5C66C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#CFDDD3] hover:text-[#E5C66C] transition-colors">
                  About Our Circle
                </Link>
              </li>
              <li>
                <Link to="/trip-details" className="text-[#CFDDD3] hover:text-[#E5C66C] transition-colors">
                  Itinerary & Details
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#CFDDD3] hover:text-[#E5C66C] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#CFDDD3] hover:text-[#E5C66C] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-[#E5C66C] hover:underline font-medium inline-flex items-center gap-1">
                  Book Your Spot <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Upcoming Batches (Col 4) */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4 tracking-wide">
              Upcoming Batches
            </h3>
            <ul className="space-y-3 text-xs">
              {TRIP_CONFIG.batches.slice(0, 3).map((b) => (
                <li key={b.id} className="bg-[#1E3A2F]/60 border border-[#294D3F] p-2.5 rounded-lg">
                  <div className="flex items-center justify-between text-white font-medium mb-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#E5C66C]" />
                      {b.dates}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#B2C9B9]">
                    <span>{b.status}</span>
                    <span className="text-[#E5C66C] font-semibold">{TRIP_CONFIG.currency}{TRIP_CONFIG.basePrice.toLocaleString()}*</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 5) */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4 tracking-wide">
              Reach Out
            </h3>
            <ul className="space-y-3 text-xs text-[#CFDDD3]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5C66C] shrink-0 mt-0.5" />
                <span>{TRIP_CONFIG.contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E5C66C] shrink-0" />
                <a href={`mailto:${TRIP_CONFIG.contactInfo.email}`} className="hover:text-white transition-colors">
                  {TRIP_CONFIG.contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5C66C] shrink-0" />
                <span>{TRIP_CONFIG.contactInfo.phone}</span>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-[#294D3F]">
              <span className="text-[11px] text-[#A8C2B6] block mb-2 font-medium">Group Size:</span>
              <span className="text-xs text-white bg-[#294D3F] px-2.5 py-1 rounded-md">
                {TRIP_CONFIG.groupSize}
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="border-t border-[#294D3F] pt-6 pb-4">
          <div className="bg-[#0C1913]/60 border border-[#294D3F]/70 rounded-xl p-3.5 mb-6 text-xs text-[#A8C2B6] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-center sm:text-left">
              <strong>Demonstration Notice:</strong> This website is a frontend portfolio project. The price of ₹9,499 is a configurable placeholder. No live payment gateways, real transactions, or server database collections exist.
            </span>
            <span className="text-[#E5C66C] whitespace-nowrap font-medium text-[11px]">
              Frontend Prototype Only
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B2C9B9]">
            <p className="flex items-center gap-1.5">
              <span>© {currentYear} Healing Circle Retreats. Built with</span>
              <Heart className="w-3.5 h-3.5 text-[#E5C66C] fill-current" />
              <span>for women who seek the mountains.</span>
            </p>
            <div className="flex items-center gap-4">
              <Link to="/about" className="hover:text-white transition-colors">Philosophy</Link>
              <span>•</span>
              <Link to="/trip-details" className="hover:text-white transition-colors">Itinerary</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-white transition-colors">Concierge</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
