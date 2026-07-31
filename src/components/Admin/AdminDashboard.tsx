import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  MapPin,
  Briefcase,
  Layers,
  GraduationCap,
  Users,
  BookOpen,
  MessageSquare,
  Rss,
  Menu,
  X,
  Plus,
  Edit,
  Trash2,
  Globe,
  FileText,
  Home,
  FolderDot,
  Inbox,
  ChevronDown,
  ChevronUp,
  Settings,
  ExternalLink,
  Save,
  RefreshCw,
} from 'lucide-react';
import { SiteContent, DynamicPage } from '../../types';
import { TABLE_CONFIGS, SECTION_SETTINGS, FieldConfig } from './adminConfig';
import { LumoraLogo } from '../common/LumoraLogo';
import { LeadGenServicesEditor } from './LeadGenServicesEditor';

interface AdminDashboardProps {
  onExitAdmin: () => void;
  siteContent: SiteContent;
  onUpdateSiteContent: (updated: SiteContent) => void;
  dynamicPages: DynamicPage[];
  onRefreshPages: () => void;
  onRefreshContent: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onExitAdmin,
  siteContent,
  onUpdateSiteContent,
  dynamicPages,
  onRefreshPages,
  onRefreshContent,
}) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    'HOME PAGE CONTENT': true,
    RESOURCES: true,
    SYSTEM: true,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validUser = import.meta.env.VITE_ADMIN_USERNAME || 'admin';
    const validPass = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

    if (username === validUser && password === validPass) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen bg-[#F8FAFC] items-center justify-center font-['Inter',sans-serif] relative overflow-hidden">
        {/* Ambient Light Blue & Purple Glow Orbs */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none z-0" />

        <div className="w-full max-w-md relative z-10 p-4">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E5E7EB] shadow-2xl">
            <div className="flex flex-col items-center mb-8">
              <LumoraLogo size="lg" className="mb-4" />
              <h1 className="text-2xl font-black text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                Admin CMS
              </h1>
              <p className="text-sm text-[#6B7280] mt-1 font-normal">
                Log in to manage your Lumora website
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-widest mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-sm text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-widest mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-sm text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
                  placeholder="••••••••"
                  required
                />
              </div>

              {loginError && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl text-rose-600 text-xs font-bold text-center">
                  {loginError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] text-white text-sm font-extrabold shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
              >
                Secure Login
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB] text-center">
              <button
                onClick={onExitAdmin}
                className="text-xs font-bold text-[#6B7280] hover:text-[#2563EB] transition-colors flex items-center gap-1.5 justify-center w-full"
              >
                <Home className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Return to Live Site</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const sidebarNav = [
    {
      title: 'HOME PAGE CONTENT',
      items: [
        { id: 'hero_section', label: 'Hero Section', icon: Home },
        { id: 'section_settings', label: 'Section Headers', icon: Settings },
        { id: 'digital_marketing_content', label: 'What Is Digital Mkt', icon: GraduationCap },
        { id: 'target_audience', label: 'Target Audience', icon: Users },
        { id: 'services', label: 'Services', icon: Briefcase },
        { id: 'why_choose_us', label: 'Why Choose Us', icon: BookOpen },
        { id: 'process_steps', label: 'Our Process', icon: Layers },
        { id: 'industries', label: 'Industries', icon: MapPin },
        { id: 'faqs', label: 'FAQs', icon: MessageSquare },
        { id: 'partner_logos', label: 'Client Brand Logos', icon: Globe },
      ],
    },
    {
      title: 'RESOURCES',
      items: [
        { id: 'resource_lead_gen', label: 'Lead Generation Services', icon: FileText },
      ],
    },
    {
      title: 'PORTFOLIO',
      items: [{ id: 'achievements', label: 'Case Studies', icon: FolderDot }],
    },
    {
      title: 'INQUIRIES & LEADS',
      items: [{ id: 'consultation_submissions', label: 'Leads Inbox', icon: Inbox }],
    },
    {
      title: 'SYSTEM',
      items: [
        { id: 'site_settings', label: 'Contact & Social', icon: Settings },
        { id: 'pages', label: 'Dynamic Pages', icon: Rss },
        { id: 'sitemap', label: 'Sitemap & SEO', icon: Globe },
      ],
    },
  ];

  const handleContentSaved = () => {
    onRefreshContent();
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-[#111827] font-['Inter',sans-serif] overflow-hidden">
      
      {/* Mobile Backdrop */}
      {!isSidebarOpen && (
        <div className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-xs" onClick={() => setIsSidebarOpen(true)} />
      )}

      {/* Sidebar Container */}
      <aside className={`fixed lg:static inset-y-0 left-0 w-72 bg-white border-r border-[#E5E7EB] z-50 transform transition-transform duration-300 shadow-sm ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        
        {/* Sidebar Header with Lumora Logo */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-3">
            <LumoraLogo size="sm" />
            <span className="font-black text-lg text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Admin CMS
            </span>
          </div>
          <button className="lg:hidden text-slate-400 hover:text-[#111827]" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <div className="p-4 overflow-y-auto h-[calc(100vh-89px)] custom-scrollbar">
          <button
            onClick={() => setActiveMenu('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-extrabold transition-all mb-4 ${
              activeMenu === 'dashboard'
                ? 'bg-blue-50 text-[#2563EB] border border-blue-200 shadow-xs'
                : 'text-slate-600 hover:text-[#111827] hover:bg-slate-50'
            }`}
          >
            <LayoutDashboard className="w-5 h-5 text-[#2563EB]" /> Dashboard
          </button>

          {sidebarNav.map((group, idx) => (
            <div key={idx} className="mb-2">
              <button
                onClick={() => setExpandedMenus((prev) => ({ ...prev, [group.title]: !prev[group.title] }))}
                className="w-full flex items-center justify-between px-4 py-2.5 group hover:bg-slate-50 rounded-xl transition-colors"
              >
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">
                  {group.title}
                </h4>
                {expandedMenus[group.title] ? <ChevronUp className="w-3.5 h-3.5 text-slate-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
              </button>
              
              <div className={`space-y-1 overflow-hidden transition-all duration-300 ${expandedMenus[group.title] ? 'max-h-[600px] opacity-100 mt-1 mb-3' : 'max-h-0 opacity-0'}`}>
                {group.items.map((item) => {
                  const isActive = activeMenu === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveMenu(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-blue-50 text-[#2563EB] border border-blue-200 shadow-xs font-extrabold'
                          : 'text-slate-600 hover:text-[#111827] hover:bg-slate-50'
                      }`}
                    >
                      <item.icon className={`w-4 h-4 ${isActive ? 'text-[#2563EB]' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content Container */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#F8FAFC]">
        
        {/* Top Navbar */}
        <header className="h-20 bg-white border-b border-[#E5E7EB] px-8 flex items-center justify-between shrink-0 shadow-xs">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-lg font-extrabold text-[#111827] capitalize font-['Plus_Jakarta_Sans',sans-serif]">
                {activeMenu.replace(/_/g, ' ')}
              </h2>
              <p className="text-xs text-[#6B7280] font-normal">Manage your Lumora marketing website content</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onRefreshContent();
                onRefreshPages();
              }}
              className="p-2.5 text-[#6B7280] hover:text-[#2563EB] rounded-2xl hover:bg-blue-50 transition-colors border border-[#E5E7EB]"
              title="Refresh All Content & Data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={onExitAdmin}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] text-white text-xs font-extrabold shadow-md shadow-blue-500/20 transition-all hover:scale-105 flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif]"
            >
              <Home className="w-3.5 h-3.5 text-white" /> View Live Site
            </button>
          </div>
        </header>

        {/* Scrollable View Content */}
        <div className="flex-1 overflow-y-auto p-8 z-10 custom-scrollbar">
          {activeMenu === 'dashboard' && <DashboardStats siteContent={siteContent} dynamicPages={dynamicPages} />}
          {activeMenu === 'resource_lead_gen' && (
            <LeadGenServicesEditor
              dynamicPages={dynamicPages}
              onRefresh={onRefreshPages}
              onViewLive={(slug) => {
                onExitAdmin();
                navigate(`/${slug}`);
              }}
            />
          )}
          {activeMenu === 'pages' && <DynamicPagesManager dynamicPages={dynamicPages} onRefresh={onRefreshPages} />}
          {activeMenu === 'sitemap' && <SitemapPanel dynamicPages={dynamicPages} />}
          {activeMenu === 'site_settings' && <SiteSettingsManager onSaved={handleContentSaved} />}
          {activeMenu === 'section_settings' && <SectionSettingsManager onSaved={handleContentSaved} />}
          {TABLE_CONFIGS[activeMenu] && (
            <TableCrudManager tableName={activeMenu} config={TABLE_CONFIGS[activeMenu]} onSaved={handleContentSaved} />
          )}
          {activeMenu === 'consultation_submissions' && <LeadsManager onSaved={handleContentSaved} />}
        </div>
      </main>
    </div>
  );
};

/* --- Dashboard Overview Component --- */
const DashboardStats = ({ siteContent, dynamicPages }: { siteContent: SiteContent; dynamicPages: DynamicPage[] }) => (
  <div className="space-y-8">
    <div>
      <h2 className="text-2xl font-extrabold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
        Admin Overview Dashboard
      </h2>
      <p className="text-sm text-[#6B7280] mt-1 font-normal">
        Your Lumora website is live and performing. Manage any section dynamically from the sidebar.
      </p>
    </div>

    {/* Stat Cards Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Services" value={siteContent.services.length.toString()} icon={<Briefcase className="w-6 h-6 text-[#2563EB]" />} iconBg="bg-blue-50 border-blue-100" />
      <StatCard title="Case Studies" value={siteContent.achievements.length.toString()} icon={<FolderDot className="w-6 h-6 text-[#7C3AED]" />} iconBg="bg-purple-50 border-purple-100" />
      <StatCard title="Dynamic Pages" value={dynamicPages.length.toString()} icon={<FileText className="w-6 h-6 text-[#EC4899]" />} iconBg="bg-pink-50 border-pink-100" />
      <StatCard title="Industries" value={siteContent.industries.length.toString()} icon={<MapPin className="w-6 h-6 text-[#F59E0B]" />} iconBg="bg-amber-50 border-amber-100" />
    </div>

    {/* 2 Column Quick Info Panels */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-3xl border border-[#E5E7EB] shadow-xs">
        <h3 className="font-extrabold text-[#111827] text-base mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
          Homepage Dynamic Sections
        </h3>
        <ul className="grid grid-cols-2 gap-3 text-xs text-[#6B7280] font-semibold">
          {['Hero Section', 'What Is Digital Mkt', 'Target Audience', 'Services', 'Why Choose Us', 'Case Studies', 'Process Timeline', 'Industries We Serve', 'FAQs Accordion', 'Consultation Form'].map((s) => (
            <li key={s} className="flex items-center gap-2 p-2 rounded-xl bg-[#F8FAFC] border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="truncate">{s}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-[#E5E7EB] shadow-xs">
        <h3 className="font-extrabold text-[#111827] text-base mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
          Quick System Shortcuts
        </h3>
        <div className="space-y-3">
          <a href="/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:border-blue-300 text-[#2563EB] text-xs font-extrabold transition-all group">
            <span>View Live Website Homepage</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="/sitemap.xml" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:border-blue-300 text-[#2563EB] text-xs font-extrabold transition-all group">
            <span>View Generated XML Sitemap</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const StatCard = ({ title, value, icon, iconBg }: { title: string; value: string; icon: React.ReactNode; iconBg: string }) => (
  <div className="bg-white p-6 rounded-3xl border border-[#E5E7EB] shadow-xs flex items-center justify-between">
    <div>
      <p className="text-xs font-extrabold text-[#6B7280] uppercase tracking-wider font-['Plus_Jakarta_Sans',sans-serif]">{title}</p>
      <h3 className="text-3xl font-black text-[#111827] mt-1 font-['Plus_Jakarta_Sans',sans-serif]">{value}</h3>
    </div>
    <div className={`p-3.5 rounded-2xl ${iconBg} border border-slate-100 shadow-xs`}>{icon}</div>
  </div>
);

/* --- Table CRUD Manager Component --- */
const TableCrudManager = ({
  tableName,
  config,
  onSaved,
}: {
  tableName: string;
  config: { label: string; fields: FieldConfig[]; canCreate?: boolean };
  onSaved: () => void;
}) => {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  const [editingItem, setEditingItem] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchData();
  }, [tableName]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/table/${tableName}`);
      if (res.ok) {
        const json = await res.json();
        setData(json.data || []);
      }
    } finally {
      setLoading(false);
    }
  };

  const getDisplayTitle = (item: Record<string, unknown>) =>
    String(item.title || item.name || item.question || item.heading || item.tagline || 'Unnamed');

  const handleSave = async () => {
    if (!editingItem) return;
    setSaving(true);
    try {
      const payload = { ...editingItem };
      delete payload.created_at;
      delete payload.updated_at;

      if (payload.id) {
        const id = payload.id;
        delete payload.id;
        await fetch(`/api/admin/table/${tableName}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch(`/api/admin/table/${tableName}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...payload, is_active: payload.is_active ?? true, sort_order: payload.sort_order ?? 0 }),
        });
      }
      setEditingItem(null);
      fetchData();
      onSaved();
    } catch {
      alert('Failed to save.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this item?')) return;
    await fetch(`/api/admin/table/${tableName}/${id}`, { method: 'DELETE' });
    fetchData();
    onSaved();
  };

  if (loading) return <div className="p-8 text-center text-[#6B7280] font-bold">Loading {config.label}...</div>;

  return (
    <div className="bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden flex flex-col h-[calc(100vh-140px)] shadow-xs">
      <div className="p-6 border-b border-[#E5E7EB] flex items-center justify-between shrink-0 bg-[#F8FAFC]">
        <div>
          <h2 className="text-xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">{config.label}</h2>
          <p className="text-xs text-[#6B7280] mt-0.5 font-normal">{data.length} items · updates show live instantly</p>
        </div>
        {config.canCreate && (
          <button
            onClick={() => setEditingItem({})}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white rounded-full text-xs font-extrabold shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
          >
            <Plus className="w-4 h-4" /> Add New
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {editingItem ? (
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.fields.map((field) => (
                <div key={field.key} className={field.colSpan === 2 ? 'md:col-span-2' : ''}>
                  <FieldInput
                    field={field}
                    value={editingItem[field.key]}
                    onChange={(v) => setEditingItem({ ...editingItem, [field.key]: v })}
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4 border-t border-[#E5E7EB] pt-6">
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-extrabold text-xs flex items-center gap-2 shadow-md shadow-blue-500/20"
              >
                <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                onClick={() => setEditingItem(null)}
                className="px-6 py-3 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] text-xs font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="divide-y divide-[#E5E7EB]">
            {data.length === 0 ? (
              <div className="p-12 text-center text-[#6B7280] font-normal text-xs">No records found. Click &quot;Add New&quot; to create one.</div>
            ) : (
              data.map((item) => (
                <div key={String(item.id)} className="p-5 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors">
                  <div>
                    <h4 className="font-extrabold text-sm text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">{getDisplayTitle(item)}</h4>
                    <p className="text-xs text-[#6B7280] mt-0.5 line-clamp-1">{String(item.short_description || item.description || item.answer || item.subheading || '')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setEditingItem(item)}
                      className="p-2 rounded-xl bg-blue-50 text-[#2563EB] hover:bg-blue-100 transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(Number(item.id))}
                      className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* --- Field Input Component --- */
const FieldInput = ({
  field,
  value,
  onChange,
}: {
  field: FieldConfig;
  value: unknown;
  onChange: (val: unknown) => void;
}) => {
  if (field.type === 'textarea') {
    return (
      <div>
        <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
          {field.label}
        </label>
        <textarea
          rows={3}
          value={String(value || '')}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-xs font-normal text-[#111827] focus:border-[#2563EB] focus:outline-none leading-relaxed"
        />
      </div>
    );
  }

  if (field.type === 'select') {
    return (
      <div>
        <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
          {field.label}
        </label>
        <select
          value={String(value || '')}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-xs font-semibold text-[#111827] focus:border-[#2563EB] focus:outline-none"
        >
          {(field.options || []).map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (field.type === 'boolean') {
    return (
      <div className="flex items-center gap-3 pt-2">
        <input
          type="checkbox"
          id={`checkbox-${field.key}`}
          checked={Boolean(value)}
          onChange={(e) => onChange(e.target.checked)}
          className="w-5 h-5 rounded-lg text-[#2563EB] focus:ring-blue-100"
        />
        <label htmlFor={`checkbox-${field.key}`} className="text-xs font-extrabold text-[#111827] uppercase tracking-wider font-['Plus_Jakarta_Sans',sans-serif]">
          {field.label}
        </label>
      </div>
    );
  }

  return (
    <div>
      <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
        {field.label}
      </label>
      <input
        type={field.type === 'number' ? 'number' : 'text'}
        value={String(value || '')}
        onChange={(e) => onChange(field.type === 'number' ? Number(e.target.value) : e.target.value)}
        className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-xs font-bold text-[#111827] focus:border-[#2563EB] focus:outline-none"
      />
    </div>
  );
};

/* --- Dynamic Pages Manager Component --- */
const DynamicPagesManager = ({ dynamicPages, onRefresh }: { dynamicPages: DynamicPage[]; onRefresh: () => void }) => {
  const [editingPage, setEditingPage] = useState<Partial<DynamicPage> | null>(null);

  const handleDuplicate = async (p: DynamicPage) => {
    const newSlug = `${p.slug}-copy-${Date.now().toString().slice(-4)}`;
    const newTitle = `${p.title} (Copy)`;
    const pageAny = p as unknown as Record<string, unknown>;

    await fetch('/api/pages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: newTitle,
        slug: newSlug,
        meta_title: p.seo?.metaTitle || p.title,
        meta_description: p.seo?.metaDescription || '',
        hero_badge: String(pageAny.heroBadge || ''),
        hero_heading: String(pageAny.heroHeading || p.title),
        hero_subheading: String(pageAny.heroSubheading || ''),
        overview_title: String(pageAny.overviewTitle || ''),
        overview_content: String(pageAny.overviewContent || ''),
        is_published: true,
      }),
    });
    onRefresh();
  };

  const handleSavePage = async () => {
    if (!editingPage) return;
    const isNew = !editingPage.id;
    const url = isNew ? '/api/pages' : `/api/pages/${editingPage.id}`;
    const method = isNew ? 'POST' : 'PUT';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: editingPage.title,
        slug: editingPage.slug,
        meta_title: editingPage.metaTitle,
        meta_description: editingPage.metaDescription,
        hero_badge: editingPage.heroBadge,
        hero_heading: editingPage.heroHeading,
        hero_subheading: editingPage.heroSubheading,
        overview_title: editingPage.overviewTitle,
        overview_content: editingPage.overviewContent,
        is_published: editingPage.isPublished ?? true,
      }),
    });

    setEditingPage(null);
    onRefresh();
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden p-6 space-y-6 shadow-xs">
      <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
        <div>
          <h2 className="text-xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">Dynamic Pages CMS & SEO Replicator</h2>
          <p className="text-xs text-[#6B7280]">Duplicate pages in 1 click and customize slugs, H1s, and Meta tags for SEO</p>
        </div>
        <button
          onClick={() => setEditingPage({ title: 'New SEO Page', slug: 'new-page', isPublished: true })}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white rounded-full text-xs font-extrabold shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
        >
          <Plus className="w-4 h-4" /> Create New Page
        </button>
      </div>

      {editingPage ? (
        <div className="space-y-4 max-w-2xl bg-[#F8FAFC] p-6 rounded-2xl border border-[#E5E7EB]">
          <h3 className="font-extrabold text-sm text-[#111827]">{editingPage.id ? 'Edit Page' : 'New Page'}</h3>
          <div>
            <label className="block text-xs font-bold text-[#111827] mb-1">Page Title</label>
            <input
              type="text"
              value={editingPage.title || ''}
              onChange={(e) => setEditingPage({ ...editingPage, title: e.target.value })}
              className="w-full p-3 bg-white border border-[#E5E7EB] rounded-xl text-xs text-[#111827]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#111827] mb-1">URL Slug</label>
            <input
              type="text"
              value={editingPage.slug || ''}
              onChange={(e) => setEditingPage({ ...editingPage, slug: e.target.value })}
              className="w-full p-3 bg-white border border-[#E5E7EB] rounded-xl text-xs text-[#111827]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#111827] mb-1">Meta Title (SEO)</label>
            <input
              type="text"
              value={editingPage.metaTitle || ''}
              onChange={(e) => setEditingPage({ ...editingPage, metaTitle: e.target.value })}
              className="w-full p-3 bg-white border border-[#E5E7EB] rounded-xl text-xs text-[#111827]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#111827] mb-1">Meta Description (SEO)</label>
            <textarea
              rows={2}
              value={editingPage.metaDescription || ''}
              onChange={(e) => setEditingPage({ ...editingPage, metaDescription: e.target.value })}
              className="w-full p-3 bg-white border border-[#E5E7EB] rounded-xl text-xs text-[#111827]"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button onClick={handleSavePage} className="px-6 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-bold text-xs rounded-full shadow-md">
              Save Page
            </button>
            <button onClick={() => setEditingPage(null)} className="px-5 py-2.5 bg-white border border-[#E5E7EB] text-[#111827] font-bold text-xs rounded-full">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dynamicPages.map((p) => (
            <div key={p.id} className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-between hover:border-blue-300 transition-colors">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm text-[#111827]">{p.title}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                    /{p.slug}
                  </span>
                </div>
                <p className="text-xs text-[#6B7280] mt-1 line-clamp-1">{p.seo?.metaDescription || ''}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleDuplicate(p)}
                  className="px-3 py-1.5 rounded-xl bg-purple-50 text-[#7C3AED] hover:bg-purple-100 text-xs font-bold transition-colors"
                >
                  Duplicate
                </button>
                <button
                  onClick={() => setEditingPage(p)}
                  className="p-2 rounded-xl bg-blue-50 text-[#2563EB] hover:bg-blue-100 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* --- Sitemap & SEO Panel Component --- */
const SitemapPanel = ({ dynamicPages }: { dynamicPages: DynamicPage[] }) => (
  <div className="bg-white rounded-3xl border border-[#E5E7EB] p-8 space-y-6 shadow-xs">
    <div>
      <h2 className="text-xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">XML Sitemap & SEO Directives</h2>
      <p className="text-xs text-[#6B7280]">All dynamic pages automatically generate sitemap entries and structured schema markup.</p>
    </div>

    <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] space-y-3 font-mono text-xs text-[#111827]">
      <p className="text-[#2563EB] font-bold">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</p>
      <p className="text-purple-600 font-bold">&lt;urlset xmlns=&quot;http://www.sitemaps.org/schemas/sitemap/0.9&quot;&gt;</p>
      <div className="pl-4 space-y-2">
        <p>&lt;url&gt;&lt;loc&gt;https://lumora.ai/&lt;/loc&gt;&lt;priority&gt;1.0&lt;/priority&gt;&lt;/url&gt;</p>
        {dynamicPages.map((p) => (
          <p key={p.id}>&lt;url&gt;&lt;loc&gt;https://lumora.ai/{p.slug}&lt;/loc&gt;&lt;priority&gt;0.8&lt;/priority&gt;&lt;/url&gt;</p>
        ))}
      </div>
      <p className="text-purple-600 font-bold">&lt;/urlset&gt;</p>
    </div>
  </div>
);

/* --- Site Settings Manager --- */
const SiteSettingsManager = ({ onSaved }: { onSaved: () => void }) => {
  return <TableCrudManager tableName="site_settings" config={TABLE_CONFIGS.site_settings} onSaved={onSaved} />;
};

/* --- Section Settings Manager --- */
const SectionSettingsManager = ({ onSaved }: { onSaved: () => void }) => {
  return <TableCrudManager tableName="section_settings" config={TABLE_CONFIGS.section_settings} onSaved={onSaved} />;
};

/* --- Leads Inbox Manager --- */
const LeadsManager = ({ onSaved }: { onSaved: () => void }) => {
  return <TableCrudManager tableName="consultation_submissions" config={TABLE_CONFIGS.consultation_submissions} onSaved={onSaved} />;
};

export default AdminDashboard;
