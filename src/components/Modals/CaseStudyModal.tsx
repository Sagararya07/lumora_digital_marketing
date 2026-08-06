import React from 'react';
import { X, ArrowRight, TrendingUp } from 'lucide-react';
import { CaseStudyItem } from '../../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudyItem | null;
  onClose: () => void;
  openConsultationModal: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  openConsultationModal
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-hidden">
      <div className="relative w-full max-w-5xl h-[85vh] md:h-[75vh] rounded-3xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden border border-slate-200">
        
        {/* Close Button - absolute on top right of the whole modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 backdrop-blur hover:bg-white text-slate-600 hover:text-slate-900 rounded-full shadow-md transition-colors border border-slate-200 hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Sticky Image */}
        <div className="md:w-[45%] h-56 md:h-full relative shrink-0 bg-[#F8FAFC] flex items-center justify-center p-4">
          <img
            src={caseStudy.image_url}
            alt={caseStudy.title}
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#5B8EE2] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-lg">
              <TrendingUp className="w-3.5 h-3.5" />
              {caseStudy.category}
            </span>
          </div>
        </div>

        {/* Right Side: Scrollable Content */}
        <div className="md:w-[55%] flex-1 flex flex-col min-h-0 bg-white">
          <div className="flex-1 overflow-y-auto p-8 sm:p-12 custom-scrollbar">
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-8 font-['Plus_Jakarta_Sans',sans-serif]">
              {caseStudy.title}
            </h3>
            
            <div className="prose prose-slate max-w-none">
              <p className="whitespace-pre-wrap text-slate-600 leading-[1.8] font-normal text-sm sm:text-base">
                {caseStudy.description}
              </p>
            </div>
          </div>

          {/* Action Footer (Sticky at bottom of right side) */}
          <div className="p-6 sm:px-12 sm:py-8 border-t border-slate-100 bg-slate-50 shrink-0">
            <button
              onClick={() => {
                onClose();
                openConsultationModal();
              }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:opacity-90 text-white text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 transition-all"
            >
              <span>Get Similar Results For Your Business</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
