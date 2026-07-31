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
    bg: 'bg-white hover:bg-blue-50/50', 
    iconBg: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30', 
    border: 'border-slate-100 hover:border-blue-200'
  },
  { 
    bg: 'bg-white hover:bg-purple-50/50', 
    iconBg: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-purple-500/30', 
    border: 'border-slate-100 hover:border-purple-200'
  },
  { 
    bg: 'bg-white hover:bg-emerald-50/50', 
    iconBg: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/30', 
    border: 'border-slate-100 hover:border-emerald-200'
  },
];

export const WhatIsDigitalMarketing: React.FC<WhatIsProps> = ({ content, openConsultationModal }) => {
  const getPillarIcon = (iconName: string) => {
    const cls = 'w-6 h-6 transition-colors duration-300';
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
        
        @keyframes float-3d-1 {
          0%, 100% { transform: rotateX(6deg) rotateY(-8deg) translateZ(10px) translateY(0); }
          50% { transform: rotateX(10deg) rotateY(-4deg) translateZ(20px) translateY(-10px); }
        }
        @keyframes float-3d-2 {
          0%, 100% { transform: rotateX(6deg) rotateY(-8deg) translateZ(30px) translateY(0); }
          50% { transform: rotateX(10deg) rotateY(-4deg) translateZ(40px) translateY(-15px); }
        }
        @keyframes float-3d-3 {
          0%, 100% { transform: rotateX(6deg) rotateY(-8deg) translateZ(50px) translateY(0); }
          50% { transform: rotateX(10deg) rotateY(-4deg) translateZ(60px) translateY(-20px); }
        }
        
        .animate-card-3d-1 { animation: float-3d-1 6s ease-in-out infinite; }
        .animate-card-3d-2 { animation: float-3d-2 7s ease-in-out infinite 0.5s; }
        .animate-card-3d-3 { animation: float-3d-3 8s ease-in-out infinite 1s; }
        
        .card-3d-wrapper:hover .card-3d-inner {
          transform: rotateX(0deg) rotateY(0deg) translateZ(0px) !important;
        }

        .bg-grid-slate-200 {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23cbd5e1' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* Modern Background Decorations */}
      <div className="absolute inset-0 bg-grid-slate-200 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply blur-3xl opacity-50 pointer-events-none animate-pulse" />
      <div className="absolute -right-40 bottom-40 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply blur-3xl opacity-50 pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Premium Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center justify-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 bg-white px-5 py-2.5 rounded-full border border-indigo-100 shadow-[0_4px_14px_0_rgb(0,0,0,0.05)] inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-500 animate-pulse" /> Agency Insights
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1]">
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
          
          {/* LEFT: Premium Rich Content Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Overview Featured Card (Bento Style) */}
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />
              
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 mb-6 relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                <Globe2 className="w-7 h-7 text-white" />
              </div>
              
              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-medium relative z-10">
                <strong className="text-slate-900 font-black text-xl sm:text-2xl block mb-2">The Engine of Growth.</strong>
                Digital marketing is the targeted, data-backed strategy of promoting brands across search, social, and digital channels to convert international digital attention into scalable pipeline revenue.
              </p>
            </div>

            {/* Key Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.keyPillars.slice(0, 4).map((pillar, idx) => {
                const style = pillarStyles[idx % pillarStyles.length];
                return (
                  <div 
                    key={idx} 
                    className={`p-6 rounded-[2rem] ${style.bg} border ${style.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4 cursor-pointer`}
                  >
                    <div className={`w-14 h-14 shrink-0 rounded-2xl ${style.iconBg} flex items-center justify-center transition-all duration-500`}>
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-lg mb-1">{pillar.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                id="what-is-consultation-btn"
                onClick={openConsultationModal}
                className="group relative inline-flex items-center gap-3 font-bold px-8 py-4 rounded-2xl overflow-hidden bg-slate-900 text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 text-base">Discover Custom Strategy Options</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT: High-Readability 3D Stacked Animated Cards */}
          <div className="lg:col-span-5 relative perspective-2000 flex flex-col gap-5 items-center justify-center card-3d-wrapper py-10 lg:pl-10">
            
            {/* 3D Floating Funnel Card 1 */}
            <div className="w-full max-w-sm preserve-3d animate-card-3d-1 card-3d-inner transition-transform duration-500">
              <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-2xl border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex items-center gap-5 group hover:bg-white transition-colors">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Target className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phase 01 • Capture</span>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">100k Reach</span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Target Impression Capture</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Search & Paid Social Network Ads</p>
                </div>
              </div>
            </div>

            {/* 3D Floating Funnel Card 2 */}
            <div className="w-full max-w-sm preserve-3d animate-card-3d-2 card-3d-inner transition-transform duration-500 sm:translate-x-8">
              <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-2xl border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex items-center gap-5 group hover:bg-white transition-colors">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-inner group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <MousePointerClick className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phase 02 • Nurture</span>
                    <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">32% CTR</span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Interactive Funnel Nurture</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Landing Page & Quiz Pre-qualification</p>
                </div>
              </div>
            </div>

            {/* 3D Floating Funnel Card 3 */}
            <div className="w-full max-w-sm preserve-3d animate-card-3d-3 card-3d-inner transition-transform duration-500">
              <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-2xl border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex items-center gap-5 group hover:bg-white transition-colors">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phase 03 • Conversion</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">+340% ROAS</span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Closed Sales Inquiries</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Automated CRM Routing & Consultation</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
