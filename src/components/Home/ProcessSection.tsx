import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ProcessProps {
  steps?: any[];
  openConsultationModal?: () => void;
}

export const ProcessSection: React.FC<ProcessProps> = () => {

  const processFlow = [
    {
      num: '1',
      title: 'REQUIREMENT ANALYSIS',
      desc: 'Deep-dive discovery to align on business objectives, target buyer personas, and growth KPIs.',
      // Hand-sketched Analyst looking through magnifying glass at thought bubbles
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-drawn Analyst Head & Body Sketch */}
          <path d="M50 75 C45 60 55 45 70 45 C85 45 95 60 90 75" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="70" cy="35" r="14" stroke="#0F172A" strokeWidth="2.5" />
          <path d="M64 32 C66 30 74 30 76 32" stroke="#0F172A" strokeWidth="2" /> {/* Eyes */}
          <path d="M65 42 C70 46 75 46 80 42" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" /> {/* Smile */}
          {/* Hand-sketched Magnifying Glass */}
          <circle cx="105" cy="75" r="16" stroke="#0F172A" strokeWidth="3" />
          <path d="M117 87 L138 108" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
          <path d="M98 70 L112 80" stroke="#0F172A" strokeWidth="1.5" /> {/* Lens reflection */}
          {/* Thought Cloud Bubbles */}
          <circle cx="35" cy="30" r="10" stroke="#0F172A" strokeWidth="2" strokeDasharray="3 2" />
          <text x="35" y="34" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0F172A">1</text>
          <circle cx="55" cy="18" r="12" stroke="#0F172A" strokeWidth="2" strokeDasharray="3 2" />
          <text x="55" y="22" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0F172A">3</text>
          <circle cx="85" cy="14" r="11" stroke="#0F172A" strokeWidth="2" strokeDasharray="3 2" />
          <text x="85" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0F172A">6</text>
          {/* Ground Sketch Line */}
          <path d="M10 120 L150 120" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 4" />
        </svg>
      ),
    },
    {
      num: '2',
      title: 'STRATEGY PLANNING',
      desc: 'Crafting a custom multi-channel acquisition roadmap and ROI budget allocation strategy.',
      // Hand-sketched Strategist at laptop with funnel blueprint
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-sketched Strategist Character */}
          <circle cx="55" cy="40" r="14" stroke="#0F172A" strokeWidth="2.5" />
          <path d="M49 37 C51 35 59 35 61 37" stroke="#0F172A" strokeWidth="2" />
          <path d="M50 47 C55 51 60 51 65 47" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          <path d="M35 85 C30 70 40 55 55 55 C70 55 80 70 75 85" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
          {/* Hand-drawn Laptop Sketch */}
          <polygon points="70,85 135,85 145,110 60,110" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="75" y="55" width="55" height="30" rx="3" stroke="#0F172A" strokeWidth="2.5" fill="#FFFFFF" />
          {/* Funnel Sketch on Screen */}
          <polygon points="85,62 120,62 108,74 97,74" stroke="#0F172A" strokeWidth="1.5" />
          <polygon points="97,75 108,75 104,82 101,82" stroke="#0F172A" strokeWidth="1.5" />
          {/* Motion Lines */}
          <path d="M25 65 Q20 75 25 85" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
          {/* Ground Line */}
          <path d="M10 120 L150 120" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 4" />
        </svg>
      ),
    },
    {
      num: '3',
      title: 'CAMPAIGN SETUP',
      desc: 'Building ad structures, tracking pixels, conversion funnels, and CRM routing automation.',
      // Hand-sketched Tech Engineer with headset & gears
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-sketched Character with Headset */}
          <circle cx="80" cy="40" r="15" stroke="#0F172A" strokeWidth="2.5" />
          <path d="M65 40 C65 25 95 25 95 40" stroke="#0F172A" strokeWidth="3" fill="none" /> {/* Headset Band */}
          <circle cx="65" cy="40" r="4" fill="#0F172A" /> {/* Earpiece */}
          <path d="M65 40 Q 60 55 75 52" stroke="#0F172A" strokeWidth="2" fill="none" /> {/* Mic */}
          <path d="M60 85 C55 70 65 55 80 55 C95 55 105 70 100 85" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
          {/* Hand-drawn Gear Doodles */}
          <circle cx="35" cy="45" r="12" stroke="#0F172A" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="125" cy="50" r="14" stroke="#0F172A" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M125 32 L125 68 M107 50 L143 50" stroke="#0F172A" strokeWidth="1.5" />
          {/* Ground Line */}
          <path d="M10 120 L150 120" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 4" />
        </svg>
      ),
    },
    {
      num: '4',
      title: 'CONTENT CREATION',
      desc: 'Designing high-converting ad copy, landing pages, email templates, and brand graphics.',
      // Hand-sketched Delivery Truck with "FREE / GROW"
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-drawn Delivery Truck Sketch */}
          <rect x="25" y="45" width="75" height="50" rx="4" stroke="#0F172A" strokeWidth="2.5" fill="#FFFFFF" />
          <path d="M100 60 L125 60 L135 75 L135 95 L100 95 Z" stroke="#0F172A" strokeWidth="2.5" fill="#FFFFFF" />
          <rect x="106" y="65" width="16" height="12" stroke="#0F172A" strokeWidth="2" />
          {/* Wheels */}
          <circle cx="45" cy="98" r="11" stroke="#0F172A" strokeWidth="2.5" fill="#FFFFFF" />
          <circle cx="45" cy="98" r="4" fill="#0F172A" />
          <circle cx="115" cy="98" r="11" stroke="#0F172A" strokeWidth="2.5" fill="#FFFFFF" />
          <circle cx="115" cy="98" r="4" fill="#0F172A" />
          {/* Hand-sketched "FREE" Text on Truck */}
          <text x="62" y="76" textAnchor="middle" fontSize="16" fontWeight="900" fill="#0F172A" fontFamily="sans-serif">FREE</text>
          <path d="M35 81 C60 85 65 85 88 81" stroke="#0F172A" strokeWidth="2" />
          {/* Speed Motion Lines */}
          <path d="M5 55 L18 55 M2 68 L15 68 M7 80 L20 80" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          {/* Ground Line */}
          <path d="M10 120 L150 120" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 4" />
        </svg>
      ),
    },
    {
      num: '5',
      title: 'CAMPAIGN LAUNCH',
      desc: 'Deploying campaigns across search, social networks, display, and email channels live.',
      // Hand-sketched Character unpacking a gift growth box
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-sketched Character */}
          <circle cx="110" cy="40" r="14" stroke="#0F172A" strokeWidth="2.5" />
          <path d="M104 37 C106 35 114 35 116 37" stroke="#0F172A" strokeWidth="2" />
          <path d="M105 47 C110 51 115 51 120 47" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          {/* Party Hat */}
          <polygon points="105,26 115,10 125,26" stroke="#0F172A" strokeWidth="2" fill="#FFFFFF" />
          {/* Box Sketch */}
          <rect x="40" y="70" width="55" height="45" rx="4" stroke="#0F172A" strokeWidth="2.5" fill="#FFFFFF" />
          <path d="M35 70 L98 70 M67.5 70 L67.5 115" stroke="#0F172A" strokeWidth="2.5" />
          {/* Arms holding box */}
          <path d="M95 55 Q 85 75 70 70" stroke="#0F172A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M125 55 Q 120 85 95 90" stroke="#0F172A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Ground Line */}
          <path d="M10 120 L150 120" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 4" />
        </svg>
      ),
    },
    {
      num: '6',
      title: 'A/B OPTIMIZATION',
      desc: 'A/B testing ad creatives, bidding strategies, and funnel copy to drive down cost-per-lead.',
      // Hand-sketched Split Test Balancer & Flasks
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-36 object-contain" fill="none">
          {/* Hand-drawn Scale Balancer */}
          <path d="M80 30 L80 100 M40 45 L120 45" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="80,25 75,35 85,35" stroke="#0F172A" strokeWidth="2" fill="#0F172A" />
          {/* Option A Flask */}
          <path d="M35 45 L35 70 L25 90 L55 90 L45 70 L45 45 Z" stroke="#0F172A" strokeWidth="2" fill="#FFFFFF" />
          <text x="40" y="82" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0F172A">A</text>
          {/* Option B Flask */}
          <path d="M115 45 L115 70 L105 90 L135 90 L125 70 L125 45 Z" stroke="#0F172A" strokeWidth="2" fill="#FFFFFF" />
          <text x="120" y="82" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0F172A">B</text>
          {/* Ground Line */}
          <path d="M10 120 L150 120" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 4" />
        </svg>
      ),
    },
    {
      num: '7',
      title: 'REPORTING & ANALYTICS',
      desc: 'Transparent weekly lead attribution reporting and real-time dashboard analytics access.',
      // Hand-sketched Chart & Rising Growth Line
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-36 object-contain" fill="none">
          {/* Sketched Axis */}
          <path d="M30 30 L30 110 L140 110" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
          {/* Sketched Bar Columns */}
          <rect x="42" y="80" width="16" height="30" stroke="#0F172A" strokeWidth="2" />
          <rect x="68" y="65" width="16" height="45" stroke="#0F172A" strokeWidth="2" />
          <rect x="94" y="45" width="16" height="65" stroke="#0F172A" strokeWidth="2" />
          <rect x="120" y="25" width="16" height="85" stroke="#0F172A" strokeWidth="2" />
          {/* Upward Line Doodle */}
          <path d="M30 90 Q 80 50, 138 20" stroke="#0F172A" strokeWidth="2.5" strokeDasharray="4 2" fill="none" />
          {/* Ground Line */}
          <path d="M10 120 L150 120" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 4" />
        </svg>
      ),
    },
    {
      num: '8',
      title: 'GROWTH SCALING',
      desc: 'Re-allocating budget into winning channels and expanding market reach globally.',
      // Hand-sketched 10x Scale Trophy & Global Star
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-36 object-contain" fill="none">
          {/* Sketched Trophy Cup */}
          <path d="M55 35 L105 35 L95 75 L65 75 Z" stroke="#0F172A" strokeWidth="2.5" fill="#FFFFFF" />
          <path d="M80 75 L80 100 M65 100 L95 100" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M45 42 Q 35 55 55 60" stroke="#0F172A" strokeWidth="2" fill="none" />
          <path d="M115 42 Q 125 55 105 60" stroke="#0F172A" strokeWidth="2" fill="none" />
          {/* Hand-drawn 10x Banner */}
          <text x="80" y="58" textAnchor="middle" fontSize="14" fontWeight="900" fill="#0F172A" fontFamily="sans-serif">10X</text>
          {/* Ground Line */}
          <path d="M10 120 L150 120" stroke="#0F172A" strokeWidth="2" strokeDasharray="5 4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="our-process-section" className="py-20 sm:py-28 pt-24 sm:pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Eyebrow Badge */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#2563EB] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-blue-50/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB] animate-pulse" />
              <span>HOW IT WORKS</span>
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
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

        {/* Hand-Drawn Open Horizontal Process Flow (NO BOX CARDS!) */}
        <div className="space-y-16">
          
          {/* Row 1: Steps 1 to 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            {processFlow.slice(0, 4).map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                
                {/* Hand-Drawn Sketch Illustration */}
                <div className="w-full mb-4 transform group-hover:scale-105 transition-transform duration-300">
                  {item.illustration}
                </div>

                {/* Hand-sketched Step Title */}
                <h3 className="text-sm font-black text-[#111827] tracking-wide font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#2563EB] transition-colors mb-2 uppercase">
                  {item.num}. {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#6B7280] leading-relaxed font-normal max-w-xs">
                  {item.desc}
                </p>

                {/* Hand-drawn Curved Arrow Connector to next step (Desktop) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-16 right-[-24px] translate-x-1/2 z-10 pointer-events-none">
                    <svg width="45" height="25" viewBox="0 0 45 25" fill="none">
                      <path d="M5 12 Q 22 2, 38 12 M32 6 L40 12 L33 18" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Row 2: Steps 5 to 8 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative pt-8 border-t border-dashed border-slate-200">
            {processFlow.slice(4, 8).map((item, idx) => (
              <div key={idx + 4} className="flex flex-col items-center text-center group cursor-pointer">
                
                {/* Hand-Drawn Sketch Illustration */}
                <div className="w-full mb-4 transform group-hover:scale-105 transition-transform duration-300">
                  {item.illustration}
                </div>

                {/* Hand-sketched Step Title */}
                <h3 className="text-sm font-black text-[#111827] tracking-wide font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#2563EB] transition-colors mb-2 uppercase">
                  {item.num}. {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#6B7280] leading-relaxed font-normal max-w-xs">
                  {item.desc}
                </p>

                {/* Hand-drawn Curved Arrow Connector to next step (Desktop) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-16 right-[-24px] translate-x-1/2 z-10 pointer-events-none">
                    <svg width="45" height="25" viewBox="0 0 45 25" fill="none">
                      <path d="M5 12 Q 22 2, 38 12 M32 6 L40 12 L33 18" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
