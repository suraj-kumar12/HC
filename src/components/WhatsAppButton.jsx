import React, { useState } from 'react';

/**
 * Floating WhatsApp action button placed at bottom of the screen.
 * Connects directly to Healing Circle trip concierge: +91 8586020962
 */
export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = '918586020962';
  const defaultMessage = 'Hi Healing Circle, I would like to know more about the Shangarh Girls Trip!';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 print:hidden"
      aria-label="WhatsApp Concierge Assistance"
    >
      {/* Tooltip / Label */}
      <span
        className={`hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full bg-white text-[#303D32] text-xs font-medium shadow-lg border border-[#E7E5DA] transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat with our Guide on WhatsApp
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-108 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with Healing Circle on WhatsApp (+91 8586020962)"
      >
        {/* Soft pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 group-hover:animate-ping"
          aria-hidden="true"
        />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 relative z-10 fill-current transition-transform duration-300 group-hover:rotate-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.2.301-.778.978-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.799-1.498-1.785-1.674-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.508-.678-.517-.176-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.91 1.23 3.111.15.201 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.9.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352zM12.04 2C6.516 2 2.028 6.488 2.028 12.012c0 1.83.498 3.543 1.365 5.02L2 22l5.143-1.35c1.43.784 3.064 1.237 4.897 1.237 5.524 0 10.012-4.488 10.012-10.012S17.564 2 12.04 2zm0 18.286c-1.614 0-3.107-.442-4.397-1.208l-.315-.187-3.262.856.871-3.18-.205-.327c-.846-1.348-1.32-2.92-1.32-4.608 0-4.622 3.766-8.388 8.388-8.388 4.622 0 8.388 3.766 8.388 8.388 0 4.622-3.766 8.388-8.388 8.388z" />
        </svg>

        {/* Online status indicator dot */}
        <span
          className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-white"
          title="Online"
        />
      </a>
    </aside>
  );
}
