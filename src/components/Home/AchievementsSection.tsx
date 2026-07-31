import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AchievementItem } from '../../types';

interface AchievementsProps {
  achievements?: AchievementItem[];
  onSelectCaseStudy: (caseStudy: AchievementItem) => void;
  openConsultationModal: () => void;
}

const mockCaseStudies = [
  {
    id: 'case-saas',
    badge: 'SaaS',
    badgeBg: 'bg-[#2563EB] text-white',
    clientName: 'SaaS Company',
    description: 'How we helped a SaaS brand increase demo bookings by 320% in 6 months.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    industry: 'B2B SaaS',
    location: 'United States',
    challenge: 'High CPC ads and low demo conversion.',
    metrics: [{ label: 'Demo Bookings', value: '+320%' }],
    testimonial: { quote: 'Lumora transformed our pipeline within 90 days.', author: 'Marcus Vance', role: 'VP Marketing' }
  },
  {
    id: 'case-manufacturing',
    badge: 'Manufacturing',
    badgeBg: 'bg-[#7C3AED] text-white',
    clientName: 'Manufacturing Business',
    description: 'Building a predictable lead pipeline that increased revenue by 180%.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
    industry: 'Industrial',
    location: 'Germany & Global',
    challenge: 'Long sales cycle and lack of pre-qualified RFQs.',
    metrics: [{ label: 'Revenue Growth', value: '+180%' }],
    testimonial: { quote: 'Exceptional RFQ quality and pipeline scaling.', author: 'Klaus Webber', role: 'COO' }
  },
  {
    id: 'case-healthcare',
    badge: 'Healthcare',
    badgeBg: 'bg-[#F59E0B] text-white',
    clientName: 'Healthcare Brand',
    description: 'AI-powered campaigns that improved patient appointments by 250%.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    industry: 'Medical Clinic',
    location: 'United Kingdom',
    challenge: 'Low local map visibility and missed patient consultations.',
    metrics: [{ label: 'Patient Appointments', value: '+250%' }],
    testimonial: { quote: 'Our clinic schedules are consistently fully booked.', author: 'Dr. Sarah Lin', role: 'Medical Director' }
  },
];

export const AchievementsSection: React.FC<AchievementsProps> = ({
  onSelectCaseStudy,
  openConsultationModal
}) => {
  return (
    <section id="achievements-section" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#7C3AED] font-['Plus_Jakarta_Sans',sans-serif]">
              CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mt-2 font-['Plus_Jakarta_Sans',sans-serif]">
              Real Results from Real Partnerships
            </h2>
          </div>

          <button
            onClick={openConsultationModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E5E7EB] bg-white hover:bg-slate-50 text-[#111827] text-xs font-bold transition-all shadow-xs shrink-0 self-start md:self-auto"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
          </button>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockCaseStudies.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.clientName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 left-4 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#111827] mb-2 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#2563EB] transition-colors">
                    {item.clientName}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onSelectCaseStudy(item as unknown as AchievementItem)}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2563EB] group-hover:gap-2.5 transition-all"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
