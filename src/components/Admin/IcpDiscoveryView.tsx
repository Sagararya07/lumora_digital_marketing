import React, { useState, useEffect } from 'react';
import { Target, Search, Clock, DollarSign, Crosshair, AlertCircle } from 'lucide-react';

interface DiscoverySubmission {
  id: string;
  icp_id: string;
  company_name: string;
  contact_name: string;
  primary_product: string;
  avg_deal_size: string;
  sales_cycle: string;
  pain_points: string;
  competitors: string;
  marketing_challenges: string;
  created_at: string;
}

export const IcpDiscoveryView: React.FC = () => {
  const [submissions, setSubmissions] = useState<DiscoverySubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('/api/discovery-submissions');
      const data = await res.json();
      setSubmissions(data);
    } catch (err) {
      console.error('Failed to fetch discovery submissions', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-slate-500">Loading discovery data...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-500" />
            Step 2: Deep-Dive Discovery Data
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Review detailed economics, pain points, and challenges from qualified leads.
          </p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search company or contact..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {submissions.filter(s => 
          s.company_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          s.contact_name.toLowerCase().includes(searchTerm.toLowerCase())
        ).length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-slate-500 shadow-sm">
            {searchTerm ? 'No discovery submissions found matching your search.' : 'No discovery submissions found. Send the Step 2 email to a qualified lead to get started.'}
          </div>
        ) : (
          submissions.filter(s => 
            s.company_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            s.contact_name.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((sub) => (
            <div key={sub.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div 
                className="p-4 sm:p-6 cursor-pointer flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-0 bg-slate-50 hover:bg-slate-100 transition-colors"
                onClick={() => setExpandedId(expandedId === sub.id ? null : sub.id)}
              >
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">{sub.company_name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Contact: {sub.contact_name} • Submitted: {new Date(sub.created_at).toLocaleDateString()}</p>
                </div>
                <div className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100 w-fit">
                  {expandedId === sub.id ? 'Close Details' : 'View Deep-Dive'}
                </div>
              </div>

              {expandedId === sub.id && (
                <div className="p-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Economics */}
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                      <DollarSign className="w-4 h-4 text-emerald-500" /> Economics & Sales
                    </h4>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Primary Product</div>
                      <div className="text-sm font-medium text-slate-800">{sub.primary_product}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Avg Deal Size</div>
                      <div className="text-sm font-medium text-slate-800">{sub.avg_deal_size}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Sales Cycle</div>
                      <div className="text-sm font-medium text-slate-800">{sub.sales_cycle}</div>
                    </div>
                  </div>

                  {/* Friction & Marketing */}
                  <div className="space-y-4">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                      <Crosshair className="w-4 h-4 text-rose-500" /> Friction & Marketing
                    </h4>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Pain Points</div>
                      <div className="text-sm text-slate-700 bg-slate-50 p-3 rounded-lg mt-1">{sub.pain_points}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Competitors</div>
                      <div className="text-sm text-slate-700 bg-slate-50 p-3 rounded-lg mt-1">{sub.competitors}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase text-amber-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Marketing Challenges
                      </div>
                      <div className="text-sm text-amber-900 bg-amber-50 border border-amber-100 p-3 rounded-lg mt-1">
                        {sub.marketing_challenges}
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
