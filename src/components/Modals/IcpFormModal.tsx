import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Briefcase, Target, Building2, DollarSign } from 'lucide-react';

interface IcpFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IcpFormModal: React.FC<IcpFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    website: '',
    contact_name: '',
    role: '',
    business_model: '',
    industry: '',
    monthly_budget: '',
    primary_goal: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/icp-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Failed to submit the form.');
      }
    } catch (err) {
      setError('Network connection error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900">Application Received!</h3>
            <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you for providing this information. Our strategy team will review your details to ensure we are the perfect fit for your growth goals. We will be in touch shortly.
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="mt-6 px-8 py-3 rounded-xl bg-[#5B8EE2] hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              Continue to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B8EE2] flex items-center gap-1">
                <Briefcase className="w-4 h-4" /> Client Qualification
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Are We a Good Fit?
              </h3>
              <p className="text-sm text-slate-500 max-w-lg leading-relaxed">
                We selectively partner with ambitious businesses. Please fill out this short qualification form so we can understand your business economics and goals.
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Section 1: Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Corp"
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Website URL</label>
                  <input
                    type="url"
                    placeholder="https://example.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@acmecorp.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Role *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Founder, CMO"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all"
                  />
                </div>
              </div>

              <div className="h-px w-full bg-slate-100 my-2"></div>

              {/* Section 2: Business Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" /> Business Segment *
                  </label>
                  <select
                    required
                    value={formData.business_model}
                    onChange={(e) => setFormData({ ...formData, business_model: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all"
                  >
                    <option value="" disabled>Select Model...</option>
                    <option value="B2B">B2B (Business to Business)</option>
                    <option value="B2C">B2C (Business to Consumer)</option>
                    <option value="D2C">D2C (Direct to Consumer)</option>
                    <option value="SaaS">SaaS / Software</option>
                    <option value="Local">Local Service Business</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Industry *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Healthcare, Technology"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all"
                  />
                </div>
              </div>

              {/* Section 3: The Filter */}
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5" /> Monthly Marketing Budget *
                  </label>
                  <select
                    required
                    value={formData.monthly_budget}
                    onChange={(e) => setFormData({ ...formData, monthly_budget: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all"
                  >
                    <option value="" disabled>Select Budget Range...</option>
                    <option value="<$2k">Less than $2,000</option>
                    <option value="$2k-$5k">$2,000 - $5,000</option>
                    <option value="$5k-$10k">$5,000 - $10,000</option>
                    <option value="$10k+">$10,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                    <Target className="w-3.5 h-3.5" /> Primary Goal (Next 6 Months) *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="e.g. Generate more qualified leads, lower CAC..."
                    value={formData.primary_goal}
                    onChange={(e) => setFormData({ ...formData, primary_goal: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all resize-none"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#5B8EE2] to-[#4676C2] hover:shadow-lg hover:shadow-blue-500/30 text-white font-extrabold text-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
                >
                  {loading ? 'Submitting...' : 'Submit Qualification Form'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
