import React from 'react';

const LOGOS = [
  { name: 'HubSpot', style: 'text-[#FF7A59] font-black font-sans' },
  { name: 'Microsoft', style: 'text-[#00A4EF] font-bold font-sans' },
  { name: 'Google', style: 'text-[#4285F4] font-extrabold font-sans' },
  { name: 'zapier', style: 'text-[#FF4F00] font-extrabold font-mono' },
  { name: 'aws', style: 'text-[#FF9900] font-black font-sans tracking-widest uppercase' },
  { name: 'stripe', style: 'text-[#635BFF] font-black font-sans italic' },
  { name: 'Notion', style: 'text-[#111827] font-extrabold font-serif' },
];

export const TrustedLogosBar: React.FC = () => (
  <section className="py-12 bg-[#F8FAFC] border-y border-[#E5E7EB]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#6B7280] mb-8 font-['Plus_Jakarta_Sans',sans-serif]">
        TRUSTED BY AMBITIOUS BRANDS WORLDWIDE
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {LOGOS.map((logo) => (
          <span
            key={logo.name}
            className={`text-xl sm:text-2xl opacity-85 hover:opacity-100 transition-all cursor-pointer ${logo.style}`}
          >
            {logo.name}
          </span>
        ))}
      </div>
    </div>
  </section>
);
