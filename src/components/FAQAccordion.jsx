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
      {/* Category Pills */}
      {showFilter && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#42634B] text-white shadow-xs'
                  : 'bg-white text-[#73796F] border border-[#E7E5DA] hover:border-[#42634B] hover:text-[#303D32] hover:bg-[#F3F5EC]'
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
                <h3 className="font-serif text-lg font-semibold text-[#303D32] pt-4 pb-1 border-b border-[#E7E5DA] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#C59A56]" />
                  {section.category}
                </h3>
              )}

              {itemsToDisplay.map((item, itemIdx) => {
                const key = `${secIdx}-${itemIdx}`;
                const isOpen = !!openItems[key];

                return (
                  <div
                    key={item.question}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                      isOpen
                        ? 'border-[#42634B]/40 shadow-md'
                        : 'border-[#E7E5DA] hover:border-[#8FA58A]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(key)}
                      aria-expanded={isOpen}
                      className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#42634B] focus:ring-inset cursor-pointer"
                    >
                      <span className="font-serif text-base sm:text-lg font-medium text-[#303D32] leading-snug">
                        {item.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? 'bg-[#42634B] text-white rotate-180'
                            : 'bg-[#F3F5EC] text-[#42634B]'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#73796F] leading-relaxed border-t border-[#F3F5EC] animate-fade-in">
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
