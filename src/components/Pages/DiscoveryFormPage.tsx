import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Target, TrendingUp, ShieldAlert, Crosshair, CheckCircle2, AlertCircle } from 'lucide-react';
import { LumoraLogo } from '../common/LumoraLogo';

export const DiscoveryFormPage: React.FC = () => {
  const { icpId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    icp_id: icpId || '',
    primary_product: '',
    avg_deal_size: '',
    sales_cycle: '',
    pain_points: '',
    competitors: '',
    marketing_challenges: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/discovery-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Failed to submit discovery form.');
      }
    } catch (err) {
      setError('Network connection error.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-10 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Discovery Complete</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            Thank you for sharing the deep-dive details about your business. Our strategy team has been notified and will be putting together a custom roadmap for you. We will contact you soon to arrange our strategy call.
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-lg transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-['Inter',sans-serif]">
      
      {/* Background Orbs */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#729EE6]/10 blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none -z-10" />

      <div className="mb-8 flex flex-col items-center">
        <LumoraLogo size="lg" className="mb-6" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center">
          Deep-Dive Discovery
        </h1>
        <p className="mt-3 text-slate-500 text-sm max-w-lg text-center leading-relaxed">
          Help us understand the mechanics of your business so we can architect a high-converting digital strategy.
        </p>
      </div>

      <div className="w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden relative z-10">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899]"></div>
        
        <div className="p-8 sm:p-10">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section A: Economics */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <TrendingUp className="w-5 h-5 text-[#5B8EE2]" />
                <h3 className="text-lg font-bold text-slate-900">Module A: Business Economics</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Primary Product / Service Focus</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Enterprise SaaS Platform"
                    value={formData.primary_product}
                    onChange={(e) => setFormData({ ...formData, primary_product: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Average Deal Size (LTV / AOV)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. $15,000 / year"
                    value={formData.avg_deal_size}
                    onChange={(e) => setFormData({ ...formData, avg_deal_size: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-2">Typical Sales Cycle Length</label>
                  <select
                    required
                    value={formData.sales_cycle}
                    onChange={(e) => setFormData({ ...formData, sales_cycle: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all"
                  >
                    <option value="" disabled>Select average time from lead to close...</option>
                    <option value="Instant / E-commerce">Instant (E-commerce)</option>
                    <option value="1-7 Days">1 - 7 Days</option>
                    <option value="1-4 Weeks">1 - 4 Weeks</option>
                    <option value="1-3 Months">1 - 3 Months</option>
                    <option value="3-6 Months">3 - 6 Months</option>
                    <option value="6+ Months">6+ Months (Enterprise)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section B: Friction & Competition */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Crosshair className="w-5 h-5 text-rose-500" />
                <h3 className="text-lg font-bold text-slate-900">Module B: Friction & Competition</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">What are the top 2-3 biggest pain points of your target audience?</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="e.g. They struggle with legacy systems that are too slow..."
                    value={formData.pain_points}
                    onChange={(e) => setFormData({ ...formData, pain_points: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Who are your main competitors?</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="e.g. Acme Corp, GlobalTech, local agencies..."
                    value={formData.competitors}
                    onChange={(e) => setFormData({ ...formData, competitors: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Section C: Marketing */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <ShieldAlert className="w-5 h-5 text-[#D6A67B]" />
                <h3 className="text-lg font-bold text-slate-900">Module C: Marketing Assessment</h3>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">What is your biggest current marketing challenge?</label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. We get traffic but no conversions, Google Ads are too expensive, no content strategy..."
                  value={formData.marketing_challenges}
                  onChange={(e) => setFormData({ ...formData, marketing_challenges: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6] transition-all resize-none"
                />
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#5B8EE2] to-[#4676C2] hover:shadow-lg hover:shadow-blue-500/30 text-white font-extrabold text-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
              >
                {loading ? 'Submitting Discovery Data...' : 'Submit Discovery Deep-Dive'}
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                Your data is secure and will only be used to build your custom strategy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
