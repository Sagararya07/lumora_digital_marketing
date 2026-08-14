// @ts-nocheck
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
  UploadCloud,
  ExternalLink,
  Save,
  RefreshCw,
  RefreshCcw,
  Mail,
  Phone,
  Clock,
} from 'lucide-react';
import { SiteContent, DynamicPage } from '../../types';
import { TABLE_CONFIGS, SECTION_SETTINGS, FieldConfig } from './adminConfig';
import { LumoraLogo } from '../common/LumoraLogo';
import { DynamicPageEditor } from './DynamicPageEditor';

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
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

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
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#729EE6]/10 blur-[150px] pointer-events-none z-0" />
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
                  className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-sm text-[#111827] focus:border-[#5B8EE2] focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
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
                  className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-sm text-[#111827] focus:border-[#5B8EE2] focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all font-semibold"
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
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-sm font-extrabold shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
              >
                Secure Login
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB] text-center">
              <button
                onClick={onExitAdmin}
                className="text-xs font-bold text-[#6B7280] hover:text-[#5B8EE2] transition-colors flex items-center gap-1.5 justify-center w-full"
              >
                <Home className="w-3.5 h-3.5 text-[#5B8EE2]" />
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
        { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
        { id: 'trusted_logos', label: 'Trusted Logos', icon: Globe },
      ],
    },
    {
      title: 'PORTFOLIO PAGE CONTENT',
      items: [
        { id: 'achievements', label: 'Portfolio Cards', icon: FolderDot },
      ],
    },
    {
      title: 'ABOUT PAGE CONTENT',
      items: [
        { id: 'about_hero_section', label: 'Hero & Mission Text', icon: Settings },
        { id: 'about_mission_cards', label: 'Mission Cards', icon: Settings },
        { id: 'about_core_pillars', label: 'Core Pillars', icon: Settings },
        { id: 'team_members', label: 'Team Members', icon: Users },
      ],
    },
    {
      title: 'DYNAMIC PAGES (RESOURCES)',
      items: [
        ...dynamicPages.map(dp => ({
          id: `page_${dp.id}`,
          label: (dp.title || dp.slug).split(' - ')[0],
          icon: FileText
        })),
        { id: 'pages', label: 'Create New Page', icon: Plus }
      ],
    },
    {
      title: 'CRM & LEADS',
      items: [{ id: 'consultation_submissions', label: 'Leads Inbox', icon: Inbox }],
    },
    {
      title: 'RND PAGE CONTENT',
      items: [
        { id: 'rnd_modules', label: 'R&D Modules', icon: Settings },
      ],
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
                ? 'bg-[#F2F6FC] text-[#5B8EE2] border border-blue-200 shadow-xs'
                : 'text-slate-600 hover:text-[#111827] hover:bg-slate-50'
            }`}
          >
            <LayoutDashboard className="w-5 h-5 text-[#5B8EE2]" /> Dashboard
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
                          ? 'bg-[#F2F6FC] text-[#5B8EE2] border border-blue-200 shadow-xs font-extrabold'
                          : 'text-slate-600 hover:text-[#111827] hover:bg-slate-50'
                      }`}
                    >
                      <item.icon className={`w-4 h-4 ${isActive ? 'text-[#5B8EE2]' : 'text-slate-400'}`} />
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
                {activeMenu.startsWith('page_') 
                  ? (dynamicPages.find(p => String(p.id) === activeMenu.replace('page_', ''))?.title || 'Dynamic Page')
                  : activeMenu.replace(/_/g, ' ')}
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
              className="p-2.5 text-[#6B7280] hover:text-[#5B8EE2] rounded-2xl hover:bg-[#F2F6FC] transition-colors border border-[#E5E7EB]"
              title="Refresh All Content & Data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={onExitAdmin}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-xs font-extrabold shadow-md shadow-blue-500/20 transition-all hover:scale-105 flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif]"
            >
              <Home className="w-3.5 h-3.5 text-white" /> View Live Site
            </button>
          </div>
        </header>

        {/* Scrollable View Content */}
        <div className="flex-1 overflow-y-auto p-8 z-10 custom-scrollbar">
          {activeMenu === 'dashboard' && <DashboardStats siteContent={siteContent} dynamicPages={dynamicPages} />}
          {activeMenu.startsWith('page_') && (
            <DynamicPageEditor
              pageId={activeMenu.replace('page_', '')}
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
          {activeMenu === 'services' && (
            <ServicesDynamicManager 
              dynamicPages={dynamicPages} 
              onEdit={(id) => setActiveMenu(`page_${id}`)} 
              onAddNew={() => setActiveMenu('pages')} 
            />
          )}
          {activeMenu !== 'services' && TABLE_CONFIGS[activeMenu] && (
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
      <StatCard title="Services" value={siteContent.services.length.toString()} icon={<Briefcase className="w-6 h-6 text-[#5B8EE2]" />} iconBg="bg-[#F2F6FC] border-blue-100" />
      <StatCard title="Portfolio Cards" value={siteContent.achievements.length.toString()} icon={<FolderDot className="w-6 h-6 text-[#D6A67B]" />} iconBg="bg-purple-50 border-purple-100" />
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
          {['Hero Section', 'Section Headers', 'What Is Digital Mkt', 'Target Audience', 'Services', 'Why Choose Us', 'Our Process', 'Industries We Serve', 'FAQs', 'Testimonials', 'Trusted Logos', 'Portfolio Cards'].map((s) => (
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
          <a href="/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:border-blue-300 text-[#5B8EE2] text-xs font-extrabold transition-all group">
            <span>View Live Website Homepage</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="/sitemap.xml" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:border-blue-300 text-[#5B8EE2] text-xs font-extrabold transition-all group">
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
      } else {
        setData([]);
      }
    } catch {
      setData([]);
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
            onClick={() => {
              const initial: any = {};
              config.fields.forEach(f => {
                if (f.type === 'boolean') initial[f.key] = false;
                else if (f.type === 'number') initial[f.key] = 0;
                else initial[f.key] = '';
              });
              setEditingItem(initial);
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] text-white rounded-full text-xs font-extrabold shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
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
                    value={editingItem[field.key as keyof typeof editingItem]}
                    onChange={(v) => setEditingItem({ ...editingItem, [field.key]: v })}
                    onFileUploaded={(url, publicId) => {
                      if (field.type === 'image') {
                        setEditingItem(prev => ({
                          ...prev,
                          [field.key]: url,
                          image_public_id: publicId
                        }));
                      }
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4 border-t border-[#E5E7EB] pt-6">
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] text-white font-extrabold text-xs flex items-center gap-2 shadow-md shadow-blue-500/20"
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
                      className="p-2 rounded-xl bg-[#F2F6FC] text-[#5B8EE2] hover:bg-blue-100 transition-colors"
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

/* --- Services Dynamic Manager (Replaces legacy services table) --- */
const ServicesDynamicManager = ({ dynamicPages, onEdit, onAddNew }: { dynamicPages: DynamicPage[]; onEdit: (id: string) => void; onAddNew: () => void }) => {
  return (
    <div className="bg-white rounded-3xl border border-[#E5E7EB] overflow-hidden flex flex-col h-[calc(100vh-140px)] shadow-xs">
      <div className="p-6 border-b border-[#E5E7EB] flex items-center justify-between shrink-0 bg-[#F8FAFC]">
        <div>
          <h2 className="text-xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">Services</h2>
          <p className="text-xs text-[#6B7280] mt-0.5 font-normal">{dynamicPages.length} items · updates show live instantly</p>
        </div>
        <button
          onClick={onAddNew}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] text-white rounded-full text-xs font-extrabold shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
        >
          <Plus className="w-4 h-4" /> Add New
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="divide-y divide-[#E5E7EB]">
          {dynamicPages.length === 0 ? (
            <div className="p-12 text-center text-[#6B7280] font-normal text-xs">No records found. Click &quot;Add New&quot; to create one.</div>
          ) : (
            dynamicPages.map((item) => (
              <div key={String(item.id)} className="p-5 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors">
                <div>
                  <h4 className="font-extrabold text-sm text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">{item.title}</h4>
                  <p className="text-xs text-[#6B7280] mt-0.5 line-clamp-1">{item.seo?.metaDescription || item.overviewTitle || ''}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onEdit(String(item.id))}
                    className="p-2 rounded-xl bg-[#F2F6FC] text-[#5B8EE2] hover:bg-blue-100 transition-colors"
                    title="Edit Service Page"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

/* --- Field Input Component --- */
const FieldInput = ({
  field,
  value,
  onChange,
  onFileUploaded,
}: {
  field: FieldConfig;
  value: unknown;
  onChange: (val: unknown) => void;
  onFileUploaded?: (url: string, publicId: string) => void;
}) => {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const processFile = async (file: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        onChange(data.url);
        if (onFileUploaded) onFileUploaded(data.url, data.public_id);
      }
    } catch (err) {
      console.error('Upload failed', err);
    } finally {
      setUploading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await processFile(e.dataTransfer.files[0]);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await processFile(file);
  };
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
          className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-xs font-normal text-[#111827] focus:border-[#5B8EE2] focus:outline-none leading-relaxed"
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
          className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-xs font-semibold text-[#111827] focus:border-[#5B8EE2] focus:outline-none"
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
          className="w-5 h-5 rounded-lg text-[#5B8EE2] focus:ring-blue-100"
        />
        <label htmlFor={`checkbox-${field.key}`} className="text-xs font-extrabold text-[#111827] uppercase tracking-wider font-['Plus_Jakarta_Sans',sans-serif]">
          {field.label}
        </label>
      </div>
    );
  }

  if (field.type === 'image') {
    return (
      <div>
        <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
          {field.label}
        </label>
        <div 
          className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl transition-all duration-200 relative
            ${dragActive ? 'border-[#5B8EE2] bg-[#F2F6FC]/50' : 'border-[#E5E7EB] bg-[#F8FAFC] hover:border-[#5B8EE2]'}
          `}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {value && typeof value === 'string' ? (
            <div className="flex flex-col items-center gap-3">
              <img src={value} alt="Preview" className="h-24 w-24 object-cover rounded-xl border border-[#E5E7EB] shadow-sm" />
              <label className="cursor-pointer text-[#5B8EE2] hover:text-[#4676C2] text-xs font-bold transition-colors">
                {uploading ? 'Uploading...' : 'Replace Image'}
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
              </label>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 pointer-events-none text-center">
              <div className="w-10 h-10 rounded-full bg-[#F2F6FC] text-[#5B8EE2] flex items-center justify-center mb-1">
                <UploadCloud className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-[#111827]">
                {uploading ? 'Uploading...' : 'Drag & drop image here'}
              </p>
              <p className="text-[10px] text-[#6B7280]">or</p>
              <label className="cursor-pointer bg-white border border-[#E5E7EB] hover:border-[#5B8EE2] transition-colors rounded-xl px-4 py-2 text-xs font-bold text-[#111827] pointer-events-auto">
                Select File
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
              </label>
            </div>
          )}
          {dragActive && (
            <div className="absolute inset-0 bg-[#5B8EE2]/5 rounded-2xl border-2 border-[#5B8EE2] pointer-events-none" />
          )}
        </div>
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
        className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-xs font-bold text-[#111827] focus:border-[#5B8EE2] focus:outline-none"
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
        sections: p.sections,
        heroImage: p.heroImage,
      }),
    });
    onRefresh();
  };

  const handleDeletePage = async (id: number, title: string) => {
    if (window.confirm(`Are you sure you want to delete the page "${title}"?\n\nThis action cannot be undone.`)) {
      await fetch(`/api/pages/${id}`, { method: 'DELETE' });
      onRefresh();
    }
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
        sections: editingPage.sections,
        heroImage: editingPage.heroImage,
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
          onClick={() => {
            const template = (dynamicPages && dynamicPages.length > 0) ? dynamicPages[0] : ({} as any);
            setEditingPage({
              title: 'New Strategy Page',
              slug: `new-page-${Date.now().toString().slice(-4)}`,
              isPublished: true,
              sections: template.sections || [],
              heroImage: template.heroImage || '',
              metaTitle: template.seo?.metaTitle || '',
              metaDescription: template.seo?.metaDescription || '',
              heroBadge: template.heroBadge || '',
              heroHeading: template.heroHeading || 'New Strategy Page',
              heroSubheading: template.heroSubheading || '',
              overviewTitle: template.overviewTitle || '',
              overviewContent: template.overviewContent || ''
            });
          }}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] text-white rounded-full text-xs font-extrabold shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
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
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl mt-4">
            <p className="text-xs text-blue-800 flex items-start gap-2">
              <span className="text-blue-500 font-bold">ℹ️ Note:</span>
              <span>This is just the SEO and URL setup. To fully edit the <strong>Sections, Content, and Grid Cards</strong> for this page, click <strong>Save Page</strong> below, and then click on this page's name in the left sidebar!</span>
            </p>
          </div>
          <div className="flex gap-3 pt-4 border-t border-[#E5E7EB] mt-4">
            <button onClick={handleSavePage} className="px-6 py-2.5 bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] text-white font-bold text-xs rounded-full shadow-md hover:scale-105 transition-all">
              Save Page
            </button>
            <button onClick={() => setEditingPage(null)} className="px-5 py-2.5 bg-white border border-[#E5E7EB] text-[#111827] font-bold text-xs rounded-full hover:bg-slate-50 transition-colors">
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
                  className="px-3 py-1.5 rounded-xl bg-purple-50 text-[#D6A67B] hover:bg-purple-100 text-xs font-bold transition-colors"
                >
                  Duplicate
                </button>
                <button
                  onClick={() => setEditingPage(p)}
                  className="p-2 rounded-xl bg-[#F2F6FC] text-[#5B8EE2] hover:bg-blue-100 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeletePage(p.id!, p.title)}
                  className="p-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors ml-1"
                >
                  <Trash2 className="w-4 h-4" />
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
      <p className="text-[#5B8EE2] font-bold">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</p>
      <p className="text-[#D6A67B] font-bold">&lt;urlset xmlns=&quot;http://www.sitemaps.org/schemas/sitemap/0.9&quot;&gt;</p>
      <div className="pl-4 space-y-2">
        <p>&lt;url&gt;&lt;loc&gt;https://lumora.ai/&lt;/loc&gt;&lt;priority&gt;1.0&lt;/priority&gt;&lt;/url&gt;</p>
        {dynamicPages.map((p) => (
          <p key={p.id}>&lt;url&gt;&lt;loc&gt;https://lumora.ai/{p.slug}&lt;/loc&gt;&lt;priority&gt;0.8&lt;/priority&gt;&lt;/url&gt;</p>
        ))}
      </div>
      <p className="text-[#D6A67B] font-bold">&lt;/urlset&gt;</p>
    </div>
  </div>
);

/* --- Site Settings Manager --- */
const SiteSettingsManager = ({ onSaved }: { onSaved: () => void }) => {
  return (
    <div className="bg-white rounded-3xl border border-[#E5E7EB] p-8 shadow-xs">
      <h2 className="text-xl font-extrabold text-[#111827] mb-4">Site Settings</h2>
      <p className="text-sm text-[#6B7280]">Global configuration coming soon...</p>
    </div>
  );
};

/* --- Section Settings Manager --- */
const SectionSettingsManager = ({ onSaved }: { onSaved: () => void }) => {
  return (
    <div className="bg-white rounded-3xl border border-[#E5E7EB] p-8 shadow-xs">
      <h2 className="text-xl font-extrabold text-[#111827] mb-4">Section Headers</h2>
      <p className="text-sm text-[#6B7280]">Section content management coming soon...</p>
    </div>
  );
};

/* --- Leads Inbox Manager --- */
const LeadsManager = ({ onSaved }: { onSaved: () => void }) => {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      fetchLeads();
    } catch (e) {
      console.error(e);
    }
  };

  const deleteLead = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this lead? This cannot be undone.')) return;
    try {
      await fetch(`/api/leads/${id}`, {
        method: 'DELETE',
      });
      fetchLeads();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E5E7EB] p-8 shadow-xs">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[#111827]">CRM & Leads Inbox</h2>
          <p className="text-sm text-[#6B7280] mt-1">Manage and track your incoming consultation requests.</p>
        </div>
        <button onClick={fetchLeads} className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-600">
          <RefreshCcw className="w-5 h-5" />
        </button>
      </div>

      {loading ? (
        <div className="py-12 flex justify-center"><div className="w-8 h-8 border-4 border-[#5B8EE2] border-t-transparent rounded-full animate-spin"></div></div>
      ) : leads.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
          <Inbox className="w-12 h-12 text-slate-300 mb-4" />
          <h3 className="text-lg font-bold text-slate-900">No Leads Yet</h3>
          <p className="text-sm text-slate-500 max-w-sm mt-2">When visitors fill out forms on your website, they will appear here automatically.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {leads.map((lead) => (
            <div key={lead.id} className="p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all bg-slate-50/50 shadow-sm hover:shadow-md group">
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                    {lead.name}
                    {lead.status === 'new' && <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" title="New Lead"></span>}
                  </h3>
                  <div className="text-sm font-semibold text-slate-500 mt-0.5">{lead.companyName}</div>
                  
                  <div className="text-sm text-slate-600 mt-3 flex flex-col sm:flex-row gap-x-6 gap-y-1">
                    <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 hover:text-[#5B8EE2] transition-colors"><Mail className="w-4 h-4 text-slate-400" /> {lead.email}</a>
                    <a href={`tel:${lead.phone}`} className="flex items-center gap-1.5 hover:text-[#5B8EE2] transition-colors"><Phone className="w-4 h-4 text-slate-400" /> {lead.phone}</a>
                  </div>
                </div>
                <div className="flex sm:flex-col items-end gap-3 shrink-0">
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Source Page</span>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[11px] font-bold rounded-full border border-blue-200">{lead.sourcePage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <select 
                      value={lead.status}
                      onChange={(e) => updateStatus(lead.id, e.target.value)}
                      className={`text-xs font-bold rounded-full px-4 py-2 border-0 focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer shadow-sm ${
                        lead.status === 'new' ? 'bg-emerald-100 text-emerald-700' :
                        lead.status === 'contacted' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-200 text-slate-700'
                      }`}
                    >
                      <option value="new">New Lead</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>
                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="p-2 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-100 hover:text-rose-600 transition-colors shadow-sm"
                      title="Delete Lead"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm mt-4">
                <div className="text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Services Required</div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {lead.servicesRequired.map((srv: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold border border-slate-200">{srv}</span>
                  ))}
                </div>
                
                {lead.message && (
                  <>
                    <div className="text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Message</div>
                    <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{lead.message}</p>
                  </>
                )}
              </div>
              
              <div className="text-xs text-slate-400 mt-4 font-medium flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Submitted: {new Date(lead.submittedAt).toLocaleString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
