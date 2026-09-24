import React, { useState, useEffect } from 'react';
import { Users, FileText, Briefcase, Activity, CheckCircle2, AlertCircle, Search } from 'lucide-react';

interface CrmAdminDashboardProps {
  onClientSelect?: (clientId: string) => void;
}

export const CrmAdminDashboard: React.FC<CrmAdminDashboardProps> = ({ onClientSelect }) => {
  const [recentClients, setRecentClients] = useState<any[]>([]);
  const [dashboardStats, setDashboardStats] = useState<any>({
    totalClients: '0',
    activeProjects: '0',
    pendingProposals: '0',
    recentActivity: '0'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClientsAndStats();
  }, []);

  const fetchClientsAndStats = async () => {
    try {
      const [clientsRes, statsRes] = await Promise.all([
        fetch('/api/clients'),
        fetch('/api/admin/stats')
      ]);
      const clientsData = await clientsRes.json();
      const statsData = await statsRes.json();
      setRecentClients(Array.isArray(clientsData) ? clientsData : []);
      setDashboardStats(statsData);
    } catch (err) {
      console.error('Failed to fetch data', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteClient = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to completely delete the account for ${name}? This action cannot be undone.`)) return;
    try {
      const res = await fetch(`/api/clients/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setRecentClients(recentClients.filter(c => c.client_id !== id));
      } else {
        alert('Failed to delete client');
      }
    } catch (err) {
      console.error('Failed to delete client', err);
      alert('Network error deleting client');
    }
  };

  const stats = [
    { label: 'Total Clients', value: dashboardStats.totalClients, icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Active Projects', value: dashboardStats.activeProjects, icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'Pending Proposals', value: dashboardStats.pendingProposals, icon: FileText, color: 'text-amber-600', bg: 'bg-amber-100' },
    { label: 'Recent Activity', value: dashboardStats.recentActivity, icon: Activity, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  const filteredClients = recentClients.filter(c => 
    c.company_name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.contact_name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.client_id?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div className="p-8 text-slate-500">Loading dashboard...</div>;

  return (
    <div className="space-y-6">
      
      {/* Dashboard Header */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">Dashboard Overview</h1>
        <p className="text-sm text-slate-500 mt-1">Welcome back. Here is what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
            </div>
            <div className={`p-3 rounded-xl ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg font-bold text-slate-900 shrink-0">Recent Accounts</h2>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#5B8EE2] focus:ring-1 focus:ring-[#5B8EE2] transition-shadow"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {filteredClients.length === 0 ? (
              <div className="p-8 text-center text-slate-500 text-sm">
                No clients found.
              </div>
            ) : (
              filteredClients.map((client: any, idx: number) => (
                <div 
                  key={idx} 
                  className="p-4 sm:px-6 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                  onClick={() => onClientSelect && onClientSelect(client.client_id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
                      {client.client_id?.split('-')[1] || '00'}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{client.company_name}</h4>
                      <p className="text-xs text-slate-500">{client.client_id} · Contact: {client.contact_name}</p>
                    </div>
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold mr-4 ${
                      client.status === 'Onboarding' ? 'bg-amber-100 text-amber-700' :
                      client.status === 'Active Project' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {client.status}
                    </span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); deleteClient(client.client_id, client.company_name); }}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Delete Client"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Required Actions</h2>
          <div className="space-y-4">
            <div className="p-4 text-center text-slate-500 text-sm">
              No pending actions.
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
