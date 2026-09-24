import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface ClientTasksProps {
  clientId: string;
}

export const ClientTasks: React.FC<ClientTasksProps> = ({ clientId }) => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/clients/${clientId}/tasks`)
      .then(res => res.json())
      .then(data => {
        setTasks(data || []);
        setLoading(false);
      });
  }, [clientId]);

  if (loading) return <div className="p-8 text-slate-500 animate-pulse">Loading tasks...</div>;

  const completedCount = tasks.filter(t => t.is_completed).length;
  const progress = tasks.length === 0 ? 0 : Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="max-w-4xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">Goals & Milestones</h2>
        <p className="text-slate-500 mt-1">Track the progress of your project and see what our team is working on.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
        <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
          <span>Overall Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
          <div className="bg-[#5B8EE2] h-3 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="space-y-4">
        {tasks.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <CheckCircle2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 font-medium">No tasks or goals assigned yet.</p>
          </div>
        ) : (
          tasks.map(t => (
            <div key={t.id} className={`bg-white p-5 rounded-2xl border transition-all ${t.is_completed ? 'border-emerald-200 bg-emerald-50/30 opacity-75' : 'border-slate-200 shadow-sm'}`}>
              <div className="flex items-start gap-4">
                <div className={`mt-0.5 ${t.is_completed ? 'text-emerald-500' : 'text-slate-300'}`}>
                  {t.is_completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className={`font-bold text-lg ${t.is_completed ? 'text-slate-500 line-through' : 'text-slate-900'}`}>{t.title}</h3>
                  {t.description && (
                    <p className={`mt-1 text-sm ${t.is_completed ? 'text-slate-400' : 'text-slate-600'}`}>{t.description}</p>
                  )}
                  <div className="text-xs text-slate-400 mt-3 flex items-center gap-4">
                    <span>Assigned: {new Date(t.created_at).toLocaleDateString()}</span>
                    {(t.start_date || t.end_date) && (
                      <span className="bg-slate-100 text-slate-500 font-bold px-2 py-1 rounded">
                        🗓️ {t.start_date ? new Date(t.start_date).toLocaleDateString() : '???'} - {t.end_date ? new Date(t.end_date).toLocaleDateString() : '???'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
