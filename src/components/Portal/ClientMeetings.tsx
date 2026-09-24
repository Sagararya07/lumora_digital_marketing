import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';

interface ClientMeetingsProps {
  clientId: string;
}

export const ClientMeetings: React.FC<ClientMeetingsProps> = ({ clientId }) => {
  const [meetings, setMeetings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMeetings = async () => {
    try {
      const res = await fetch(`/api/clients/${clientId}/meetings`);
      if (res.ok) {
        setMeetings(await res.json());
      }
    } catch (err) {
      console.error('Failed to fetch meetings', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeetings();
  }, [clientId]);

  const selectOption = async (meetingId: number, optionNum: number) => {
    if (!confirm(`Are you sure you want to select Option ${optionNum}?`)) return;
    try {
      const res = await fetch(`/api/clients/meetings/${meetingId}/select`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selected_option: optionNum })
      });
      if (res.ok) {
        fetchMeetings();
        alert('Meeting time confirmed!');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to select meeting time.');
    }
  };

  if (loading) return <div className="p-8 text-slate-500 animate-pulse">Loading meetings...</div>;

  const pendingMeetings = meetings.filter(m => m.status === 'Pending');
  const scheduledMeetings = meetings.filter(m => m.status === 'Scheduled');
  const completedMeetings = meetings.filter(m => m.status === 'Completed');

  return (
    <div className="max-w-4xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">Meetings</h2>
        <p className="text-slate-500 mt-1">Review and confirm proposed meeting times with our team.</p>
      </div>

      <div className="space-y-8">
        
        {/* Pending Meetings */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-500"/> Needs Your Confirmation
          </h3>
          {pendingMeetings.length === 0 ? (
            <p className="text-sm text-slate-500 bg-white p-6 rounded-2xl border border-slate-200">No pending meeting proposals.</p>
          ) : (
            <div className="space-y-4">
              {pendingMeetings.map(m => (
                <div key={m.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-amber-500">
                  <h4 className="font-bold text-lg text-slate-900">{m.title}</h4>
                  {m.description && <p className="text-sm text-slate-600 mt-1">{m.description}</p>}
                  
                  <div className="mt-6">
                    <p className="text-sm font-bold text-slate-700 mb-3">Please select one of the following times:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[1, 2, 3].map(num => (
                        <button
                          key={num}
                          onClick={() => selectOption(m.id, num)}
                          className="flex flex-col items-center justify-center p-4 border-2 border-slate-100 rounded-xl hover:border-[#5B8EE2] hover:bg-blue-50 transition-all text-left"
                        >
                          <span className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Option {num}</span>
                          <span className="text-sm font-bold text-[#5B8EE2]">
                            {new Date(m[`option${num}`]).toLocaleString([], { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Scheduled Meetings */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-500"/> Scheduled Meetings
          </h3>
          {scheduledMeetings.length === 0 ? (
            <p className="text-sm text-slate-500 bg-white p-6 rounded-2xl border border-slate-200">No upcoming scheduled meetings.</p>
          ) : (
            <div className="space-y-4">
              {scheduledMeetings.map(m => (
                <div key={m.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 rounded-xl">
                    <Calendar className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">{m.title}</h4>
                    {m.description && <p className="text-sm text-slate-600 mt-1">{m.description}</p>}
                    <div className="mt-3 inline-block px-3 py-1.5 bg-slate-100 rounded-lg text-sm font-bold text-slate-700">
                      🗓️ {new Date(m[`option${m.selected_option}`]).toLocaleString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Completed Meetings */}
        {completedMeetings.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-500"/> Past Meetings
            </h3>
            <div className="space-y-4">
              {completedMeetings.map(m => (
                <div key={m.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 opacity-75">
                  <div className="p-3 bg-purple-50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 line-through text-slate-500">{m.title}</h4>
                    {m.description && <p className="text-sm text-slate-500 mt-1">{m.description}</p>}
                    <div className="mt-3 inline-block px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-400">
                      Completed: {new Date(m[`option${m.selected_option}`]).toLocaleString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
