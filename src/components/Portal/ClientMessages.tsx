import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageSquare, Edit2, Trash2 } from 'lucide-react';

interface ClientMessagesProps {
  clientId: string;
}

export const ClientMessages: React.FC<ClientMessagesProps> = ({ clientId }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [editingMsgId, setEditingMsgId] = useState<number | null>(null);
  const [editMsgContent, setEditMsgContent] = useState('');
  const [loading, setLoading] = useState(true);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const fetchMessages = () => {
    fetch(`/api/clients/${clientId}/messages`)
      .then(res => res.json())
      .then(data => {
        setMessages(data || []);
        setLoading(false);
        scrollToBottom();
        
        // Mark messages as read
        fetch(`/api/clients/${clientId}/messages/read`, { method: 'PUT' }).catch(console.error);
      });
  };

  useEffect(() => {
    fetchMessages();
    // Poll for new messages every 10 seconds
    const interval = setInterval(fetchMessages, 10000);
    return () => clearInterval(interval);
  }, [clientId]);

  const scrollToBottom = () => {
    setTimeout(() => {
      endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    try {
      const res = await fetch(`/api/clients/${clientId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender: 'client', message: newMessage })
      });
      if (res.ok) {
        setNewMessage('');
        fetchMessages();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMessage = async (msgId: number) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    try {
      const res = await fetch(`/api/clients/messages/${msgId}`, { method: 'DELETE' });
      if (res.ok) fetchMessages();
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
        fetchMessages();
      }
    } catch (err) { console.error(err); }
  };

  if (loading && messages.length === 0) return <div className="p-8 text-slate-500 animate-pulse">Loading messages...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 h-[calc(100vh-80px)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-2xl font-black text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">Messages</h2>
        <p className="text-slate-500 mt-1">Direct communication with your account manager.</p>
      </div>

      <div className="flex-1 bg-white border border-slate-200 rounded-t-2xl shadow-sm overflow-y-auto p-6 space-y-6">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-400">
            <MessageSquare className="w-12 h-12 mb-3 text-slate-200" />
            <p>No messages yet. Send a message to start the conversation.</p>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`flex group ${msg.sender === 'client' ? 'justify-end' : 'justify-start'}`}>
              
              {msg.sender === 'client' && editingMsgId !== msg.id && (
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mr-2">
                  <button onClick={() => { setEditingMsgId(msg.id); setEditMsgContent(msg.message); }} className="p-1.5 text-slate-400 hover:text-blue-500 rounded-full hover:bg-slate-100"><Edit2 className="w-4 h-4" /></button>
                  <button onClick={() => deleteMessage(msg.id)} className="p-1.5 text-slate-400 hover:text-red-500 rounded-full hover:bg-slate-100"><Trash2 className="w-4 h-4" /></button>
                </div>
              )}

              {editingMsgId === msg.id ? (
                <form onSubmit={(e) => updateMessage(e, msg.id)} className="w-full max-w-[80%] flex flex-col gap-2">
                  <textarea value={editMsgContent} onChange={e => setEditMsgContent(e.target.value)} className="w-full px-4 py-3 text-[15px] rounded-2xl border border-blue-300 focus:border-[#5B8EE2] outline-none shadow-sm" rows={3}></textarea>
                  <div className="flex justify-end gap-2">
                    <button type="button" onClick={() => setEditingMsgId(null)} className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm font-bold hover:bg-slate-200">Cancel</button>
                    <button type="submit" className="px-4 py-1.5 bg-[#5B8EE2] text-white rounded-lg text-sm font-bold hover:bg-blue-600">Save</button>
                  </div>
                </form>
              ) : (
                <div className={`max-w-[80%] px-5 py-4 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                  msg.sender === 'client' 
                    ? 'bg-[#5B8EE2] text-white rounded-br-sm' 
                    : 'bg-slate-50 border border-slate-100 text-slate-800 rounded-bl-sm'
                }`}>
                  <p>{msg.message}</p>
                  <span className={`text-[11px] mt-2 flex items-center justify-between font-medium ${msg.sender === 'client' ? 'text-blue-100' : 'text-slate-400'}`}>
                    <span className="flex items-center gap-1">
                      {new Date(msg.created_at).toLocaleString()}
                      {msg.is_edited && <span className="italic opacity-80">(edited)</span>}
                    </span>
                  </span>
                </div>
              )}
            </div>
          ))
        )}
        <div ref={endOfMessagesRef} />
      </div>

      <div className="bg-white border-x border-b border-slate-200 rounded-b-2xl p-4 shadow-sm flex-shrink-0">
        <form onSubmit={sendMessage} className="flex gap-3">
          <input 
            type="text" 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message here..." 
            className="flex-1 px-5 py-3 rounded-xl border border-slate-200 text-slate-800 outline-none focus:border-[#5B8EE2] focus:ring-1 focus:ring-[#5B8EE2] transition-shadow"
          />
          <button type="submit" className="px-6 py-3 bg-[#5B8EE2] text-white font-bold rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-sm shadow-blue-500/30">
            Send <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
