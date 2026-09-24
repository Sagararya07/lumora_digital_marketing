import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, FileText, User, Briefcase, Activity, AlertCircle, MessageSquare, Bell, Edit2, Trash2, X, Calendar } from 'lucide-react';

interface ClientDetailsAdminProps {
  clientId: string;
  onBack: () => void;
}

export const ClientDetailsAdmin: React.FC<ClientDetailsAdminProps> = ({ clientId, onBack }) => {
  const [activeTab, setActiveTab] = useState('info');
  const [client, setClient] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);
  const [proposals, setProposals] = useState<any[]>([]);
  const [meetings, setMeetings] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  
  // Message edit state
  const [editingMsgId, setEditingMsgId] = useState<number | null>(null);
  const [editMsgContent, setEditMsgContent] = useState('');
  
  // Proposal upload state
  const [uploadingProposal, setUploadingProposal] = useState(false);
  const [proposalTitle, setProposalTitle] = useState('');
  const [proposalAmount, setProposalAmount] = useState('');

  // Task creation state
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [newTaskStartDate, setNewTaskStartDate] = useState('');
  const [newTaskEndDate, setNewTaskEndDate] = useState('');

  // Task edit state
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editTaskTitle, setEditTaskTitle] = useState('');
  const [editTaskDesc, setEditTaskDesc] = useState('');
  const [editTaskStartDate, setEditTaskStartDate] = useState('');
  const [editTaskEndDate, setEditTaskEndDate] = useState('');

  // Meeting state
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingDesc, setMeetingDesc] = useState('');
  const [meetingOpt1, setMeetingOpt1] = useState('');
  const [meetingOpt2, setMeetingOpt2] = useState('');
  const [meetingOpt3, setMeetingOpt3] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClientData();
  }, [clientId]);

  const fetchClientData = async () => {
    setLoading(true);
    try {
      const [clientRes, msgsRes, tasksRes, propsRes, meetingsRes] = await Promise.all([
        fetch(`/api/clients/${clientId}`),
        fetch(`/api/clients/${clientId}/messages`),
        fetch(`/api/clients/${clientId}/tasks`),
        fetch(`/api/clients/${clientId}/proposals`),
        fetch(`/api/clients/${clientId}/meetings`)
      ]);
      if (clientRes.ok) setClient(await clientRes.json());
      if (msgsRes.ok) setMessages(await msgsRes.json());
      if (tasksRes.ok) setTasks(await tasksRes.json());
      if (meetingsRes.ok) setMeetings(await meetingsRes.json());
      if (propsRes.ok) {
        const p = await propsRes.json();
        setProposals(p.proposals);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    try {
      const res = await fetch(`/api/clients/${clientId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender: 'admin', message: newMessage })
      });
      if (res.ok) {
        setNewMessage('');
        fetchClientData(); // Refresh messages
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMessage = async (msgId: number) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    try {
      const res = await fetch(`/api/clients/messages/${msgId}`, { method: 'DELETE' });
      if (res.ok) fetchClientData();
    } catch (err) { console.error(err); }
  };

  const updateMessage = async (e: React.FormEvent, msgId: number) => {
    e.preventDefault();
    if (!editMsgContent.trim()) return;
    try {
      const res = await fetch(`/api/clients/messages/${msgId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: editMsgContent })
      });
      if (res.ok) {
        setEditingMsgId(null);
        fetchClientData();
      }
    } catch (err) { console.error(err); }
  };

  const handleNotifyClient = async () => {
    try {
      const res = await fetch(`/api/clients/${clientId}/messages/notify`, { method: 'POST' });
      if (res.ok) {
        alert('Reminder email sent to the client!');
      } else {
        alert('Failed to send reminder.');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending reminder.');
    }
  };

  const handleUploadProposal = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    if (!proposalTitle || !proposalAmount) {
      alert("Please enter a title and amount before selecting a file.");
      return;
    }
    
    setUploadingProposal(true);
    const formData = new FormData();
    formData.append('image', e.target.files[0]); // using existing upload route
    
    try {
      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      
      if (uploadRes.ok) {
        const { url } = await uploadRes.json();
        
        // Save proposal to db
        await fetch(`/api/clients/${clientId}/proposals`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: proposalTitle,
            amount: proposalAmount,
            file_url: url,
            status: 'Pending'
          })
        });
        
        setProposalTitle('');
        setProposalAmount('');
        fetchClientData();
      }
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      setUploadingProposal(false);
    }
  };

  const handleProposeMeeting = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!meetingTitle || !meetingOpt1 || !meetingOpt2 || !meetingOpt3) {
      alert('Please fill out the title and all 3 time options.');
      return;
    }
    try {
      const res = await fetch(`/api/clients/${clientId}/meetings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title: meetingTitle, 
          description: meetingDesc, 
          option1: meetingOpt1, 
          option2: meetingOpt2, 
          option3: meetingOpt3 
        })
      });
      if (res.ok) {
        setMeetingTitle('');
        setMeetingDesc('');
        setMeetingOpt1('');
        setMeetingOpt2('');
        setMeetingOpt3('');
        alert('Meeting proposal sent to client!');
        fetchClientData();
      }
    } catch (err) {
      console.error(err);
      alert('Failed to propose meeting');
    }
  };

  const handleDeleteMeeting = async (id: number) => {
    if (!confirm('Are you sure you want to delete this meeting?')) return;
    try {
      await fetch(`/api/clients/meetings/${id}`, { method: 'DELETE' });
      fetchClientData();
    } catch (err) { console.error(err); }
  };

  const handleCompleteMeeting = async (id: number) => {
    try {
      await fetch(`/api/clients/meetings/${id}/complete`, { method: 'PUT' });
      fetchClientData();
    } catch (err) { console.error(err); }
  };

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle) return;
    try {
      const res = await fetch(`/api/clients/${clientId}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title: newTaskTitle, 
          description: newTaskDesc,
          start_date: newTaskStartDate,
          end_date: newTaskEndDate
        })
      });
      if (res.ok) {
        setNewTaskTitle('');
        setNewTaskDesc('');
        setNewTaskStartDate('');
        setNewTaskEndDate('');
        fetchClientData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateTask = async (taskId: number) => {
    try {
      const res = await fetch(`/api/clients/tasks/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title: editTaskTitle, 
          description: editTaskDesc,
          start_date: editTaskStartDate,
          end_date: editTaskEndDate
        })
      });
      if (res.ok) {
        setEditingTaskId(null);
        fetchClientData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const startEditingTask = (t: any) => {
    setEditingTaskId(t.id);
    setEditTaskTitle(t.title);
    setEditTaskDesc(t.description || '');
    setEditTaskStartDate(t.start_date ? t.start_date.split('T')[0] : '');
    setEditTaskEndDate(t.end_date ? t.end_date.split('T')[0] : '');
  };

  const toggleTaskCompletion = async (taskId: number, currentStatus: boolean) => {
    try {
      await fetch(`/api/clients/tasks/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_completed: !currentStatus })
      });
      fetchClientData();
    } catch (err) {
      console.error(err);
    }
  };
  
  const toggleProposalStatus = async (propId: number, currentStatus: string) => {
    try {
      await fetch(`/api/clients/proposals/${propId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: currentStatus === 'Paid' ? 'Pending' : 'Paid' })
      });
      fetchClientData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemindProposal = async (propId: number) => {
    try {
      const res = await fetch(`/api/clients/proposals/${propId}/notify`, { method: 'POST' });
      if (res.ok) {
        alert('Reminder email sent to the client!');
      } else {
        alert('Failed to send reminder.');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending reminder');
    }
  };

  if (loading || !client) return <div className="p-8 text-slate-500">Loading client details...</div>;

  const tabs = [
    { id: 'info', label: 'Overview', icon: FileText },
    { id: 'chat', label: 'Conversation', icon: MessageSquare },
    { id: 'proposals', label: 'Proposals', icon: Briefcase },
    { id: 'tasks', label: 'Tasks & Goals', icon: CheckCircle2 },
    { id: 'meetings', label: 'Meetings', icon: Calendar }
  ];

  return (
    <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-sm overflow-hidden flex flex-col h-[calc(100vh-120px)]">
      
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">{client.company_name}</h2>
            <p className="text-sm text-slate-500">{client.client_id} · {client.contact_name}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-xs font-bold text-slate-700">{client.status}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-6 border-b border-slate-200 shrink-0">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === tab.id 
                ? 'border-[#5B8EE2] text-[#5B8EE2]' 
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50/50 p-6 custom-scrollbar relative">
        
        {activeTab === 'info' && (
          <div className="space-y-6 max-w-3xl animate-in fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-slate-400 uppercase">Contact Email</span>
                <p className="font-semibold text-slate-900 mt-1">{client.email}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-slate-400 uppercase">Industry</span>
                <p className="font-semibold text-slate-900 mt-1">{client.industry}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2">Business Requirement</h3>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">Business Model</span>
                <p className="text-sm text-slate-700 mt-1">{client.business_model || 'Not provided'}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">Details</span>
                <div className="text-sm text-slate-700 mt-1 bg-slate-50 p-4 rounded-xl">
                  {client.details?.primary_goal || 'No specific goals written in form.'}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="flex flex-col h-full animate-in fade-in relative">
            <div className="flex justify-end mb-2 shrink-0">
              <button 
                onClick={handleNotifyClient}
                className="flex items-center gap-2 text-xs font-bold bg-amber-50 text-amber-600 px-3 py-1.5 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors"
              >
                <Bell className="w-3.5 h-3.5" /> Force Send Reminder
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {messages.length === 0 ? (
                <div className="text-center py-10 text-slate-400 text-sm">No messages yet. Say hello!</div>
              ) : (
                messages.map((msg, idx) => (
                  <div key={idx} className={`flex group ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}>
                    {msg.sender === 'admin' && editingMsgId !== msg.id && (
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mr-2">
                        <button onClick={() => { setEditingMsgId(msg.id); setEditMsgContent(msg.message); }} className="p-1 text-slate-400 hover:text-blue-500 rounded"><Edit2 className="w-3 h-3" /></button>
                        <button onClick={() => deleteMessage(msg.id)} className="p-1 text-slate-400 hover:text-red-500 rounded"><Trash2 className="w-3 h-3" /></button>
                      </div>
                    )}
                    
                    {editingMsgId === msg.id ? (
                      <form onSubmit={(e) => updateMessage(e, msg.id)} className="w-full max-w-[75%] flex flex-col gap-2">
                        <textarea value={editMsgContent} onChange={e => setEditMsgContent(e.target.value)} className="w-full px-3 py-2 text-sm rounded-xl border border-blue-300 focus:border-[#5B8EE2] outline-none" rows={3}></textarea>
                        <div className="flex justify-end gap-2">
                          <button type="button" onClick={() => setEditingMsgId(null)} className="px-3 py-1 bg-slate-200 text-slate-600 rounded text-xs font-bold">Cancel</button>
                          <button type="submit" className="px-3 py-1 bg-[#5B8EE2] text-white rounded text-xs font-bold">Save</button>
                        </div>
                      </form>
                    ) : (
                      <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm ${
                        msg.sender === 'admin' 
                          ? 'bg-[#5B8EE2] text-white rounded-br-sm' 
                          : 'bg-white border border-slate-200 text-slate-800 rounded-bl-sm'
                      }`}>
                        <p>{msg.message}</p>
                        <span className={`text-[10px] mt-1 flex items-center justify-between opacity-70 ${msg.sender === 'admin' ? 'text-blue-100' : 'text-slate-400'}`}>
                          <span className="flex items-center gap-1">
                            {new Date(msg.created_at).toLocaleString()}
                            {msg.is_edited && <span className="italic opacity-70">(edited)</span>}
                          </span>
                          {msg.sender === 'admin' && msg.is_read && <span className="ml-2 bg-blue-400 px-1 rounded text-[9px]">Seen</span>}
                        </span>
                      </div>
                    )}
                    
                    {msg.sender !== 'admin' && editingMsgId !== msg.id && (
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                         <button onClick={() => deleteMessage(msg.id)} className="p-1 text-slate-400 hover:text-red-500 rounded"><Trash2 className="w-3 h-3" /></button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
            <form onSubmit={sendMessage} className="mt-4 flex gap-2 shrink-0">
              <input 
                type="text" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message to the client..." 
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#5B8EE2]"
              />
              <button type="submit" className="p-3 bg-[#5B8EE2] text-white rounded-xl hover:bg-blue-600 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        {activeTab === 'proposals' && (
          <div className="animate-in fade-in space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Send New Proposal / Invoice</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Proposal Title</label>
                  <input type="text" value={proposalTitle} onChange={e => setProposalTitle(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none" placeholder="e.g. SEO Strategy Q4" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Amount ($)</label>
                  <input type="number" value={proposalAmount} onChange={e => setProposalAmount(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none" placeholder="1500" />
                </div>
              </div>
              <div>
                <label className="inline-flex items-center gap-2 px-4 py-2 bg-[#5B8EE2] text-white text-sm font-bold rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
                  {uploadingProposal ? 'Uploading...' : 'Select File & Send'}
                  <input type="file" className="hidden" onChange={handleUploadProposal} disabled={uploadingProposal} accept=".pdf,.doc,.docx" />
                </label>
                <p className="text-xs text-slate-400 mt-2">Fill in title & amount before selecting file. Notifications are sent automatically.</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-900">Sent Proposals</h3>
              {proposals.length === 0 ? (
                <p className="text-sm text-slate-500">No proposals sent yet.</p>
              ) : proposals.map(p => (
                <div key={p.id} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl">
                  <div>
                    <a href={p.file_url} target="_blank" rel="noreferrer" className="font-bold text-[#5B8EE2] hover:underline flex items-center gap-2">
                      <FileText className="w-4 h-4" /> {p.title}
                    </a>
                    <div className="text-xs text-slate-500 mt-1">Amount: ${p.amount} • Sent: {new Date(p.created_at).toLocaleDateString()}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${p.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {p.status}
                    </span>
                    {p.status === 'Pending' && (
                      <button onClick={() => handleRemindProposal(p.id)} className="text-xs font-bold text-[#5B8EE2] border border-[#5B8EE2] rounded px-3 py-1 hover:bg-blue-50 transition-colors">
                        Remind Client
                      </button>
                    )}
                    <button onClick={() => toggleProposalStatus(p.id, p.status)} className="text-xs border border-slate-200 rounded px-3 py-1 hover:bg-slate-50">
                      Mark as {p.status === 'Paid' ? 'Pending' : 'Paid'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="animate-in fade-in flex flex-col gap-6">
            <form onSubmit={handleCreateTask} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Assign New Task / Goal</h3>
              <div className="space-y-4">
                <div>
                  <input type="text" value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} required placeholder="Task Title (e.g. Provide Brand Assets)" className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none" />
                </div>
                <div>
                  <textarea value={newTaskDesc} onChange={e => setNewTaskDesc(e.target.value)} placeholder="Description (Optional)" className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none resize-none" rows={2} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">Start Date (Optional)</label>
                    <input type="date" value={newTaskStartDate} onChange={e => setNewTaskStartDate(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">End Date (Optional)</label>
                    <input type="date" value={newTaskEndDate} onChange={e => setNewTaskEndDate(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none" />
                  </div>
                </div>
                <button type="submit" className="px-4 py-2 bg-[#5B8EE2] text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors">
                  Assign Task
                </button>
              </div>
            </form>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-900">Active Tasks</h3>
              {tasks.length === 0 ? (
                <p className="text-sm text-slate-500">No tasks assigned yet.</p>
              ) : tasks.map(t => (
                <div key={t.id} className={`flex flex-col p-4 border rounded-xl transition-colors ${t.is_completed ? 'bg-slate-50 border-slate-100 opacity-60' : 'bg-white border-slate-200'}`}>
                  {editingTaskId === t.id ? (
                    <div className="space-y-4">
                      <input type="text" value={editTaskTitle} onChange={e => setEditTaskTitle(e.target.value)} className="w-full px-3 py-2 rounded border border-slate-200 text-sm" />
                      <textarea value={editTaskDesc} onChange={e => setEditTaskDesc(e.target.value)} className="w-full px-3 py-2 rounded border border-slate-200 text-sm" rows={2} />
                      <div className="flex gap-2">
                        <input type="date" value={editTaskStartDate} onChange={e => setEditTaskStartDate(e.target.value)} className="px-3 py-2 rounded border border-slate-200 text-sm" />
                        <input type="date" value={editTaskEndDate} onChange={e => setEditTaskEndDate(e.target.value)} className="px-3 py-2 rounded border border-slate-200 text-sm" />
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleUpdateTask(t.id)} className="px-3 py-1.5 bg-[#5B8EE2] text-white text-xs font-bold rounded">Save</button>
                        <button onClick={() => setEditingTaskId(null)} className="px-3 py-1.5 bg-slate-200 text-slate-700 text-xs font-bold rounded">Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-4">
                      <button onClick={() => toggleTaskCompletion(t.id, t.is_completed)} className={`mt-1 flex-shrink-0 ${t.is_completed ? 'text-emerald-500' : 'text-slate-300 hover:text-slate-400'}`}>
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className={`text-sm font-bold ${t.is_completed ? 'text-slate-500 line-through' : 'text-slate-900'}`}>{t.title}</h4>
                          <button onClick={() => startEditingTask(t)} className="text-xs text-blue-500 hover:underline">Edit</button>
                        </div>
                        {t.description && <p className="text-sm text-slate-500 mt-1">{t.description}</p>}
                        {(t.start_date || t.end_date) && (
                          <div className="text-[11px] font-bold text-slate-400 mt-2 bg-slate-100 inline-block px-2 py-1 rounded">
                            {t.start_date ? new Date(t.start_date).toLocaleDateString() : '???'} - {t.end_date ? new Date(t.end_date).toLocaleDateString() : '???'}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'meetings' && (
          <div className="animate-in fade-in flex flex-col gap-6">
            <form onSubmit={handleProposeMeeting} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-[#5B8EE2]"/> Propose a Meeting</h3>
              <div className="space-y-4">
                <input type="text" value={meetingTitle} onChange={e => setMeetingTitle(e.target.value)} required placeholder="Meeting Title (e.g. Discovery Call)" className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none" />
                <textarea value={meetingDesc} onChange={e => setMeetingDesc(e.target.value)} placeholder="Description or meeting link (Optional)" className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none resize-none" rows={2} />
                
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-500">Provide 3 Options for the Client</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input type="datetime-local" value={meetingOpt1} onChange={e => setMeetingOpt1(e.target.value)} required className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none" />
                    <input type="datetime-local" value={meetingOpt2} onChange={e => setMeetingOpt2(e.target.value)} required className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none" />
                    <input type="datetime-local" value={meetingOpt3} onChange={e => setMeetingOpt3(e.target.value)} required className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm outline-none" />
                  </div>
                </div>

                <button type="submit" className="px-4 py-2 bg-[#5B8EE2] text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors">
                  Propose Meeting
                </button>
              </div>
            </form>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-900">Meeting History</h3>
              {meetings.length === 0 ? (
                <p className="text-sm text-slate-500">No meetings proposed yet.</p>
              ) : meetings.map(m => (
                <div key={m.id} className="bg-white p-4 border border-slate-200 rounded-xl flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      {m.title}
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        m.status === 'Completed' ? 'bg-purple-100 text-purple-700' :
                        m.status === 'Scheduled' ? 'bg-emerald-100 text-emerald-700' : 
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {m.status}
                      </span>
                    </h4>
                    {m.description && <p className="text-xs text-slate-500 mt-1">{m.description}</p>}
                    
                    {m.selected_option && (
                      <div className="text-xs font-bold text-[#5B8EE2] mt-2 bg-blue-50 inline-block px-2 py-1 rounded">
                        Confirmed for: {new Date(m[`option${m.selected_option}`]).toLocaleString()}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {m.status === 'Scheduled' && (
                      <button onClick={() => handleCompleteMeeting(m.id)} className="p-2 text-slate-400 hover:text-emerald-600 rounded-lg hover:bg-emerald-50" title="Mark as Completed">
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                    )}
                    <button onClick={() => handleDeleteMeeting(m.id)} className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50" title="Delete Meeting">
                      <Trash2 className="w-5 h-5" />
                    </button>
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
