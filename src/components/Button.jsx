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
    primary: 'bg-[#42634B] text-white hover:bg-[#344F3C] hover:shadow-md hover:shadow-[#42634B]/20 focus:ring-[#42634B]',
    secondary: 'bg-[#F3F5EC] text-[#42634B] hover:bg-[#E5E9DB] border border-[#E7E5DA] focus:ring-[#8FA58A]',
    gold: 'bg-[#C59A56] text-white hover:bg-[#B38743] hover:shadow-md hover:shadow-[#C59A56]/20 focus:ring-[#C59A56]',
    outline: 'border border-[#42634B] text-[#42634B] bg-transparent hover:bg-[#42634B] hover:text-white focus:ring-[#42634B]',
    outlineLight: 'border border-[#E7E5DA] bg-white/95 text-[#303D32] hover:bg-[#F3F5EC] hover:text-[#42634B] shadow-xs focus:ring-[#42634B]',
    ghost: 'text-[#42634B] hover:text-[#303D32] hover:bg-[#F3F5EC] px-3 py-1.5 focus:ring-[#42634B]',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20BA5C] hover:shadow-md hover:shadow-[#25D366]/30 focus:ring-[#25D366]'
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
