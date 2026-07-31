import React, { useState, useEffect } from 'react';

interface PartnerLogoItem {
  id?: string;
  name: string;
  logo_url?: string;
  website_url?: string;
  sort_order?: number;
  is_active?: boolean;
}

const DEFAULT_LOGOS: PartnerLogoItem[] = [
  { name: 'Skill India', logo_url: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Skill_India_logo.svg' },
  { name: 'NSDC', logo_url: 'https://upload.wikimedia.org/wikipedia/en/6/6d/NSDC_Logo.png' },
  { name: 'Startup India', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Startup_India_Logo.svg' },
  { name: 'Honeywell', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Honeywell_logo.svg/320px-Honeywell_logo.svg.png' },
  { name: 'PcVue Solutions', logo_url: 'https://www.pcvuesolutions.com/templates/pcvue/images/logo.png' },
  { name: 'Tridium', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tridium_logo.svg/320px-Tridium_logo.svg.png' },
  { name: 'HubSpot', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg' },
  { name: 'Microsoft', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Google', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Zapier', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Zapier_logo.svg' },
  { name: 'AWS', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Stripe', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
  { name: 'Notion', logo_url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
];

export const TrustedLogosBar: React.FC = () => {
  const [logos, setLogos] = useState<PartnerLogoItem[]>(DEFAULT_LOGOS);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetchPartnerLogos();
  }, []);

  const fetchPartnerLogos = async () => {
    try {
      const res = await fetch('/api/partner-logos');
      const data = await res.json();
      if (res.ok && data.logos && data.logos.length > 0) {
        setLogos(data.logos);
      }
    } catch {
      // Fallback to DEFAULT_LOGOS
    }
  };

  const handleImageError = (name: string) => {
    setFailedImages((prev) => ({ ...prev, [name]: true }));
  };

  // Duplicate array for seamless infinite looping marquee scroll
  const marqueeList = [...logos, ...logos];

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

      {/* Infinite Left-Scrolling Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-2">
          {marqueeList.map((logo, idx) => {
            const hasUrl = logo.logo_url && !failedImages[logo.name];
            return (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center justify-center shrink-0 group cursor-pointer h-10 px-2"
                title={logo.name}
              >
                {hasUrl ? (
                  <img
                    src={logo.logo_url}
                    alt={logo.name}
                    onError={() => handleImageError(logo.name)}
                    className="h-7 sm:h-9 max-w-[150px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter drop-shadow-xs"
                  />
                ) : (
                  <span className="text-xl sm:text-2xl font-black text-slate-800 opacity-80 group-hover:opacity-100 group-hover:text-[#2563EB] group-hover:scale-105 transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif]">
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
