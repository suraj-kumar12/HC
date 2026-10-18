import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, MapPin } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

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

  const whatsappMessage = encodeURIComponent('Hi Healing Circle, I have an enquiry about the Shangarh Girls Retreat!');
  const whatsappUrl = `https://wa.me/918586020962?text=${whatsappMessage}`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E7E5DA] py-2.5 sm:py-3'
            : 'bg-[#FFFCF6]/95 backdrop-blur-md border-b border-[#E7E5DA]/60 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#42634B] rounded-lg p-1 transition-transform hover:scale-[1.02]"
              aria-label="Healing Circle Home"
            >
              <Logo className="max-w-[145px] sm:max-w-[170px] md:max-w-[190px] max-h-11 sm:max-h-13" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                      active
                        ? 'text-[#42634B] bg-[#F3F5EC] font-semibold'
                        : 'text-[#303D32] hover:text-[#42634B] hover:bg-[#F3F5EC]/70'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C59A56]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons & Mobile Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* WhatsApp Quick Action Button (Desktop & Tablet) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#F3F5EC] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 border border-[#E7E5DA] shadow-2xs"
                title="Chat with us on WhatsApp"
                aria-label="Chat with our guide on WhatsApp"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.2.301-.778.978-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.785-1.674-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.508-.678-.517-.176-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.91 1.23 3.111.15.201 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.9.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.516 2 2.028 6.488 2.028 12.012c0 1.83.498 3.543 1.365 5.02L2 22l5.143-1.35c1.43.784 3.064 1.237 4.897 1.237 5.524 0 10.012-4.488 10.012-10.012S17.564 2 12.04 2zm0 18.286c-1.614 0-3.107-.442-4.397-1.208l-.315-.187-3.262.856.871-3.18-.205-.327c-.846-1.348-1.32-2.92-1.32-4.608 0-4.622 3.766-8.388 8.388-8.388 4.622 0 8.388 3.766 8.388 8.388 0 4.622-3.766 8.388-8.388 8.388z" />
                </svg>
              </a>

              <Button
                to="/book"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex shadow-xs"
                icon={Sparkles}
              >
                Book Your Spot
              </Button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-xl text-[#303D32] hover:bg-[#F3F5EC] focus:outline-none focus:ring-2 focus:ring-[#42634B]"
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
            className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="relative z-10 bg-[#FFFCF6] border-b border-[#E7E5DA] px-6 py-6 shadow-2xl flex flex-col animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E7E5DA]">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center"
                aria-label="Healing Circle Home"
              >
                <Logo className="max-w-[145px] max-h-11" />
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#303D32] hover:bg-[#F3F5EC] focus:outline-none focus:ring-2 focus:ring-[#42634B]"
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
                        ? 'bg-[#42634B] text-white font-semibold'
                        : 'text-[#303D32] hover:bg-[#F3F5EC]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#C59A56]" />}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 pb-4 border-t border-[#E7E5DA] flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-[#73796F] px-1">
                <MapPin className="w-3.5 h-3.5 text-[#C59A56]" />
                <span>Shangarh, Sainj Valley, HP • All-Women Circle</span>
              </div>

              {/* WhatsApp direct link in mobile menu */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#F3F5EC] text-[#25D366] font-semibold text-sm border border-[#E7E5DA] hover:bg-[#E5E9DB] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.2.301-.778.978-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.785-1.674-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.508-.678-.517-.176-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.91 1.23 3.111.15.201 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.9.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.516 2 2.028 6.488 2.028 12.012c0 1.83.498 3.543 1.365 5.02L2 22l5.143-1.35c1.43.784 3.064 1.237 4.897 1.237 5.524 0 10.012-4.488 10.012-10.012S17.564 2 12.04 2zm0 18.286c-1.614 0-3.107-.442-4.397-1.208l-.315-.187-3.262.856.871-3.18-.205-.327c-.846-1.348-1.32-2.92-1.32-4.608 0-4.622 3.766-8.388 8.388-8.388 4.622 0 8.388 3.766 8.388 8.388 0 4.622-3.766 8.388-8.388 8.388z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              <Button
                to="/book"
                variant="primary"
                size="md"
                className="w-full text-center"
                icon={Sparkles}
                onClick={() => setIsOpen(false)}
              >
                Book Your Spot (₹6,999)
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
