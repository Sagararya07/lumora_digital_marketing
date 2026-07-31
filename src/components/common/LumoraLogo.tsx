import React from 'react';

interface LumoraLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  layout?: 'horizontal' | 'vertical';
  className?: string;
}

export const LumoraLogo: React.FC<LumoraLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-24 sm:h-32',
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {/* Exact User Uploaded Lumora Logo Image with Seamless Blend */}
      <img
        src="/lumora-logo.png"
        alt="Lumora Logo"
        className={`${sizeClasses[size]} w-auto object-contain transition-all duration-300 hover:scale-105 mix-blend-multiply dark:mix-blend-normal rounded-lg`}
      />
    </div>
  );
};
