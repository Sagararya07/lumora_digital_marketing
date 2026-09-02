import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2, XCircle, Clock, ChevronDown, Send, Mail, Search } from 'lucide-react';

interface IcpSubmission {
  id: string;
  company_name: string;
  email: string;
  website: string;
  contact_name: string;
  role: string;
  business_model: string;
  industry: string;
  monthly_budget: string;
  primary_goal: string;
  status: 'Pending' | 'Qualified' | 'Rejected';
  created_at: string;
}

export const IcpSubmissionsView: React.FC = () => {
  const [submissions, setSubmissions] = useState<IcpSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('/api/icp-submissions');
      const data = await res.json();
      setSubmissions(data);
    } catch (err) {
      console.error('Failed to fetch ICP submissions', err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/icp-submissions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setSubmissions(submissions.map(s => s.id === id ? { ...s, status: status as any } : s));
      }
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  const sendDiscoveryEmail = async (id: string) => {
    try {
      const res = await fetch(`/api/icp-submissions/${id}/send-discovery`, { method: 'POST' });
      if (res.ok) {
        alert('Discovery email sent successfully!');
      } else {
        alert('Failed to send discovery email. Does the lead have an email address?');
      }
    } catch (err) {
      console.error('Failed to send email', err);
      alert('Network error sending email.');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Qualified':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"><CheckCircle2 className="w-3.5 h-3.5" /> Qualified</span>;
      case 'Rejected':
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200"><XCircle className="w-3.5 h-3.5" /> Rejected</span>;
      default:
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200"><Clock className="w-3.5 h-3.5" /> Pending</span>;
    }
  };

  if (loading) {
    return <div className="p-8 text-slate-500">Loading submissions...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Target className="w-6 h-6 text-[#5B8EE2]" />
            ICP Form Submissions
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Review and qualify incoming leads based on their business profile and budget.
          </p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search company, name, email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#729EE6]/20 focus:border-[#729EE6]"
          />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-900 text-xs uppercase font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 whitespace-nowrap">Company & Contact</th>
                <th className="px-6 py-4 whitespace-nowrap">Industry & Segment</th>
                <th className="px-6 py-4 whitespace-nowrap">Budget & Requirement</th>
                <th className="px-6 py-4 whitespace-nowrap">Status</th>
                <th className="px-6 py-4 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {submissions.filter(s => 
                s.company_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                s.contact_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                s.email.toLowerCase().includes(searchTerm.toLowerCase())
              ).length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                    No submissions found matching your search.
                  </td>
                </tr>
              ) : (
                submissions.filter(s => 
                  s.company_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                  s.contact_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                  s.email.toLowerCase().includes(searchTerm.toLowerCase())
                ).map((sub) => (
                  <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 align-top">
                      <div className="space-y-2">
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block">Company Name</span>
                          <div className="font-bold text-slate-900 text-base">{sub.company_name}</div>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block">Website</span>
                          <div className="text-sm">
                            {sub.website ? <a href={sub.website.startsWith('http') ? sub.website : `https://${sub.website}`} target="_blank" rel="noreferrer" className="text-[#5B8EE2] hover:underline font-medium">{sub.website}</a> : <span className="text-slate-400 italic">Not provided</span>}
                          </div>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mt-3">
                          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Primary Contact</span>
                          <div className="font-bold text-slate-800">{sub.contact_name}</div>
                          <div className="text-xs text-slate-500 mb-1.5">Role: {sub.role}</div>
                          <div className="text-slate-700 font-medium text-xs flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-slate-400" /> {sub.email}
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-2 font-medium uppercase tracking-wide">
                          Submitted: {new Date(sub.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Industry</span>
                          <div className="font-bold text-slate-900 bg-slate-100 inline-block px-3 py-1.5 rounded-lg text-sm">{sub.industry}</div>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Business Segment</span>
                          <div className="text-sm text-slate-700 font-medium flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#5B8EE2]"></span>
                            {sub.business_model}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Monthly Budget</span>
                          <div className="font-bold text-[#5B8EE2] text-sm bg-blue-50 inline-block px-3 py-1.5 rounded-lg border border-blue-100">{sub.monthly_budget}</div>
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Client Requirement</span>
                          <div className="text-sm text-slate-700 whitespace-normal max-w-[280px] leading-relaxed bg-slate-50 border border-slate-200 p-3 rounded-lg shadow-sm">
                            {sub.primary_goal}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(sub.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="relative group inline-block">
                        <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50">
                          Update <ChevronDown className="w-3 h-3" />
                        </button>
                        <div className="absolute right-0 mt-1 w-32 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                          <button
                            onClick={() => updateStatus(sub.id, 'Qualified')}
                            className="w-full text-left px-4 py-2 text-xs font-semibold text-emerald-600 hover:bg-slate-50 rounded-t-lg"
                          >
                            Mark Qualified
                          </button>
                          {sub.status === 'Qualified' && (
                            <button
                              onClick={() => sendDiscoveryEmail(sub.id)}
                              className="w-full text-left px-4 py-2 text-xs font-semibold text-blue-600 hover:bg-slate-50 flex items-center justify-between"
                            >
                              Send Step 2 Email <Send className="w-3 h-3" />
                            </button>
                          )}
                          <button
                            onClick={() => updateStatus(sub.id, 'Rejected')}
                            className="w-full text-left px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-slate-50 rounded-b-lg"
                          >
                            Mark Rejected
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
