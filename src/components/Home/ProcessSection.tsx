import React from 'react';
import { 
  Search, 
  Target, 
  Settings, 
  PenTool, 
  Rocket, 
  TrendingUp, 
  BarChart3, 
  Award, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProcessProps {
  steps?: any[];
  openConsultationModal?: () => void;
}

const fullProcessSteps = [
  {
    num: '01',
    title: 'Requirement Analysis',
    desc: 'Deep-dive discovery to align on business objectives, target buyer personas, and growth KPIs.',
    icon: <Search className="w-6 h-6 text-white" />,
    gradient: 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/25',
  },
  {
    num: '02',
    title: 'Strategy Planning',
    desc: 'Crafting a custom multi-channel acquisition roadmap and ROI budget allocation strategy.',
    icon: <Target className="w-6 h-6 text-white" />,
    gradient: 'bg-gradient-to-br from-purple-500 to-indigo-600 shadow-purple-500/25',
  },
  {
    num: '03',
    title: 'Campaign Setup',
    desc: 'Building ad structures, tracking pixels, conversion funnels, and CRM routing automation.',
    icon: <Settings className="w-6 h-6 text-white" />,
    gradient: 'bg-gradient-to-br from-pink-500 to-rose-600 shadow-pink-500/25',
  },
  {
    num: '04',
    title: 'Content Creation',
    desc: 'Designing high-converting ad copy, landing pages, email templates, and brand graphics.',
    icon: <PenTool className="w-6 h-6 text-white" />,
    gradient: 'bg-gradient-to-br from-amber-500 to-orange-600 shadow-amber-500/25',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Deploying campaigns across search, social networks, display, and email channels live.',
    icon: <Rocket className="w-6 h-6 text-white" />,
    gradient: 'bg-gradient-to-br from-rose-500 to-pink-600 shadow-rose-500/25',
  },
  {
    num: '06',
    title: 'Optimization',
    desc: 'A/B testing ad creatives, bidding strategies, and funnel copy to drive down cost-per-lead.',
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    gradient: 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/25',
  },
  {
    num: '07',
    title: 'Reporting',
    desc: 'Transparent weekly lead attribution reporting and real-time dashboard analytics access.',
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    gradient: 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/25',
  },
  {
    num: '08',
    title: 'Growth Scaling',
    desc: 'Re-allocating budget into winning channels and expanding market reach globally.',
    icon: <Award className="w-6 h-6 text-white" />,
    gradient: 'bg-gradient-to-br from-blue-600 to-purple-600 shadow-blue-500/25',
  },
];

export const ProcessSection: React.FC<ProcessProps> = () => {
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

        {/* 8 Process Steps Grid (4x2 Grid on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {fullProcessSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#2563EB] hover:bg-white shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between relative"
            >
              <div>
                {/* Header: Step Number & 3D Gradient Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-13 h-13 rounded-2xl ${step.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <span className="text-xs font-black text-[#2563EB] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full font-['Plus_Jakarta_Sans',sans-serif]">
                    Step {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-[#111827] mb-2 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#2563EB] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#2563EB] font-bold">
                <span>Phase {idx + 1}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
