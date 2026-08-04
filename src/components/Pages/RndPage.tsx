import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Bot, 
  BarChart3, 
  Layers, 
  Code2, 
  CheckCircle2,
  BrainCircuit,
  Sliders,
  Play
} from 'lucide-react';
import { SiteContent } from '../../types';
import { ConsultationSection } from '../Home/ConsultationSection';

interface RndPageProps {
  siteContent: SiteContent;
  onGoHome: () => void;
  openConsultationModal: () => void;
}

export const RndPage: React.FC<RndPageProps> = ({
  siteContent,
  onGoHome,
  openConsultationModal,
}) => {
  // Interactive Lead Scoring Simulator State
  const [trafficVolume, setTrafficVolume] = useState<number>(50000);
  const [adSpend, setAdSpend] = useState<number>(5000);
  const [industryType, setIndustryType] = useState<string>('SaaS');

  // Interactive Calculation
  const multiplier = industryType === 'SaaS' ? 0.04 : industryType === 'Healthcare' ? 0.05 : 0.03;
  const estimatedLeads = Math.round(trafficVolume * multiplier);
  const estimatedCostPerLead = Math.round(adSpend / Math.max(1, estimatedLeads));
  const estimatedRevenue = (estimatedLeads * 350).toLocaleString();

  return (
    <div className="min-h-screen bg-white text-[#111827] font-['Inter',sans-serif]">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 sm:px-8 bg-gradient-to-b from-purple-50/70 via-white to-slate-50 border-b border-[#E5E7EB]">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[140px] pointer-events-none bg-purple-500/20" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[140px] pointer-events-none bg-[#729EE6]/20" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[#D6A67B] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-purple-200 bg-purple-50/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <BrainCircuit className="w-3.5 h-3.5 text-[#D6A67B] animate-pulse" />
              <span>RESEARCH & DEVELOPMENT LAB</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
            AI-Driven Marketing Infrastructure &{' '}
            <span className="bg-gradient-to-r from-[#D6A67B] via-[#5B8EE2] to-[#8CB4F5] bg-clip-text text-transparent">
              Predictive Intelligence
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed font-normal">
            Inside the Lumora R&D Lab: We build proprietary algorithmic engines, machine learning bidding frameworks, and real-time conversion models that outperform traditional marketing strategies.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openConsultationModal}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D6A67B] to-[#5B8EE2] hover:from-[#C29367] hover:to-[#4676C2] text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-xl shadow-purple-500/25 transition-all hover:scale-105 w-full sm:w-auto font-['Plus_Jakarta_Sans',sans-serif]"
            >
              <span>Explore AI Platform Architecture</span>
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

      {/* 2. Core AI Innovations Grid */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 text-[#D6A67B] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-purple-200 bg-purple-50/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#D6A67B]" />
              <span>R&D MODULES</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
              Proprietary AI Growth Technologies
            </h2>
            <p className="text-base text-[#6B7280] font-normal">
              Engineered to eliminate budget waste, predict buyer intent, and accelerate funnel velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(siteContent.rndModules || []).map((module, i) => {
              const gradients = [
                'from-purple-500 to-indigo-600',
                'from-blue-500 to-cyan-600',
                'from-pink-500 to-rose-600',
                'from-emerald-500 to-teal-600',
              ];
              const gradient = gradients[i % gradients.length];
              return (
              <div key={module.id || i} className="p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#D6A67B] shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                    {module.image_url ? (
                      <img src={module.image_url} alt={module.title} className="w-7 h-7 object-contain brightness-0 invert" />
                    ) : (
                      <BrainCircuit className="w-7 h-7 text-white" />
                    )}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D6A67B] bg-purple-50 px-3 py-1 rounded-full border border-purple-200 font-['Plus_Jakarta_Sans',sans-serif]">
                    {module.badge}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] mb-3 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#D6A67B] transition-colors">
                  {module.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed font-normal">
                  {module.description}
                </p>
              </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Interactive Lead Forecast Sandbox Calculator */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-50/80 via-white to-blue-50/80 border border-purple-200/80 shadow-2xl space-y-8 relative overflow-hidden">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sliders className="w-5 h-5 text-[#D6A67B]" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#D6A67B] font-['Plus_Jakarta_Sans',sans-serif]">
                  INTERACTIVE R&D SIMULATOR
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
                Lumora AI Pipeline Forecast Simulator
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-1 font-normal">
                Adjust the parameters below to see Lumora’s estimated AI funnel conversion and revenue metrics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-extrabold uppercase text-[#111827] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  Industry Vertical
                </label>
                <select
                  value={industryType}
                  onChange={(e) => setIndustryType(e.target.value)}
                  className="w-full p-3 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-bold text-[#111827] focus:border-[#D6A67B] focus:outline-none shadow-xs"
                >
                  <option value="SaaS">B2B SaaS & IT</option>
                  <option value="Healthcare">Healthcare & Medical</option>
                  <option value="RealEstate">Real Estate & Luxury</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-[#111827] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  Monthly Web Traffic: {trafficVolume.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={trafficVolume}
                  onChange={(e) => setTrafficVolume(Number(e.target.value))}
                  className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-[#111827] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  Monthly Ad Spend: ${adSpend.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Live Calculated Forecast Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs">
                <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider block">Estimated Qualified Leads</span>
                <p className="text-2xl font-black text-[#D6A67B] mt-1 font-['Plus_Jakarta_Sans',sans-serif]">{estimatedLeads} Leads/mo</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs">
                <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider block">Estimated Cost / Lead</span>
                <p className="text-2xl font-black text-[#5B8EE2] mt-1 font-['Plus_Jakarta_Sans',sans-serif]">${estimatedCostPerLead}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs">
                <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider block">Forecast Pipeline Revenue</span>
                <p className="text-2xl font-black text-emerald-600 mt-1 font-['Plus_Jakarta_Sans',sans-serif]">${estimatedRevenue}</p>
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={openConsultationModal}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D6A67B] to-[#5B8EE2] text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 hover:scale-105 transition-all font-['Plus_Jakarta_Sans',sans-serif] mx-auto"
              >
                <span>Request Custom AI Architecture Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Consultation Section */}
      <ConsultationSection
        contactInfo={siteContent.contactInfo}
        heading="Want to Deploy Lumora AI Engine for Your Brand?"
        subheading="Book a technical strategy call with our AI marketing engineers."
        sourcePage="R&D Lab Page"
      />

    </div>
  );
};
