import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TestimonialItem } from '../../types';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [active, setActive] = useState(0);
  const items = testimonials.length > 0 ? testimonials : [
    { id: '1', name: 'Rahul Sharma', company: 'TechVentures India', role: 'CEO', content: 'Lumora transformed our lead generation pipeline. We went from 20 leads/month to 350+ qualified leads in just 3 months. Their ROI-focused approach is unlike anything we’ve experienced before.', rating: 5, avatar: '' },
    { id: '2', name: 'Sarah Mitchell', company: 'MedFirst Healthcare', role: 'Marketing Director', content: 'The healthcare campaigns built for us by Lumora were HIPAA-compliant, highly targeted, and incredibly effective. Patient appointment bookings increased by 280% in the first quarter.', rating: 5, avatar: '' },
    { id: '3', name: 'James Thornton', company: 'PropMax Real Estate', role: 'Director', content: 'Their real estate lead generation expertise is unmatched. Quality leads, transparent reporting, and a dedicated account manager who actually cares about our results. 5 stars across the board.', rating: 5, avatar: '' },
  ];

  const prev = () => setActive((a) => (a === 0 ? items.length - 1 : a - 1));
  const next = () => setActive((a) => (a === items.length - 1 ? 0 : a + 1));

  const visible = [
    items[active],
    items[(active + 1) % items.length],
    items[(active + 2) % items.length],
  ].slice(0, Math.min(3, items.length));

  return (
    <section id="testimonials-section" className="py-20 sm:py-28 pt-24 sm:pt-32 bg-[#F8FAFC] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Top Eyebrow Badge */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#5B8EE2] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-[#F2F6FC]/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2] animate-pulse" />
              <span>CLIENT VALIDATION</span>
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            What Growth Leaders Say About{' '}
            <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] bg-clip-text text-transparent">
              Lumora
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            Real results from enterprises, SaaS founders, and marketing leaders worldwide.
          </p>

        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visible.map((t, idx) => (
            <div 
              key={`${t.id}-${idx}`} 
              className="p-8 sm:p-9 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#5B8EE2] shadow-xs hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Golden Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#5B8EE2]/20 mb-4" />
                <p className="text-sm sm:text-base text-[#111827] leading-relaxed italic font-normal mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Footer (Ample Bottom Padding) */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] flex items-center justify-center text-white text-base font-extrabold shadow-md shrink-0 font-['Plus_Jakarta_Sans',sans-serif]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-base font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#5B8EE2] transition-colors">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#6B7280] font-medium mt-0.5">
                    {t.role}{t.company ? `, ${t.company}` : ''}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Pagination Controls */}
        {items.length > 3 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button 
              onClick={prev} 
              className="p-3 rounded-full border border-[#E5E7EB] bg-white hover:border-[#5B8EE2] hover:bg-[#F2F6FC] text-[#111827] transition-all shadow-xs" 
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-[#5B8EE2]" />
            </button>
            
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${i === active ? 'bg-[#5B8EE2] w-8' : 'bg-slate-300 w-2.5'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={next} 
              className="p-3 rounded-full border border-[#E5E7EB] bg-white hover:border-[#5B8EE2] hover:bg-[#F2F6FC] text-[#111827] transition-all shadow-xs" 
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-[#5B8EE2]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
