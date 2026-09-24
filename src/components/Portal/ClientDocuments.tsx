import React from 'react';
import { Folder, UploadCloud } from 'lucide-react';

export const ClientDocuments: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">Documents Hub</h2>
        <p className="text-slate-500 mt-1">Shared files, contracts, and brand assets.</p>
      </div>

      <div className="bg-white p-12 rounded-2xl border border-slate-200 border-dashed text-center">
        <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-100 shadow-sm">
          <Folder className="w-8 h-8 text-[#5B8EE2]" />
        </div>
        <h3 className="font-bold text-slate-900 mb-2">No documents shared yet</h3>
        <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">Upload your brand guidelines, logo files, and other required assets for the Lumora team to use in your campaigns.</p>
        
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-sm">
          <UploadCloud className="w-4 h-4" /> Upload Files
        </button>
      </div>
    </div>
  );
};
