// @ts-nocheck
import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Globe2, 
  Zap, 
  Sparkles, 
  ArrowRight,
  Target,
  BarChart3,
  CheckCircle2,
  Building2,
  HeartPulse,
  Laptop,
  LucideProps
} from 'lucide-react';
import * as Icons from 'lucide-react';
import { SiteContent } from '../../types';
import { ConsultationSection } from '../Home/ConsultationSection';
import { ViewMoreButton } from '../common/ViewMoreButton';
import { TeamSection } from '../About/TeamSection';

const getIcon = (iconName: string, props: LucideProps) => {
  const IconComponent = (Icons as any)[iconName] || Icons.CheckCircle;
  return <IconComponent {...props} />;
};

interface AboutPageProps {
  siteContent: SiteContent;
  onGoHome: () => void;
  openConsultationModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  siteContent,
  onGoHome,
  openConsultationModal,
}) => {
  const [showAllPillars, setShowAllPillars] = useState(false);

  // Fallbacks in case database is empty
  const missionCards = siteContent.aboutMissionCards?.length 
    ? siteContent.aboutMissionCards 
    : [
        { id: '1', title: 'Omnichannel Funnel Scaling', description: 'Google Ads, Meta, LinkedIn & Programmatic', iconName: 'Globe2' },
        { id: '2', title: 'AI Campaign Automation', description: 'Real-time automated bidding & AI creative testing', iconName: 'Zap' },
        { id: '3', title: '100% Attribution Transparency', description: 'Live client dashboard tracking CAC, leads & ROI', iconName: 'ShieldCheck' },
      ];

  const corePillars = siteContent.aboutCorePillars?.length
    ? siteContent.aboutCorePillars
    : [
        { id: '1', title: 'Data-Driven Strategy', description: 'Every campaign hypothesis is validated using historical search trends and conversion benchmarks.', iconName: 'BarChart3' },
        { id: '2', title: 'Certified Premier Partners', description: 'Accredited Google Premier, Meta Business, and HubSpot marketing strategists managing your budget.', iconName: 'ShieldCheck' },
        { id: '3', title: 'Relentless ROI Focus', description: 'We optimize down to Customer Acquisition Cost (CAC) and customer lifetime value (LTV).', iconName: 'TrendingUp' },
      ];

  const displayPillars = showAllPillars ? corePillars : corePillars.slice(0, 3);
  const hiddenPillarsCount = corePillars.length - 3;

  // Gradients for pills/icons mapping
  const gradients = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-emerald-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-cyan-500 to-blue-600',
    'from-rose-500 to-pink-600'
  ];
  return (
    <div className="min-h-screen bg-white text-[#111827] font-['Inter',sans-serif]">
      
      {/* 1. Dedicated About Hero Section */}
      <section 
        className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-8 border-b border-[#E5E7EB] bg-gradient-to-b from-blue-50/70 via-white to-slate-50"
      >
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[140px] pointer-events-none bg-[#729EE6]/20" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[140px] pointer-events-none bg-purple-500/20" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border shadow-xs font-['Plus_Jakarta_Sans',sans-serif] text-[#5B8EE2] border-blue-200 bg-[#F2F6FC]/80">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#5B8EE2]" />
              <span>{siteContent.aboutHero?.hero_badge || 'ABOUT LUMORA DIGITAL AGENCY'}</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight text-[#111827]">
            {siteContent.aboutHero?.hero_heading_1 || 'Pioneering the Future of Digital Scaling for'}{' '}
            <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
              {siteContent.aboutHero?.hero_heading_highlight || 'Ambitious Global Brands'}
            </span>
          </h1>

          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal text-[#6B7280]">
            {siteContent.aboutHero?.hero_description || 'At Lumora, we combine algorithmic precision, AI-driven campaign intelligence, and creative storytelling to turn digital attention into predictable pipeline revenue.'}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openConsultationModal}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition-all hover:scale-105 w-full sm:w-auto font-['Plus_Jakarta_Sans',sans-serif]"
            >
              <span>{siteContent.aboutHero?.hero_primary_cta || 'Partner With Our Experts'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onGoHome}
              className="px-8 py-4 rounded-full text-sm font-extrabold transition-all shadow-xs w-full sm:w-auto font-['Plus_Jakarta_Sans',sans-serif] bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#111827]"
            >
              {siteContent.aboutHero?.hero_secondary_cta || 'Explore Agency Home'}
            </button>
          </div>
        </div>
      </section>

      {/* 2. Our Mission & Story */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-extrabold text-[#5B8EE2] uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">
                {siteContent.aboutHero?.mission_title || "OUR MISSION & VISION"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
                {siteContent.aboutHero?.mission_heading || "Eliminating Guesswork in Modern Customer Acquisition"}
              </h2>
              <p className="text-base text-[#6B7280] leading-relaxed font-normal">
                {siteContent.aboutHero?.mission_text1 || "Founded with a mission to replace vanity metrics with bottom-line growth, Lumora builds end-to-end digital acquisition funnels. We manage hyper-targeted search ads, paid social campaigns, technical SEO, and conversion optimization for enterprises, SaaS scale-ups, and regional market leaders."}
              </p>
              <p className="text-base text-[#6B7280] leading-relaxed font-normal">
                {siteContent.aboutHero?.mission_text2 || "Our global team operates across North America, Europe, the Middle East, and Asia-Pacific, managing high-performing campaigns tailored for local, national, and international buyer behaviors."}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB]">
                  <p className="text-3xl font-extrabold text-[#5B8EE2] font-['Plus_Jakarta_Sans',sans-serif]">{siteContent.aboutHero?.mission_stat1_value || "10+ Yrs"}</p>
                  <p className="text-xs text-[#6B7280] font-bold mt-1 font-['Plus_Jakarta_Sans',sans-serif]">{siteContent.aboutHero?.mission_stat1_label || "Industry Leadership"}</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB]">
                  <p className="text-3xl font-extrabold text-[#D6A67B] font-['Plus_Jakarta_Sans',sans-serif]">{siteContent.aboutHero?.mission_stat2_value || "15+ Countries"}</p>
                  <p className="text-xs text-[#6B7280] font-bold mt-1 font-['Plus_Jakarta_Sans',sans-serif]">{siteContent.aboutHero?.mission_stat2_label || "Global Client Footprint"}</p>
                </div>
              </div>
            </div>

            {/* Visual Feature Card Stack */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-3xl bg-white p-8 border border-[#E5E7EB] shadow-2xl space-y-6">
                
                {missionCards.map((card, i) => (
                  <div key={card.id} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center text-white shadow-md`}>
                      {getIcon(card.iconName, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">{card.title}</h3>
                      <p className="text-xs text-[#6B7280]">{card.description}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <TeamSection teamMembers={siteContent.teamMembers} />

      {/* 3. Core Agency Pillars */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 text-[#5B8EE2] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-[#F2F6FC]/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2]" />
              <span>CORE PILLARS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
              What Sets Lumora Apart
            </h2>
            <p className="text-base text-[#6B7280] font-normal">
              We operate as an extension of your internal team, focused strictly on qualified acquisition and revenue expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayPillars.map((pillar, i) => (
              <div key={pillar.id} className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#5B8EE2] hover:bg-white shadow-xs hover:shadow-2xl transition-all duration-300 group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  {getIcon(pillar.iconName, { className: 'w-7 h-7 text-white' })}
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] mb-3 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#5B8EE2] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <ViewMoreButton 
            expanded={showAllPillars} 
            onToggle={() => setShowAllPillars(!showAllPillars)} 
            hiddenCount={hiddenPillarsCount} 
            label="View More Pillars" 
          />

        </div>
      </section>

      {/* 4. Consultation Form */}
      <ConsultationSection
        contactInfo={siteContent.contactInfo}
        heading="Ready to Partner with Lumora?"
        subheading="Book a free consultation with our senior growth strategists."
        sourcePage="About Us Page"
      />

    </div>
  );
};
