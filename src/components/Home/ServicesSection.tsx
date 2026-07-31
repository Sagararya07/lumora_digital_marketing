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
    gradient: 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/25',
  },
  {
    id: 'seo-growth-engine',
    title: 'Search Engine Optimization (SEO)',
    shortDescription: 'Dominate Google search results with technical SEO, content strategy, and high-authority link building.',
    icon: <Search className="w-6 h-6 text-white" />,
    gradient: 'bg-gradient-to-br from-amber-500 to-orange-600 shadow-amber-500/25',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    shortDescription: 'AI-optimized ad campaigns across Google, Meta, and LinkedIn laser-focused on ROI, sales, and conversions.',
    icon: <Target className="w-6 h-6 text-white" />,
    gradient: 'bg-gradient-to-br from-pink-500 to-rose-600 shadow-pink-500/25',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    shortDescription: 'Predictable multi-channel B2B & B2C acquisition funnels that generate qualified, sales-ready inquiries.',
    icon: <Users className="w-6 h-6 text-white" />,
    gradient: 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/25',
  },
  {
    id: 'retargeting-marketing',
    title: 'Retargeting Marketing',
    shortDescription: 'Re-engage dropped website visitors across display networks and social feeds to boost conversion rates.',
    icon: <Repeat className="w-6 h-6 text-white" />,
    gradient: 'bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-500/25',
  },
  {
    id: 'ai-marketing-automation',
    title: 'AI Marketing Automation',
    shortDescription: 'Smart CRM workflows, automated lead nurturing, and AI chatbots to convert visitors faster.',
    icon: <Bot className="w-6 h-6 text-white" />,
    gradient: 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/25',
  },
];

export const ServicesSection: React.FC<ServicesProps> = ({
  services = [],
  onSelectService,
}) => {
  const displayItems = services.length >= 6 ? services : mockSolutions;

  return (
    <section id="services-section" className="py-20 sm:py-28 pt-24 sm:pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Top Eyebrow Badge */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#2563EB] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-blue-50/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB] animate-pulse" />
              <span>OUR DIGITAL MARKETING SERVICES</span>
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            AI-Powered Solutions for Every{' '}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#38BDF8] bg-clip-text text-transparent">
              Stage of Growth
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            From strategy to execution, we build intelligent systems that deliver measurable, scalable, and predictable revenue results.
          </p>

        </div>

        {/* 3x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item, idx) => {
            const fallback = mockSolutions[idx % mockSolutions.length];
            const title = item.title || fallback.title;
            const desc = item.shortDescription || fallback.shortDescription;
            const icon = fallback.icon;
            const gradient = fallback.gradient;

            return (
              <article
                key={item.id || idx}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#2563EB] hover:bg-white shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Badge Box */}
                  <div className={`w-14 h-14 rounded-2xl ${gradient} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#111827] mb-3 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#2563EB] transition-colors">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#6B7280] leading-relaxed font-normal mb-8">
                    {desc}
                  </p>
                </div>

                {/* Learn More Pill Button CTA */}
                <button
                  onClick={() => onSelectService(item as ServiceItem)}
                  className="w-full py-3.5 px-5 rounded-full border border-[#2563EB]/30 bg-blue-50/50 hover:bg-[#2563EB] hover:text-white text-[#2563EB] text-xs font-extrabold flex items-center justify-center gap-2 transition-all group/btn shadow-xs font-['Plus_Jakarta_Sans',sans-serif]"
                >
                  <span className="group-hover/btn:text-white transition-colors">Learn More & View Strategy</span>
                  <ArrowRight className="w-4 h-4 text-[#2563EB] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </button>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
