import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Upload, Save, Play } from 'lucide-react';

export const ClientDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('company');
  const currentClient = JSON.parse(localStorage.getItem('activeClientSession') || '{}');

  const tabs = [
    { id: 'company', label: 'Company Info', completed: true },
    { id: 'goals', label: 'Goals & Targets', completed: true },
    { id: 'competitors', label: 'Competitors', completed: false },
    { id: 'assets', label: 'Assets & Uploads', completed: false },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-br from-[#5B8EE2] to-[#4A75BA] rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-black font-['Plus_Jakarta_Sans',sans-serif] mb-2">Welcome to your Workspace</h1>
          <p className="text-blue-100 max-w-xl text-sm leading-relaxed">
            Let's get started on your journey. Please complete the requirement gathering process so our team can begin your deep discovery phase.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex-1 bg-black/20 h-2 rounded-full overflow-hidden">
              <div className="bg-white w-1/2 h-full rounded-full"></div>
            </div>
            <span className="text-xs font-bold">50% Completed</span>
          </div>
        </div>
      </div>

      {/* Main Onboarding UI */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Navigation Sidebar inside the workspace */}
        <div className="lg:col-span-1 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                activeTab === tab.id 
                  ? 'bg-white border-2 border-[#5B8EE2] shadow-sm' 
                  : 'bg-white border border-[#E5E7EB] hover:border-blue-300'
              }`}
            >
              <div className="flex items-center gap-3">
                {tab.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                )}
                <span className={`text-sm font-bold ${activeTab === tab.id ? 'text-[#5B8EE2]' : 'text-slate-700'}`}>
                  {tab.label}
                </span>
              </div>
              <ChevronRight className={`w-4 h-4 ${activeTab === tab.id ? 'text-[#5B8EE2]' : 'text-slate-400'}`} />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 shadow-sm">
          {activeTab === 'company' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">Company Information</h2>
                  <p className="text-sm text-slate-500 mt-1">Tell us about {currentClient.company_name}.</p>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Company Name</label>
                  <input type="text" defaultValue={currentClient.company_name} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900" disabled />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Industry</label>
                  <input type="text" defaultValue={currentClient.industry} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900" disabled />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Briefly describe your current business</label>
                  <textarea rows={3} defaultValue={currentClient.details?.business_model || "We provide custom solutions..."} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900" disabled></textarea>
                </div>
              </div>
              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button onClick={() => setActiveTab('goals')} className="px-6 py-2.5 bg-[#5B8EE2] hover:bg-blue-600 text-white rounded-xl text-sm font-bold transition-colors flex items-center gap-2">
                  Next Section <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {activeTab === 'competitors' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
              <div>
                <h2 className="text-xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">Competitor Analysis</h2>
                <p className="text-sm text-slate-500 mt-1">Who are your main competitors in the market?</p>
              </div>
              
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Top 3 Competitors</label>
                  <textarea rows={3} placeholder="1. XYZ Corp\n2. Acme Software\n3. Globex IT" className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-[#5B8EE2] focus:ring-2 focus:ring-blue-100 outline-none transition-all"></textarea>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">What makes you different? (USP)</label>
                  <textarea rows={3} placeholder="Our software integrates with legacy hardware better than anyone else." className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:border-[#5B8EE2] focus:ring-2 focus:ring-blue-100 outline-none transition-all"></textarea>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-slate-100 mt-8">
                <button className="px-6 py-2.5 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-xl text-sm font-bold transition-colors flex items-center gap-2">
                  <Save className="w-4 h-4" /> Save Draft
                </button>
                <button onClick={() => setActiveTab('assets')} className="px-6 py-2.5 bg-[#5B8EE2] hover:bg-blue-600 text-white rounded-xl text-sm font-bold transition-colors flex items-center gap-2">
                  Next Section <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Dummy placeholders for others to keep it brief */}
          {(activeTab === 'goals' || activeTab === 'assets') && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <Play className="w-6 h-6 text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-700">Section Content</h3>
              <p className="text-sm text-slate-500 max-w-xs mt-2">This section is part of the onboarding flow and requires client input.</p>
              <button onClick={() => setActiveTab('competitors')} className="mt-6 text-[#5B8EE2] font-bold text-sm">Go to Competitors</button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
