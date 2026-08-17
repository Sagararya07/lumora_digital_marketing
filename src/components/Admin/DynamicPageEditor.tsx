import React, { useState, useEffect } from 'react';
import { 
  Save, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  Globe, 
  Sparkles, 
  Layers, 
  ExternalLink,
  Check,
  Upload,
  Image as ImageIcon
} from 'lucide-react';
import { DynamicPage, DynamicPageSection } from '../../types';

interface DynamicPageEditorProps {
  pageId: string;
  dynamicPages: DynamicPage[];
  onRefresh: () => void;
  onViewLive: (slug: string) => void;
}

export const DynamicPageEditor: React.FC<DynamicPageEditorProps> = ({
  pageId,
  dynamicPages,
  onRefresh,
  onViewLive,
}) => {
  // Locate the target page by ID
  const targetPage = dynamicPages.find((p) => String(p.id) === String(pageId));

  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [slug, setSlug] = useState<string>('');
  const [metaTitle, setMetaTitle] = useState<string>('');
  const [metaDescription, setMetaDescription] = useState<string>('');
  const [heroImage, setHeroImage] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const [sections, setSections] = useState<DynamicPageSection[]>([]);
  const [sortOrder, setSortOrder] = useState<number>(0);
  
  // Custom Modal Fields
  const [overviewContent, setOverviewContent] = useState<string>('');
  const [heroBadge, setHeroBadge] = useState<string>('');
  const [serviceFeatures, setServiceFeatures] = useState<string[]>([]);
  const [serviceDeliverables, setServiceDeliverables] = useState<string[]>([]);
  const [serviceRecommendedFor, setServiceRecommendedFor] = useState<string>('');

  const [saving, setSaving] = useState<boolean>(false);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  // Sync state if dynamicPages or pageId change
  useEffect(() => {
    if (targetPage) {
      setId(targetPage.id);
      setTitle(targetPage.title);
      setSlug(targetPage.slug);
      setMetaTitle(targetPage.seo?.metaTitle || targetPage.title);
      setMetaDescription(targetPage.seo?.metaDescription || '');
      setHeroImage(targetPage.heroImage || '');
      setOverviewContent(targetPage.overviewContent || '');
      setHeroBadge(targetPage.heroBadge || '');
      setServiceFeatures(targetPage.serviceFeatures || []);
      setServiceDeliverables(targetPage.serviceDeliverables || []);
      setServiceRecommendedFor(targetPage.serviceRecommendedFor || '');
      setSections(targetPage.sections || []);
      setSortOrder(targetPage.sortOrder || 0);
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

  
  const handleAddCaseStudy = (sectionIndex: number) => {
    const updated = [...sections];
    if (!updated[sectionIndex].caseStudies) {
      updated[sectionIndex].caseStudies = [];
    }
    updated[sectionIndex].caseStudies.push({
      id: `cs-${Date.now()}`,
      title: 'New Case Study / Campaign',
      description: 'Describe the transformation...',
      points: [{ id: `pt-${Date.now()}-1`, title: 'New Point' }]
    });
    setSections(updated);
  };

  const handleUpdateCaseStudy = (sectionIndex: number, caseStudyIndex: number, field: string, val: string) => {
    const updated = [...sections];
    if (updated[sectionIndex].caseStudies) {
      (updated[sectionIndex].caseStudies[caseStudyIndex] as any)[field] = val;
      setSections(updated);
    }
  };

  const handleRemoveCaseStudy = (sectionIndex: number, caseStudyIndex: number) => {
    const updated = [...sections];
    if (updated[sectionIndex].caseStudies) {
      updated[sectionIndex].caseStudies.splice(caseStudyIndex, 1);
      setSections(updated);
    }
  };

  const handleAddCaseStudyPoint = (sectionIndex: number, caseStudyIndex: number) => {
    const updated = [...sections];
    if (updated[sectionIndex].caseStudies) {
      updated[sectionIndex].caseStudies[caseStudyIndex].points.push({
        id: `pt-${Date.now()}`,
        title: 'New Point'
      });
      setSections(updated);
    }
  };

  const handleUpdateCaseStudyPoint = (sectionIndex: number, caseStudyIndex: number, pointIndex: number, val: string) => {
    const updated = [...sections];
    if (updated[sectionIndex].caseStudies) {
      updated[sectionIndex].caseStudies[caseStudyIndex].points[pointIndex].title = val;
      setSections(updated);
    }
  };

  const handleRemoveCaseStudyPoint = (sectionIndex: number, caseStudyIndex: number, pointIndex: number) => {
    const updated = [...sections];
    if (updated[sectionIndex].caseStudies) {
      updated[sectionIndex].caseStudies[caseStudyIndex].points.splice(pointIndex, 1);
      setSections(updated);
    }
  };

  const handleAddCard = (sectionIndex: number) => {
    const updated = [...sections];
    if (!updated[sectionIndex].cards) {
      updated[sectionIndex].cards = [];
    }
    updated[sectionIndex].cards!.push({
      id: `card-${Date.now()}`,
      title: 'New Card',
      description: 'Card description...'
    });
    setSections(updated);
  };

  const handleUpdateCard = (sectionIndex: number, cardIndex: number, field: string, val: string) => {
    const updated = [...sections];
    if (updated[sectionIndex].cards) {
      (updated[sectionIndex].cards![cardIndex] as any)[field] = val;
      setSections(updated);
    }
  };

  const handleRemoveCard = (sectionIndex: number, cardIndex: number) => {
    const updated = [...sections];
    if (updated[sectionIndex].cards) {
      updated[sectionIndex].cards!.splice(cardIndex, 1);
      setSections(updated);
    }
  };

  const handleCardIconUpload = async (sectionIndex: number, cardIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    setIsUploading(true);
    const file = e.target.files[0];
    
    // Convert to base64 for immediate frontend use if no backend is present, 
    // or use the existing /api/upload endpoint
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        handleUpdateCard(sectionIndex, cardIndex, 'iconUrl', data.url);
      } else {
        // Fallback to Base64 if /api/upload fails
        const reader = new FileReader();
        reader.onloadend = () => {
          handleUpdateCard(sectionIndex, cardIndex, 'iconUrl', reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    } catch (err) {
      // Fallback to Base64
      const reader = new FileReader();
      reader.onloadend = () => {
        handleUpdateCard(sectionIndex, cardIndex, 'iconUrl', reader.result as string);
      };
      reader.readAsDataURL(file);
    } finally {
      setIsUploading(false);
    }
  };


const handleAddSection = () => {
    const newSec: DynamicPageSection = {
      id: `sec-custom-${Date.now()}`,
      type: 'text-media',
      title: 'New Custom Strategy Section',
      content: 'Provide detailed information about this specialized feature or strategy.',
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

  const handleToggleSectionActive = (index: number) => {
    const updated = [...sections];
    // Default to active if undefined
    const currentState = updated[index].isActive === undefined ? true : updated[index].isActive;
    updated[index].isActive = !currentState;
    setSections(updated);
  };

  const handleHeroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    setIsUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      setHeroImage(data.url);
    } catch (err) {
      alert('Failed to upload hero image.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = async (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!e.dataTransfer.files || !e.dataTransfer.files[0]) return;
    setIsUploading(true);
    const file = e.dataTransfer.files[0];
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      setHeroImage(data.url);
    } catch (err) {
      alert('Failed to upload hero image.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleCaseStudyImageUpload = async (sectionIndex: number, caseStudyIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    setIsUploading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      
      const updated = [...sections];
      if (updated[sectionIndex].caseStudies) {
        (updated[sectionIndex].caseStudies[caseStudyIndex] as any)['bgImageUrl'] = data.url;
        setSections(updated);
      }
    } catch (err) {
      alert('Failed to upload case study background image.');
    } finally {
      setIsUploading(false);
    }
  };

  // Save Page Handler
  const handleSavePage = async () => {
    setSaving(true);
    setSavedSuccess(false);

    const payload = {
      title,
      slug,
      isPublished: true,
      sortOrder,
      pageType: targetPage?.pageType || 'service',
      seo: {
        metaTitle: metaTitle || title,
        metaDescription: metaDescription || '',
        canonicalUrl: `https://lumora.ai/${slug}`,
        ogTitle: metaTitle || title,
        ogDescription: metaDescription || '',
        twitterCard: 'summary_large_image',
        schemaType: targetPage?.seo?.schemaType || 'Service',
        schemaData: targetPage?.seo?.schemaData || '{}',
        robotsDirective: 'index, follow',
      },
      sections,
      heroImage,
      overviewContent,
      heroBadge,
      serviceFeatures,
      serviceDeliverables,
      serviceRecommendedFor,
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
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || errorData.message || `Server responded with ${res.status}`);
      }
    } catch (err: any) {
      console.error(err);
      alert(`Error saving page: ${err.message || 'Unknown error'}`);
    } finally {
      setSaving(false);
    }
  };

  if (!targetPage) return <div className="p-8 text-center text-slate-500">Loading page editor...</div>;

  return (
    <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-xs overflow-hidden">
      
      {/* Editor Header Bar */}
      <div className="p-6 sm:p-8 border-b border-[#E5E7EB] bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#5B8EE2] bg-[#F2F6FC] px-3 py-1 rounded-full border border-blue-100 font-['Plus_Jakarta_Sans',sans-serif]">
              DYNAMIC PAGE EDITOR
            </span>
            <span className="text-xs font-bold text-slate-400">/{slug}</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
            {title}
          </h2>
          <p className="text-xs text-[#6B7280] font-normal mt-1">
            Edit all sections, headings, paragraph content, and key deliverables for this dynamic page.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onViewLive(slug)}
            className="px-4 py-2.5 rounded-full bg-white border border-[#E5E7EB] hover:border-[#5B8EE2] text-slate-700 hover:text-[#5B8EE2] text-xs font-extrabold flex items-center gap-2 transition-all shadow-xs"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#5B8EE2]" />
            <span>Preview Live Page</span>
          </button>

          <button
            onClick={handleSavePage}
            disabled={saving}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-xs font-extrabold flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-105 disabled:opacity-50"
          >
            <Save className="w-4 h-4 text-white" />
            <span>{saving ? 'Saving...' : 'Save Live Page'}</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="mx-6 sm:mx-8 mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-700 text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Success! The page has been updated live across the website.</span>
        </div>
      )}

      {/* Editor Content Area */}
      <div className="p-6 sm:p-8 space-y-10">
        
        {/* 1. Page Metadata & SEO Setup */}
        <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-[#E5E7EB]">
            <Globe className="w-4 h-4 text-[#5B8EE2]" />
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
                className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-semibold text-[#111827] focus:border-[#5B8EE2] focus:outline-none focus:ring-4 focus:ring-blue-100"
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
                className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-semibold text-[#111827] focus:border-[#5B8EE2] focus:outline-none focus:ring-4 focus:ring-blue-100"
                placeholder="page-slug"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                Sort Order (Menu Ranking)
              </label>
              <input
                type="number"
                value={sortOrder}
                onChange={(e) => setSortOrder(Number(e.target.value))}
                className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-semibold text-[#111827] focus:border-[#5B8EE2] focus:outline-none focus:ring-4 focus:ring-blue-100"
                placeholder="0"
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
                className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-semibold text-[#111827] focus:border-[#5B8EE2] focus:outline-none focus:ring-4 focus:ring-blue-100"
                placeholder="SEO Title"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                Hero Image / Animation (GIF)
              </label>
              <div className="flex items-center gap-4">
                {heroImage && (
                  <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#E5E7EB] bg-slate-50 flex-shrink-0">
                    <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1">
                  <label 
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="cursor-pointer inline-flex items-center justify-center w-full px-4 py-3.5 border-2 border-dashed border-[#CBD5E1] hover:border-[#5B8EE2] hover:bg-[#F8FAFC] rounded-2xl transition-colors"
                  >
                    <input type="file" className="hidden" accept="image/*" onChange={handleHeroImageUpload} disabled={isUploading} />
                    <div className="flex items-center gap-2 text-sm text-[#64748B] font-semibold">
                      {isUploading ? (
                        <div className="w-4 h-4 border-2 border-slate-300 border-t-[#5B8EE2] rounded-full animate-spin" />
                      ) : (
                        <Upload className="w-4 h-4" />
                      )}
                      <span>{isUploading ? 'Uploading...' : 'Upload Image / GIF'}</span>
                    </div>
                  </label>
                </div>
                {heroImage && (
                  <button onClick={() => setHeroImage('')} className="px-3 py-3.5 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-bold transition-colors">
                    Remove
                  </button>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                Meta Description
              </label>
              <textarea
                rows={2}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-normal text-[#111827] focus:border-[#5B8EE2] focus:outline-none focus:ring-4 focus:ring-blue-100 leading-relaxed"
                placeholder="SEO Description"
              />
            </div>
          </div>
        </div>

        {/* Modal Configuration (Service Pages Only) */}
        {targetPage?.pageType === 'service' && (
          <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E5E7EB] space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-[#E5E7EB]">
              <Sparkles className="w-4 h-4 text-[#5B8EE2]" />
              <h3 className="font-extrabold text-sm text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
                Service Modal Details (Optional Overrides)
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  Overview Description
                </label>
                <textarea
                  rows={2}
                  value={overviewContent}
                  onChange={(e) => setOverviewContent(e.target.value)}
                  className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-normal text-[#111827] focus:border-[#5B8EE2] focus:outline-none focus:ring-4 focus:ring-blue-100 leading-relaxed"
                  placeholder="Full description for the modal..."
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  Hero Badge (Icon Name)
                </label>
                <input
                  type="text"
                  value={heroBadge}
                  onChange={(e) => setHeroBadge(e.target.value)}
                  className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-semibold text-[#111827] focus:border-[#5B8EE2] focus:outline-none focus:ring-4 focus:ring-blue-100"
                  placeholder="e.g. Target, Users, TrendingUp"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  Recommended Audience
                </label>
                <input
                  type="text"
                  value={serviceRecommendedFor}
                  onChange={(e) => setServiceRecommendedFor(e.target.value)}
                  className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-semibold text-[#111827] focus:border-[#5B8EE2] focus:outline-none focus:ring-4 focus:ring-blue-100"
                  placeholder="e.g. Scaling B2B SaaS Companies"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  Key Capabilities (Features)
                </label>
                <textarea
                  rows={3}
                  value={serviceFeatures.join('\n')}
                  onChange={(e) => setServiceFeatures(e.target.value.split('\n'))}
                  className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-normal text-[#111827] focus:border-[#5B8EE2] focus:outline-none focus:ring-4 focus:ring-blue-100 leading-relaxed"
                  placeholder="Enter one feature per line..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  Client Deliverables
                </label>
                <textarea
                  rows={3}
                  value={serviceDeliverables.join('\n')}
                  onChange={(e) => setServiceDeliverables(e.target.value.split('\n'))}
                  className="w-full p-3.5 bg-white border border-[#E5E7EB] rounded-2xl text-xs font-normal text-[#111827] focus:border-[#5B8EE2] focus:outline-none focus:ring-4 focus:ring-blue-100 leading-relaxed"
                  placeholder="Enter one deliverable per line..."
                />
              </div>
            </div>
          </div>
        )}
        
        {/* 2. Section-by-Section Editor */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#5B8EE2]" />
              <h3 className="font-extrabold text-base text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
                Page Sections & Deliverables ({sections.length} Active Sections)
              </h3>
            </div>

            <button
              onClick={handleAddSection}
              className="px-4 py-2 rounded-full bg-[#F2F6FC] hover:bg-blue-100 text-[#5B8EE2] text-xs font-extrabold flex items-center gap-1.5 transition-colors border border-blue-200"
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
                  <span className="w-7 h-7 rounded-full bg-[#F2F6FC] border border-blue-200 text-[#5B8EE2] font-extrabold text-xs flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif]">
                    {idx + 1}
                  </span>
                  <span className="font-extrabold text-sm text-[#111827] font-['Plus_Jakarta_Sans',sans-serif]">
                    Section {idx + 1}: {sec.title || 'Untitled Section'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleToggleSectionActive(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                      sec.isActive === false 
                        ? 'bg-slate-100 text-slate-500 hover:bg-slate-200' 
                        : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200'
                    }`}
                  >
                    {sec.isActive === false ? 'Inactive' : 'Active'}
                  </button>
                  <button
                    onClick={() => handleRemoveSection(idx)}
                    className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors"
                    title="Remove Section"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Section Type Selector */}
              <div>
                <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  1. Choose Section Type
                </label>
                <select
                  value={sec.type || 'text-media'}
                  onChange={(e) => {
                    const updated = [...sections];
                    updated[idx].type = e.target.value as any;
                    setSections(updated);
                  }}
                  className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-xs font-bold text-[#111827] focus:border-[#5B8EE2] focus:outline-none cursor-pointer hover:border-[#5B8EE2] transition-colors"
                >
                  <option value="text-media">Text & Media</option>
                  <option value="scrollable-cards">Scrollable Cards (Ads/Leads We Manage)</option>
                  <option value="services-grid">Services Grid</option>
                  <option value="overview">Overview</option>
                  <option value="how-we-do-it">How We Do It</option>
                  <option value="faq">FAQ</option>
                  <option value="case-study">Case Study</option>
                  <option value="process">Process</option>
                  <option value="hero">Hero</option>
                  <option value="icon-hero">Icon Hero</option>
                  <option value="custom-html">Custom HTML</option>
                  <option value="lead-form">Lead Form</option>
                </select>
              </div>

              {/* Section Title */}
              <div>
                <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  2. Section Headline (H2)
                </label>
                <input
                  type="text"
                  value={sec.title}
                  onChange={(e) => handleUpdateSectionTitle(idx, e.target.value)}
                  className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-xs font-bold text-[#111827] focus:border-[#5B8EE2] focus:outline-none"
                  placeholder="Section Title"
                />
              </div>

              {/* Section Media/Icon URL */}
              {(sec.type === 'icon-hero' || sec.type === 'text-media' || sec.type === 'overview' || sec.type === 'how-we-do-it') && (
                <div>
                  <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                    3. Media / Icon URL (Optional)
                  </label>
                  <input
                    type="text"
                    value={sec.mediaUrl || ''}
                    onChange={(e) => {
                      const updated = [...sections];
                      updated[idx].mediaUrl = e.target.value;
                      setSections(updated);
                    }}
                    className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-xs font-bold text-[#111827] focus:border-[#5B8EE2] focus:outline-none"
                    placeholder="https://..."
                  />
                </div>
              )}

              {/* Section Paragraph */}
              <div>
                <label className="block text-xs font-extrabold text-[#111827] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  4. Section Body Content / Paragraph
                </label>
                <textarea
                  rows={3}
                  value={sec.content}
                  onChange={(e) => handleUpdateSectionContent(idx, e.target.value)}
                  className="w-full p-3.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl text-xs font-normal text-[#111827] focus:border-[#5B8EE2] focus:outline-none leading-relaxed"
                  placeholder="Section paragraph description..."
                />
              </div>

              {/* Section Bullets / Deliverables */}
              {(sec.type === 'text-media' || sec.type === 'how-we-do-it' || sec.type === 'hero' || sec.type === 'overview' || sec.type === 'process' || sec.type === 'faq') && (
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold text-[#111827] uppercase tracking-wider flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif]">
                    <Sparkles className="w-3.5 h-3.5 text-[#5B8EE2]" />
                    Key Deliverables & Strategy Focus Items
                  </span>
                  <button
                    onClick={() => handleAddBullet(idx)}
                    className="text-xs font-extrabold text-[#5B8EE2] hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Deliverable
                  </button>
                </div>

                <div className="space-y-2.5">
                  {(sec.bullets || []).map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#F2F6FC] text-[#5B8EE2] flex items-center justify-center shrink-0 border border-blue-100">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="text"
                        value={bullet}
                        onChange={(e) => handleUpdateBullet(idx, bIdx, e.target.value)}
                        className="flex-1 p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs font-semibold text-[#111827] focus:border-[#5B8EE2] focus:outline-none"
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
              )}

              {/* Case Studies / Client Success Cards */}
              {sec.type === 'case-study' && (
                <div className="pt-5 border-t border-[#E5E7EB] mt-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-[#111827] uppercase tracking-wider flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif]">
                    <Globe className="w-4 h-4 text-[#5B8EE2]" />
                    Case Studies & Success Cards
                  </span>
                  <button
                    onClick={() => handleAddCaseStudy(idx)}
                    className="px-3 py-1.5 rounded-full bg-[#F2F6FC] text-[#5B8EE2] hover:bg-blue-100 text-[10px] font-extrabold flex items-center gap-1 transition-colors border border-blue-200"
                  >
                    <Plus className="w-3 h-3" /> Add Case Study Card
                  </button>
                </div>

                <div className="space-y-6">
                  {(sec.caseStudies || []).map((study, studyIdx) => (
                    <div key={study.id} className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] relative shadow-sm">
                      <button
                        onClick={() => handleRemoveCaseStudy(idx, studyIdx)}
                        className="absolute -top-3 -right-3 w-7 h-7 bg-white border border-rose-200 rounded-full text-rose-500 flex items-center justify-center hover:bg-rose-50 transition-all shadow-sm z-10"
                        title="Delete Card"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-[10px] font-extrabold text-[#6B7280] uppercase mb-1.5">Card Title (H3)</label>
                            <input
                              type="text"
                              value={study.title || ''}
                              onChange={(e) => handleUpdateCaseStudy(idx, studyIdx, 'title', e.target.value)}
                              className="w-full p-2.5 bg-white border border-[#E5E7EB] rounded-xl text-xs font-bold text-[#111827] focus:border-[#5B8EE2] focus:outline-none"
                              placeholder="e.g. Global Brand Awareness"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-extrabold text-[#6B7280] uppercase mb-1.5">Paragraph Description</label>
                            <textarea
                              rows={3}
                              value={study.description || ''}
                              onChange={(e) => handleUpdateCaseStudy(idx, studyIdx, 'description', e.target.value)}
                              className="w-full p-2.5 bg-white border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:border-[#5B8EE2] focus:outline-none"
                              placeholder="Description..."
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-extrabold text-[#6B7280] uppercase mb-1.5">Background Image URL (Optional)</label>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                value={study.bgImageUrl || ''}
                                onChange={(e) => handleUpdateCaseStudy(idx, studyIdx, 'bgImageUrl', e.target.value)}
                                className="flex-1 p-2.5 bg-white border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:border-[#5B8EE2] focus:outline-none"
                                placeholder="https://..."
                              />
                              <label className="cursor-pointer shrink-0 bg-slate-100 hover:bg-slate-200 border border-[#E5E7EB] px-3 py-2.5 rounded-xl flex items-center justify-center transition-colors">
                                <input 
                                  type="file" 
                                  className="hidden" 
                                  accept="image/*" 
                                  onChange={(e) => handleCaseStudyImageUpload(idx, studyIdx, e)} 
                                  disabled={isUploading} 
                                />
                                {isUploading ? (
                                  <div className="w-4 h-4 border-2 border-slate-400 border-t-slate-800 rounded-full animate-spin" />
                                ) : (
                                  <Upload className="w-4 h-4 text-slate-600" />
                                )}
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-[#E5E7EB]">
                          <div className="flex items-center justify-between mb-3 border-b border-[#E5E7EB] pb-2">
                            <label className="block text-[10px] font-extrabold text-[#111827] uppercase">Points Grid (Max 6)</label>
                            <button
                              onClick={() => handleAddCaseStudyPoint(idx, studyIdx)}
                              className="text-[10px] font-extrabold text-[#5B8EE2] hover:underline flex items-center gap-1"
                            >
                              <Plus className="w-3 h-3" /> Add Point
                            </button>
                          </div>
                          <div className="space-y-2">
                            {(study.points || []).map((pt: any, ptIdx: number) => (
                              <div key={pt.id} className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-[#F2F6FC] border border-blue-100 flex items-center justify-center shrink-0">
                                  <Check className="w-3 h-3 text-[#5B8EE2]" />
                                </div>
                                <input
                                  type="text"
                                  value={pt.title || ''}
                                  onChange={(e) => handleUpdateCaseStudyPoint(idx, studyIdx, ptIdx, e.target.value)}
                                  className="flex-1 p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg text-xs font-semibold focus:border-[#5B8EE2] focus:outline-none"
                                  placeholder="Point title..."
                                />
                                <button
                                  onClick={() => handleRemoveCaseStudyPoint(idx, studyIdx, ptIdx)}
                                  className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded transition-colors"
                                  title="Remove point"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                            {(!study.points || study.points.length === 0) && (
                              <p className="text-[10px] text-slate-400 text-center py-2">No points added yet.</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              )}

              {/* Cards Editor (For Services Grid, Scrollable Cards, Process, How we do it) */}
              {(sec.type === 'services-grid' || sec.type === 'scrollable-cards' || sec.type === 'process' || sec.type === 'how-we-do-it' || sec.type === 'faq') && (
                <div className="pt-5 border-t border-[#E5E7EB] mt-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-[#111827] uppercase tracking-wider flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif]">
                      <Layers className="w-4 h-4 text-[#5B8EE2]" />
                      Section Cards ({sec.cards?.length || 0})
                    </span>
                    <button
                      onClick={() => handleAddCard(idx)}
                      className="px-3 py-1.5 rounded-full bg-[#F2F6FC] text-[#5B8EE2] hover:bg-blue-100 text-[10px] font-extrabold flex items-center gap-1 transition-colors border border-blue-200"
                    >
                      <Plus className="w-3 h-3" /> Add Card
                    </button>
                  </div>

                  <div className="space-y-4">
                    {(sec.cards || []).map((card, cardIdx) => (
                      <div key={card.id} className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] relative shadow-sm">
                        <button
                          onClick={() => handleRemoveCard(idx, cardIdx)}
                          className="absolute -top-3 -right-3 w-7 h-7 bg-white border border-rose-200 rounded-full text-rose-500 flex items-center justify-center hover:bg-rose-50 transition-all shadow-sm z-10"
                          title="Delete Card"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-[10px] font-extrabold text-[#6B7280] uppercase mb-1.5">Card Title</label>
                              <input
                                type="text"
                                value={card.title || ''}
                                onChange={(e) => handleUpdateCard(idx, cardIdx, 'title', e.target.value)}
                                className="w-full p-2.5 bg-white border border-[#E5E7EB] rounded-xl text-xs font-bold text-[#111827] focus:border-[#5B8EE2] focus:outline-none"
                                placeholder="Card Title"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-extrabold text-[#6B7280] uppercase mb-1.5">Description</label>
                              <textarea
                                rows={3}
                                value={card.description || ''}
                                onChange={(e) => handleUpdateCard(idx, cardIdx, 'description', e.target.value)}
                                className="w-full p-2.5 bg-white border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:border-[#5B8EE2] focus:outline-none"
                                placeholder="Description..."
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-extrabold text-[#6B7280] uppercase mb-1.5">Link URL (Optional)</label>
                              <input
                                type="text"
                                value={card.linkUrl || ''}
                                onChange={(e) => handleUpdateCard(idx, cardIdx, 'linkUrl', e.target.value)}
                                className="w-full p-2.5 bg-white border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:border-[#5B8EE2] focus:outline-none"
                                placeholder="https://..."
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-[10px] font-extrabold text-[#6B7280] uppercase mb-1.5">Icon / Image</label>
                            <div className="flex flex-col gap-3">
                              {card.iconUrl ? (
                                <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#E5E7EB] bg-white flex items-center justify-center relative group">
                                  <img src={card.iconUrl} alt="Icon" className="max-w-full max-h-full object-contain p-2" />
                                  <button 
                                    onClick={() => handleUpdateCard(idx, cardIdx, 'iconUrl', '')}
                                    className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              ) : (
                                <div className="w-20 h-20 rounded-xl border border-dashed border-[#CBD5E1] bg-white flex items-center justify-center text-slate-300">
                                  <ImageIcon className="w-8 h-8" />
                                </div>
                              )}
                              
                              <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 border border-[#E5E7EB] px-3 py-2.5 rounded-xl flex items-center justify-center transition-colors text-xs font-semibold text-slate-600 gap-2 w-full max-w-[200px]">
                                <input 
                                  type="file" 
                                  className="hidden" 
                                  accept="image/*" 
                                  onChange={(e) => handleCardIconUpload(idx, cardIdx, e)} 
                                  disabled={isUploading} 
                                />
                                {isUploading ? (
                                  <div className="w-4 h-4 border-2 border-slate-400 border-t-slate-800 rounded-full animate-spin" />
                                ) : (
                                  <Upload className="w-4 h-4 text-slate-600" />
                                )}
                                <span>Upload Icon</span>
                              </label>
                              <div className="mt-2">
                                <label className="block text-[10px] font-extrabold text-[#6B7280] uppercase mb-1.5">Or Icon Name (Lucide)</label>
                                <input
                                  type="text"
                                  value={card.iconName || ''}
                                  onChange={(e) => handleUpdateCard(idx, cardIdx, 'iconName', e.target.value)}
                                  className="w-full p-2.5 bg-white border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:border-[#5B8EE2] focus:outline-none"
                                  placeholder="e.g. Target, Users"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {(!sec.cards || sec.cards.length === 0) && (
                      <p className="text-xs text-slate-400 text-center py-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">No cards added yet.</p>
                    )}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Bottom Save CTA Bar */}
        <div className="pt-6 border-t border-[#E5E7EB] flex items-center justify-end gap-4">
          <button
            onClick={() => onViewLive(slug)}
            className="px-6 py-3 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#5B8EE2] text-[#111827] text-xs font-bold"
          >
            Preview Live Site Page
          </button>
          <button
            onClick={handleSavePage}
            disabled={saving}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#5B8EE2] via-[#D6A67B] to-[#EC4899] hover:from-[#4676C2] hover:via-[#C29367] hover:to-[#DB2777] text-white text-xs font-extrabold flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all hover:scale-105 disabled:opacity-50"
          >
            <Save className="w-4 h-4 text-white" />
            <span>{saving ? 'Saving...' : 'Save & Publish Live Page'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
