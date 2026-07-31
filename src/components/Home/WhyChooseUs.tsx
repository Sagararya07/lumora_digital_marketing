import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap,
  Sparkles,
  Award,
  TrendingUp,
  Bot,
  BarChart3,
  UserCheck,
  ShieldCheck
} from 'lucide-react';

interface WhyChooseUsProps {
  content?: any;
  openConsultationModal: () => void;
}

const whyChoosePoints = [
  { title: 'Industry Experience', desc: 'Deep vertical knowledge across B2B SaaS, Healthcare, Real Estate & Manufacturing.', icon: <Award className="w-4 h-4 text-[#2563EB]" /> },
  { title: 'Certified Experts', desc: 'Certified Google, Meta, and HubSpot marketing strategists managing your campaigns.', icon: <ShieldCheck className="w-4 h-4 text-[#7C3AED]" /> },
  { title: 'ROI-focused Strategy', desc: 'Every campaign is built to optimize customer acquisition cost and maximize revenue.', icon: <TrendingUp className="w-4 h-4 text-[#EC4899]" /> },
  { title: 'AI-powered Marketing', desc: 'Automated lead scoring, AI chatbots, and predictive analytics for faster conversions.', icon: <Bot className="w-4 h-4 text-[#2563EB]" /> },
  { title: 'Transparent Reporting', desc: 'Live growth dashboards and weekly transparent metrics tracking every dollar spent.', icon: <BarChart3 className="w-4 h-4 text-[#F59E0B]" /> },
  { title: 'Dedicated Account Manager', desc: 'Direct access to your senior growth strategist with 24/7 dedicated support.', icon: <UserCheck className="w-4 h-4 text-[#10B981]" /> },
];

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ openConsultationModal }) => {
  return (
    <section id="why-choose-us-section" className="py-20 sm:py-28 pt-24 sm:pt-32 bg-[#F8FAFC] border-y border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: AI Growth Dashboard White Card */}
          <div className="lg:col-span-6 relative">
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative rounded-3xl bg-white p-6 sm:p-8 border border-[#E5E7EB] shadow-2xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="font-extrabold text-sm text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
                    AI Growth Dashboard
                  </span>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
                </span>
              </div>

              {/* 4 Metric Cards (2x2 Grid) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                  <span className="text-[10px] text-[#6B7280] font-bold uppercase">Visitors</span>
                  <p className="text-base font-extrabold text-[#111827] mt-1">125.6K</p>
                  <span className="text-[10px] font-bold text-emerald-600">+23.4%</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                  <span className="text-[10px] text-[#6B7280] font-bold uppercase">Leads</span>
                  <p className="text-base font-extrabold text-[#111827] mt-1">8.42K</p>
                  <span className="text-[10px] font-bold text-emerald-600">+31.2%</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                  <span className="text-[10px] text-[#6B7280] font-bold uppercase">Meetings</span>
                  <p className="text-base font-extrabold text-[#111827] mt-1">1.28K</p>
                  <span className="text-[10px] font-bold text-emerald-600">+28.7%</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                  <span className="text-[10px] text-[#6B7280] font-bold uppercase">Revenue</span>
                  <p className="text-base font-extrabold text-[#111827] mt-1">₹3.6Cr</p>
                  <span className="text-[10px] font-bold text-emerald-600">+42.5%</span>
                </div>

              </div>

              {/* Purple Line Chart Graphic */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 border border-purple-100 relative overflow-hidden">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-[#7C3AED]">Revenue Growth Curve</span>
                  <span className="text-xs font-extrabold text-white bg-[#7C3AED] px-2.5 py-0.5 rounded-full shadow-xs">
                    +42.5% Revenue Growth
                  </span>
                </div>

                {/* SVG Curve Line Graphic */}
                <svg viewBox="0 0 400 100" className="w-full h-20 overflow-visible" fill="none">
                  <path
                    d="M0,80 Q50,40 100,60 T200,30 T300,50 T400,10"
                    stroke="url(#purpleGrad)"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    d="M0,80 Q50,40 100,60 T200,30 T300,50 T400,10 L400,100 L0,100 Z"
                    fill="url(#purpleFill)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="50%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                    <linearGradient id="purpleFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

            </div>
          </div>

          {/* Right Column: Text & 6 Feature Points */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Eyebrow Badge */}
            <div>
              <span className="inline-flex items-center gap-2 text-[#7C3AED] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-purple-200 bg-purple-50/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
                <Sparkles className="w-3.5 h-3.5 text-[#7C3AED] animate-pulse" />
                <span>WHY CHOOSE LUMORA</span>
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Why Choose Lumora?{' '}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#38BDF8] bg-clip-text text-transparent block mt-1">
                Smarter Systems. Better Results.
              </span>
            </h2>

            {/* 6 Feature Points Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {whyChoosePoints.map((item, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#6B7280] font-normal leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={openConsultationModal}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] text-white text-sm font-extrabold flex items-center gap-2.5 shadow-xl shadow-blue-500/20 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif]"
              >
                <span>Discover Our AI Platform</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
