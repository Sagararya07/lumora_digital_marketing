import React from 'react';
import { 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

interface ProcessProps {
  steps?: any[];
  openConsultationModal?: () => void;
}

export const ProcessSection: React.FC<ProcessProps> = () => {

  const processStages = [
    {
      num: '01',
      title: '1. REQUIREMENT ANALYSIS',
      subtitle: 'Discovery & Buyer Personas',
      desc: 'Deep-dive discovery to align on business objectives, target buyer personas, and growth KPIs.',
      accent: 'from-blue-500 to-indigo-600',
      badgeBg: 'bg-blue-50 text-[#2563EB] border-blue-200',
      diagram: (
        <svg viewBox="0 0 200 140" className="w-full h-32 object-contain" fill="none">
          {/* Discovery Lens & Persona Nodes */}
          <circle cx="100" cy="65" r="45" className="fill-blue-50/80 stroke-blue-200" strokeWidth="2" />
          <path d="M130 95 L165 130" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" />
          <circle cx="85" cy="55" r="10" className="fill-blue-600" />
          <path d="M68 80 C68 68 102 68 102 80" stroke="#2563EB" strokeWidth="3" fill="none" />
          {/* Target Data Nodes */}
          <circle cx="130" cy="45" r="6" className="fill-[#7C3AED]" />
          <line x1="100" y1="65" x2="130" y2="45" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="65" cy="38" r="5" className="fill-[#38BDF8]" />
          <line x1="100" y1="65" x2="65" y2="38" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
          <rect x="40" y="90" width="30" height="16" rx="4" className="fill-blue-100 stroke-blue-300" />
          <text x="55" y="101" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#2563EB">KPIs</text>
        </svg>
      ),
    },
    {
      num: '02',
      title: '2. STRATEGY PLANNING',
      subtitle: 'Funnel Architecture & Budget',
      desc: 'Crafting a custom multi-channel acquisition roadmap and ROI budget allocation strategy.',
      accent: 'from-purple-500 to-indigo-600',
      badgeBg: 'bg-purple-50 text-[#7C3AED] border-purple-200',
      diagram: (
        <svg viewBox="0 0 200 140" className="w-full h-32 object-contain" fill="none">
          {/* Multi-Channel Funnel Diagram */}
          <polygon points="40,20 160,20 130,60 70,60" className="fill-purple-100/80 stroke-purple-300" strokeWidth="2" />
          <polygon points="70,64 130,64 110,95 90,95" className="fill-purple-500/20 stroke-purple-400" strokeWidth="2" />
          <rect x="85" y="100" width="30" height="25" rx="4" className="fill-[#7C3AED]" />
          <path d="M100 106 L100 118 M94 112 L106 112" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          {/* Arrow Flow Down */}
          <path d="M100 25 L100 52" stroke="#7C3AED" strokeWidth="2" strokeDasharray="4 4" />
          {/* Growth Compass */}
          <circle cx="160" cy="90" r="18" className="fill-purple-50 stroke-purple-300" strokeWidth="2" />
          <polygon points="160,78 165,90 160,86 155,90" fill="#7C3AED" />
        </svg>
      ),
    },
    {
      num: '03',
      title: '3. CAMPAIGN SETUP',
      subtitle: 'Tracking Pixels & CRM Automation',
      desc: 'Building ad structures, tracking pixels, conversion funnels, and CRM routing automation.',
      accent: 'from-pink-500 to-rose-600',
      badgeBg: 'bg-pink-50 text-[#EC4899] border-pink-200',
      diagram: (
        <svg viewBox="0 0 200 140" className="w-full h-32 object-contain" fill="none">
          {/* Tech Gears & Interlocking Nodes */}
          <g transform="translate(75, 60)">
            <circle cx="0" cy="0" r="28" className="fill-pink-100 stroke-pink-400" strokeWidth="2" />
            <circle cx="0" cy="0" r="12" className="fill-[#EC4899]" />
            <rect x="-4" y="-34" width="8" height="68" rx="2" className="fill-pink-400" />
            <rect x="-34" y="-4" width="68" height="8" rx="2" className="fill-pink-400" />
          </g>
          <g transform="translate(130, 85)">
            <circle cx="0" cy="0" r="20" className="fill-purple-100 stroke-purple-400" strokeWidth="2" />
            <circle cx="0" cy="0" r="8" className="fill-[#7C3AED]" />
            <rect x="-3" y="-24" width="6" height="48" rx="2" className="fill-purple-400" />
            <rect x="-24" y="-3" width="48" height="6" rx="2" className="fill-purple-400" />
          </g>
          {/* Tracking Pixel Tag */}
          <rect x="35" y="30" width="45" height="24" rx="6" className="fill-white stroke-pink-300" strokeWidth="2" />
          <text x="57" y="45" textAnchor="middle" fontSize="9" fontWeight="extrabold" fill="#EC4899">PIXEL</text>
        </svg>
      ),
    },
    {
      num: '04',
      title: '4. CONTENT CREATION',
      subtitle: 'High-Converting Ads & Copy',
      desc: 'Designing high-converting ad copy, landing pages, email templates, and brand graphics.',
      accent: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-50 text-[#D97706] border-amber-200',
      diagram: (
        <svg viewBox="0 0 200 140" className="w-full h-32 object-contain" fill="none">
          {/* Creative Canvas Artboard */}
          <rect x="40" y="25" width="120" height="90" rx="8" className="fill-white stroke-amber-300" strokeWidth="2" />
          <rect x="50" y="35" width="45" height="35" rx="4" className="fill-amber-100" />
          <circle cx="72" cy="52" r="10" className="fill-amber-400" />
          {/* Ad Copy Lines */}
          <rect x="105" y="38" width="45" height="6" rx="3" className="fill-amber-500" />
          <rect x="105" y="50" width="35" height="4" rx="2" className="fill-slate-300" />
          <rect x="105" y="58" width="40" height="4" rx="2" className="fill-slate-300" />
          {/* CTA Pill Button Component */}
          <rect x="50" y="82" width="100" height="22" rx="11" className="fill-[#F59E0B]" />
          <text x="100" y="96" textAnchor="middle" fontSize="9" fontWeight="black" fill="#FFFFFF">CONVERTING CTA</text>
        </svg>
      ),
    },
    {
      num: '05',
      title: '5. CAMPAIGN LAUNCH',
      subtitle: 'Multi-Channel Live Deployment',
      desc: 'Deploying campaigns across search, social networks, display, and email channels live.',
      accent: 'from-rose-500 to-pink-600',
      badgeBg: 'bg-rose-50 text-[#F43F5E] border-rose-200',
      diagram: (
        <svg viewBox="0 0 200 140" className="w-full h-32 object-contain" fill="none">
          {/* Rocket Launch & Propulsion */}
          <g transform="translate(100, 70) rotate(-45)">
            <path d="M0 -35 C15 -10 15 20 0 35 C-15 20 -15 -10 0 -35 Z" className="fill-[#F43F5E]" />
            <circle cx="0" cy="-5" r="7" className="fill-white" />
            <polygon points="-12,15 -25,30 -8,25" className="fill-rose-400" />
            <polygon points="12,15 25,30 8,25" className="fill-rose-400" />
            {/* Thrust Flames */}
            <polygon points="-6,35 0,55 6,35" className="fill-amber-400" />
            <polygon points="-3,35 0,48 3,35" className="fill-amber-200" />
          </g>
          {/* Network Nodes */}
          <circle cx="45" cy="40" r="6" className="fill-rose-300" />
          <circle cx="160" cy="45" r="6" className="fill-purple-400" />
          <circle cx="155" cy="105" r="5" className="fill-blue-400" />
        </svg>
      ),
    },
    {
      num: '06',
      title: '6. A/B OPTIMIZATION',
      subtitle: 'Split-Testing & CAC Reduction',
      desc: 'A/B testing ad creatives, bidding strategies, and funnel copy to drive down cost-per-lead.',
      accent: 'from-emerald-500 to-teal-600',
      badgeBg: 'bg-emerald-50 text-[#059669] border-emerald-200',
      diagram: (
        <svg viewBox="0 0 200 140" className="w-full h-32 object-contain" fill="none">
          {/* Split Test A/B Diagram */}
          <circle cx="60" cy="55" r="22" className="fill-emerald-100 stroke-emerald-400" strokeWidth="2" />
          <text x="60" y="61" textAnchor="middle" fontSize="14" fontWeight="black" fill="#059669">A</text>
          <circle cx="140" cy="55" r="22" className="fill-teal-100 stroke-teal-400" strokeWidth="2" />
          <text x="140" y="61" textAnchor="middle" fontSize="14" fontWeight="black" fill="#0D9488">B</text>
          {/* Winner Indicator Badge */}
          <rect x="115" y="90" width="50" height="20" rx="10" className="fill-emerald-500" />
          <text x="140" y="103" textAnchor="middle" fontSize="8" fontWeight="black" fill="#FFFFFF">+48% ROAS</text>
          <path d="M82 55 L118 55" stroke="#059669" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      ),
    },
    {
      num: '07',
      title: '7. REPORTING & ANALYTICS',
      subtitle: 'Real-Time ROI Attribution',
      desc: 'Transparent weekly lead attribution reporting and real-time dashboard analytics access.',
      accent: 'from-cyan-500 to-blue-600',
      badgeBg: 'bg-cyan-50 text-[#0284C7] border-cyan-200',
      diagram: (
        <svg viewBox="0 0 200 140" className="w-full h-32 object-contain" fill="none">
          {/* 3D Performance Chart Bar & Upward Growth Line */}
          <rect x="45" y="70" width="20" height="45" rx="4" className="fill-cyan-200" />
          <rect x="75" y="50" width="20" height="65" rx="4" className="fill-cyan-400" />
          <rect x="105" y="30" width="20" height="85" rx="4" className="fill-[#0284C7]" />
          <rect x="135" y="15" width="20" height="100" rx="4" className="fill-[#2563EB]" />
          {/* Upward Line Vector */}
          <path d="M40 75 Q 90 40, 155 10" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="155" cy="10" r="4" className="fill-amber-500" />
        </svg>
      ),
    },
    {
      num: '08',
      title: '8. GROWTH SCALING',
      subtitle: 'Global Market Expansion',
      desc: 'Re-allocating budget into winning channels and expanding market reach globally.',
      accent: 'from-blue-600 to-purple-600',
      badgeBg: 'bg-blue-50 text-[#2563EB] border-blue-200',
      diagram: (
        <svg viewBox="0 0 200 140" className="w-full h-32 object-contain" fill="none">
          {/* Global Network Globe & Multiplier Star */}
          <circle cx="100" cy="65" r="42" className="fill-blue-50/80 stroke-blue-300" strokeWidth="2" />
          <ellipse cx="100" cy="65" rx="42" ry="18" className="stroke-blue-400" strokeWidth="1.5" fill="none" />
          <ellipse cx="100" cy="65" rx="18" ry="42" className="stroke-blue-400" strokeWidth="1.5" fill="none" />
          {/* 10x Scale Gold Badge */}
          <circle cx="145" cy="35" r="20" className="fill-[#FBBF24] stroke-amber-300" strokeWidth="2" />
          <text x="145" y="40" textAnchor="middle" fontSize="10" fontWeight="black" fill="#111827">10x</text>
        </svg>
      ),
    },
  ];

  return (
    <section id="our-process-section" className="py-20 sm:py-28 pt-24 sm:pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Top Eyebrow Badge */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#2563EB] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-blue-50/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB] animate-pulse" />
              <span>HOW WE WORK</span>
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            A Proven Process for{' '}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#38BDF8] bg-clip-text text-transparent">
              Predictable Growth
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            From initial discovery to continuous scaling, our methodology ensures maximum ROI at every stage of your customer acquisition journey.
          </p>

        </div>

        {/* Horizontal Connected Visual Diagram Layout */}
        <div className="space-y-16">
          
          {/* Row 1: Steps 01 to 04 */}
          <div className="relative">
            
            {/* Connecting Flow Line behind cards (Desktop) */}
            <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 -z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processStages.slice(0, 4).map((stage, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#2563EB] hover:bg-white shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Top Step Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border ${stage.badgeBg} font-['Plus_Jakarta_Sans',sans-serif]`}>
                      {stage.subtitle}
                    </span>
                    <span className="text-xs font-black text-slate-400 font-['Plus_Jakarta_Sans',sans-serif]">
                      {stage.num}
                    </span>
                  </div>

                  {/* Meaningful Visual Diagram Graphic */}
                  <div className="py-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {stage.diagram}
                  </div>

                  {/* Content Info */}
                  <div className="pt-3 border-t border-slate-100">
                    <h3 className="text-sm font-extrabold text-[#111827] mb-1.5 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#2563EB] transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed font-normal">
                      {stage.desc}
                    </p>
                  </div>

                  {/* Directional Connector Arrow to Next Step (Desktop) */}
                  {idx < 3 && (
                    <div className="hidden lg:flex absolute -right-5 top-[100px] z-20 w-10 h-10 rounded-full bg-white border border-[#E5E7EB] text-[#2563EB] items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4 text-[#2563EB]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Row 2: Steps 05 to 08 */}
          <div className="relative">
            
            {/* Connecting Flow Line behind cards (Desktop) */}
            <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-rose-400 via-emerald-400 to-blue-600 -z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processStages.slice(4, 8).map((stage, idx) => (
                <div
                  key={idx + 4}
                  className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#2563EB] hover:bg-white shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Top Step Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border ${stage.badgeBg} font-['Plus_Jakarta_Sans',sans-serif]`}>
                      {stage.subtitle}
                    </span>
                    <span className="text-xs font-black text-slate-400 font-['Plus_Jakarta_Sans',sans-serif]">
                      {stage.num}
                    </span>
                  </div>

                  {/* Meaningful Visual Diagram Graphic */}
                  <div className="py-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {stage.diagram}
                  </div>

                  {/* Content Info */}
                  <div className="pt-3 border-t border-slate-100">
                    <h3 className="text-sm font-extrabold text-[#111827] mb-1.5 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#2563EB] transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed font-normal">
                      {stage.desc}
                    </p>
                  </div>

                  {/* Directional Connector Arrow to Next Step (Desktop) */}
                  {idx < 3 && (
                    <div className="hidden lg:flex absolute -right-5 top-[100px] z-20 w-10 h-10 rounded-full bg-white border border-[#E5E7EB] text-[#2563EB] items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4 text-[#2563EB]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
