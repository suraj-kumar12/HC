import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Mail, Phone, Calendar, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { TRIP_CONFIG } from '../data/tripData';

const currentYear = 2026;

export default function Footer() {
  const whatsappUrl = `https://wa.me/918586020962?text=${encodeURIComponent('Hi Healing Circle, I would like to know more about the Shangarh retreat!')}`;

  return (
    <footer className="bg-[#F3F5EC] text-[#303D32] pt-16 pb-12 border-t border-[#E7E5DA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand & Mission (Col 1-2) */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center mb-5 group transition-transform hover:scale-[1.02]"
              aria-label="Healing Circle Home"
            >
              <Logo className="max-w-[160px] sm:max-w-[175px] max-h-12" />
            </Link>
            
            <p className="text-sm text-[#73796F] leading-relaxed max-w-sm mb-6 font-light">
              A curated Himalayan wellness and travel collective dedicated exclusively to women. Slow travel, gentle mindfulness, creative arts, and deep sisterhood in the whispering pine meadows of Shangarh.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#42634B] bg-white border border-[#E7E5DA] px-3.5 py-2 rounded-full w-fit shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#42634B]" />
              <span>100% Women-Only Safe Space & Verified Local Hosts</span>
            </div>
          </div>

          {/* Navigation Links (Col 3) */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#303D32] mb-4 tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#73796F] hover:text-[#42634B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#73796F] hover:text-[#42634B] transition-colors">
                  About Our Circle
                </Link>
              </li>
              <li>
                <Link to="/trip-details" className="text-[#73796F] hover:text-[#42634B] transition-colors">
                  Itinerary & Details
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#73796F] hover:text-[#42634B] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#73796F] hover:text-[#42634B] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-[#42634B] hover:underline font-semibold inline-flex items-center gap-1">
                  Book Your Spot <ArrowUpRight className="w-3.5 h-3.5 text-[#C59A56]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Upcoming Batches (Col 4) */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#303D32] mb-4 tracking-wide">
              Upcoming Batches
            </h3>
            <ul className="space-y-3 text-xs">
              {TRIP_CONFIG.batches.slice(0, 3).map((b) => (
                <li key={b.id} className="bg-white border border-[#E7E5DA] p-3 rounded-xl shadow-2xs">
                  <div className="flex items-center justify-between text-[#303D32] font-semibold mb-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-[#C59A56]" />
                      {b.dates}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#73796F]">
                    <span>{b.status}</span>
                    <span className="text-[#42634B] font-bold">{TRIP_CONFIG.currency}{TRIP_CONFIG.basePrice.toLocaleString()}*</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & WhatsApp (Col 5) */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#303D32] mb-4 tracking-wide">
              Reach Out
            </h3>
            <ul className="space-y-3 text-xs text-[#73796F]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59A56] shrink-0 mt-0.5" />
                <span>{TRIP_CONFIG.contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C59A56] shrink-0" />
                <a href={`mailto:${TRIP_CONFIG.contactInfo.email}`} className="hover:text-[#42634B] transition-colors">
                  {TRIP_CONFIG.contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C59A56] shrink-0" />
                <span>{TRIP_CONFIG.contactInfo.phone}</span>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white font-medium transition-all duration-200 border border-[#25D366]/20"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.2.301-.778.978-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.785-1.674-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.508-.678-.517-.176-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.91 1.23 3.111.15.201 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.9.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.516 2 2.028 6.488 2.028 12.012c0 1.83.498 3.543 1.365 5.02L2 22l5.143-1.35c1.43.784 3.064 1.237 4.897 1.237 5.524 0 10.012-4.488 10.012-10.012S17.564 2 12.04 2zm0 18.286c-1.614 0-3.107-.442-4.397-1.208l-.315-.187-3.262.856.871-3.18-.205-.327c-.846-1.348-1.32-2.92-1.32-4.608 0-4.622 3.766-8.388 8.388-8.388 4.622 0 8.388 3.766 8.388 8.388 0 4.622-3.766 8.388-8.388 8.388z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-[#E7E5DA]">
              <span className="text-[11px] text-[#73796F] block mb-1 font-medium">Group Size:</span>
              <span className="text-xs text-[#42634B] bg-white border border-[#E7E5DA] px-2.5 py-1 rounded-md font-semibold">
                {TRIP_CONFIG.groupSize}
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="border-t border-[#E7E5DA] pt-6 pb-4">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73796F]">
            <p className="flex items-center gap-1.5">
              <span>© {currentYear} Healing Circle Retreats. Built with</span>
              <Heart className="w-3.5 h-3.5 text-[#C59A56] fill-current" />
              <span>for women who seek the mountains.</span>
            </p>
            <div className="flex items-center gap-4">
              <Link to="/about" className="hover:text-[#42634B] transition-colors">Philosophy</Link>
              <span>•</span>
              <Link to="/trip-details" className="hover:text-[#42634B] transition-colors">Itinerary</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-[#42634B] transition-colors">Concierge</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
