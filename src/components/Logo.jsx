import React from 'react';

/**
 * Reusable Logo component for Healing Circle.
 * Uses the exact logo at /images/hc.png.
 */
function Logo({ className = '' }) {
  return (
    <img
      src="/images/hc.png"
      alt="Healing Circle — Travel, Wellness, Sisterhood"
      className={`h-auto w-full object-contain ${className}`}
    />
  );
}

export default Logo;
