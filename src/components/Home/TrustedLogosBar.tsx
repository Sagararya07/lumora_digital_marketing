import React from 'react';

const LOGOS = [
  { name: 'HubSpot', style: 'text-[#FF7A59] font-black font-sans' },
  { name: 'Microsoft', style: 'text-[#00A4EF] font-bold font-sans' },
  { name: 'Google', style: 'text-[#4285F4] font-extrabold font-sans' },
  { name: 'zapier', style: 'text-[#FF4F00] font-extrabold font-mono' },
  { name: 'AWS', style: 'text-[#FF9900] font-black font-sans tracking-wider uppercase' },
  { name: 'stripe', style: 'text-[#635BFF] font-black font-sans italic' },
  { name: 'Notion', style: 'text-[#111827] font-extrabold font-serif' },
  { name: 'Honeywell', style: 'text-[#E52521] font-black font-sans tracking-tight' },
  { name: 'PcVue Solutions', style: 'text-[#DC2626] font-black font-sans border-2 border-red-500/80 px-2 py-0.5 rounded-lg' },
  { name: 'Skill India', style: 'text-[#0284C7] font-extrabold font-sans' },
  { name: 'NSDC', style: 'text-[#059669] font-black font-sans tracking-widest' },
  { name: 'Startup India', style: 'text-[#D97706] font-bold font-sans' },
  { name: 'Tridium', style: 'text-[#2563EB] font-black font-sans tracking-wide' },
  { name: 'Ridium', style: 'text-[#38BDF8] font-black font-sans tracking-widest' },
  { name: 'BrainBox AI', style: 'text-[#475569] font-black font-sans tracking-wider' },
];

export const TrustedLogosBar: React.FC = () => {
  // Duplicate array for seamless infinite looping scroll
  const marqueeItems = [...LOGOS, ...LOGOS];

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
          {marqueeItems.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex items-center gap-2 shrink-0 group cursor-pointer"
            >
              <span
                className={`text-xl sm:text-2xl opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ${logo.style}`}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
