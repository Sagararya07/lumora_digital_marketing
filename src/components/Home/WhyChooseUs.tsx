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
  Flame,
  CheckCircle2
} from 'lucide-react';

interface WhyChooseUsProps {
  content?: any;
  openConsultationModal: () => void;
}

const getWhyChooseIcon = (iconName: string) => {
  const cls = "w-5 h-5 text-white";
  switch (iconName) {
    case 'Award': return <Award className={cls} />;
    case 'ShieldCheck': return <ShieldCheck className={cls} />;
    case 'TrendingUp': return <TrendingUp className={cls} />;
    case 'Bot': return <Bot className={cls} />;
    case 'BarChart3': return <BarChart3 className={cls} />;
    case 'UserCheck': return <UserCheck className={cls} />;
    case 'Zap': return <Zap className={cls} />;
    case 'Globe': return <Globe className={cls} />;
    case 'Database': return <Database className={cls} />;
    case 'Cpu': return <Cpu className={cls} />;
    case 'Flame': return <Flame className={cls} />;
    case 'CheckCircle2': return <CheckCircle2 className={cls} />;
    case 'Sparkles': return <Sparkles className={cls} />;
    default: return <Award className={cls} />;
  }
};

const energeticPoints = [
  { 
    title: 'Industry Experience', 
    desc: 'Deep vertical expertise scaling B2B SaaS, Healthcare, Real Estate & Manufacturing.', 
    metric: '15+ Verticals',
    icon: <Award className="w-5 h-5 text-white" />,
    gradient: 'from-blue-500 to-indigo-600 shadow-blue-500/30'
  },
  { 
    title: 'Tier-1 Certified Experts', 
    desc: 'Elite accredited Google Premier, Meta, and HubSpot growth architects managing your budget.', 
    metric: 'Top 1% Tier',
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    gradient: 'from-purple-500 to-indigo-600 shadow-purple-500/30'
  },
  { 
    title: 'ROI-Driven Acquisition', 
    desc: 'Relentless CAC optimization to maximize customer lifetime value and pipeline returns.', 
    metric: '14.2x ROAS',
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    gradient: 'from-pink-500 to-rose-600 shadow-pink-500/30'
  },
  { 
    title: 'AI Growth Automation', 
    desc: 'Autonomous lead scoring, 24/7 AI chatbots, and predictive bidding models for instant conversion.', 
    metric: '99.8% Precision',
    icon: <Bot className="w-5 h-5 text-white" />,
    gradient: 'from-cyan-500 to-blue-600 shadow-cyan-500/30'
  },
  { 
    title: '100% Attribution Transparency', 
    desc: 'Live real-time client growth dashboard tracking every single dollar and lead attribution.', 
    metric: 'Live 24/7 Sync',
    icon: <BarChart3 className="w-5 h-5 text-white" />,
    gradient: 'from-amber-500 to-orange-600 shadow-amber-500/30'
  },
  { 
    title: 'Dedicated Senior Strategist', 
    desc: 'Direct WhatsApp & Slack access to your personal lead acquisition strategist.', 
    metric: 'Dedicated 1-on-1',
    icon: <UserCheck className="w-5 h-5 text-white" />,
    gradient: 'from-emerald-500 to-teal-600 shadow-emerald-500/30'
  },
];

const floatingOrbitNodes = [
  { name: 'Google Ads AI', tag: 'PMax & Search', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', pos: 'top-2 left-4' },
  { name: 'Meta Ads Engine', tag: 'FB & Insta Leads', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg', pos: 'top-2 right-4' },
  { name: 'HubSpot CRM', tag: 'Auto Lead Sync', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg', pos: 'top-32 -left-3' },
  { name: 'Salesforce', tag: 'Pipeline Automation', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg', pos: 'top-32 -right-3' },
  { name: 'LinkedIn B2B', tag: 'Executive Outreach', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', pos: 'bottom-24 left-2' },
  { name: 'WhatsApp Bot', tag: '24/7 Lead Qual', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg', pos: 'bottom-24 right-2' },
  { name: 'Stripe Funnels', tag: 'Instant Checkout', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg', pos: 'bottom-2 left-16' },
  { name: 'Zapier Engine', tag: '3000+ App Sync', icon: 'https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg', pos: 'bottom-2 right-16' },
];

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ content, openConsultationModal }) => {
  return (
    <section id="why-choose-us-section" className="py-20 sm:py-28 pt-24 sm:pt-32 bg-gradient-to-b from-[#F8FAFC] via-white to-blue-50/40 border-y border-[#E5E7EB] overflow-hidden relative">
      
      {/* High-Energy Background Radial Swirl Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-blue-500/15 via-purple-500/20 to-pink-500/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: High-Energy Interactive 3D Growth Core & Floating Ecosystem Orbit Matrix */}
          <div className="lg:col-span-6 relative">
            
            <div className="w-full max-w-[500px] aspect-square mx-auto relative flex items-center justify-center">
              
              {/* Pulsing Orbital Swirl Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300/60 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-purple-300/50 rotate-45" />
              <div className="absolute inset-16 rounded-full border border-pink-300/40 -rotate-45" />

              {/* Central Glowing AI Growth Engine Core */}
              <div className="relative z-20 w-44 h-44 rounded-full bg-gradient-to-br from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] p-1 shadow-2xl shadow-purple-500/40 transform hover:scale-105 transition-transform duration-500 flex items-center justify-center text-center">
                <div className="w-full h-full rounded-full bg-white/95 backdrop-blur-md p-4 flex flex-col items-center justify-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] flex items-center justify-center text-white shadow-md">
                    <Zap className="w-5 h-5 text-white animate-bounce" />
                  </div>
                  <span className="text-xs font-black text-[#111827] uppercase tracking-wider font-['Plus_Jakarta_Sans',sans-serif]">
                    LUMORA AI CORE
                  </span>
                  <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    +42.5% ROAS
                  </span>
                </div>
              </div>

              {/* Floating Ecosystem Nodes in Orbit Matrix */}
              {floatingOrbitNodes.map((node, idx) => (
                <div
                  key={idx}
                  className={`absolute ${node.pos} z-30 p-2.5 sm:p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E5E7EB] shadow-xl hover:shadow-2xl hover:scale-110 hover:border-[#5B8EE2] transition-all duration-300 group flex items-center gap-2.5 cursor-pointer`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  {typeof node.icon === 'string' ? (
                    <img src={node.icon} alt={node.name} className="h-5 w-auto object-contain max-w-[60px]" />
                  ) : (
                    node.icon
                  )}
                  <div className="hidden sm:block text-left">
                    <p className="text-[11px] font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#5B8EE2] transition-colors leading-tight">
                      {node.name}
                    </p>
                    <p className="text-[9px] text-[#6B7280] font-semibold">{node.tag}</p>
                  </div>
                </div>
              ))}

            </div>

            {/* Bottom Real-Time Sync Banner */}
            <div className="mt-6 p-4 rounded-3xl bg-white border border-[#E5E7EB] shadow-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent font-['Plus_Jakarta_Sans',sans-serif]">
                    Automated Data & API Connectivity
                  </h4>
                  <p className="text-[11px] text-[#6B7280]">Connects seamlessly with all major marketing & CRM channels.</p>
                </div>
              </div>
              <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full shrink-0">
                100% LIVE SYNC
              </span>
            </div>

          </div>

          {/* Right Column: Energetic Hype Advantage Grid */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Eyebrow Badge */}
            <div>
              <span className="inline-flex items-center gap-2 text-[#D6A67B] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-purple-200 bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 shadow-xs font-['Plus_Jakarta_Sans',sans-serif] animate-pulse">
                <Flame className="w-4 h-4 text-[#D6A67B]" />
                <span>UNMATCHED ADVANTAGE</span>
              </span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] leading-[1.12] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] whitespace-pre-wrap">
                {content?.title || 'Why Choose Lumora?'}
              </h2>
              <p className="text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed mt-3 whitespace-pre-wrap">
                {content?.subtitle || 'We combine AI-driven campaign intelligence, certified expert execution, and 100% transparent attribution to turn digital attention into predictable pipeline revenue.'}
              </p>
            </div>

            {/* 6 Energetic Advantage Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {(content?.points?.length > 0 ? content.points : energeticPoints).slice(0, 6).map((item: any, i: number) => {
                const fallback = energeticPoints[i % energeticPoints.length];
                const title = item.title || fallback.title;
                const desc = item.description || fallback.desc;
                const metric = fallback.metric;
                const gradient = fallback.gradient;
                const icon = item.imageUrl ? (
                  <img src={item.imageUrl} alt={title} className="w-6 h-6 object-cover rounded" />
                ) : (
                  <span className="w-5 h-5 text-white flex items-center justify-center">
                    {item.iconName ? getWhyChooseIcon(item.iconName) : fallback.icon}
                  </span>
                );

                return (
                <div 
                  key={i} 
                  className="p-4 rounded-3xl bg-white/90 backdrop-blur-md border border-[#E5E7EB] hover:border-[#5B8EE2] shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform overflow-hidden relative`}>
                      {icon}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#5B8EE2] bg-[#F2F6FC] px-2.5 py-1 rounded-full border border-blue-100 font-['Plus_Jakarta_Sans',sans-serif]">
                      {metric}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-extrabold bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#5B8EE2] transition-colors">
                      {title}
                    </h4>
                    <p className="text-xs text-[#6B7280] font-normal leading-relaxed mt-1">
                      {desc}
                    </p>
                  </div>
                </div>
              )})}
            </div>

            {/* High-Energy Action Button */}
            <div className="pt-4">
              <button
                onClick={openConsultationModal}
                className="w-full sm:w-auto px-9 py-4.5 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-sm font-black flex items-center justify-center gap-3 shadow-xl shadow-blue-500/25 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif]"
              >
                <span>Unleash Your Growth System</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
