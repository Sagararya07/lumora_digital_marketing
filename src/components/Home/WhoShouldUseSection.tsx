import React from 'react';
import { 
  Rocket, 
  HeartPulse, 
  Building2, 
  ShoppingBag, 
  Laptop, 
  Factory, 
  Check, 
  ArrowRight,
  Target,
  Stethoscope,
  Building,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { WhoShouldUseItem } from '../../types';
import { useViewMore } from '../../hooks/useViewMore';
import { ViewMoreButton } from '../common/ViewMoreButton';
import { GridRowCompleter } from '../common/GridRowCompleter';

interface WhoShouldUseProps {
  items: WhoShouldUseItem[];
  openConsultationModal: () => void;
}

const cardIconGradients = [
  'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/25',
  'bg-gradient-to-br from-purple-500 to-pink-600 shadow-purple-500/25',
  'bg-gradient-to-br from-amber-500 to-orange-600 shadow-amber-500/25',
  'bg-gradient-to-br from-rose-500 to-pink-600 shadow-rose-500/25',
  'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/25',
  'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/25',
];

export const WhoShouldUseSection: React.FC<WhoShouldUseProps> = ({ items, openConsultationModal }) => {
  const { visibleItems, expanded, toggle, hiddenCount, shouldShowButton } = useViewMore(items, 3, { initialRows: 2 });

  const getIcon = (iconName: string) => {
    const cls = "w-6 h-6 text-white";
    switch (iconName) {
      case 'Rocket': return <Rocket className={cls} />;
      case 'HeartPulse': 
      case 'Healthcare': return <HeartPulse className={cls} />;
      case 'Stethoscope': return <Stethoscope className={cls} />;
      case 'Building2': 
      case 'Building': return <Building2 className={cls} />;
      case 'ShoppingBag': return <ShoppingBag className={cls} />;
      case 'Laptop': return <Laptop className={cls} />;
      case 'Factory': return <Factory className={cls} />;
      case 'GraduationCap': return <GraduationCap className={cls} />;
      default: return <Target className={cls} />;
    }
  };

  return (
    <section id="who-should-use-section" className="py-20 sm:py-28 pt-24 sm:pt-32 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Eyebrow Badge */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#2563EB] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-blue-50/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB] animate-pulse" />
              <span>TARGET MARKETS</span>
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Who Should Use{' '}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#38BDF8] bg-clip-text text-transparent">
              Digital Marketing?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            Whether scaling locally, nationally, or internationally, Lumora crafts custom acquisition funnels for every major industry sector.
          </p>

        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item, idx) => {
            const iconGradient = cardIconGradients[idx % cardIconGradients.length];
            return (
              <div
                key={item.id}
                id={`who-use-card-${item.id}`}
                className="p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Header Icon & Title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${iconGradient} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {getIcon(item.iconName)}
                    </div>
                    <h3 className="text-xl font-extrabold text-[#111827] group-hover:text-[#2563EB] transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#6B7280] mb-6 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Key Benefits Checklist */}
                  <div className="space-y-3 mb-8 border-t border-slate-100 pt-5">
                    {item.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-[#111827]">
                        <div className="w-5 h-5 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                          <Check className="w-3 h-3 text-[#2563EB]" />
                        </div>
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link Button */}
                <button
                  onClick={openConsultationModal}
                  className="w-full py-3.5 px-5 rounded-full border border-[#2563EB]/30 bg-blue-50/50 hover:bg-[#2563EB] hover:text-white text-[#2563EB] text-xs font-extrabold flex items-center justify-center gap-2 transition-all group/btn shadow-xs font-['Plus_Jakarta_Sans',sans-serif]"
                >
                  <span className="group-hover/btn:text-white transition-colors">Request Industry Plan</span>
                  <ArrowRight className="w-4 h-4 text-[#2563EB] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            );
          })}
          
          <GridRowCompleter 
            itemCount={visibleItems.length} 
            colsMd={2} 
            colsLg={3} 
            onClick={openConsultationModal} 
            label="Explore Use Cases" 
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
