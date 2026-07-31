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
  'bg-gradient-to-br from-rose-500 to-pink-600 shadow-rose-500/25',
  'bg-gradient-to-br from-amber-500 to-orange-600 shadow-amber-500/25',
  'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/25',
  'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/25',
  'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/25',
  'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/25',
];

export const IndustriesSection: React.FC<IndustriesProps> = ({ industries, openConsultationModal }) => {
  const { visibleItems, expanded, toggle, hiddenCount, shouldShowButton } = useViewMore(industries, 3, { initialRows: 2 });

  const getIndustryIcon = (iconName: string) => {
    const cls = "w-6 h-6 text-white";
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

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((ind, idx) => {
            const gradient = industryGradients[idx % industryGradients.length];
            return (
              <div
                key={ind.id}
                id={`industry-card-${ind.id}`}
                onClick={openConsultationModal}
                className="p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] cursor-pointer group flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {getIndustryIcon(ind.iconName)}
                    </div>
                    <div className="w-9 h-9 rounded-full bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors border border-slate-100">
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#111827] mb-3 leading-snug group-hover:text-[#2563EB] transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                    {ind.name}
                  </h3>

                  <p className="text-sm text-[#6B7280] leading-relaxed mb-6 font-normal">
                    {ind.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-between text-xs transition-colors">
                  <span className="text-[#6B7280] font-extrabold uppercase text-[10px] tracking-wider font-['Plus_Jakarta_Sans',sans-serif]">Case Result:</span>
                  <span className="font-extrabold text-emerald-600 truncate ml-2">{ind.caseStudyHighlight}</span>
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
