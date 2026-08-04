import React, { useState } from 'react';
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
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCardExpanded = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const capsuleItems = [
    "🎯 Generate High-Quality Leads",
    "🚀 Scale Your Business Faster",
    "💰 Increase Revenue & ROI",
    "📈 Rank Higher on Search Engines",
    "🤖 Automate Your Digital Operations",
    "🔄 Convert More Visitors Into Customers",
    "🌍 Expand Into New Markets",
    "❤️ Build a Stronger Brand",
    "📊 Make Smarter Business Decisions",
    "🎯 Reach the Right Target Audience",
    "📍 Target the Right Market",
    "💎 Build the Right Value Proposition",
    "📣 Increase Brand Visibility",
    "⚡ Improve Marketing Performance",
    "📱 Grow Your Social Media Presence",
    "📧 Automate Lead Nurturing",
    "📞 Generate More Sales Appointments",
    "🤝 Build Customer Trust & Authority",
    "🌐 Expand Your Digital Presence",
    "📈 Build a Predictable Growth System"
  ];
  const row1 = capsuleItems.slice(0, 10);
  const row2 = capsuleItems.slice(10, 20);
  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

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
    <section id="who-should-use-section" className="pt-20 sm:pt-28 pb-16 sm:pb-20 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Eyebrow Badge */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#5B8EE2] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-[#F2F6FC]/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2] animate-pulse" />
              <span>TARGET MARKETS</span>
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Who Should Use{' '}
            <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#8CB4F5] bg-clip-text text-transparent">
              Digital Marketing?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            Whether scaling locally, nationally, or internationally, Lumora crafts custom acquisition funnels for every major industry sector.
          </p>

        </div>

        {/* Marquee Capsules */}
        <div className="mb-20 relative overflow-hidden flex flex-col gap-5">
          {/* Side Fade Gradient Overlays */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          {/* Row 1 - Scrolls Left */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee flex items-center gap-5 py-2">
              {marqueeRow1.map((text, idx) => (
                <div 
                  key={`r1-${idx}`} 
                  className="whitespace-nowrap px-6 py-3.5 rounded-full border border-[#E5E7EB] bg-white text-[13px] sm:text-sm font-bold text-[#111827] shadow-sm hover:border-[#5B8EE2] hover:text-[#5B8EE2] hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default font-['Plus_Jakarta_Sans',sans-serif] flex items-center gap-2"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolls Right (Reverse) */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee flex items-center gap-5 py-2" style={{ animationDirection: 'reverse' }}>
              {marqueeRow2.map((text, idx) => (
                <div 
                  key={`r2-${idx}`} 
                  className="whitespace-nowrap px-6 py-3.5 rounded-full border border-[#E5E7EB] bg-white text-[13px] sm:text-sm font-bold text-[#111827] shadow-sm hover:border-[#5B8EE2] hover:text-[#5B8EE2] hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default font-['Plus_Jakarta_Sans',sans-serif] flex items-center gap-2"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item, idx) => {
            const iconGradient = cardIconGradients[idx % cardIconGradients.length];
            return (
              <div
                key={item.id}
                id={`who-use-card-${item.id}`}
                className="p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#5B8EE2] shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Header Icon & Title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${iconGradient} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300 overflow-hidden relative`}>
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                      ) : (
                        getIcon(item.iconName)
                      )}
                    </div>
                    <h3 className="text-xl font-extrabold text-[#111827] group-hover:text-[#5B8EE2] transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className={`text-sm text-[#6B7280] leading-relaxed font-normal ${!expandedCards[item.id] ? 'line-clamp-3' : ''}`}>
                      {item.description}
                    </p>
                    {item.description && (item.description.length > 100 || item.benefits.length > 0) && (
                      <button 
                        onClick={() => toggleCardExpanded(item.id)}
                        className="text-[#5B8EE2] text-xs font-bold hover:underline mt-2 inline-flex items-center gap-1"
                      >
                        {expandedCards[item.id] ? 'Read less' : 'Read more'}
                      </button>
                    )}
                  </div>

                  {/* Key Benefits Checklist - Hidden unless expanded */}
                  {expandedCards[item.id] && item.benefits.length > 0 && (
                    <div className="space-y-3 mb-8 border-t border-slate-100 pt-5 animate-fade-in">
                      {item.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-[#111827]">
                          <div className="w-5 h-5 rounded-full bg-[#F2F6FC] text-[#5B8EE2] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                            <Check className="w-3 h-3 text-[#5B8EE2]" />
                          </div>
                          <span className="leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Link Button */}
                <button
                  onClick={openConsultationModal}
                  className="w-full py-3.5 px-5 rounded-full border border-[#5B8EE2]/30 bg-[#F2F6FC]/50 hover:bg-[#5B8EE2] hover:text-white text-[#5B8EE2] text-xs font-extrabold flex items-center justify-center gap-2 transition-all group/btn shadow-xs font-['Plus_Jakarta_Sans',sans-serif]"
                >
                  <span className="group-hover/btn:text-white transition-colors">Request Industry Plan</span>
                  <ArrowRight className="w-4 h-4 text-[#5B8EE2] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
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
