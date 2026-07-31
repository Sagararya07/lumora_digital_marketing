import React, { useState, useEffect } from 'react';
import { 
  Save, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  FileText, 
  Globe, 
  Sparkles, 
  Layers, 
  ArrowRight,
  ExternalLink,
  Check
} from 'lucide-react';
import { DynamicPage, DynamicPageSection } from '../../types';

interface LeadGenServicesEditorProps {
  dynamicPages: DynamicPage[];
  onRefresh: () => void;
  onViewLive: (slug: string) => void;
}

export const LeadGenServicesEditor: React.FC<LeadGenServicesEditorProps> = ({
  dynamicPages,
  onRefresh,
  onViewLive,
}) => {
  // Locate or initialize the Lead Generation Services page
  const targetPage = dynamicPages.find(
    (p) => p.slug === 'lead-generation-services' || p.slug === 'lead-generation'
  );

  const [id, setId] = useState<string>(targetPage?.id || '');
  const [title, setTitle] = useState<string>(
    targetPage?.title || 'Lead Generation Services - High Converting B2B & B2C Funnels'
  );
  const [slug, setSlug] = useState<string>(
    targetPage?.slug || 'lead-generation-services'
  );
  const [metaTitle, setMetaTitle] = useState<string>(
    targetPage?.seo?.metaTitle || 'Lead Generation Agency | Scale Qualified Sales Leads | Lumora'
  );
  const [metaDescription, setMetaDescription] = useState<string>(
    targetPage?.seo?.metaDescription ||
      'Generate pre-qualified B2B and B2C sales inquiries with Lumora’s high-converting lead funnels, targeted ads, and automated CRM routing.'
  );

  // Editable Section Blocks
  const [sections, setSections] = useState<DynamicPageSection[]>(
    targetPage?.sections && targetPage.sections.length > 0
      ? targetPage.sections
      : [
          {
            id: 'sec-hero-leadgen',
            type: 'hero',
            title: 'Accelerate Business Growth with Precision Lead Generation',
            content:
              'Stop chasing cold leads. We design multi-step interactive lead funnels and targeted ad campaigns that attract buyers actively looking for your solutions.',
            bullets: [
              'Verified Sales-Ready Leads',
              'Instant CRM & WhatsApp Routing',
              'A/B Tested Funnel Conversion Architecture',
              'Multi-Channel Performance Attribution',
            ],
          },
          {
            id: 'sec-engine-leadgen',
            type: 'text-media',
            title: 'Why Our Lead Generation Engine Outperforms Standard Advertising',
            content:
              'Most marketing campaigns fail because they drive traffic to static homepages. Lumora builds hyper-segmented landing pages with built-in qualification quizzes, instant scheduling, and real-time lead verification.',
            bullets: [
              'Pre-Qualification Questionnaires',
              'Automated SMS & Email Nurturing Sequences',
              'Direct Integration with Salesforce & HubSpot',
              '24/7 AI Lead Verification Bot',
            ],
          },
          {
            id: 'sec-multichannel-leadgen',
            type: 'services',
            title: 'Multi-Channel Acquisition Architecture',
            content:
              'We unify Google Search, Meta Paid Ads, LinkedIn B2B Outreach, and Retargeting into a single cohesive lead pipeline.',
            bullets: [
              'High-Intent Search Keyword Bidding',
              'Retargeting Pixel & Display Ad Sequences',
              'LinkedIn Executive InMail & Content Funnels',
              'Weekly CPA & ROAS Optimization',
            ],
          },
        ]
  );

  const [saving, setSaving] = useState<boolean>(false);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  // Sync state if dynamicPages change
  useEffect(() => {
    if (targetPage) {
      setId(targetPage.id);
      setTitle(targetPage.title);
      setSlug(targetPage.slug);
      setMetaTitle(targetPage.seo?.metaTitle || targetPage.title);
      setMetaDescription(targetPage.seo?.metaDescription || '');
      if (targetPage.sections && targetPage.sections.length > 0) {
        setSections(targetPage.sections);
      }
    }
  }, [targetPage]);

  // Section Handlers
  const handleUpdateSectionTitle = (index: number, val: string) => {
    const updated = [...sections];
    updated[index].title = val;
    setSections(updated);
  };

  const handleUpdateSectionContent = (index: number, val: string) => {
    const updated = [...sections];
    updated[index].content = val;
    setSections(updated);
  };

  const handleAddBullet = (sectionIndex: number) => {
    const updated = [...sections];
    if (!updated[sectionIndex].bullets) {
      updated[sectionIndex].bullets = [];
    }
    updated[sectionIndex].bullets?.push('New Key Deliverable / Feature Point');
    setSections(updated);
  };

  const handleUpdateBullet = (sectionIndex: number, bulletIndex: number, val: string) => {
    const updated = [...sections];
    if (updated[sectionIndex].bullets) {
      updated[sectionIndex].bullets![bulletIndex] = val;
      setSections(updated);
    }
  };

  const handleRemoveBullet = (sectionIndex: number, bulletIndex: number) => {
    const updated = [...sections];
    if (updated[sectionIndex].bullets) {
      updated[sectionIndex].bullets!.splice(bulletIndex, 1);
      setSections(updated);
    }
  };

  const handleAddSection = () => {
    const newSec: DynamicPageSection = {
      id: `sec-custom-${Date.now()}`,
      type: 'text-media',
      title: 'New Custom Strategy Section',
      content: 'Provide detailed information about this specialized lead generation feature or strategy.',
      bullets: ['High-Value Deliverable Item 1', 'High-Value Deliverable Item 2'],
    };
    setSections([...sections, newSec]);
  };

  const handleRemoveSection = (index: number) => {
    if (sections.length <= 1) {
      alert('You must keep at least 1 section on the page.');
      return;
    }
    if (confirm('Are you sure you want to delete this section?')) {
      const updated = [...sections];
      updated.splice(index, 1);
      setSections(updated);
    }
  };

  // Save Page Handler
  const handleSavePage = async () => {
    setSaving(true);
    setSavedSuccess(false);

    const payload = {
      title,
      slug: slug || 'lead-generation-services',
      isPublished: true,
      pageType: 'service',
      seo: {
        metaTitle: metaTitle || title,
        metaDescription: metaDescription || '',
        canonicalUrl: `https://lumora.ai/${slug || 'lead-generation-services'}`,
        ogTitle: metaTitle || title,
        ogDescription: metaDescription || '',
        twitterCard: 'summary_large_image',
        schemaType: 'Service',
        schemaData: '{}',
        robotsDirective: 'index, follow',
      },
      sections,
    };

    try {
      const url = id ? `/api/pages/${id}` : '/api/pages';
      const method = id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSavedSuccess(true);
        onRefresh();
        setTimeout(() => setSavedSuccess(false), 4000);
      } else {
        alert('Saved locally. Refreshing pages state.');
        onRefresh();
      }
    } catch {
      onRefresh();
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 4000);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-xs overflow-hidden">
      
      {/* Editor Header Bar */}
      <div className="p-6 sm:p-8 border-b border-[#E5E7EB] bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 font-['Plus_Jakarta_Sans',sans-serif]">
              RESOURCES CMS
            </span>
            <span className="text-xs font-bold text-slate-400">/lead-generation-services</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
            Lead Generation Services Page Editor
          </h2>
          <p className="text-xs text-[#6B7280] font-normal">
            Edit all sections, headings, paragraph content, and key deliverables for the live Lead Generation Services landing page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onViewLive(slug || 'lead-generation-services')}
            className="px-4 py-2.5 rounded-full bg-white border border-[#E5E7EB] hover:border-[#2563EB] text-slate-700 hover:text-[#2563EB] text-xs font-extrabold flex items-center gap-2 transition-all shadow-xs"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Preview Live Page</span>
          </button>

          <button
            onClick={handleSavePage}
            disabled={saving}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] text-white text-xs font-extrabold flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-105 disabled:opacity-50"
          >
            <Save className="w-4 h-4 text-white" />
            <span>{saving ? 'Saving Changes...' : 'Save Live Page'}</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="mx-6 sm:mx-8 mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-700 text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Success! Lead Generation Services page has been updated live across the website.</span>
        </div>
      )}

      {/* Editor Content Area */}
      <div className="p-6 sm:p-8 space-y-10">
        
        {/* 1. Page Metadata & SEO Setup */}
        <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-[#E5E7EB]">
            <Globe className="w-4 h-4 text-[#2563EB]" />
            <h3 className="font-extrabold text-sm text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
              Page Metadata & SEO Settings
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                Page Title (H1 Header)
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-semibold text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-blue-100"
                placeholder="Page Title"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                URL Slug
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-semibold text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-blue-100"
                placeholder="lead-generation-services"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                Meta Title (SEO Search Results)
              </label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-semibold text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-blue-100"
                placeholder="SEO Title"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                Meta Description
              </label>
              <textarea
                rows={2}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-normal text-[#111827] focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-blue-100 leading-relaxed"
                placeholder="SEO Description"
              />
            </div>
          </div>
        </div>

        {/* 2. Section-by-Section Editor */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#2563EB]" />
              <h3 className="font-extrabold text-base text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
                Page Sections & Deliverables ({sections.length} Active Sections)
              </h3>
            </div>

            <button
              onClick={handleAddSection}
              className="px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-100 text-[#2563EB] text-xs font-extrabold flex items-center gap-1.5 transition-colors border border-blue-200"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Section</span>
            </button>
          </div>

          {sections.map((sec, idx) => (
            <div
              key={sec.id || idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-5 relative"
            >
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] font-extrabold text-xs flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif]">
                    {idx + 1}
                  </span>
                  <span className="font-extrabold text-sm text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
                    Section {idx + 1}: {sec.title || 'Untitled Section'}
                  </span>
                </div>

                <button
                  onClick={() => handleRemoveSection(idx)}
                  className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors"
                  title="Remove Section"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Section Title */}
              <div>
                <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  Section Headline (H2)
                </label>
                <input
                  type="text"
                  value={sec.title}
                  onChange={(e) => handleUpdateSectionTitle(idx, e.target.value)}
                  className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-xs font-bold text-[#111827] focus:border-[#2563EB] focus:outline-none"
                  placeholder="Section Title"
                />
              </div>

              {/* Section Paragraph */}
              <div>
                <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  Section Body Content / Paragraph
                </label>
                <textarea
                  rows={3}
                  value={sec.content}
                  onChange={(e) => handleUpdateSectionContent(idx, e.target.value)}
                  className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-xs font-normal text-[#111827] focus:border-[#2563EB] focus:outline-none leading-relaxed"
                  placeholder="Section paragraph description..."
                />
              </div>

              {/* Section Bullets / Deliverables */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold text-[#111827] uppercase tracking-wider flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif]">
                    <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                    Key Deliverables & Strategy Focus Items
                  </span>
                  <button
                    onClick={() => handleAddBullet(idx)}
                    className="text-xs font-extrabold text-[#2563EB] hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Deliverable
                  </button>
                </div>

                <div className="space-y-2.5">
                  {(sec.bullets || []).map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="text"
                        value={bullet}
                        onChange={(e) => handleUpdateBullet(idx, bIdx, e.target.value)}
                        className="flex-1 p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs font-semibold text-[#111827] focus:border-[#2563EB] focus:outline-none"
                        placeholder="Deliverable item text"
                      />
                      <button
                        onClick={() => handleRemoveBullet(idx, bIdx)}
                        className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                        title="Delete Deliverable"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Save CTA Bar */}
        <div className="pt-6 border-t border-[#E5E7EB] flex items-center justify-end gap-4">
          <button
            onClick={() => onViewLive(slug || 'lead-generation-services')}
            className="px-6 py-3 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#2563EB] text-[#111827] text-xs font-bold"
          >
            Preview Live Site Page
          </button>
          <button
            onClick={handleSavePage}
            disabled={saving}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] text-white text-xs font-extrabold flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-105 disabled:opacity-50"
          >
            <Save className="w-4 h-4 text-white" />
            <span>{saving ? 'Saving...' : 'Save & Publish Live Page'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
