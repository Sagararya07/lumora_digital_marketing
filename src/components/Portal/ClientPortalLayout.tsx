import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  CheckSquare, 
  Folder, 
  LogOut, 
  Menu, 
  X,
  Bell,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { LumoraLogo } from '../common/LumoraLogo';

export const ClientPortalLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState<any>(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isSetupMode, setIsSetupMode] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('setup') === 'true') {
      setIsSetupMode(true);
      if (params.get('email')) setLoginEmail(params.get('email') as string);
    }
    const savedClient = localStorage.getItem('activeClientSession');
    if (savedClient) {
      setCurrentClient(JSON.parse(savedClient));
    }
    setLoading(false);
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      if (isSetupMode) {
        const res = await fetch('/api/clients/set-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: loginEmail, password: loginPassword })
        });
        const data = await res.json();
        if (res.ok) {
          alert('Password set successfully! Please log in.');
          setIsSetupMode(false);
          setLoginPassword('');
        } else {
          setLoginError(data.error || 'Setup failed.');
        }
      } else {
        const res = await fetch('/api/clients/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: loginEmail, password: loginPassword })
        });
        const data = await res.json();
        if (res.ok && data.success) {
          setCurrentClient(data.client);
          localStorage.setItem('activeClientSession', JSON.stringify(data.client));
        } else {
          setLoginError(data.error || 'Login failed.');
        }
      }
    } catch (err) {
      setLoginError('Network error connecting to server.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('activeClientSession');
    setCurrentClient(null);
    navigate('/');
  };

  if (loading) return null;

  if (!currentClient) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-['Inter',sans-serif]">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <div className="flex justify-center mb-4">
            <LumoraLogo size="lg" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
            {isSetupMode ? 'Setup Account' : 'Client Portal Access'}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {isSetupMode ? 'Create a password for your new workspace.' : 'Enter your credentials to access your workspace.'}
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-sm border border-slate-200 sm:rounded-2xl sm:px-10">
            <form className="space-y-6" onSubmit={handleAuth}>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                  Business Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="block w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-[#5B8EE2] focus:ring-[#5B8EE2] sm:text-sm outline-none"
                  placeholder="you@company.com"
                  readOnly={isSetupMode}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-bold text-slate-900 mb-2">
                  {isSetupMode ? 'Create Password' : 'Password'}
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="block w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 shadow-sm focus:border-[#5B8EE2] focus:ring-[#5B8EE2] sm:text-sm outline-none"
                  placeholder="••••••••"
                />
              </div>

              {loginError && (
                <div className="text-sm text-rose-600 bg-rose-50 border border-rose-100 p-3 rounded-lg">
                  {loginError}
                </div>
              )}

              <button
                type="submit"
                className="flex w-full justify-center items-center gap-2 rounded-xl border border-transparent bg-gradient-to-r from-[#5B8EE2] to-[#729EE6] py-3 px-4 text-sm font-bold text-white shadow-sm hover:opacity-90 focus:outline-none transition-all"
              >
                {isSetupMode ? 'Complete Setup' : 'Enter Portal'} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            
            {!isSetupMode && (
              <div className="mt-6 text-center">
                <a href="#" className="text-sm font-semibold text-[#5B8EE2] hover:text-blue-700 transition-colors">
                  Forgot your password?
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { name: 'Workspace', path: '/portal', icon: LayoutDashboard },
    { name: 'Proposals', path: '/portal/proposals', icon: FileText },
    { name: 'Tasks & Milestones', path: '/portal/tasks', icon: CheckSquare },
    { name: 'Documents', path: '/portal/documents', icon: Folder },
    { name: 'Meetings', path: '/portal/meetings', icon: Calendar },
    { name: 'Messages', path: '/portal/messages', icon: MessageSquare },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-['Inter',sans-serif] overflow-hidden">
      
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 w-72 bg-white border-r border-[#E5E7EB] z-50 transform transition-transform duration-300 shadow-sm flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB] shrink-0">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <LumoraLogo size="sm" />
            <span className="font-black text-lg text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Client Portal
            </span>
          </div>
          <button className="lg:hidden text-slate-400 hover:text-[#111827]" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 border-b border-[#E5E7EB] bg-slate-50 shrink-0">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Current Account</p>
          <h3 className="text-sm font-extrabold text-[#111827]">{currentClient.company_name} ({currentClient.client_id})</h3>
          <p className="text-xs text-slate-500 mt-1">Status: <span className="font-semibold text-[#5B8EE2]">{currentClient.status}</span></p>
        </div>

        {/* Navigation */}
        <nav className="p-4 flex-1 overflow-y-auto">
          <div className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F2F6FC] to-[#F8FAFC] text-[#5B8EE2] border border-blue-100 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-[#111827]'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-[#5B8EE2]' : 'text-slate-400'}`} />
                  {item.name}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#E5E7EB] shrink-0">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-all"
          >
            <LogOut className="w-5 h-5 text-slate-400 group-hover:text-rose-500" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#F8FAFC] relative">
        
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-[#E5E7EB] px-6 sm:px-8 flex items-center justify-between shrink-0 shadow-sm sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden sm:block">
              <h2 className="text-xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
                Welcome back, {currentClient.contact_name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-[#5B8EE2] relative transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5B8EE2] to-[#D6A67B] flex items-center justify-center text-white font-bold text-sm shadow-md uppercase">
              {currentClient.contact_name.charAt(0)}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
