import React from 'react';
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
  Laptop
} from 'lucide-react';
import { SiteContent } from '../../types';
import { ConsultationSection } from '../Home/ConsultationSection';

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
  return (
    <div className="min-h-screen bg-white text-[#111827] font-['Inter',sans-serif]">
      
      {/* 1. Dedicated About Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-8 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-[#E5E7EB]">
        
        {/* Background Mesh Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[140px] pointer-events-none bg-blue-500/20" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[140px] pointer-events-none bg-purple-500/20" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[#2563EB] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-blue-50/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB] animate-pulse" />
              <span>ABOUT LUMORA DIGITAL AGENCY</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
            Pioneering the Future of Digital Scaling for{' '}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#38BDF8] bg-clip-text text-transparent">
              Ambitious Global Brands
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed font-normal">
            At Lumora, we combine algorithmic precision, AI-driven campaign intelligence, and creative storytelling to turn digital attention into predictable pipeline revenue.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openConsultationModal}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition-all hover:scale-105 w-full sm:w-auto font-['Plus_Jakarta_Sans',sans-serif]"
            >
              <span>Partner With Our Experts</span>
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

      {/* 2. Our Mission & Story */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-extrabold text-[#2563EB] uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">
                OUR MISSION & VISION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
                Eliminating Guesswork in Modern Customer Acquisition
              </h2>
              <p className="text-base text-[#6B7280] leading-relaxed font-normal">
                Founded with a mission to replace vanity metrics with bottom-line growth, Lumora builds end-to-end digital acquisition funnels. We manage hyper-targeted search ads, paid social campaigns, technical SEO, and conversion optimization for enterprises, SaaS scale-ups, and regional market leaders.
              </p>
              <p className="text-base text-[#6B7280] leading-relaxed font-normal">
                Our global team operates across North America, Europe, the Middle East, and Asia-Pacific, managing high-performing campaigns tailored for local, national, and international buyer behaviors.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB]">
                  <p className="text-3xl font-extrabold text-[#2563EB] font-['Plus_Jakarta_Sans',sans-serif]">10+ Yrs</p>
                  <p className="text-xs text-[#6B7280] font-bold mt-1 font-['Plus_Jakarta_Sans',sans-serif]">Industry Leadership</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB]">
                  <p className="text-3xl font-extrabold text-[#7C3AED] font-['Plus_Jakarta_Sans',sans-serif]">15+ Countries</p>
                  <p className="text-xs text-[#6B7280] font-bold mt-1 font-['Plus_Jakarta_Sans',sans-serif]">Global Client Footprint</p>
                </div>
              </div>
            </div>

            {/* Visual Feature Card Stack */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-3xl bg-white p-8 border border-[#E5E7EB] shadow-2xl space-y-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">Omnichannel Funnel Scaling</h3>
                    <p className="text-xs text-[#6B7280]">Google Ads, Meta, LinkedIn & Programmatic</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-md">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">AI Campaign Automation</h3>
                    <p className="text-xs text-[#6B7280]">Real-time automated bidding & AI creative testing</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">100% Attribution Transparency</h3>
                    <p className="text-xs text-[#6B7280]">Live client dashboard tracking CAC, leads & ROI</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Agency Pillars */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 text-[#2563EB] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-blue-50/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
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
            {[
              { title: 'Data-Driven Strategy', desc: 'Every campaign hypothesis is validated using historical search trends and conversion benchmarks.', icon: BarChart3, gradient: 'from-blue-500 to-indigo-600' },
              { title: 'Certified Premier Partners', desc: 'Accredited Google Premier, Meta Business, and HubSpot marketing strategists managing your budget.', icon: ShieldCheck, gradient: 'from-purple-500 to-pink-600' },
              { title: 'Relentless ROI Focus', desc: 'We optimize down to Customer Acquisition Cost (CAC) and customer lifetime value (LTV).', icon: TrendingUp, gradient: 'from-emerald-500 to-teal-600' },
            ].map((pillar, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#2563EB] hover:bg-white shadow-xs hover:shadow-2xl transition-all duration-300 group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] mb-3 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#2563EB] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

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
