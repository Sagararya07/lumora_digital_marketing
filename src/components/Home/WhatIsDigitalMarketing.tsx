import React from 'react';
import { 
  BarChart3, Zap, Globe2, Sparkles, ArrowUpRight,
  Activity, LineChart, Megaphone, Target, MousePointerClick, TrendingUp, Heart
} from 'lucide-react';
import { WhatIsDigitalContent } from '../../types';

interface WhatIsProps {
  content: WhatIsDigitalContent;
  openConsultationModal: () => void;
}

const pillarStyles = [
  { 
    bg: 'bg-white/80 hover:bg-rose-50/50', 
    iconBg: 'bg-rose-100 text-rose-500 group-hover:bg-rose-500 group-hover:text-white', 
    border: 'border-white hover:border-rose-100'
  },
  { 
    bg: 'bg-white/80 hover:bg-purple-50/50', 
    iconBg: 'bg-purple-100 text-purple-500 group-hover:bg-purple-500 group-hover:text-white', 
    border: 'border-white hover:border-purple-100'
  },
  { 
    bg: 'bg-white/80 hover:bg-peach-50/50 hover:bg-orange-50/50', 
    iconBg: 'bg-orange-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white', 
    border: 'border-white hover:border-orange-100'
  },
  { 
    bg: 'bg-white/80 hover:bg-pink-50/50', 
    iconBg: 'bg-pink-100 text-pink-500 group-hover:bg-pink-500 group-hover:text-white', 
    border: 'border-white hover:border-pink-100'
  },
];

export const WhatIsDigitalMarketing: React.FC<WhatIsProps> = ({ content, openConsultationModal }) => {
  const getPillarIcon = (iconName: string) => {
    const cls = 'w-5 h-5 transition-colors duration-500';
    switch (iconName) {
      case 'BarChart3': return <BarChart3 className={cls} />;
      case 'Zap': return <Zap className={cls} />;
      case 'Globe2': return <Globe2 className={cls} />;
      case 'Activity': return <Activity className={cls} />;
      case 'LineChart': return <LineChart className={cls} />;
      case 'Megaphone': return <Megaphone className={cls} />;
      default: return <Heart className={cls} />; // Soft romantic default
    }
  };

  return (
    <section id="what-is-digital-marketing" className="py-24 sm:py-32 bg-[#FFFAFA] relative overflow-hidden">
      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        .perspective-2000 { perspective: 2000px; }
        
        @keyframes gentle-float-1 {
          0%, 100% { transform: rotateX(4deg) rotateY(-5deg) translateZ(10px) translateY(0); }
          50% { transform: rotateX(6deg) rotateY(-3deg) translateZ(20px) translateY(-8px); }
        }
        @keyframes gentle-float-2 {
          0%, 100% { transform: rotateX(4deg) rotateY(-5deg) translateZ(25px) translateY(0); }
          50% { transform: rotateX(6deg) rotateY(-3deg) translateZ(35px) translateY(-12px); }
        }
        @keyframes gentle-float-3 {
          0%, 100% { transform: rotateX(4deg) rotateY(-5deg) translateZ(40px) translateY(0); }
          50% { transform: rotateX(6deg) rotateY(-3deg) translateZ(50px) translateY(-16px); }
        }
        
        .animate-romantic-3d-1 { animation: gentle-float-1 7s ease-in-out infinite; }
        .animate-romantic-3d-2 { animation: gentle-float-2 8s ease-in-out infinite 0.5s; }
        .animate-romantic-3d-3 { animation: gentle-float-3 9s ease-in-out infinite 1s; }
        
        .romantic-wrapper:hover .romantic-inner {
          transform: rotateX(0deg) rotateY(0deg) translateZ(0px) !important;
        }
      `}</style>

      {/* Romantic Soft Glow Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-rose-200/20 via-pink-100/10 to-transparent blur-3xl pointer-events-none rounded-[100%]" />
      <div className="absolute -left-20 top-20 w-[500px] h-[500px] bg-rose-200/20 rounded-full mix-blend-multiply blur-[100px] opacity-70 pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute -right-20 bottom-0 w-[600px] h-[600px] bg-purple-200/20 rounded-full mix-blend-multiply blur-[120px] opacity-70 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Soft, Elegant Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500 bg-white/60 backdrop-blur-md px-6 py-2.5 rounded-full border border-rose-100 shadow-[0_4px_20px_rgb(225,29,72,0.05)] inline-flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-100 animate-pulse" /> Agency Insights
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-800 tracking-tight leading-[1.1] font-['Plus_Jakarta_Sans',sans-serif]">
            What is <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
              Digital Marketing?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Romantic Flowing Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* The Engine of Growth Card - Soft curves & warm shadows */}
            <div className="p-8 sm:p-10 rounded-[3rem] bg-white/70 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgb(225,29,72,0.05)] relative overflow-hidden group hover:shadow-[0_10px_50px_rgb(225,29,72,0.08)] transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/20 mb-8 relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              
              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-medium relative z-10">
                <strong className="text-slate-800 font-extrabold text-2xl sm:text-3xl block mb-3 font-['Plus_Jakarta_Sans',sans-serif]">The Engine of Growth.</strong>
                Digital marketing is the targeted, data-backed strategy of promoting brands across search, social, and digital channels to convert international digital attention into scalable pipeline revenue.
              </p>
            </div>

            {/* Key Pillars - Vertical elegant stack to handle any odd/even number beautifully */}
            <div className="flex flex-col gap-4">
              {content.keyPillars.slice(0, 4).map((pillar, idx) => {
                const style = pillarStyles[idx % pillarStyles.length];
                return (
                  <div 
                    key={idx} 
                    className={`p-5 sm:p-6 rounded-[2rem] backdrop-blur-md ${style.bg} border ${style.border} shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgb(225,29,72,0.06)] hover:-translate-y-1 transition-all duration-500 group flex items-center gap-5 cursor-pointer`}
                  >
                    <div className={`w-14 h-14 shrink-0 rounded-[1.25rem] ${style.iconBg} flex items-center justify-center transition-all duration-500`}>
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 text-lg mb-1">{pillar.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                id="what-is-consultation-btn"
                onClick={openConsultationModal}
                className="group relative inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full overflow-hidden bg-rose-500 text-white shadow-[0_8px_30px_rgb(225,29,72,0.3)] hover:shadow-[0_8px_40px_rgb(225,29,72,0.4)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 text-base tracking-wide">Discover Custom Strategy Options</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </button>
            </div>
          </div>

          {/* RIGHT: Romantic Soft 3D Funnel Cards */}
          <div className="lg:col-span-5 relative perspective-2000 flex flex-col gap-6 items-center justify-center romantic-wrapper py-10 lg:pl-10">
            
            {/* Soft 3D Floating Funnel Card 1 */}
            <div className="w-full max-w-sm preserve-3d animate-romantic-3d-1 romantic-inner transition-transform duration-700">
              <div className="p-6 rounded-[2.5rem] bg-white/80 backdrop-blur-2xl border border-white shadow-[0_20px_50px_-12px_rgba(225,29,72,0.15)] flex items-center gap-5 group hover:bg-white transition-colors duration-500">
                <div className="w-14 h-14 shrink-0 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shadow-inner group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                  <Target className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phase 01 • Capture</span>
                    <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">100k Reach</span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-base">Target Impression Capture</h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Search & Paid Social Network Ads</p>
                </div>
              </div>
            </div>

            {/* Soft 3D Floating Funnel Card 2 */}
            <div className="w-full max-w-sm preserve-3d animate-romantic-3d-2 romantic-inner transition-transform duration-700 sm:translate-x-8">
              <div className="p-6 rounded-[2.5rem] bg-white/80 backdrop-blur-2xl border border-white shadow-[0_20px_50px_-12px_rgba(236,72,153,0.15)] flex items-center gap-5 group hover:bg-white transition-colors duration-500">
                <div className="w-14 h-14 shrink-0 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center shadow-inner group-hover:bg-pink-500 group-hover:text-white transition-all duration-500">
                  <MousePointerClick className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phase 02 • Nurture</span>
                    <span className="text-[10px] font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-100">32% CTR</span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-base">Interactive Funnel Nurture</h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Landing Page & Quiz Pre-qualification</p>
                </div>
              </div>
            </div>

            {/* Soft 3D Floating Funnel Card 3 */}
            <div className="w-full max-w-sm preserve-3d animate-romantic-3d-3 romantic-inner transition-transform duration-700">
              <div className="p-6 rounded-[2.5rem] bg-white/80 backdrop-blur-2xl border border-white shadow-[0_20px_50px_-12px_rgba(168,85,247,0.15)] flex items-center gap-5 group hover:bg-white transition-colors duration-500">
                <div className="w-14 h-14 shrink-0 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center shadow-inner group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phase 03 • Conversion</span>
                    <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">+340% ROAS</span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-base">Closed Sales Inquiries</h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Automated CRM Routing & Consultation</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
