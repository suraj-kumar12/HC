import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-23 right-7 z-30 p-2.5 rounded-full bg-white text-[#42634B] shadow-md hover:bg-[#F3F5EC] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#42634B] cursor-pointer border border-[#E7E5DA] print:hidden"
      aria-label="Back to top"
      title="Scroll to top"
    >
      <ArrowUp className="w-4 h-4 text-[#42634B]" />
    </button>
  );
}
