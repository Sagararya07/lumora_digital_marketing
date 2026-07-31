import React from 'react';
import { 
  ArrowRight, 
  Sparkles,
  Award,
  TrendingUp,
  Bot,
  BarChart3,
  UserCheck,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Cpu,
  Layers,
  CheckCircle2
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

const ecosystemIntegrations = [
  { name: 'Google Ads AI', tag: 'Search & PMax', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', color: 'bg-blue-50 border-blue-200' },
  { name: 'Meta Ads Engine', tag: 'FB & Insta Leads', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg', color: 'bg-indigo-50 border-indigo-200' },
  { name: 'HubSpot CRM', tag: 'Auto Routing', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg', color: 'bg-orange-50 border-orange-200' },
  { name: 'Salesforce', tag: 'Enterprise CRM', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg', color: 'bg-sky-50 border-sky-200' },
  { name: 'LinkedIn B2B', tag: 'Executive Outreach', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', color: 'bg-blue-50 border-blue-200' },
  { name: 'WhatsApp Bot', tag: '24/7 Lead Qual', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg', color: 'bg-emerald-50 border-emerald-200' },
  { name: 'Zapier Engine', tag: '3000+ App Sync', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Zapier_logo.svg', color: 'bg-amber-50 border-amber-200' },
  { name: 'Stripe Funnels', tag: 'Instant Checkout', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg', color: 'bg-purple-50 border-purple-200' },
  { name: 'Predictive ROAS AI', tag: 'LTV & CAC Models', icon: <Cpu className="w-6 h-6 text-[#7C3AED]" />, color: 'bg-purple-50 border-purple-200' },
];

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ openConsultationModal }) => {
  return (
    <section id="why-choose-us-section" className="py-20 sm:py-28 pt-24 sm:pt-32 bg-[#F8FAFC] border-y border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Creative Staggered 3D Floating Ecosystem Integration Cloud */}
          <div className="lg:col-span-6 relative">
            
            {/* Background Ambient Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-blue-500/10 via-purple-500/15 to-amber-500/10 blur-[140px] pointer-events-none" />

            <div className="relative z-10 p-2">
              <div className="text-center sm:text-left mb-6">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-['Plus_Jakarta_Sans',sans-serif]">
                  NATIVE MARKETING INTEGRATIONS
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827] mt-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  Seamless Marketing & CRM Ecosystem
                </h3>
              </div>

              {/* Staggered 3-Column 3D Floating Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {ecosystemIntegrations.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-md hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ${
                      idx % 3 === 1 ? 'sm:translate-y-4' : idx % 3 === 2 ? 'sm:translate-y-8' : ''
                    }`}
                  >
                    {/* Top Status Dot */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-['Plus_Jakarta_Sans',sans-serif]">
                        {item.tag}
                      </span>
                    </div>

                    {/* Logo Graphic or Icon */}
                    <div className="h-10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      {typeof item.icon === 'string' ? (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="max-h-7 max-w-[90px] object-contain filter drop-shadow-xs"
                        />
                      ) : (
                        item.icon
                      )}
                    </div>

                    {/* App Name */}
                    <span className="text-xs font-extrabold text-[#111827] text-center font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#2563EB] transition-colors truncate">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Ecosystem Badge */}
              <div className="mt-12 sm:mt-14 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E5E7EB] shadow-lg flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#7C3AED] border border-purple-200 flex items-center justify-center shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
                      Real-Time Webhook & API Sync
                    </h4>
                    <p className="text-[11px] text-[#6B7280]">Connects with your existing tech stack instantly.</p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-[10px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full shrink-0">
                  100% Automated
                </span>
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
                <div key={i} className="p-3.5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex items-start gap-3 hover:border-[#2563EB] transition-colors">
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
