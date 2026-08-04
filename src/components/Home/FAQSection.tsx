import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Search, 
  MessageSquare,
  X,
  Sparkles
} from 'lucide-react';
import { FAQItem } from '../../types';
import { useViewMore } from '../../hooks/useViewMore';
import { ViewMoreButton } from '../common/ViewMoreButton';

interface FAQProps {
  faqs: FAQItem[];
  openConsultationModal: () => void;
}

export const FAQSection: React.FC<FAQProps> = ({ faqs, openConsultationModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0]?.id || null);

  const categories = ['All', 'General', 'Pricing', 'Process', 'Results'];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const { visibleItems, expanded, toggle, hiddenCount, shouldShowButton, setExpanded } = useViewMore(filteredFaqs, 1, { initialRows: 5 });

  useEffect(() => {
    setExpanded(false);
  }, [searchQuery, selectedCategory, setExpanded]);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-20 sm:py-28 pt-24 sm:pt-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          
          {/* Top Eyebrow Badge */}
          <div>
            <span className="inline-flex items-center gap-2 text-[#5B8EE2] font-extrabold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-blue-200 bg-[#F2F6FC]/80 shadow-xs font-['Plus_Jakarta_Sans',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2] animate-pulse" />
              <span>GOT QUESTIONS?</span>
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#8CB4F5] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#6B7280] font-normal leading-relaxed">
            Find quick answers regarding our digital marketing agency services, execution timelines, and ROI metrics.
          </p>

        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10 space-y-5">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="faq-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. leads, pricing, timelines)..."
              className="w-full pl-11 pr-10 py-3.5 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm text-[#111827] placeholder-slate-400 focus:outline-none focus:border-[#5B8EE2] focus:ring-4 focus:ring-blue-100 transition-all shadow-xs font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`faq-category-${cat.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif] ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#5B8EE2] to-[#D6A67B] text-white shadow-md shadow-blue-500/25'
                    : 'bg-[#F8FAFC] text-slate-600 hover:text-[#111827] border border-[#E5E7EB] hover:border-[#5B8EE2]'
                }`}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            <>
            {visibleItems.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-gradient-to-br from-blue-50/50 via-white to-purple-50/20 border-[#5B8EE2] shadow-lg' 
                      : 'bg-white border-[#E5E7EB] shadow-xs hover:border-[#5B8EE2]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-[#111827] hover:text-[#5B8EE2] transition-colors font-['Plus_Jakarta_Sans',sans-serif]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all ${
                        isOpen ? 'bg-[#5B8EE2] scale-110 shadow-sm' : 'bg-slate-300 scale-75'
                      }`} />
                      <span>{faq.question}</span>
                    </div>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isOpen ? 'bg-[#5B8EE2] text-white rotate-180 shadow-md' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6 pt-3 text-xs sm:text-sm text-[#6B7280] leading-relaxed border-t border-blue-100 font-normal">
                      <div className="pl-4 border-l-2 border-[#5B8EE2]/40">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {shouldShowButton && (
              <ViewMoreButton
                expanded={expanded}
                onToggle={toggle}
                hiddenCount={hiddenCount}
                label="View More Questions"
                className="pt-4"
              />
            )}
            </>
          ) : (
            <div className="text-center py-12 p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs">
              <p className="text-sm text-slate-500 font-medium">No matching questions found.</p>
              <button
                onClick={openConsultationModal}
                className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#5B8EE2] to-[#D6A67B] text-white text-xs font-bold shadow-md shadow-blue-500/20"
              >
                <span>Ask Our Strategy Team Directly</span>
              </button>
            </div>
          )}
        </div>

        {/* Premium Light Callout Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-50/90 via-purple-50/70 to-indigo-50/90 border border-blue-200/80 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="text-center sm:text-left space-y-1 z-10">
            <h4 className="font-extrabold text-[#111827] text-lg sm:text-xl font-['Plus_Jakarta_Sans',sans-serif]">
              Have a specialized business requirement?
            </h4>
            <p className="text-xs sm:text-sm text-[#6B7280] font-medium">
              Our digital strategists are available for custom consultations 24/7.
            </p>
          </div>
          <button
            id="faq-talk-expert-btn"
            onClick={openConsultationModal}
            className="px-7 py-4 rounded-full bg-gradient-to-r from-[#5B8EE2] to-[#D6A67B] hover:from-[#4676C2] hover:to-[#C29367] text-white text-xs sm:text-sm font-extrabold flex items-center gap-2.5 flex-shrink-0 shadow-lg shadow-blue-500/20 transition-all hover:scale-105 font-['Plus_Jakarta_Sans',sans-serif] z-10"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>Talk to an Expert</span>
          </button>
        </div>

      </div>
    </section>
  );
};
