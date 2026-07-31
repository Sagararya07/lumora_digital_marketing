import React from 'react';
import { 
  Sparkles, 
  ArrowRight,
  MousePointerClick
} from 'lucide-react';

interface ProcessProps {
  steps?: any[];
  openConsultationModal?: () => void;
}

export const ProcessSection: React.FC<ProcessProps> = () => {

  const processStages = [
    {
      num: '01',
      title: '1. Requirement Analysis',
      subtitle: 'Discovery & Personas',
      desc: 'Deep-dive discovery to align on business objectives, target buyer personas, and growth KPIs.',
      sketchDiagram: (
        <svg viewBox="0 0 200 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-drawn sketch style Magnifying Glass & Personas */}
          <circle cx="90" cy="60" r="38" stroke="#1E293B" strokeWidth="2.5" strokeDasharray="60 2" fill="#F8FAFC" />
          <path d="M118 88 L155 125" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
          {/* Sketched Persona Head & Body */}
          <circle cx="90" cy="50" r="10" stroke="#2563EB" strokeWidth="2.5" fill="none" />
          <path d="M72 74 C72 62 108 62 108 74" stroke="#2563EB" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Hand-Drawn Doodle Arrow & KPI Tag */}
          <path d="M135 40 Q 155 30, 160 50" stroke="#7C3AED" strokeWidth="2" fill="none" strokeDasharray="3 3" />
          <rect x="135" y="48" width="38" height="18" rx="4" stroke="#7C3AED" strokeWidth="2" fill="#F3E8FF" />
          <text x="154" y="60" textAnchor="middle" fontSize="9" fontWeight="900" fill="#7C3AED" fontFamily="sans-serif">KPIs</text>
        </svg>
      ),
    },
    {
      num: '02',
      title: '2. Strategy Planning',
      subtitle: 'Funnel & Budget Roadmap',
      desc: 'Crafting a custom multi-channel acquisition roadmap and ROI budget allocation strategy.',
      sketchDiagram: (
        <svg viewBox="0 0 200 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-Drawn Sketch Funnel */}
          <polygon points="35,22 165,22 125,65 75,65" stroke="#1E293B" strokeWidth="2.5" fill="#F1F5F9" strokeLinejoin="round" />
          <polygon points="75,70 125,70 108,102 92,102" stroke="#7C3AED" strokeWidth="2.5" fill="#F3E8FF" strokeLinejoin="round" />
          {/* Sketched Flow Arrow Down */}
          <path d="M100 28 L100 58 M95 50 L100 58 L105 50" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Dollar Coins Doodle */}
          <circle cx="160" cy="95" r="14" stroke="#F59E0B" strokeWidth="2.5" fill="#FEF3C7" />
          <text x="160" y="99" textAnchor="middle" fontSize="12" fontWeight="900" fill="#D97706">$</text>
        </svg>
      ),
    },
    {
      num: '03',
      title: '3. Campaign Setup',
      subtitle: 'Pixels & CRM Automation',
      desc: 'Building ad structures, tracking pixels, conversion funnels, and CRM routing automation.',
      sketchDiagram: (
        <svg viewBox="0 0 200 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-Drawn Gear Sketch */}
          <g transform="translate(80, 65)">
            <circle cx="0" cy="0" r="26" stroke="#1E293B" strokeWidth="2.5" fill="#F8FAFC" />
            <circle cx="0" cy="0" r="10" stroke="#EC4899" strokeWidth="2.5" fill="none" />
            <path d="M-4 -30 L4 -30 L4 30 L-4 30 Z M-30 -4 L30 -4 L30 4 L-30 4 Z" fill="#1E293B" opacity="0.15" />
          </g>
          {/* Hand-Drawn Pixel Tag */}
          <rect x="120" y="30" width="50" height="26" rx="6" stroke="#EC4899" strokeWidth="2.5" fill="#FCE7F3" />
          <text x="145" y="47" textAnchor="middle" fontSize="10" fontWeight="900" fill="#EC4899">PIXEL</text>
          {/* Wire Doodles */}
          <path d="M106 65 C120 65, 120 43, 120 43" stroke="#EC4899" strokeWidth="2" strokeDasharray="3 3" fill="none" />
        </svg>
      ),
    },
    {
      num: '04',
      title: '4. Content Creation',
      subtitle: 'High-Converting Ads & Copy',
      desc: 'Designing high-converting ad copy, landing pages, email templates, and brand graphics.',
      sketchDiagram: (
        <svg viewBox="0 0 200 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-Drawn Ad Canvas Artboard Sketch */}
          <rect x="35" y="22" width="130" height="95" rx="8" stroke="#1E293B" strokeWidth="2.5" fill="#FFFFFF" />
          <rect x="45" y="32" width="50" height="40" rx="4" stroke="#F59E0B" strokeWidth="2" fill="#FEF3C7" />
          {/* Hand-Drawn Pencil Doodle */}
          <path d="M150 25 L165 10 L175 20 L160 35 Z" stroke="#D97706" strokeWidth="2" fill="#FFFBEB" />
          {/* Sketched Text Lines */}
          <path d="M105 38 L150 38 M105 48 L140 48 M105 58 L145 58" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          {/* CTA Button Sketch */}
          <rect x="45" y="85" width="110" height="22" rx="11" fill="#F59E0B" />
          <text x="100" y="99" textAnchor="middle" fontSize="9" fontWeight="900" fill="#FFFFFF">CLICK HERE</text>
        </svg>
      ),
    },
    {
      num: '05',
      title: '5. Campaign Launch',
      subtitle: 'Live Multi-Channel Blast',
      desc: 'Deploying campaigns across search, social networks, display, and email channels live.',
      sketchDiagram: (
        <svg viewBox="0 0 200 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-Drawn Rocket Sketch */}
          <g transform="translate(100, 68) rotate(-45)">
            <path d="M0 -38 C16 -12 16 22 0 38 C-16 22 -16 -12 0 -38 Z" stroke="#1E293B" strokeWidth="2.5" fill="#FFE4E6" />
            <circle cx="0" cy="-6" r="8" stroke="#F43F5E" strokeWidth="2" fill="#FFFFFF" />
            {/* Thrust Smoke Doodles */}
            <path d="M-6 38 C-12 52 0 60 0 65 C0 60 12 52 6 38" stroke="#F43F5E" strokeWidth="2" fill="#FEF2F2" />
          </g>
          {/* Hand-Drawn Stars */}
          <path d="M45 35 L48 42 L55 43 L50 48 L51 55 L45 51 L39 55 L40 48 L35 43 L42 42 Z" stroke="#F59E0B" strokeWidth="1.5" fill="#FEF3C7" />
          <path d="M155 40 L157 45 L162 46 L158 50 L159 55 L155 52 L151 55 L152 50 L148 46 L153 45 Z" stroke="#7C3AED" strokeWidth="1.5" fill="#F3E8FF" />
        </svg>
      ),
    },
    {
      num: '06',
      title: '6. A/B Optimization',
      subtitle: 'Split Testing & Low CAC',
      desc: 'A/B testing ad creatives, bidding strategies, and funnel copy to drive down cost-per-lead.',
      sketchDiagram: (
        <svg viewBox="0 0 200 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-Drawn A vs B Sketch Boxes */}
          <rect x="35" y="35" width="55" height="55" rx="10" stroke="#059669" strokeWidth="2.5" fill="#ECFDF5" />
          <text x="62.5" y="70" textAnchor="middle" fontSize="22" fontWeight="900" fill="#059669">A</text>
          
          <rect x="110" y="35" width="55" height="55" rx="10" stroke="#0D9488" strokeWidth="2.5" fill="#CCFBF1" />
          <text x="137.5" y="70" textAnchor="middle" fontSize="22" fontWeight="900" fill="#0D9488">B</text>
          
          {/* Hand-Drawn Winner Crown / Arrow */}
          <path d="M110 30 L137.5 15 L165 30" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="137.5" cy="15" r="4" fill="#059669" />
        </svg>
      ),
    },
    {
      num: '07',
      title: '7. Reporting & Analytics',
      subtitle: 'Real-Time ROI Dashboard',
      desc: 'Transparent weekly lead attribution reporting and real-time dashboard analytics access.',
      sketchDiagram: (
        <svg viewBox="0 0 200 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-Drawn Bar Chart & Sketched Growth Line */}
          <rect x="40" y="75" width="22" height="40" rx="4" stroke="#1E293B" strokeWidth="2" fill="#E0F2FE" />
          <rect x="75" y="55" width="22" height="60" rx="4" stroke="#1E293B" strokeWidth="2" fill="#BAE6FD" />
          <rect x="110" y="35" width="22" height="80" rx="4" stroke="#1E293B" strokeWidth="2" fill="#38BDF8" />
          <rect x="145" y="18" width="22" height="97" rx="4" stroke="#1E293B" strokeWidth="2" fill="#2563EB" />
          {/* Sketched Rising Arrow Line */}
          <path d="M35 80 Q 95 40, 160 12" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polygon points="165,10 152,12 160,20" fill="#F59E0B" />
        </svg>
      ),
    },
    {
      num: '08',
      title: '8. Growth Scaling',
      subtitle: 'Global Market Expansion',
      desc: 'Re-allocating budget into winning channels and expanding market reach globally.',
      sketchDiagram: (
        <svg viewBox="0 0 200 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-Drawn Network Globe Sketch */}
          <circle cx="100" cy="65" r="40" stroke="#1E293B" strokeWidth="2.5" fill="#F0F9FF" />
          <ellipse cx="100" cy="65" rx="40" ry="16" stroke="#2563EB" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
          <ellipse cx="100" cy="65" rx="16" ry="40" stroke="#2563EB" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
          {/* Gold Star Badge Doodle */}
          <circle cx="145" cy="35" r="18" stroke="#D97706" strokeWidth="2" fill="#FEF3C7" />
          <text x="145" y="39" textAnchor="middle" fontSize="9" fontWeight="900" fill="#D97706">10x</text>
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
            Hover or touch any stage below to reveal the strategic workflow details.
          </p>

        </div>

        {/* Hand-Drawn Sketch Visual Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processStages.map((stage, idx) => (
            <div
              key={idx}
              className="group relative p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border-2 border-dashed border-[#CBD5E1] hover:border-solid hover:border-[#2563EB] hover:bg-white shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden min-h-[360px]"
            >
              {/* Header: Stage Number & Subtitle */}
              <div className="flex items-center justify-between mb-2 z-10">
                <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200 font-['Plus_Jakarta_Sans',sans-serif]">
                  {stage.subtitle}
                </span>
                <span className="text-xs font-black text-slate-400 font-['Plus_Jakarta_Sans',sans-serif]">
                  Step {stage.num}
                </span>
              </div>

              {/* Hand-Drawn Sketch Visual Diagram Graphic */}
              <div className="my-auto py-2 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 z-10">
                {stage.sketchDiagram}
              </div>

              {/* Stage Title */}
              <div className="pt-3 border-t border-slate-200 z-10">
                <h3 className="text-base font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#2563EB] transition-colors flex items-center justify-between">
                  <span>{stage.title}</span>
                  <MousePointerClick className="w-4 h-4 text-[#2563EB] opacity-60 group-hover:opacity-0 transition-opacity shrink-0 ml-1" />
                </h3>

                {/* Default Hint Badge (Visible before hover) */}
                <div className="mt-2 group-hover:hidden transition-all duration-300 flex items-center gap-1.5 text-[11px] font-extrabold text-[#2563EB]">
                  <span>Hover / Touch for details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>

                {/* Paragraph Description — Hidden by Default, REVEALED ON CURSOR TOUCH/HOVER */}
                <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out mt-0 group-hover:mt-2">
                  <p className="text-xs text-[#475569] leading-relaxed font-normal bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                    {stage.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
