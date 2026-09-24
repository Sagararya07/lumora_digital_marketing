import React, { useState, useEffect } from 'react';
import { FileText, Download, CheckCircle2, AlertCircle } from 'lucide-react';

interface ClientProposalsProps {
  clientId: string;
}

export const ClientProposals: React.FC<ClientProposalsProps> = ({ clientId }) => {
  const [proposals, setProposals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/clients/${clientId}/proposals`)
      .then(res => res.json())
      .then(data => {
        setProposals(data.proposals || []);
        setLoading(false);
      });
  }, [clientId]);

  if (loading) return <div className="p-8 text-slate-500 animate-pulse">Loading proposals...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">Proposals & Invoices</h2>
        <p className="text-slate-500 mt-1">Review your project proposals and manage payments.</p>
      </div>

      <div className="space-y-4">
        {proposals.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 font-medium">No proposals or invoices available yet.</p>
          </div>
        ) : (
          proposals.map(p => (
            <div key={p.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${p.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                  {p.status === 'Paid' ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{p.title}</h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
                    <span className="font-bold text-slate-700">Amount: ${p.amount}</span>
                    <span>•</span>
                    <span>Date: {new Date(p.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                {p.status === 'Pending' && (
                  <button className="flex-1 sm:flex-none px-4 py-2 bg-[#5B8EE2] text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors">
                    Pay Now
                  </button>
                )}
                {p.file_url && (
                  <a href={p.file_url} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors">
                    <Download className="w-4 h-4" /> Download
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
