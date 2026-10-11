import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary: 'bg-[#1E3A2F] text-[#FAF8F5] hover:bg-[#152A22] hover:shadow-lg hover:shadow-[#1E3A2F]/20 focus:ring-[#1E3A2F]',
    secondary: 'bg-[#D9E5DE] text-[#1E3A2F] hover:bg-[#C8D9D0] focus:ring-[#7D9B8B]',
    gold: 'bg-[#C99E32] text-white hover:bg-[#B38822] hover:shadow-md hover:shadow-[#C99E32]/30 focus:ring-[#C99E32]',
    outline: 'border border-[#1E3A2F] text-[#1E3A2F] hover:bg-[#1E3A2F] hover:text-[#FAF8F5] focus:ring-[#1E3A2F]',
    outlineLight: 'border border-white/60 text-white hover:bg-white hover:text-[#1E3A2F] focus:ring-white',
    ghost: 'text-[#1E3A2F] hover:text-[#6B917E] hover:bg-[#EFE9DF]/50 px-3 py-1.5 focus:ring-[#1E3A2F]'
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2 tracking-wide',
    lg: 'text-base px-8 py-3.5 gap-2.5 font-semibold tracking-wide'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-200" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
