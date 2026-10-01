import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Phone, AlertCircle } from 'lucide-react';

interface DetailedConsultationFormProps {
  sourcePage?: string;
}

export const DetailedConsultationForm: React.FC<DetailedConsultationFormProps> = ({
  sourcePage = 'Dedicated Consultation Page'
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    servicesRequired: [sourcePage.includes('Service Request') ? sourcePage.replace('Service Request: ', '') : 'Lead Generation'],
    budget: '$1,000 - $5,000 / mo',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, sourcePage })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Failed to process request.');
      }
    } catch (err) {
      setError('Network connection error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto w-full bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8 relative z-10 -mt-10 mb-20">
      {success ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Request Received!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto font-normal">
            Thank you for submitting your business requirements. An executive strategist from Lumora will reach out within 24 hours to discuss how we can help.
          </p>
          <button
            onClick={() => {
              // Save to localStorage to simulate a database for the mockups
              const clientRecord = {
                id: `CLI-${Math.floor(1000 + Math.random() * 9000)}`,
                name: formData.companyName || formData.name || 'Unknown Company',
                contactName: formData.name || 'Client',
                industry: 'Unknown',
                status: 'Onboarding',
                date: new Date().toLocaleDateString(),
                details: formData
              };
              
              localStorage.setItem('currentClient', JSON.stringify(clientRecord));
              const existingClients = JSON.parse(localStorage.getItem('allClients') || '[]');
              localStorage.setItem('allClients', JSON.stringify([clientRecord, ...existingClients]));

              navigate('/portal');
            }}
            className="px-6 py-2.5 rounded-xl bg-[#5B8EE2] hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-200"
          >
            Enter Client Portal
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-6 space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5B8EE2] flex items-center justify-center sm:justify-start gap-1">
              <Phone className="w-3.5 h-3.5" /> Book Growth Consultation
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Your Requirements
            </h3>
            <p className="text-xs text-slate-500 font-normal">
              Discuss your goals with our digital marketing specialists.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. John Smith"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-[16px] sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#729EE6] shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-[16px] sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#729EE6] shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-[16px] sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#729EE6] shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="e.g. Nexus Enterprises"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-[16px] sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#729EE6] shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Primary Business Requirement
              </label>
              <textarea
                rows={3}
                placeholder="Tell us what you want to achieve (e.g. More B2B leads, Higher ROI)..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-[16px] sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#729EE6] shadow-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl bg-[#5B8EE2] hover:bg-blue-700 text-white font-bold text-[15px] sm:text-base shadow-md shadow-blue-200 flex items-center justify-center gap-2 transition-all mt-4"
            >
              {loading ? 'Sending Request...' : 'Submit Request'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
