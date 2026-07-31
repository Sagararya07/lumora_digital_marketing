import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Star
} from 'lucide-react';
import { HeroContent } from '../../types';

interface HeroSectionProps {
  content?: HeroContent;
  openConsultationModal: () => void;
  onNavigateToServices?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  openConsultationModal,
  onNavigateToServices,
}) => {
  return (
    <section 
      id="hero-section"
      className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 bg-white text-slate-900 transition-colors"
    >
      {/* Radiant Ambient Light Blue & Purple Swirl Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#38BDF8]/15 via-[#7C3AED]/15 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 text-[#7C3AED] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-purple-200 bg-purple-50/80 backdrop-blur-md shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <span>AI-POWERED GROWTH. MEASURABLE RESULTS.</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-extrabold text-slate-950 leading-[1.12] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                We Build Intelligent{' '}
                <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#38BDF8] bg-clip-text text-transparent">
                  Growth Systems
                </span>{' '}
                That Drive Real Business Impact.
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
              Lumora combines AI, marketing, automation and data to help businesses attract the right customers, convert more leads and scale revenue predictably.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary Pill Button */}
              <button
                onClick={() => {
                  if (onNavigateToServices) {
                    onNavigateToServices();
                  } else {
                    const el = document.getElementById('services-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] text-white text-sm font-extrabold flex items-center justify-center gap-2.5 shadow-xl shadow-blue-500/20 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif]"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              {/* Secondary Outlined Pill Button */}
              <button
                onClick={openConsultationModal}
                className="px-8 py-4 rounded-full border-2 border-[#2563EB]/40 bg-purple-50/40 hover:bg-[#2563EB] hover:text-white text-purple-900 text-sm font-extrabold flex items-center justify-center gap-2.5 transition-all group font-['Plus_Jakarta_Sans',sans-serif]"
              >
                <span className="group-hover:text-white transition-colors">Book a Strategy Call</span>
                <Calendar className="w-4 h-4 text-[#7C3AED] group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Social Proof Row with Avatars & Stars */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="User Avatar 1"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="User Avatar 2"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="User Avatar 3"
                />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
                  Trusted by 250+ Businesses
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="flex text-[#FBBF24]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FBBF24]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 ml-1">
                    4.9/5 Rating
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: User Uploaded Lumora Star Logo with Orbital Swirl Rings */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-[520px] aspect-square relative flex items-center justify-center">
              
              {/* Orbital Swirl Rings */}
              <div className="absolute inset-0 rounded-full border border-purple-200/60 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-blue-200/80 rotate-45" />
              <div className="absolute inset-14 rounded-full border border-pink-200/60 -rotate-45" />

              {/* Central Soft Light Beam */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-[#38BDF8]/20 via-[#7C3AED]/20 to-[#FBBF24]/20 blur-3xl" />

              {/* Exact User Uploaded Lumora Star Logo */}
              <div className="relative z-10 transform scale-110 hover:scale-115 transition-transform duration-700">
                <img
                  src="/lumora-logo.png"
                  alt="Lumora Star Radiant Emblem"
                  className="w-full max-w-[420px] h-auto object-contain pointer-events-none mix-blend-multiply"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
