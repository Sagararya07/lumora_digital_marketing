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
  'from-[#5B8EE2] to-[#8CB4F5] shadow-blue-500/25',
  'from-[#D6A67B] via-[#5B8EE2] to-[#EC4899] shadow-orange-500/25',
  'from-[#8CB4F5] to-[#D6A67B] shadow-blue-400/25',
  'from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] shadow-blue-500/25',
  'from-[#D6A67B] to-[#8CB4F5] shadow-orange-500/25',
  'from-[#5B8EE2] via-[#8CB4F5] to-[#D6A67B] shadow-blue-500/25',
];

export const IndustriesSection: React.FC<IndustriesProps> = ({ industries, openConsultationModal }) => {
  const { visibleItems, expanded, toggle, hiddenCount, shouldShowButton } = useViewMore(industries, 3, { initialRows: 2 });

  const getIndustryIcon = (iconName: string, isWatermark = false) => {
    const cls = isWatermark ? "w-full h-full" : "w-6 h-6 text-white";
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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Top Eyebrow Badge */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#5B8EE2] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-[#F2F6FC]/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2] animate-pulse" />
              <span>SECTOR SPECIALIZATION</span>
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Industries{' '}
            <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            Deep vertical market knowledge across diverse B2B and B2C commercial sectors worldwide.
          </p>

        </div>

        {/* Industry Clean Lite Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((ind, idx) => {
            const gradient = industryGradients[idx % industryGradients.length];
            const accentColorClass = idx % 2 === 0 ? 'bg-[#5B8EE2]' : 'bg-[#D6A67B]';
            const shadowColorClass = idx % 2 === 0 ? 'shadow-blue-500/20' : 'shadow-orange-500/20';

            return (
              <div
                key={ind.id}
                id={`industry-card-${ind.id}`}
                onClick={openConsultationModal}
                className="p-8 rounded-[2rem] bg-gradient-to-br from-white to-slate-50/50 border border-[#E5E7EB] hover:border-transparent cursor-pointer group flex flex-col justify-between transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Animated Accent Line */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-24 ${accentColorClass} rounded-r-full transition-all duration-500 ease-out`} />
                
                {/* Background Watermark Icon */}
                <div className="absolute -bottom-6 -right-6 w-40 h-40 opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none text-slate-900">
                  {getIndustryIcon(ind.iconName, true)}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    {/* Icon Block with Brand Gradients */}
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500 z-10 overflow-hidden`}>
                        {ind.imageUrl ? (
                          <img src={ind.imageUrl} alt={ind.name} className="w-full h-full object-cover" />
                        ) : (
                          getIndustryIcon(ind.iconName)
                        )}
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className={`w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white flex items-center justify-center transition-all duration-500 border border-slate-100 group-hover:border-transparent group-hover:shadow-lg ${shadowColorClass} z-10`}>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#111827] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent mb-4 leading-snug group-hover:text-[#5B8EE2] transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                    {ind.name}
                  </h3>

                  <p className="text-[#6B7280] leading-relaxed mb-8 font-medium">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between transition-colors relative z-10">
                  <span className="text-[#94A3B8] font-bold uppercase text-[10px] tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">Case Result:</span>
                  <span className={`inline-flex font-extrabold text-[#5B8EE2] text-sm truncate ml-2 group-hover:text-white px-3 py-1.5 rounded-full transition-colors duration-500 group-hover:bg-gradient-to-r ${gradient}`}>
                    {ind.caseStudyHighlight}
                  </span>
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
