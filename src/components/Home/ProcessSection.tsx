import React from 'react';
import { Sparkles } from 'lucide-react';

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
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-40 object-contain drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" fill="none">
          <defs>
            <linearGradient id="hypeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>
          <path d="M50 75 C45 60 55 45 70 45 C85 45 95 60 90 75" stroke="url(#hypeGradient1)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="70" cy="35" r="14" stroke="url(#hypeGradient1)" strokeWidth="3" />
          <path d="M64 32 C66 30 74 30 76 32" stroke="url(#hypeGradient1)" strokeWidth="2.5" /> 
          <path d="M65 42 C70 46 75 46 80 42" stroke="url(#hypeGradient1)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="105" cy="75" r="16" stroke="url(#hypeGradient1)" strokeWidth="3.5" />
          <path d="M117 87 L138 108" stroke="url(#hypeGradient1)" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M98 70 L112 80" stroke="url(#hypeGradient1)" strokeWidth="2" />
          <circle cx="35" cy="30" r="10" stroke="url(#hypeGradient1)" strokeWidth="2.5" strokeDasharray="3 2" />
          <text x="35" y="34" textAnchor="middle" fontSize="11" fontWeight="900" fill="url(#hypeGradient1)">1</text>
          <circle cx="55" cy="18" r="12" stroke="url(#hypeGradient1)" strokeWidth="2.5" strokeDasharray="3 2" />
          <text x="55" y="22" textAnchor="middle" fontSize="11" fontWeight="900" fill="url(#hypeGradient1)">3</text>
          <circle cx="85" cy="14" r="11" stroke="url(#hypeGradient1)" strokeWidth="2.5" strokeDasharray="3 2" />
          <text x="85" y="18" textAnchor="middle" fontSize="11" fontWeight="900" fill="url(#hypeGradient1)">6</text>
        </svg>
      ),
    },
    {
      num: '2',
      title: 'STRATEGY PLANNING',
      desc: 'Crafting a custom multi-channel acquisition roadmap and ROI budget allocation strategy.',
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-40 object-contain drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]" fill="none">
          <defs>
            <linearGradient id="hypeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <circle cx="55" cy="40" r="14" stroke="url(#hypeGradient2)" strokeWidth="3" />
          <path d="M49 37 C51 35 59 35 61 37" stroke="url(#hypeGradient2)" strokeWidth="2.5" />
          <path d="M50 47 C55 51 60 51 65 47" stroke="url(#hypeGradient2)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M35 85 C30 70 40 55 55 55 C70 55 80 70 75 85" stroke="url(#hypeGradient2)" strokeWidth="3" strokeLinecap="round" />
          <polygon points="70,85 135,85 145,110 60,110" stroke="url(#hypeGradient2)" strokeWidth="3" strokeLinejoin="round" />
          <rect x="75" y="55" width="55" height="30" rx="3" stroke="url(#hypeGradient2)" strokeWidth="3" fill="none" />
          <polygon points="85,62 120,62 108,74 97,74" stroke="url(#hypeGradient2)" strokeWidth="2" />
          <polygon points="97,75 108,75 104,82 101,82" stroke="url(#hypeGradient2)" strokeWidth="2" />
          <path d="M25 65 Q20 75 25 85" stroke="url(#hypeGradient2)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: '3',
      title: 'CAMPAIGN SETUP',
      desc: 'Building ad structures, tracking pixels, conversion funnels, and CRM routing automation.',
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-40 object-contain drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" fill="none">
          <defs>
            <linearGradient id="hypeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="40" r="15" stroke="url(#hypeGradient3)" strokeWidth="3" />
          <path d="M65 40 C65 25 95 25 95 40" stroke="url(#hypeGradient3)" strokeWidth="3.5" fill="none" />
          <circle cx="65" cy="40" r="4" fill="url(#hypeGradient3)" />
          <path d="M65 40 Q 60 55 75 52" stroke="url(#hypeGradient3)" strokeWidth="2.5" fill="none" />
          <path d="M60 85 C55 70 65 55 80 55 C95 55 105 70 100 85" stroke="url(#hypeGradient3)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="35" cy="45" r="12" stroke="url(#hypeGradient3)" strokeWidth="2.5" strokeDasharray="4 2" />
          <circle cx="125" cy="50" r="14" stroke="url(#hypeGradient3)" strokeWidth="2.5" strokeDasharray="4 2" />
          <path d="M125 32 L125 68 M107 50 L143 50" stroke="url(#hypeGradient3)" strokeWidth="2" />
        </svg>
      ),
    },
    {
      num: '4',
      title: 'CONTENT CREATION',
      desc: 'Designing high-converting ad copy, landing pages, email templates, and brand graphics.',
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-40 object-contain drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" fill="none">
          <defs>
            <linearGradient id="hypeGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <rect x="25" y="45" width="75" height="50" rx="4" stroke="url(#hypeGradient4)" strokeWidth="3" fill="none" />
          <path d="M100 60 L125 60 L135 75 L135 95 L100 95 Z" stroke="url(#hypeGradient4)" strokeWidth="3" fill="none" />
          <rect x="106" y="65" width="16" height="12" stroke="url(#hypeGradient4)" strokeWidth="2.5" />
          <circle cx="45" cy="98" r="11" stroke="url(#hypeGradient4)" strokeWidth="3" fill="none" />
          <circle cx="45" cy="98" r="4" fill="url(#hypeGradient4)" />
          <circle cx="115" cy="98" r="11" stroke="url(#hypeGradient4)" strokeWidth="3" fill="none" />
          <circle cx="115" cy="98" r="4" fill="url(#hypeGradient4)" />
          <text x="62" y="76" textAnchor="middle" fontSize="16" fontWeight="900" fill="url(#hypeGradient4)" fontFamily="sans-serif">FREE</text>
          <path d="M35 81 C60 85 65 85 88 81" stroke="url(#hypeGradient4)" strokeWidth="2.5" />
          <path d="M5 55 L18 55 M2 68 L15 68 M7 80 L20 80" stroke="url(#hypeGradient4)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: '5',
      title: 'CAMPAIGN LAUNCH',
      desc: 'Deploying campaigns across search, social networks, display, and email channels live.',
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-40 object-contain drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" fill="none">
          <defs>
            <linearGradient id="hypeGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
          <circle cx="110" cy="40" r="14" stroke="url(#hypeGradient5)" strokeWidth="3" />
          <path d="M104 37 C106 35 114 35 116 37" stroke="url(#hypeGradient5)" strokeWidth="2.5" />
          <path d="M105 47 C110 51 115 51 120 47" stroke="url(#hypeGradient5)" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="105,26 115,10 125,26" stroke="url(#hypeGradient5)" strokeWidth="2.5" fill="none" />
          <rect x="40" y="70" width="55" height="45" rx="4" stroke="url(#hypeGradient5)" strokeWidth="3" fill="none" />
          <path d="M35 70 L98 70 M67.5 70 L67.5 115" stroke="url(#hypeGradient5)" strokeWidth="3" />
          <path d="M95 55 Q 85 75 70 70" stroke="url(#hypeGradient5)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M125 55 Q 120 85 95 90" stroke="url(#hypeGradient5)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: '6',
      title: 'A/B OPTIMIZATION',
      desc: 'A/B testing ad creatives, bidding strategies, and funnel copy to drive down cost-per-lead.',
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-40 object-contain drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" fill="none">
          <defs>
            <linearGradient id="hypeGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          <path d="M80 30 L80 100 M40 45 L120 45" stroke="url(#hypeGradient6)" strokeWidth="3" strokeLinecap="round" />
          <polygon points="80,25 75,35 85,35" stroke="url(#hypeGradient6)" strokeWidth="2.5" fill="url(#hypeGradient6)" />
          <path d="M35 45 L35 70 L25 90 L55 90 L45 70 L45 45 Z" stroke="url(#hypeGradient6)" strokeWidth="2.5" fill="none" />
          <text x="40" y="82" textAnchor="middle" fontSize="14" fontWeight="900" fill="url(#hypeGradient6)">A</text>
          <path d="M115 45 L115 70 L105 90 L135 90 L125 70 L125 45 Z" stroke="url(#hypeGradient6)" strokeWidth="2.5" fill="none" />
          <text x="120" y="82" textAnchor="middle" fontSize="14" fontWeight="900" fill="url(#hypeGradient6)">B</text>
        </svg>
      ),
    },
    {
      num: '7',
      title: 'REPORTING & ANALYTICS',
      desc: 'Transparent weekly lead attribution reporting and real-time dashboard analytics access.',
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-40 object-contain drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]" fill="none">
          <defs>
            <linearGradient id="hypeGradient7" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D946EF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path d="M30 30 L30 110 L140 110" stroke="url(#hypeGradient7)" strokeWidth="3" strokeLinecap="round" />
          <rect x="42" y="80" width="16" height="30" stroke="url(#hypeGradient7)" strokeWidth="2.5" />
          <rect x="68" y="65" width="16" height="45" stroke="url(#hypeGradient7)" strokeWidth="2.5" />
          <rect x="94" y="45" width="16" height="65" stroke="url(#hypeGradient7)" strokeWidth="2.5" />
          <rect x="120" y="25" width="16" height="85" stroke="url(#hypeGradient7)" strokeWidth="2.5" />
          <path d="M30 90 Q 80 50, 138 20" stroke="url(#hypeGradient7)" strokeWidth="3.5" strokeDasharray="4 2" fill="none" />
        </svg>
      ),
    },
    {
      num: '8',
      title: 'GROWTH SCALING',
      desc: 'Re-allocating budget into winning channels and expanding market reach globally.',
      illustration: (
        <svg viewBox="0 0 160 140" className="w-full h-40 object-contain drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" fill="none">
          <defs>
            <linearGradient id="hypeGradient8" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#EAB308" />
            </linearGradient>
          </defs>
          <path d="M55 35 L105 35 L95 75 L65 75 Z" stroke="url(#hypeGradient8)" strokeWidth="3" fill="none" />
          <path d="M80 75 L80 100 M65 100 L95 100" stroke="url(#hypeGradient8)" strokeWidth="3" strokeLinecap="round" />
          <path d="M45 42 Q 35 55 55 60" stroke="url(#hypeGradient8)" strokeWidth="2.5" fill="none" />
          <path d="M115 42 Q 125 55 105 60" stroke="url(#hypeGradient8)" strokeWidth="2.5" fill="none" />
          <text x="80" y="58" textAnchor="middle" fontSize="16" fontWeight="900" fill="url(#hypeGradient8)" fontFamily="sans-serif">10X</text>
        </svg>
      ),
    },
  ];

  return (
    <section id="our-process-section" className="py-20 sm:py-28 pt-24 sm:pt-32 bg-[#0F172A] relative overflow-hidden">
      
      {/* Energetic Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#38BDF8] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#A855F7] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div>
            <span className="inline-flex items-center gap-2 text-white font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-white/20 bg-white/10 shadow-xs backdrop-blur-md font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8] animate-spin-slow" />
              <span>HOW IT WORKS</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            A Proven Process for{' '}
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent drop-shadow-lg">
              Predictable Growth
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            From initial discovery to continuous scaling, our methodology ensures maximum ROI at every stage of your customer acquisition journey.
          </p>
        </div>

        {/* Energetic Snake Layout */}
        <div className="space-y-12 lg:space-y-0 lg:flex lg:flex-col lg:gap-8 relative pb-20">
          
          {/* Row 1 (Steps 1 to 4) - Moves Right */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between w-full">
            {processFlow.slice(0, 4).map((item, idx) => (
              <div 
                key={idx} 
                className={`flex-1 flex flex-col items-center justify-center relative p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-110 hover:bg-white/10 hover:border-white/30 hover:z-50 group cursor-pointer lg:w-[23%] 
                ${idx % 2 === 0 ? 'lg:-translate-y-8' : 'lg:translate-y-8'}`}
              >
                {/* Glowing Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#818CF8] flex items-center justify-center text-white font-black text-xl shadow-[0_0_15px_rgba(56,189,248,0.6)] transform group-hover:rotate-12 transition-transform duration-300 z-20">
                  {item.num}
                </div>

                {/* Meaningful Illustration */}
                <div className="w-full max-w-[140px] transform group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-xl z-10 flex-grow flex items-center justify-center min-h-[140px]">
                  {item.illustration}
                </div>

                {/* Snake Connector Line Desktop (Right Arrow) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-[-2.5rem] w-8 border-t-4 border-dashed border-white/20 z-0"></div>
                )}
                
                {/* Text Content - Hidden until hover */}
                <div className="w-full text-center h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden group-hover:mt-6 z-10">
                  <h3 className="text-base font-black text-white tracking-wide font-['Plus_Jakarta_Sans',sans-serif] uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* S-Curve Connector between Row 1 and Row 2 (Desktop only) */}
          <div className="hidden lg:flex justify-end w-full px-[8%] relative py-8">
             <div className="w-20 h-16 border-r-4 border-b-4 border-dashed border-white/20 rounded-br-3xl transform translate-x-4"></div>
          </div>

          {/* Row 2 (Steps 5 to 8) - Reverses Left to create Snake shape */}
          <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-8 justify-between w-full">
            {processFlow.slice(4, 8).map((item, idx) => (
              <div 
                key={idx + 4} 
                className={`flex-1 flex flex-col items-center justify-center relative p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-110 hover:bg-white/10 hover:border-white/30 hover:z-50 group cursor-pointer lg:w-[23%] 
                ${idx % 2 === 1 ? 'lg:-translate-y-8' : 'lg:translate-y-8'}`}
              >
                {/* Glowing Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#A855F7] to-[#EC4899] flex items-center justify-center text-white font-black text-xl shadow-[0_0_15px_rgba(168,85,247,0.6)] transform group-hover:-rotate-12 transition-transform duration-300 z-20">
                  {item.num}
                </div>

                {/* Meaningful Illustration */}
                <div className="w-full max-w-[140px] transform group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-xl z-10 flex-grow flex items-center justify-center min-h-[140px]">
                  {item.illustration}
                </div>

                {/* Snake Connector Line Desktop (Left Arrow - Because flex-row-reverse, the visual left is DOM right side) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 left-[-2.5rem] w-8 border-t-4 border-dashed border-white/20 z-0"></div>
                )}
                
                {/* Text Content - Hidden until hover */}
                <div className="w-full text-center h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden group-hover:mt-6 z-10">
                  <h3 className="text-base font-black text-white tracking-wide font-['Plus_Jakarta_Sans',sans-serif] uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
