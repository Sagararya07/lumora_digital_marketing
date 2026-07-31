import React from 'react';
import { X, Trophy, Globe, TrendingUp, Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { AchievementItem } from '../../types';

interface CaseStudyModalProps {
  caseStudy: AchievementItem | null;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
            <Trophy className="w-4 h-4" />
            <span>Case Study Breakdown • {caseStudy.industry}</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900">{caseStudy.clientName}</h3>
          <p className="text-xs text-slate-500 flex items-center gap-1 font-normal">
            <Globe className="w-3.5 h-3.5" /> Region: {caseStudy.location}
          </p>
        </div>

        {/* Metrics Display */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx}>
              <p className="text-xl font-black text-emerald-600">{m.value}</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">{m.label}</p>
              <p className="text-[10px] text-blue-600 font-semibold">{m.change}</p>
            </div>
          ))}
        </div>

        {/* Challenge, Solution, Results */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-normal">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-rose-600">The Challenge</h4>
            <p className="leading-relaxed">{caseStudy.challenge}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-blue-600">Our Strategy & Execution</h4>
            <p className="leading-relaxed">{caseStudy.solution}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-600">Quantifiable Results</h4>
            <p className="leading-relaxed">{caseStudy.results}</p>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 text-xs italic text-slate-700 flex items-start gap-3">
          <Quote className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="mb-2">"{caseStudy.testimonial.quote}"</p>
            <p className="font-bold text-slate-900 not-italic">— {caseStudy.testimonial.author}, {caseStudy.testimonial.role}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 text-xs font-semibold"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              openConsultationModal();
            }}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-200 flex items-center gap-1.5 transition-all"
          >
            <span>Achieve Similar Growth for Your Business</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
