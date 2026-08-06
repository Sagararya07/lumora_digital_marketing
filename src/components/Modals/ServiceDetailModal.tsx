import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  openConsultationModal: () => void;
  onReadMore?: (slug: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  openConsultationModal,
  onReadMore
}) => {
  if (!service) return null;

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
          {service.badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B8EE2] bg-[#F2F6FC] px-2.5 py-0.5 rounded-full border border-blue-100">
              {service.badge}
            </span>
          )}
          <h3 className="text-2xl font-black text-slate-900">{service.title}</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {service.fullDescription}
          </p>
        </div>

        {/* Deliverables & Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
            <h4 className="text-xs font-bold text-[#5B8EE2] uppercase tracking-wider">Key Capabilities</h4>
            <ul className="space-y-1.5 text-xs text-slate-700 font-normal">
              {service.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8EE2] flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
            <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Client Deliverables</h4>
            <ul className="space-y-1.5 text-xs text-slate-700 font-normal">
              {service.deliverables.map((d, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommended For Callout */}
        <div className="p-4 rounded-xl bg-[#F2F6FC]/50 border border-blue-100 text-xs text-slate-700">
          <p className="font-bold text-slate-900 mb-1">Recommended Audience:</p>
          <p className="font-normal">{service.recommendedFor}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">

          
          {onReadMore && (
            <button
              onClick={() => {
                onClose();
                onReadMore(service.slug || service.id);
              }}
              className="px-4 py-2 rounded-xl border border-[#5B8EE2] text-[#5B8EE2] hover:bg-[#F2F6FC] text-xs font-bold transition-colors"
            >
              Read More
            </button>
          )}

          <button
            onClick={() => {
              onClose();
              openConsultationModal();
            }}
            className="px-5 py-2 rounded-xl bg-[#5B8EE2] hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-200 flex items-center gap-1.5 transition-all"
          >
            <span>Request Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
