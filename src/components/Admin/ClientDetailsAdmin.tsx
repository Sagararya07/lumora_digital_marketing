import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, FileText, User, Briefcase, Activity, AlertCircle, MessageSquare, Bell, Edit2, Trash2, X, Calendar, Paperclip, Download, Edit3 } from 'lucide-react';

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
  const [newTaskReportUrl, setNewTaskReportUrl] = useState('');
  const [newTaskReportName, setNewTaskReportName] = useState('');
  const [uploadingTaskReport, setUploadingTaskReport] = useState(false);

  // Task edit state
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editTaskTitle, setEditTaskTitle] = useState('');
  const [editTaskDesc, setEditTaskDesc] = useState('');
  const [editTaskStartDate, setEditTaskStartDate] = useState('');
  const [editTaskEndDate, setEditTaskEndDate] = useState('');
  const [editTaskReportUrl, setEditTaskReportUrl] = useState('');
  const [editTaskReportName, setEditTaskReportName] = useState('');
  const [uploadingEditTaskReport, setUploadingEditTaskReport] = useState(false);

  // Meeting state
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingDesc, setMeetingDesc] = useState('');
  const [meetingOpt1, setMeetingOpt1] = useState('');
  const [meetingOpt2, setMeetingOpt2] = useState('');
  const [meetingOpt3, setMeetingOpt3] = useState('');
  const [meetingReportUrl, setMeetingReportUrl] = useState('');
  const [meetingReportName, setMeetingReportName] = useState('');
  const [uploadingMeetingReport, setUploadingMeetingReport] = useState(false);

  const [loading, setLoading] = useState(true);

  // Edit Info state
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [editInfo, setEditInfo] = useState<any>({});

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
      if (clientRes.ok) {
        const data = await clientRes.json();
        setClient(data);
        setEditInfo(data);
      }
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

  const handleSaveInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/clients/${clientId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editInfo)
      });
      if (res.ok) {
        setIsEditingInfo(false);
        fetchClientData();
      } else {
        alert('Failed to save details');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to save details');
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
          option3: meetingOpt3,
          document_url: meetingReportUrl,
          document_name: meetingReportName
        })
      });
      if (res.ok) {
        setMeetingTitle('');
        setMeetingDesc('');
        setMeetingOpt1('');
        setMeetingOpt2('');
        setMeetingOpt3('');
        setMeetingReportUrl('');
        setMeetingReportName('');
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
          end_date: newTaskEndDate,
          report_url: newTaskReportUrl,
          report_name: newTaskReportName
        })
      });
      if (res.ok) {
        setNewTaskTitle('');
        setNewTaskDesc('');
        setNewTaskStartDate('');
        setNewTaskEndDate('');
        setNewTaskReportUrl('');
        setNewTaskReportName('');
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
          end_date: editTaskEndDate,
          report_url: editTaskReportUrl,
          report_name: editTaskReportName
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
    setEditTaskReportUrl(t.report_url || '');
    setEditTaskReportName(t.report_name || '');
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
  const handleUploadTaskReport = async (e: React.ChangeEvent<HTMLInputElement>, isEdit: boolean) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    if (isEdit) setUploadingEditTaskReport(true);
    else setUploadingTaskReport(true);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (uploadRes.ok) {
        const { url } = await uploadRes.json();
        if (isEdit) {
          setEditTaskReportUrl(url);
          setEditTaskReportName(file.name);
        } else {
          setNewTaskReportUrl(url);
          setNewTaskReportName(file.name);
        }
      } else {
        alert('Upload failed');
      }
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      if (isEdit) setUploadingEditTaskReport(false);
      else setUploadingTaskReport(false);
    }
  };

  const handleUploadMeetingReport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    setUploadingMeetingReport(true);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (uploadRes.ok) {
        const { url } = await uploadRes.json();
        setMeetingReportUrl(url);
        setMeetingReportName(file.name);
      } else {
        alert('Upload failed');
      }
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      setUploadingMeetingReport(false);
    }
  };

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
          <div className="space-y-6 max-w-4xl animate-in fade-in">
            {isEditingInfo ? (
              <form onSubmit={handleSaveInfo} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="font-bold text-slate-900 text-lg">Edit Company Details</h3>
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => { setIsEditingInfo(false); setEditInfo(client); }} className="px-3 py-1.5 text-sm font-bold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200">Cancel</button>
                    <button type="submit" className="px-3 py-1.5 text-sm font-bold text-white bg-[#5B8EE2] rounded-lg hover:bg-blue-600">Save Changes</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">Company Name</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.company_name || ''} onChange={e => setEditInfo({...editInfo, company_name: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">Industry</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.industry || ''} onChange={e => setEditInfo({...editInfo, industry: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">Location</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.location || ''} onChange={e => setEditInfo({...editInfo, location: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">Company Website</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.company_website || ''} onChange={e => setEditInfo({...editInfo, company_website: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">Company Contact</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.company_contact || ''} onChange={e => setEditInfo({...editInfo, company_contact: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">Company Social Links</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.company_social_links || ''} onChange={e => setEditInfo({...editInfo, company_social_links: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">Number of Employees</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.employees_count || ''} onChange={e => setEditInfo({...editInfo, employees_count: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">Revenue</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.revenue || ''} onChange={e => setEditInfo({...editInfo, revenue: e.target.value})} /></div>
                </div>
                
                <div className="border-t border-slate-100 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">Founder Name</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.founder_name || ''} onChange={e => setEditInfo({...editInfo, founder_name: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">CXO Name</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.cxo_name || ''} onChange={e => setEditInfo({...editInfo, cxo_name: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">CXO Contact</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.cxo_contact || ''} onChange={e => setEditInfo({...editInfo, cxo_contact: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">CXO Social Media</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.cxo_social_media || ''} onChange={e => setEditInfo({...editInfo, cxo_social_media: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">CXO Other Details</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.cxo_other || ''} onChange={e => setEditInfo({...editInfo, cxo_other: e.target.value})} /></div>
                  <div><label className="block text-xs font-bold text-slate-500 mb-1">Enriched Date</label><input type="text" className="w-full px-3 py-2 border rounded-lg text-sm" value={editInfo.enriched_date || ''} onChange={e => setEditInfo({...editInfo, enriched_date: e.target.value})} /></div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <label className="block text-xs font-bold text-slate-500 mb-1">Business Model</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-lg text-sm mb-4" value={editInfo.business_model || ''} onChange={e => setEditInfo({...editInfo, business_model: e.target.value})} />
                  
                  <label className="block text-xs font-bold text-slate-500 mb-1">Requirement / Details</label>
                  <textarea className="w-full px-3 py-2 border rounded-lg text-sm h-32" value={typeof editInfo.details === 'string' ? editInfo.details : editInfo.details?.primary_goal || JSON.stringify(editInfo.details) || ''} onChange={e => setEditInfo({...editInfo, details: e.target.value})}></textarea>
                </div>
              </form>
            ) : (
              <>
                <div className="flex justify-end mb-[-1rem] relative z-10">
                  <button onClick={() => setIsEditingInfo(true)} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-50 shadow-sm transition-colors">
                    <Edit3 className="w-4 h-4" /> Edit Details
                  </button>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                    <h3 className="font-bold text-slate-900 text-lg">Company Overview</h3>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div><span className="text-xs font-bold text-slate-400 uppercase">Industry</span><p className="font-medium text-slate-900 mt-1">{client.industry || '-'}</p></div>
                    <div><span className="text-xs font-bold text-slate-400 uppercase">Location</span><p className="font-medium text-slate-900 mt-1">{client.location || '-'}</p></div>
                    <div><span className="text-xs font-bold text-slate-400 uppercase">Employees</span><p className="font-medium text-slate-900 mt-1">{client.employees_count || '-'}</p></div>
                    <div><span className="text-xs font-bold text-slate-400 uppercase">Revenue</span><p className="font-medium text-slate-900 mt-1">{client.revenue ? (client.revenue.length > 8 ? '$'+(parseInt(client.revenue)/1000000).toFixed(1)+'M' : '$'+client.revenue) : '-'}</p></div>
                    <div className="col-span-full"><span className="text-xs font-bold text-slate-400 uppercase">Website</span><p className="font-medium text-[#5B8EE2] mt-1">{client.company_website ? <a href={client.company_website} target="_blank" rel="noreferrer" className="hover:underline">{client.company_website}</a> : '-'}</p></div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                    <h3 className="font-bold text-slate-900 text-lg">Key Contacts</h3>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase">Primary Contact</span>
                      <p className="font-medium text-slate-900 mt-1">{client.contact_name || '-'}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{client.email}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{client.company_contact}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase">Founder / CEO</span>
                      <p className="font-medium text-slate-900 mt-1">{client.founder_name || '-'}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase">CXO Name</span>
                      <p className="font-medium text-slate-900 mt-1">{client.cxo_name || '-'}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{client.cxo_contact}</p>
                      {client.cxo_social_media && <a href={client.cxo_social_media} target="_blank" rel="noreferrer" className="text-sm text-[#5B8EE2] hover:underline mt-0.5 inline-block">LinkedIn</a>}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                    <h3 className="font-bold text-slate-900 text-lg">Business Requirement</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase">Business Model</span>
                      <p className="text-sm font-medium text-slate-900 mt-1">{client.business_model || 'Not provided'}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase">Details</span>
                      <div className="text-sm text-slate-700 mt-1 bg-slate-50 p-4 rounded-xl leading-relaxed whitespace-pre-wrap">
                        {typeof client.details === 'string' ? client.details : (client.details?.primary_goal || 'No specific goals written in form.')}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
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
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Attach Report/Document (Optional)</label>
                  <div className="flex items-center gap-4">
                    <label className={`flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm cursor-pointer hover:bg-slate-50 ${uploadingTaskReport ? 'opacity-50 pointer-events-none' : ''}`}>
                      <Paperclip className="w-4 h-4" />
                      {uploadingTaskReport ? 'Uploading...' : 'Upload File'}
                      <input type="file" className="hidden" onChange={(e) => handleUploadTaskReport(e, false)} disabled={uploadingTaskReport} />
                    </label>
                    {newTaskReportName && <span className="text-sm text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> {newTaskReportName}</span>}
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
                      <div className="flex items-center gap-4">
                        <label className={`flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded text-sm cursor-pointer hover:bg-slate-50 ${uploadingEditTaskReport ? 'opacity-50 pointer-events-none' : ''}`}>
                          <Paperclip className="w-4 h-4" />
                          {uploadingEditTaskReport ? 'Uploading...' : 'Update Attachment'}
                          <input type="file" className="hidden" onChange={(e) => handleUploadTaskReport(e, true)} disabled={uploadingEditTaskReport} />
                        </label>
                        {editTaskReportName && (
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <span>{editTaskReportName}</span>
                            <button onClick={() => { setEditTaskReportUrl(''); setEditTaskReportName(''); }} className="text-red-500 hover:text-red-700"><X className="w-4 h-4" /></button>
                          </div>
                        )}
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
                        {t.report_url && (
                          <div className="mt-3 flex items-center gap-2">
                            <a href={t.report_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-md text-xs font-bold hover:bg-blue-100 transition-colors">
                              <Download className="w-3.5 h-3.5" />
                              {t.report_name || 'Download Report'}
                            </a>
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
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Attach Document (Optional)</label>
                  <div className="flex items-center gap-4">
                    <label className={`flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm cursor-pointer hover:bg-slate-50 ${uploadingMeetingReport ? 'opacity-50 pointer-events-none' : ''}`}>
                      <Paperclip className="w-4 h-4" />
                      {uploadingMeetingReport ? 'Uploading...' : 'Upload Document'}
                      <input type="file" className="hidden" onChange={handleUploadMeetingReport} disabled={uploadingMeetingReport} />
                    </label>
                    {meetingReportName && <span className="text-sm text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> {meetingReportName}</span>}
                  </div>
                </div>
                <button type="submit" className="px-4 py-2 bg-[#5B8EE2] text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors w-fit">
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
                    {m.document_url && (
                      <div className="mt-2">
                        <a href={m.document_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-bold transition-colors">
                          <Download className="w-3 h-3" />
                          {m.document_name || 'Attached Document'}
                        </a>
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
