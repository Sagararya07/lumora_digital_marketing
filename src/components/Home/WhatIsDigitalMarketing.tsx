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
    bg: 'bg-white', 
    iconBg: 'bg-[#F2F6FC] text-[#5B8EE2]', 
    border: 'border-[#E5E7EB]'
  },
  { 
    bg: 'bg-white', 
    iconBg: 'bg-[#FDF6F0] text-[#D6A67B]', 
    border: 'border-[#E5E7EB]'
  },
  { 
    bg: 'bg-white', 
    iconBg: 'bg-emerald-50 text-emerald-600', 
    border: 'border-[#E5E7EB]'
  },
  { 
    bg: 'bg-white', 
    iconBg: 'bg-indigo-50 text-indigo-600', 
    border: 'border-[#E5E7EB]'
  },
];

export const WhatIsDigitalMarketing: React.FC<WhatIsProps> = ({ content, openConsultationModal }) => {
  const getPillarIcon = (iconName: string) => {
    const cls = 'w-5 h-5';
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
    <section id="what-is-digital-marketing" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Composite Image Structure */}
          <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square">
            {/* Main Background Image */}
            <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/digital_marketing_main_1785501476276.png" 
                alt="Marketing Team Strategy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Overlapping Foreground Image */}
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.15)] border-8 border-white z-10">
              <img 
                src="/images/digital_marketing_sub_1785501486722.png" 
                alt="Digital Analytics Spike" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Circular Badge */}
            <div className="absolute top-[60%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] rounded-full flex flex-col items-center justify-center text-white shadow-xl z-20 border-4 border-white animate-pulse" style={{ animationDuration: '4s' }}>
              <span className="text-3xl font-extrabold leading-none">10X</span>
              <span className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-100">ROI PROVEN</span>
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F2F6FC] rounded-full mix-blend-multiply blur-3xl opacity-70 -z-10" />
          </div>

          {/* RIGHT: Content Section */}
          <div className="flex flex-col">
            
            {/* Eyebrow Tag */}
            <div className="mb-6 inline-flex">
              <span className="inline-flex items-center gap-2 text-[#5B8EE2] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-[#F2F6FC]/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
                <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2]" />
                <span>About Digital Marketing</span>
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 tracking-tight leading-[1.1] mb-6 font-['Plus_Jakarta_Sans',sans-serif] whitespace-pre-wrap">
              {content.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed mb-10 whitespace-pre-wrap">
              <strong className="text-slate-800 font-bold block mb-2">{content.subtitle}</strong>
              {content.descriptionParagraph1 || 'Digital marketing is the targeted, data-backed strategy of promoting brands across search, social, and digital channels to convert international digital attention into scalable pipeline revenue.'}
            </p>

            {/* Key Pillars - Vertical Stack */}
            <div className="flex flex-col gap-4 mb-10">
              {content.keyPillars.slice(0, 3).map((pillar, idx) => {
                const style = pillarStyles[idx % pillarStyles.length];
                return (
                  <div 
                    key={idx} 
                    className={`p-5 rounded-2xl ${style.bg} border ${style.border} shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group flex items-start gap-5`}
                  >
                    <div className={`w-12 h-12 shrink-0 rounded-xl ${style.iconBg} flex items-center justify-center transition-colors group-hover:bg-[#5B8EE2] group-hover:text-white overflow-hidden relative`}>
                      {pillar.imageUrl ? (
                        <img src={pillar.imageUrl} alt={pillar.title} className="w-full h-full object-cover" />
                      ) : (
                        getPillarIcon(pillar.icon)
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 text-lg mb-1 font-['Plus_Jakarta_Sans',sans-serif]">{pillar.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={openConsultationModal}
                className="group relative inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full overflow-hidden bg-[#111827] text-white shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 text-base tracking-wide">Discover Custom Strategy Options</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
