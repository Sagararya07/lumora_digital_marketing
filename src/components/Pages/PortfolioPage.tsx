import React, { useState } from 'react';
import { 
  FolderDot, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Target, 
  Users, 
  Building2, 
  HeartPulse, 
  Laptop, 
  ShoppingBag,
  Factory,
  ArrowUpRight,
  Quote
} from 'lucide-react';
import { SiteContent, AchievementItem } from '../../types';
import { ConsultationSection } from '../Home/ConsultationSection';

interface PortfolioPageProps {
  siteContent: SiteContent;
  onGoHome: () => void;
  openConsultationModal: () => void;
  onSelectCaseStudy: (item: AchievementItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  siteContent,
  onGoHome,
  openConsultationModal,
  onSelectCaseStudy,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'Healthcare', 'B2B & IT SaaS', 'Real Estate', 'E-commerce', 'Manufacturing'];

  const filteredAchievements = siteContent.achievements.filter((item) => {
    if (selectedIndustry === 'All') return true;
    return item.industry.toLowerCase().includes(selectedIndustry.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-white text-[#111827] font-['Inter',sans-serif]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-8 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-[#E5E7EB]">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[140px] pointer-events-none bg-[#729EE6]/20" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[140px] pointer-events-none bg-purple-500/20" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[#5B8EE2] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-[#F2F6FC]/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2] animate-pulse" />
              <span>CASE STUDIES & PORTFOLIO</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
            Our Proven Track Record of Delivering{' '}
            <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#8CB4F5] bg-clip-text text-transparent">
              Extraordinary ROI
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed font-normal">
            Explore detailed client case studies across Healthcare, SaaS, Real Estate, E-Commerce, and Manufacturing. See how our AI-driven digital campaigns scale revenue worldwide.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openConsultationModal}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#5B8EE2] to-[#D6A67B] hover:from-[#4676C2] hover:to-[#C29367] text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition-all hover:scale-105 w-full sm:w-auto font-['Plus_Jakarta_Sans',sans-serif]"
            >
              <span>Get Custom Case Study Analysis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onGoHome}
              className="px-8 py-4 rounded-full bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#111827] text-sm font-extrabold transition-all shadow-xs w-full sm:w-auto font-['Plus_Jakarta_Sans',sans-serif]"
            >
              Explore Agency Home
            </button>
          </div>
        </div>
      </section>

      {/* 2. Filter & Case Studies Grid */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedIndustry(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif] ${
                  selectedIndustry === cat
                    ? 'bg-gradient-to-r from-[#5B8EE2] to-[#D6A67B] text-white shadow-md shadow-blue-500/25'
                    : 'bg-white text-[#6B7280] hover:text-[#111827] border border-[#E5E7EB] hover:border-[#5B8EE2]'
                }`}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAll ? filteredAchievements : filteredAchievements.slice(0, 6)).map((item, idx) => (
              <div
                key={item.id || idx}
                onClick={() => onSelectCaseStudy(item)}
                className="p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#5B8EE2] shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between cursor-pointer relative overflow-hidden"
              >
                {item.image_url && (
                  <div className="w-full h-40 mb-5 rounded-2xl overflow-hidden shrink-0">
                    <img src={item.image_url} alt={item.clientName} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#5B8EE2] bg-[#F2F6FC] px-3 py-1 rounded-full border border-blue-100 font-['Plus_Jakarta_Sans',sans-serif]">
                      {item.industry}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#F2F6FC] flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#5B8EE2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#111827] mb-2 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#5B8EE2] transition-colors">
                    {item.clientName}
                  </h3>

                  <p className="text-xs text-[#6B7280] font-medium mb-6">
                    {item.location}
                  </p>

                  {/* Highlights Metrics Bar */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="text-[10px] text-[#6B7280] font-bold uppercase block">{m.label}</span>
                        <span className="text-lg font-black text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">{m.value}</span>
                        <span className="text-[10px] font-bold text-emerald-600 ml-1">{m.change}</span>
                      </div>
                    ))}
                  </div>

                  {/* Challenge & Solution preview */}
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed line-clamp-3 mb-6">
                    {item.solution || item.challenge}
                  </p>
                </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#5B8EE2] font-extrabold font-['Plus_Jakarta_Sans',sans-serif] mt-auto">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {!showAll && filteredAchievements.length > 6 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 rounded-full border-2 border-[#5B8EE2] text-[#5B8EE2] text-sm font-extrabold hover:bg-[#5B8EE2] hover:text-white transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif]"
              >
                View More Case Studies
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. Consultation Section */}
      <ConsultationSection
        contactInfo={siteContent.contactInfo}
        heading="Want Similar Case Study Results for Your Brand?"
        subheading="Book a free consultation with our performance marketing strategists."
        sourcePage="Portfolio Page"
      />

    </div>
  );
};
