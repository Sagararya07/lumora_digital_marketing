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
    bg: 'bg-gradient-to-br from-blue-50/60 via-white to-slate-50/30 hover:border-blue-300', 
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600', 
    accentColor: 'text-blue-600'
  },
  { 
    bg: 'bg-gradient-to-br from-purple-50/60 via-white to-slate-50/30 hover:border-purple-300', 
    iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600', 
    accentColor: 'text-purple-600'
  },
  { 
    bg: 'bg-gradient-to-br from-emerald-50/60 via-white to-slate-50/30 hover:border-emerald-300', 
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600', 
    accentColor: 'text-emerald-600'
  },
];

export const WhatIsDigitalMarketing: React.FC<WhatIsProps> = ({ content, openConsultationModal }) => {
  const getPillarIcon = (iconName: string) => {
    const cls = 'w-5 h-5 text-white';
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
    <section id="what-is-digital-marketing" className="py-20 bg-white relative overflow-hidden">
      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        .perspective-2000 { perspective: 2000px; }
        
        @keyframes float-3d-1 {
          0%, 100% { transform: rotateX(8deg) rotateY(-10deg) translateZ(15px) translateY(0); }
          50% { transform: rotateX(12deg) rotateY(-6deg) translateZ(15px) translateY(-8px); }
        }
        @keyframes float-3d-2 {
          0%, 100% { transform: rotateX(8deg) rotateY(-10deg) translateZ(35px) translateY(0); }
          50% { transform: rotateX(12deg) rotateY(-6deg) translateZ(35px) translateY(-12px); }
        }
        @keyframes float-3d-3 {
          0%, 100% { transform: rotateX(8deg) rotateY(-10deg) translateZ(55px) translateY(0); }
          50% { transform: rotateX(12deg) rotateY(-6deg) translateZ(55px) translateY(-16px); }
        }
        
        .animate-card-3d-1 { animation: float-3d-1 5s ease-in-out infinite; }
        .animate-card-3d-2 { animation: float-3d-2 6s ease-in-out infinite 0.4s; }
        .animate-card-3d-3 { animation: float-3d-3 7s ease-in-out infinite 0.8s; }
        
        .card-3d-wrapper:hover .card-3d-inner {
          transform: rotateX(0deg) rotateY(0deg) translateZ(0px) !important;
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Styled Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 shadow-sm inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" /> Agency Insights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-2">
            What is <span className="gradient-text">Digital Marketing?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium mt-3 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Premium Rich Content Cards */}
          <div className="space-y-5">
            
            {/* Top Overview Featured Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:border-blue-300 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-500" />
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center shadow-inner">
                  <Globe2 className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Core Definition</h3>
                  <p className="text-slate-700 text-lg sm:text-xl leading-relaxed font-medium">
                    <strong className="text-slate-900 font-black">Digital marketing</strong> is the targeted, data-backed strategy of promoting brands across search, social, and digital channels to convert international digital attention into scalable pipeline revenue.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.keyPillars.slice(0, 4).map((pillar, idx) => {
                const style = pillarStyles[idx % pillarStyles.length];
                return (
                  <div 
                    key={idx} 
                    className={`p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4 relative overflow-hidden`}
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 group-hover:scale-150 transition-transform duration-700 ${style.iconBg}`} />
                    
                    <div className={`w-12 h-12 shrink-0 rounded-xl ${style.iconBg} flex items-center justify-center shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
                      {getPillarIcon(pillar.icon)}
                    </div>
                    
                    <div className="relative z-10">
                      <h4 className={`font-black text-slate-900 text-base sm:text-lg mb-2 group-hover:${style.accentColor} transition-colors`}>{pillar.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                id="what-is-consultation-btn"
                onClick={openConsultationModal}
                className="btn-gradient inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-7 py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
              >
                <span>Discover Custom Strategy Options</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT: High-Readability 3D Stacked Animated Cards */}
          <div className="relative perspective-2000 flex flex-col gap-4 items-center justify-center card-3d-wrapper py-6">
            
            {/* 3D Floating Funnel Card 1 */}
            <div className="w-full max-w-md preserve-3d animate-card-3d-1 card-3d-inner transition-transform duration-500">
              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-200 shadow-[0_20px_40px_-10px_rgba(59,130,246,0.15)] flex items-center gap-4 group">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-black shadow-md group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Phase 01 • Capture</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">100k Reach</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">Target Impression Capture</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Search & Paid Social Network Ads</p>
                </div>
              </div>
            </div>

            {/* 3D Floating Funnel Card 2 */}
            <div className="w-full max-w-md preserve-3d animate-card-3d-2 card-3d-inner transition-transform duration-500 sm:translate-x-4">
              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-purple-200 shadow-[0_20px_40px_-10px_rgba(147,51,234,0.15)] flex items-center gap-4 group">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-purple-600 text-white flex items-center justify-center text-sm font-black shadow-md group-hover:scale-110 transition-transform">
                  <MousePointerClick className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">Phase 02 • Nurture</span>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">32% CTR</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">Interactive Funnel Nurture</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Landing Page & Quiz Pre-qualification</p>
                </div>
              </div>
            </div>

            {/* 3D Floating Funnel Card 3 */}
            <div className="w-full max-w-md preserve-3d animate-card-3d-3 card-3d-inner transition-transform duration-500">
              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-200 shadow-[0_20px_40px_-10px_rgba(16,185,129,0.15)] flex items-center gap-4 group">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-sm font-black shadow-md group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Phase 03 • Conversion</span>
                    <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">+340% ROAS</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mt-0.5">Closed Sales Inquiries</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Automated CRM Routing & Consultation</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
