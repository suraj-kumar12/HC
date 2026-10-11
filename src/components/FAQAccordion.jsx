import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';

export default function FAQAccordion({ limit = null, showFilter = true }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openItems, setOpenItems] = useState({ "0-0": true }); // default first question open

  const categories = ["All", ...FAQ_DATA.map((c) => c.category)];

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Prepare items based on category selection
  let filteredSections = FAQ_DATA;
  if (activeCategory !== "All") {
    filteredSections = FAQ_DATA.filter((c) => c.category === activeCategory);
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Category Pills (optional) */}
      {showFilter && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1E3A2F] text-white shadow-sm'
                  : 'bg-white text-[#4A5D53] border border-[#CFDDD3] hover:border-[#1E3A2F] hover:bg-[#FAF8F5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredSections.map((section, secIdx) => {
          const itemsToDisplay = limit ? section.items.slice(0, limit) : section.items;

          return (
            <div key={section.category} className="space-y-3">
              {activeCategory === "All" && (
                <h3 className="font-serif text-lg font-semibold text-[#142820] pt-4 pb-1 border-b border-[#CFDDD3]/60 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#C99E32]" />
                  {section.category}
                </h3>
              )}

              {itemsToDisplay.map((item, itemIdx) => {
                const key = `${secIdx}-${itemIdx}`;
                const isOpen = !!openItems[key];

                return (
                  <div
                    key={item.question}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-white border-[#1E3A2F]/30 shadow-md shadow-[#1E3A2F]/5'
                        : 'bg-white/80 border-[#E8E1D7] hover:border-[#B2C9B9] hover:bg-white'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(key)}
                      aria-expanded={isOpen}
                      className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#1E3A2F] focus:ring-inset cursor-pointer"
                    >
                      <span className="font-serif text-base sm:text-lg font-medium text-[#142820] leading-snug">
                        {item.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? 'bg-[#1E3A2F] text-white rotate-180'
                            : 'bg-[#F4EFE6] text-[#1E3A2F]'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#4A5D53] leading-relaxed border-t border-[#FAF8F5] animate-fade-in">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
