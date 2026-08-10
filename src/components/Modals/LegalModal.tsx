import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'refund' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    refund: 'Refund & Guarantee Policy'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="p-2 rounded-xl bg-[#F2F6FC] text-[#5B8EE2] border border-blue-100">
            {type === 'privacy' && <ShieldCheck className="w-6 h-6" />}
            {type === 'terms' && <FileText className="w-6 h-6" />}
            {type === 'refund' && <RefreshCw className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">{titles[type]}</h3>
            <p className="text-xs text-slate-500 font-normal">Effective Date: January 2026 • Lumora Digital Marketing Agency</p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="max-h-[60vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pr-2 custom-scrollbar">
          {type === 'privacy' && (
            <>
              <p>
                At Lumora, accessible from lumora.com, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document outlines the types of information collected and how we utilize it.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Information We Collect</h4>
              <p>
                When you submit a consultation form or request a proposal, we collect information including your full name, email address, phone number, company name, and project specifications.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. How We Use Your Information</h4>
              <p>
                We use collected information to provide customized marketing proposals, manage client communication, route leads directly to our account supervisors (contact@lumora.com), and optimize campaign execution.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Data Security & GDPR Compliance</h4>
              <p>
                We implement strict SSL encryption protocols, firewall protection, and credential access controls to prevent unauthorized data leaks. We do not sell or rent personal information to third parties.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                By accessing or engaging services with Lumora Digital Marketing Agency, you agree to be bound by the following Terms and Conditions.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Service Scope & Execution</h4>
              <p>
                Lumora provides digital marketing, search engine optimization, performance advertising, and lead generation services as specified in agreed campaign proposals.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Client Obligations</h4>
              <p>
                Clients agree to provide timely access to necessary advertising accounts, domain DNS records, and branding materials required to execute campaigns effectively.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Intellectual Property</h4>
              <p>
                All ad graphics, video assets, and custom copy created specifically for the client become the sole property of the client upon full payment of agreed service fees.
              </p>
            </>
          )}

          {type === 'refund' && (
            <>
              <p>
                Lumora is committed to deliver high-quality marketing campaign execution and transparent reporting.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Ad Spend & Media Costs</h4>
              <p>
                Direct advertising payments made to third-party ad networks (e.g. Google Ads, Meta Ads, LinkedIn Ads) are paid directly to the respective platform networks and are non-refundable.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Agency Retainer Fees</h4>
              <p>
                If Lumora fails to launch agreed marketing campaigns within the stipulated setup timeframe without client delay, a 100% refund of initial setup retainer fees will be issued upon written request.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#5B8EE2] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-200"
          >
            I Understand & Agree
          </button>
        </div>

      </div>
    </div>
  );
};
