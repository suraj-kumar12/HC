import React from 'react';

/**
 * Reusable Logo component for the Healing Circle project.
 * Uses the photorealistic Healing Circle logo image.
 *
 * @param {string} className - Additional CSS classes (e.g. max-w-[180px], max-h-12)
 * @param {string} variant - 'default' (transparent PNG), 'cream' (cream background), or 'emblem' (icon only)
 * @param {string} alt - Accessibility alt text
 */
function Logo({
  className = '',
  variant = 'default',
  alt = 'Healing Circle — Travel, Wellness, Sisterhood'
}) {
  let src = '/images/healing-circle-logo.png';
  if (variant === 'cream') {
    src = '/images/healing-circle-logo-crop.png';
  } else if (variant === 'emblem') {
    src = '/images/healing-circle-emblem.png';
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`h-auto w-full object-contain ${className}`}
      loading="eager"
    />
  );
}

export default Logo;
