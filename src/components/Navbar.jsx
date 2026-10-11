import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, MapPin, Compass } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Trip Details', path: '/trip-details' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-sm border-b border-[#E8E1D7]/70 py-3'
            : 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E1D7]/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1E3A2F] rounded-lg p-1"
              aria-label="Healing Circle Home"
            >
              <div className="w-10 h-10 rounded-full bg-[#1E3A2F] text-[#FAF8F5] flex items-center justify-center shadow-md shadow-[#1E3A2F]/20 group-hover:scale-105 transition-transform duration-300 border border-[#D4AF37]/40">
                <Compass className="w-5 h-5 text-[#E5C66C] animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#142820] leading-none group-hover:text-[#1E3A2F] transition-colors">
                  Healing Circle
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#6B917E] font-medium mt-1">
                  Shangarh Retreat
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                      active
                        ? 'text-[#142820] bg-[#E7EEE9] font-semibold'
                        : 'text-[#4A5D53] hover:text-[#142820] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C99E32]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                to="/book"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex shadow-sm hover:shadow"
                icon={Sparkles}
              >
                Book Your Spot
              </Button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl text-[#1E3A2F] hover:bg-[#E7EEE9] focus:outline-none focus:ring-2 focus:ring-[#1E3A2F]"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="relative z-10 bg-[#FAF8F5] border-b border-[#E8E1D7] px-6 py-6 shadow-2xl flex flex-col animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E1D7]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#1E3A2F] flex items-center justify-center text-[#E5C66C]">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="font-serif text-lg font-bold text-[#142820]">
                  Healing Circle
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#1E3A2F] hover:bg-[#E7EEE9] focus:outline-none focus:ring-2 focus:ring-[#1E3A2F]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2 py-6">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                      active
                        ? 'bg-[#1E3A2F] text-white font-semibold'
                        : 'text-[#2C3E35] hover:bg-[#E7EEE9]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#E5C66C]" />}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 pb-4 border-t border-[#E8E1D7] flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs text-[#6B917E] px-1">
                <MapPin className="w-3.5 h-3.5 text-[#C99E32]" />
                <span>Shangarh, Sainj Valley, HP • All-Women Circle</span>
              </div>
              <Button
                to="/book"
                variant="primary"
                size="md"
                className="w-full text-center"
                icon={Sparkles}
                onClick={() => setIsOpen(false)}
              >
                Book Your Spot (₹9,499)
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
