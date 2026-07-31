import React from 'react';
import { 
  BarChart3, Zap, Globe2, Sparkles, ArrowUpRight,
  Activity, LineChart, Megaphone, Target, MousePointerClick, TrendingUp
} from 'lucide-react';
import { WhatIsDigitalContent } from '../../types';

interface WhatIsProps {
  content: WhatIsDigitalContent;
  openConsultationModal: () => void;
}

const pillarStyles = [
  { 
    bg: 'bg-white/80 hover:bg-blue-50/50', 
    iconBg: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white', 
    border: 'border-white hover:border-blue-100'
  },
  { 
    bg: 'bg-white/80 hover:bg-purple-50/50', 
    iconBg: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white', 
    border: 'border-white hover:border-purple-100'
  },
  { 
    bg: 'bg-white/80 hover:bg-emerald-50/50', 
    iconBg: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white', 
    border: 'border-white hover:border-emerald-100'
  },
  { 
    bg: 'bg-white/80 hover:bg-indigo-50/50', 
    iconBg: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white', 
    border: 'border-white hover:border-indigo-100'
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
      default: return <Sparkles className={cls} />;
    }
  };

  return (
    <section id="what-is-digital-marketing" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
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

        .bg-grid-slate-200 {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23cbd5e1' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* Soft Glow Background Elements in Original Theme Colors */}
      <div className="absolute inset-0 bg-grid-slate-200 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none rounded-[100%]" />
      <div className="absolute -left-20 top-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full mix-blend-multiply blur-[100px] opacity-70 pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute -right-20 bottom-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full mix-blend-multiply blur-[120px] opacity-70 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Soft, Elegant Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 bg-white/60 backdrop-blur-md px-6 py-2.5 rounded-full border border-indigo-100 shadow-[0_4px_20px_rgb(0,0,0,0.05)] inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" /> Agency Insights
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-800 tracking-tight leading-[1.1] font-['Plus_Jakarta_Sans',sans-serif]">
            What is <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
              Digital Marketing?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Romantic Flowing Content but original colors */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* The Engine of Growth Card - Soft curves & warm shadows */}
            <div className="p-8 sm:p-10 rounded-[3rem] bg-white/70 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_10px_50px_rgb(0,0,0,0.08)] transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 mb-8 relative z-10 transform group-hover:scale-105 transition-transform duration-500">
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
                    className={`p-5 sm:p-6 rounded-[2rem] backdrop-blur-md ${style.bg} border ${style.border} shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group flex items-center gap-5 cursor-pointer`}
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
                className="group relative inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full overflow-hidden bg-slate-900 text-white shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 text-base tracking-wide">Discover Custom Strategy Options</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </button>
            </div>
          </div>

          {/* RIGHT: Romantic Soft 3D Funnel Cards - Original colors */}
          <div className="lg:col-span-5 relative perspective-2000 flex flex-col gap-6 items-center justify-center romantic-wrapper py-10 lg:pl-10">
            
            {/* Soft 3D Floating Funnel Card 1 */}
            <div className="w-full max-w-sm preserve-3d animate-romantic-3d-1 romantic-inner transition-transform duration-700">
              <div className="p-6 rounded-[2.5rem] bg-white/80 backdrop-blur-2xl border border-white shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)] flex items-center gap-5 group hover:bg-white transition-colors duration-500">
                <div className="w-14 h-14 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <Target className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phase 01 • Capture</span>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">100k Reach</span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-base">Target Impression Capture</h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Search & Paid Social Network Ads</p>
                </div>
              </div>
            </div>

            {/* Soft 3D Floating Funnel Card 2 */}
            <div className="w-full max-w-sm preserve-3d animate-romantic-3d-2 romantic-inner transition-transform duration-700 sm:translate-x-8">
              <div className="p-6 rounded-[2.5rem] bg-white/80 backdrop-blur-2xl border border-white shadow-[0_20px_50px_-12px_rgba(147,51,234,0.15)] flex items-center gap-5 group hover:bg-white transition-colors duration-500">
                <div className="w-14 h-14 shrink-0 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shadow-inner group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                  <MousePointerClick className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phase 02 • Nurture</span>
                    <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">32% CTR</span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-base">Interactive Funnel Nurture</h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Landing Page & Quiz Pre-qualification</p>
                </div>
              </div>
            </div>

            {/* Soft 3D Floating Funnel Card 3 */}
            <div className="w-full max-w-sm preserve-3d animate-romantic-3d-3 romantic-inner transition-transform duration-700">
              <div className="p-6 rounded-[2.5rem] bg-white/80 backdrop-blur-2xl border border-white shadow-[0_20px_50px_-12px_rgba(16,185,129,0.15)] flex items-center gap-5 group hover:bg-white transition-colors duration-500">
                <div className="w-14 h-14 shrink-0 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phase 03 • Conversion</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">+340% ROAS</span>
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
