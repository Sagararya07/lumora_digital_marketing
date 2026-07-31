import React from 'react';
import {
  TrendingUp, Users, Target, Bot, Globe, Search, ArrowRight, Sparkles, Share2, Megaphone, Repeat
} from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServicesProps {
  services?: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
  openConsultationModal: () => void;
}

const mockSolutions = [
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription: 'Build a powerful brand presence across Instagram, LinkedIn, Facebook, X, and YouTube with high-converting content.',
    icon: <Share2 className="w-6 h-6 text-white" />,
    gradient: 'text-blue-600',
    tag: '01 / SOCIAL MEDIA',
    image: '/images/services/social_media_marketing_1785498376145.png',
  },
  {
    id: 'seo-growth-engine',
    title: 'Search Engine Optimization (SEO)',
    shortDescription: 'Dominate Google search results with technical SEO, content strategy, and high-authority link building.',
    icon: <Search className="w-6 h-6 text-white" />,
    gradient: 'text-orange-600',
    tag: '02 / SEO',
    image: '/images/services/seo_marketing_1785498386235.png',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    shortDescription: 'AI-optimized ad campaigns across Google, Meta, and LinkedIn laser-focused on ROI, sales, and conversions.',
    icon: <Target className="w-6 h-6 text-white" />,
    gradient: 'text-pink-600',
    tag: '03 / PAID ADS',
    image: '/images/services/performance_marketing_1785498399389.png',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    shortDescription: 'Predictable multi-channel B2B & B2C acquisition funnels that generate qualified, sales-ready inquiries.',
    icon: <Users className="w-6 h-6 text-white" />,
    gradient: 'text-emerald-600',
    tag: '04 / ACQUISITION',
    image: '/images/services/lead_generation_1785498418027.png',
  },
  {
    id: 'retargeting-marketing',
    title: 'Retargeting Marketing',
    shortDescription: 'Re-engage dropped website visitors across display networks and social feeds to boost conversion rates.',
    icon: <Repeat className="w-6 h-6 text-white" />,
    gradient: 'text-purple-600',
    tag: '05 / RETARGETING',
    image: '/images/services/retargeting_marketing_1785498428208.png',
  },
  {
    id: 'ai-marketing-automation',
    title: 'AI Marketing Automation',
    shortDescription: 'Smart CRM workflows, automated lead nurturing, and AI chatbots to convert visitors faster.',
    icon: <Bot className="w-6 h-6 text-white" />,
    gradient: 'text-cyan-600',
    tag: '06 / AUTOMATION',
    image: '/images/services/ai_marketing_1785498439194.png',
  }
];

export const ServicesSection: React.FC<ServicesProps> = ({
  services = [],
  onSelectService,
}) => {
  const displayItems = services.length >= 6 ? services : mockSolutions;

  return (
    <section id="services-section" className="py-16 sm:py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB] bg-blue-50/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-blue-200 shadow-sm inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB] animate-pulse" /> OUR DIGITAL MARKETING SERVICES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
            AI-Powered Solutions for Every{' '}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#38BDF8] bg-clip-text text-transparent">
              Stage of Growth
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#6B7280] font-medium max-w-2xl mx-auto leading-relaxed">
            From strategy to execution, we build intelligent systems that deliver measurable, scalable, and predictable revenue results.
          </p>
        </div>

        {/* Zig-Zag Alternating Layout */}
        <div className="space-y-16 sm:space-y-24">
          {displayItems.slice(0, 6).map((item, idx) => {
            const fallback = mockSolutions[idx % mockSolutions.length];
            const title = item.title || fallback.title;
            const desc = item.shortDescription || fallback.shortDescription;
            const image = fallback.image;
            const tag = fallback.tag;
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={item.id || idx} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-[2rem] transform group-hover:scale-[1.02] transition-transform duration-500" />
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full aspect-video object-cover rounded-[2rem] shadow-[0_20px_50px_rgb(0,0,0,0.08)] transform group-hover:-translate-y-2 transition-all duration-500 border border-slate-100"
                  />
                  {/* Decorative element behind image */}
                  <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-24 h-24 bg-blue-100 rounded-3xl -z-10 opacity-50`} />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="text-xs font-bold text-slate-400 tracking-[0.2em] mb-4 uppercase">
                    {tag}
                  </span>
                  
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-6 leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                    {title}
                  </h3>
                  
                  <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
                    {desc}
                  </p>

                  <div>
                    <button
                      onClick={() => onSelectService(item as ServiceItem)}
                      className="group inline-flex items-center gap-2 text-[#2563EB] font-bold text-sm tracking-wide uppercase hover:text-[#1D4ED8] transition-colors"
                    >
                      FULL STRATEGY & DETAILS
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
