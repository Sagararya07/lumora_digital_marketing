import React from 'react';
import { 
  HeartPulse, 
  GraduationCap, 
  Factory, 
  Building2, 
  ShoppingBag, 
  Laptop, 
  Globe,
  ArrowUpRight,
  Sparkles,
  Building,
  Plane,
  Coins,
  ShieldCheck,
  Rocket
} from 'lucide-react';
import { IndustryItem } from '../../types';
import { useViewMore } from '../../hooks/useViewMore';
import { ViewMoreButton } from '../common/ViewMoreButton';
import { GridRowCompleter } from '../common/GridRowCompleter';

interface IndustriesProps {
  industries: IndustryItem[];
  openConsultationModal: () => void;
}

const industryGradients = [
  'from-rose-500 to-pink-600 shadow-rose-500/25',
  'from-amber-500 to-orange-600 shadow-amber-500/25',
  'from-emerald-500 to-teal-600 shadow-emerald-500/25',
  'from-blue-500 to-indigo-600 shadow-blue-500/25',
  'from-indigo-500 to-purple-600 shadow-indigo-500/25',
  'from-cyan-500 to-blue-600 shadow-cyan-500/25',
];

export const IndustriesSection: React.FC<IndustriesProps> = ({ industries, openConsultationModal }) => {
  const { visibleItems, expanded, toggle, hiddenCount, shouldShowButton } = useViewMore(industries, 3, { initialRows: 2 });

  const getIndustryIcon = (iconName: string) => {
    const cls = "w-7 h-7 text-white";
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className={cls} />;
      case 'Building2': return <Building2 className={cls} />;
      case 'ShoppingBag': return <ShoppingBag className={cls} />;
      case 'Laptop': return <Laptop className={cls} />;
      case 'Factory': return <Factory className={cls} />;
      case 'GraduationCap': return <GraduationCap className={cls} />;
      case 'Building': return <Building className={cls} />;
      case 'Plane': return <Plane className={cls} />;
      case 'Coins': return <Coins className={cls} />;
      case 'ShieldCheck': return <ShieldCheck className={cls} />;
      case 'Rocket': return <Rocket className={cls} />;
      default: return <Globe className={cls} />;
    }
  };

  return (
    <section id="industries-section" className="py-20 sm:py-28 pt-24 sm:pt-32 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          
          {/* Top Eyebrow Badge */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#2563EB] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-blue-50/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB] animate-pulse" />
              <span>SECTOR SPECIALIZATION</span>
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Industries{' '}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#38BDF8] bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            Deep vertical market knowledge across diverse B2B and B2C commercial sectors worldwide.
          </p>

        </div>

        {/* Industry Interactive Reveal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleItems.map((ind, idx) => {
            const gradient = industryGradients[idx % industryGradients.length];
            return (
              <div
                key={ind.id}
                id={`industry-card-${ind.id}`}
                onClick={openConsultationModal}
                className="h-[340px] relative rounded-[2rem] bg-white border border-[#E5E7EB] cursor-pointer group overflow-hidden transition-all duration-700 shadow-sm hover:shadow-2xl hover:-translate-y-2"
              >
                {/* The Hover Gradient Fill */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out`} />

                {/* Top Section: Icon & Arrow */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} group-hover:bg-none group-hover:bg-white/20 flex items-center justify-center shadow-md group-hover:shadow-none transition-all duration-700 backdrop-blur-md`}>
                    {getIndustryIcon(ind.iconName)}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-700 border border-slate-100 group-hover:border-white/30 backdrop-blur-sm">
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-700" />
                  </div>
                </div>

                {/* Sliding Title */}
                <div className="absolute bottom-6 left-6 right-6 z-10 transform group-hover:-translate-y-[130px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <h3 className="text-2xl font-extrabold text-slate-800 group-hover:text-white transition-colors duration-700 font-['Plus_Jakarta_Sans',sans-serif]">
                    {ind.name}
                  </h3>
                </div>

                {/* Hidden Content: Description & Pill (Reveals on Hover) */}
                <div className="absolute bottom-6 left-6 right-6 z-10 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none">
                  <p className="text-sm text-white/90 leading-relaxed mb-5 line-clamp-3">
                    {ind.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-white/20 border border-white/30 backdrop-blur-md shadow-inner">
                    <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Case Result</span>
                    <div className="w-px h-3 bg-white/30" />
                    <span className="text-xs font-extrabold text-white">{ind.caseStudyHighlight}</span>
                  </div>
                </div>

              </div>
            );
          })}
          
          <GridRowCompleter 
            itemCount={visibleItems.length} 
            colsMd={2} 
            colsLg={3} 
            onClick={openConsultationModal} 
            label="More Industries" 
          />
        </div>

        {shouldShowButton && (
          <ViewMoreButton
            expanded={expanded}
            onToggle={toggle}
            hiddenCount={hiddenCount}
            label="View More Industries"
          />
        )}

      </div>
    </section>
  );
};
