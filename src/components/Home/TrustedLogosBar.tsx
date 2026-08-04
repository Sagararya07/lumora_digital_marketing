import React, { useState } from 'react';
import { TrustedLogo } from '../../types';

interface TrustedLogosProps {
  trustedLogos?: TrustedLogo[];
}

const DEFAULT_LOGOS: TrustedLogo[] = [
  { id: '1', name: 'Startup India', image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Startup_India_Logo.svg' },
  { id: '2', name: 'Honeywell', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Honeywell_logo.svg/320px-Honeywell_logo.svg.png' },
  { id: '3', name: 'HubSpot', image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg' },
  { id: '4', name: 'Microsoft', image_url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { id: '5', name: 'Google', image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
];

export const TrustedLogosBar: React.FC<TrustedLogosProps> = ({ trustedLogos = [] }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const displayLogos = trustedLogos.length > 0 ? trustedLogos : DEFAULT_LOGOS;

  const handleImageError = (name: string) => {
    setFailedImages((prev) => ({ ...prev, [name]: true }));
  };

  // Use static list instead of duplicate marquee
  const displayList = displayLogos;

  return (
    <section className="py-10 bg-[#F8FAFC] border-y border-[#E5E7EB] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#6B7280] font-['Plus_Jakarta_Sans',sans-serif]">
          TRUSTED BY AMBITIOUS BRANDS & GLOBAL ENTERPRISES
        </p>
      </div>

      {/* Side Fade Gradient Overlays */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

      {/* Static Centered Logos */}
      <div className="flex justify-center select-none">
        <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-16 py-2">
          {displayList.map((logo, idx) => {
            const hasUrl = logo.image_url && !failedImages[logo.name];
            return (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center justify-center shrink-0 group cursor-pointer h-10 px-2"
                title={logo.name}
              >
                {hasUrl ? (
                  <img
                    src={logo.image_url}
                    alt={logo.name}
                    onError={() => handleImageError(logo.name)}
                    className="h-7 sm:h-9 max-w-[150px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter drop-shadow-xs"
                  />
                ) : (
                  <span className="text-xl sm:text-2xl font-black text-slate-800 opacity-80 group-hover:opacity-100 group-hover:text-[#5B8EE2] group-hover:scale-105 transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif]">
                    {logo.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
