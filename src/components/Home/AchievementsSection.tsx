import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { AchievementItem, CaseStudyItem } from '../../types';

interface AchievementsProps {
  caseStudiesList?: CaseStudyItem[];
  achievements?: AchievementItem[];
  onSelectCaseStudy: (caseStudy: AchievementItem) => void;
  openConsultationModal: () => void;
}

const mockCaseStudies = [
  {
    id: 'case-saas',
    badge: 'SaaS',
    badgeBg: 'bg-[#5B8EE2] text-white',
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
    badgeBg: 'bg-[#D6A67B] text-white',
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
  caseStudiesList = [],
  onSelectCaseStudy,
  openConsultationModal
}) => {
  const [showAllCards, setShowAllCards] = useState(false);
  const displayedCases = showAllCards ? caseStudiesList : caseStudiesList.slice(0, 3);

  return (
    <section id="achievements-section" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D6A67B] font-['Plus_Jakarta_Sans',sans-serif]">
              CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mt-2 font-['Plus_Jakarta_Sans',sans-serif]">
              Real Results from Real Partnerships
            </h2>
          </div>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedCases.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 left-4 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md bg-[#5B8EE2] text-white`}>
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-extrabold bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent font-['Plus_Jakarta_Sans',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#6B7280] font-normal leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-8 pt-0 mt-auto">
                <button
                  onClick={() => onSelectCaseStudy(item as unknown as AchievementItem)}
                  className="w-full py-3 rounded-2xl border border-[#E5E7EB] text-[#111827] text-xs font-bold hover:bg-[#F8FAFC] transition-colors"
                >
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Option */}
        {caseStudiesList.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAllCards(!showAllCards)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#E5E7EB] bg-white hover:bg-slate-50 text-[#111827] text-sm font-bold transition-all shadow-sm"
            >
              <span>{showAllCards ? 'View Less' : 'View More Case Studies'}</span>
              {showAllCards ? <ChevronUp className="w-4 h-4 text-[#5B8EE2]" /> : <ChevronDown className="w-4 h-4 text-[#5B8EE2]" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
