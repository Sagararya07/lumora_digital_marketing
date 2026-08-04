import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { 
  SiteContent, 
  LeadSubmission, 
  DynamicPage, 
  ServiceItem, 
  AchievementItem, 
  ProcessStep, 
  IndustryItem, 
  FAQItem, 
  HeroContent,
  WhatIsDigitalContent,
  WhyChooseContent,
  WhoShouldUseItem
} from './src/types.js';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer setup for in-memory uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Image Upload Route
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Convert buffer to base64
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'lumora_website',
      resource_type: 'auto',
    });

    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// Image Delete Route
app.delete('/api/upload', async (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id) {
      return res.status(400).json({ error: 'public_id is required' });
    }

    const result = await cloudinary.uploader.destroy(public_id);
    res.json({ success: true, result });
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

// PostgreSQL Connection Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Required for Supabase Postgres
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle pg client', err);
  process.exit(-1);
});

function parseJsonSetting<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

// Mapping Helper
async function getSiteContent(): Promise<SiteContent> {
  const [
    heroRes,
    servicesRes,
    achievementsRes,
    processRes,
    industriesRes,
    faqsRes,
    whyChooseUsRes,
    whatIsContentRes,
    whoShouldUseRes,
    siteSettingsRes,
    testimonialsRes,
    trustedLogosRes,
    caseStudiesRes,
    aboutMissionCardsRes,
    aboutCorePillarsRes,
    aboutHeroRes,
    rndModulesRes
  ] = await Promise.all([
    pool.query('SELECT * FROM hero_section WHERE is_active = true LIMIT 1'),
    pool.query('SELECT * FROM services WHERE is_active = true ORDER BY sort_order'),
    pool.query('SELECT * FROM achievements WHERE is_active = true ORDER BY sort_order'),
    pool.query('SELECT * FROM process_steps WHERE is_active = true ORDER BY sort_order'),
    pool.query('SELECT * FROM industries WHERE is_active = true ORDER BY sort_order'),
    pool.query('SELECT * FROM faqs WHERE is_active = true ORDER BY sort_order'),
    pool.query('SELECT * FROM why_choose_us WHERE is_active = true ORDER BY sort_order'),
    pool.query('SELECT * FROM digital_marketing_content WHERE is_active = true ORDER BY sort_order'),
    pool.query('SELECT * FROM target_audience WHERE is_active = true ORDER BY sort_order'),
    pool.query('SELECT key, value FROM site_settings'),
    pool.query('SELECT * FROM testimonials WHERE is_active = true ORDER BY sort_order'),
    pool.query('SELECT * FROM trusted_logos ORDER BY created_at ASC'),
    pool.query('SELECT * FROM case_studies ORDER BY created_at ASC'),
    pool.query('SELECT * FROM about_mission_cards WHERE is_active = true ORDER BY sort_order'),
    pool.query('SELECT * FROM about_core_pillars WHERE is_active = true ORDER BY sort_order'),
    pool.query('SELECT * FROM about_hero_section LIMIT 1'),
    pool.query('SELECT * FROM rnd_modules WHERE is_active = true ORDER BY sort_order')
  ]);

  const settingsMap: Record<string, string> = {};
  siteSettingsRes.rows.forEach(row => {
    settingsMap[row.key] = row.value;
  });

  const heroExtended = parseJsonSetting(settingsMap['hero_extended'], {
    headlineHighlight: 'Digital Marketing',
    statNumber: '+342%',
    statLabel: 'Avg. Pipeline Revenue Growth',
    statBadgeText: 'Verified Agency Partner',
  });

  const whatIsSection = parseJsonSetting(settingsMap['what_is_section'], {
    title: 'What is Digital Marketing?',
    subtitle: 'The Engine of Modern Global Business Scaling',
    descriptionParagraph2:
      'At Cypher Swift, we transcend standard advertising. We combine algorithmic audience targeting, AI-enhanced campaign optimization, and creative brand storytelling to convert international digital attention into scalable pipeline revenue.',
  });

  const whyChooseSection = parseJsonSetting(settingsMap['why_choose_section'], {
    title: 'Why Choose Cypher Swift?',
    subtitle: 'Built for High-Growth Enterprises, SMEs & Ambitious Brands',
  });

  const heroRow = heroRes.rows[0] || {};
  const hero: HeroContent = {
    badgeText: heroRow.tagline || 'AI-Powered Digital Marketing',
    headlineMain: heroRow.heading || 'Grow Your Business',
    headlineHighlight: heroExtended.headlineHighlight,
    subheadline: heroRow.subheading || 'Data-driven marketing.',
    ctaPrimaryText: heroRow.primary_cta || 'Talk to an Expert',
    ctaSecondaryText: heroRow.secondary_cta || 'Free Audit',
    statNumber: heroExtended.statNumber,
    statLabel: heroExtended.statLabel,
    statBadgeText: heroExtended.statBadgeText,
  };

  const whatIsRows = whatIsContentRes.rows;
  const introRow = whatIsRows.find((r) => r.sort_order === 0) || whatIsRows[0];
  const pillarRows = whatIsRows.filter((r) => r.id !== introRow?.id);

  const whatIs: WhatIsDigitalContent = {
    title: introRow?.title || whatIsSection.title,
    subtitle: whatIsSection.subtitle,
    descriptionParagraph1: introRow?.content || 'Digital marketing is the targeted strategy...',
    descriptionParagraph2: whatIsSection.descriptionParagraph2,
    keyPillars: pillarRows.map(r => ({
      title: r.title,
      desc: r.content,
      icon: r.icon,
      imageUrl: r.image_url
    }))
  };

  if (whatIs.keyPillars.length === 0) {
    whatIs.keyPillars = [
      { title: 'Precision Analytics', desc: 'Track every dollar', icon: 'BarChart3' },
      { title: 'Rapid Execution', desc: 'Deploy campaigns fast', icon: 'Zap' }
    ];
  }

  const whyChoose: WhyChooseContent = {
    title: whyChooseSection.title,
    subtitle: whyChooseSection.subtitle,
    points: whyChooseUsRes.rows.map(r => ({
      id: r.id.toString(),
      title: r.title,
      description: r.description,
      icon: r.icon,
      imageUrl: r.image_url
    }))
  };

  const services: ServiceItem[] = servicesRes.rows.map(r => ({
    id: r.id.toString(),
    title: r.title,
    shortDescription: r.short_description,
    fullDescription: r.full_description,
    iconName: r.icon,
    features: r.short_description ? r.short_description.split('.').filter(Boolean).slice(0, 4).map((s: string) => s.trim()) : ['Strategy', 'Execution', 'Reporting'],
    deliverables: ['Monthly Reports', 'Performance Dashboard', 'Strategy Sessions'],
    recommendedFor: r.is_featured ? 'High-Growth Brands' : 'Growing Businesses',
    badge: r.is_featured ? 'Featured' : undefined,
    imageUrl: r.image_url
  }));

  const whoShouldUse: WhoShouldUseItem[] = whoShouldUseRes.rows.map(r => ({
    id: r.id.toString(),
    title: r.name,
    description: r.description,
    iconName: r.icon,
    benefits: r.description ? r.description.split(',').map((s: string) => s.trim()).slice(0, 3) : ['Growth', 'Scale', 'ROI'],
    imageUrl: r.image_url
  }));

  const achievements: AchievementItem[] = achievementsRes.rows.map(r => ({
    id: r.id.toString(),
    clientName: r.title,
    industry: r.category || 'General',
    location: r.category?.includes('Dubai') ? 'Dubai & UK' : 'Global',
    metrics: [{ label: 'Key Result', value: r.value || 'N/A', change: '+100%' }],
    challenge: r.short_description || 'Scaling revenue in a competitive market.',
    solution: r.short_description || '',
    results: r.full_details || r.short_description || '',
    image_url: r.image_url || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    testimonial: { quote: r.full_details?.slice(0, 120) || 'Outstanding results delivered.', author: r.title, role: 'Client Partner' }
  }));

  const process: ProcessStep[] = processRes.rows.map(r => ({
    stepNumber: r.step_number,
    title: r.title,
    description: r.description,
    duration: `Step ${r.step_number}`,
    iconName: r.icon,
    keyOutputs: [r.title, 'Strategy Document', 'Performance Report'],
    imageUrl: r.image_url
  }));

  const industries: IndustryItem[] = industriesRes.rows.map(r => ({
    id: r.id.toString(),
    name: r.name,
    description: r.description,
    iconName: r.icon,
    caseStudyHighlight: r.description?.slice(0, 60) || 'Proven industry results',
    imageUrl: r.image_url
  }));

  const faqs: FAQItem[] = faqsRes.rows.map(r => ({
    id: r.id.toString(),
    question: r.question,
    answer: r.answer,
    category: (r.category as FAQItem['category']) || 'General'
  }));

  const testimonials = testimonialsRes.rows.map(r => ({
    id: r.id.toString(),
    name: r.name,
    company: r.company,
    role: r.role,
    content: r.content,
    rating: r.rating || 5,
    avatar: r.avatar,
  }));

  const trustedLogos = trustedLogosRes.rows.map(r => ({
    id: r.id.toString(),
    name: r.name,
    image_url: r.image_url,
  }));

  const caseStudiesList = caseStudiesRes.rows.map(r => ({
    id: r.id.toString(),
    title: r.title,
    category: r.category,
    description: r.description,
    image_url: r.image_url,
  }));

  const aboutMissionCards = aboutMissionCardsRes.rows.map(r => ({
    id: r.id.toString(),
    title: r.title,
    description: r.description,
    iconName: r.icon_name,
  }));

  const aboutCorePillars = aboutCorePillarsRes.rows.map(r => ({
    id: r.id.toString(),
    title: r.title,
    description: r.description,
    iconName: r.icon_name,
  }));

  const aboutHero = aboutHeroRes.rows[0] ? {
    background_image: aboutHeroRes.rows[0].background_image
  } : undefined;

  const rndModules = rndModulesRes.rows.map(r => ({
    id: r.id.toString(),
    title: r.title,
    description: r.description,
    badge: r.badge,
    image_url: r.image_url
  }));

  return {
    hero,
    whatIs,
    whyChoose,
    services,
    whoShouldUse,
    achievements,
    process,
    industries,
    faqs,
    testimonials,
    trustedLogos,
    caseStudiesList,
    aboutMissionCards,
    aboutCorePillars,
    aboutHero,
    rndModules,
    contactInfo: {
      phone: settingsMap['phone'] || settingsMap['contact_phone'] || '+91 999 888 7766',
      whatsapp: settingsMap['whatsapp'] || settingsMap['contact_whatsapp'] || '+91 999 888 7766',
      email: settingsMap['email'] || settingsMap['contact_email'] || 'cypherswiftinfotech@gmail.com',
      address: settingsMap['address'] || settingsMap['contact_address'] || 'Global',
      workingHours: settingsMap['working_hours'] || 'Mon - Sat: 9:00 AM - 8:00 PM IST'
    },
    socialLinks: {
      linkedin: settingsMap['linkedin_url'] || '#',
      twitter: settingsMap['twitter_url'] || '#',
      facebook: settingsMap['facebook_url'] || '#',
      instagram: settingsMap['instagram_url'] || '#',
      youtube: settingsMap['youtube_url'] || '#',
    },
    siteMeta: {
      siteName: settingsMap['site_name'] || 'Cypher Swift',
      siteTagline: settingsMap['site_tagline'] || 'Digital Marketing Agency',
      footerTagline: settingsMap['footer_tagline'] || '',
      consultationHeading: settingsMap['consultation_heading'] || 'What Are Your Business Requirements?',
      consultationSubheading: settingsMap['consultation_subheading'] || 'Book a free consultation with our experts.',
    }
  };
}

// API ROUTES

app.get('/api/content', async (req, res) => {
  try {
    const data = await getSiteContent();
    res.json({ success: true, data });
  } catch (err: any) {
    console.error('Failed to load site content from DB:', err);
    res.status(500).json({ error: 'Failed to load site content', details: err.message });
  }
});

app.get('/api/partner-logos', async (_req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM partner_logos WHERE is_active = true ORDER BY sort_order ASC NULLS LAST, created_at DESC'
    );
    res.json({ success: true, logos: result.rows });
  } catch {
    res.json({ success: true, logos: [] });
  }
});

// Leads
app.get('/api/leads', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM consultation_submissions ORDER BY created_at DESC');
    const mapped = result.rows.map(r => ({
      id: r.id.toString(),
      name: r.name,
      companyName: r.company,
      email: r.email,
      phone: r.phone,
      servicesRequired: [r.services_required],
      budget: 'N/A',
      message: r.message,
      submittedAt: r.created_at,
      status: r.status,
      sourcePage: r.source_page || 'Unknown'
    }));
    res.json({ success: true, leads: mapped });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

// Email Notification Helper targeting cypherswiftinfotech@gmail.com
const sendLeadEmailNotification = async (leadData: {
  name: string;
  companyName?: string;
  email: string;
  phone?: string;
  servicesRequired?: any;
  budget?: string;
  message?: string;
  sourcePage?: string;
}) => {
  const targetEmail = 'cypherswiftinfotech@gmail.com';

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || process.env.GMAIL_USER || '',
      pass: process.env.SMTP_PASS || process.env.GMAIL_PASS || '',
    },
  });

  const servicesStr = Array.isArray(leadData.servicesRequired)
    ? leadData.servicesRequired.join(', ')
    : leadData.servicesRequired || 'General Strategy';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
      <h2 style="color: #2563eb; margin-bottom: 5px;">🔥 New Consultation Lead Received!</h2>
      <p style="color: #6b7280; font-size: 14px; margin-top: 0;">A new lead has been submitted on Lumora Website.</p>
      <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 15px 0;" />
      
      <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; font-weight: bold; color: #111827; width: 35%;">Full Name:</td><td style="color: #374151;">${leadData.name || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #111827;">Company Name:</td><td style="color: #374151;">${leadData.companyName || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #111827;">Work Email:</td><td style="color: #2563eb;">${leadData.email}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #111827;">Phone Number:</td><td style="color: #374151;">${leadData.phone || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #111827;">Services Needed:</td><td style="color: #374151;">${servicesStr}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #111827;">Budget Range:</td><td style="color: #374151;">${leadData.budget || 'N/A'}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #111827;">Source Page:</td><td style="color: #374151;">${leadData.sourcePage || 'Website Form'}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #111827;">Submitted At:</td><td style="color: #374151;">${new Date().toLocaleString()}</td></tr>
      </table>

      ${
        leadData.message
          ? `<div style="margin-top: 15px; padding: 12px; background-color: #f8fafc; border-radius: 8px;">
               <strong style="color: #111827;">Message / Business Requirements:</strong>
               <p style="margin: 5px 0 0 0; color: #4b5563; font-size: 13px;">${leadData.message}</p>
             </div>`
          : ''
      }

      <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0 10px 0;" />
      <p style="font-size: 11px; color: #9ca3af; text-align: center;">This notification was automatically sent by Lumora Lead Management System to <strong>${targetEmail}</strong>.</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Lumora Lead Alert" <${process.env.SMTP_USER || 'no-reply@lumora.ai'}>`,
      to: targetEmail,
      subject: `🔥 New Lead Submission: ${leadData.name || leadData.email} (${servicesStr})`,
      html: htmlContent,
    });
    console.log(`[Email Notification] Successfully sent lead alert email to ${targetEmail}`);
  } catch (err: any) {
    console.warn(`[Email Notification Note] Form lead saved to Admin DB. Email alert note: ${err.message}`);
  }
};

app.post('/api/leads', async (req, res) => {
  const { name, companyName, email, phone, servicesRequired, message, sourcePage } = req.body;
  try {
    const srv = Array.isArray(servicesRequired) ? servicesRequired.join(', ') : servicesRequired;
    const result = await pool.query(
      `INSERT INTO consultation_submissions (name, company, email, phone, services_required, message, status, is_read, created_at, source_page)
       VALUES ($1, $2, $3, $4, $5, $6, 'new', false, NOW(), $7) RETURNING *`,
      [name || 'Website Visitor', companyName || 'N/A', email, phone || 'N/A', srv || 'General Strategy', message || '', sourcePage || 'Unknown']
    );

    // Trigger email notification to cypherswiftinfotech@gmail.com
    sendLeadEmailNotification(req.body);

    res.json({ success: true, message: 'Consultation request submitted successfully.' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to submit lead', details: err.message });
  }
});

app.patch('/api/leads/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await pool.query('UPDATE consultation_submissions SET status = $1 WHERE id = $2', [status, id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update lead' });
  }
});

app.delete('/api/leads/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM consultation_submissions WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete lead' });
  }
});

// Site Settings
app.get('/api/admin/settings', async (_req, res) => {
  try {
    const result = await pool.query('SELECT * FROM site_settings ORDER BY key');
    res.json({ success: true, data: result.rows });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to fetch settings', details: err.message });
  }
});

app.put('/api/admin/settings/:key', async (req, res) => {
  const { key } = req.params;
  const { value } = req.body;
  try {
    const result = await pool.query(
      'UPDATE site_settings SET value = $1, updated_at = NOW() WHERE key = $2 RETURNING *',
      [value, key]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Setting not found' });
    }
    res.json({ success: true, data: result.rows[0] });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to update setting', details: err.message });
  }
});

// SEO routes
app.get('/sitemap.xml', async (_req, res) => {
  try {
    const baseUrl = process.env.APP_URL || 'http://localhost:3000';
    const pagesRes = await pool.query(
      "SELECT slug, updated_at FROM pages WHERE is_published = true AND (include_in_sitemap IS NULL OR include_in_sitemap = true) ORDER BY sort_order"
    );
    const urls = [
      { loc: `${baseUrl}/`, lastmod: new Date().toISOString().split('T')[0], priority: '1.0' },
      ...pagesRes.rows.map((p: { slug: string; updated_at: string }) => ({
        loc: `${baseUrl}/${p.slug}`,
        lastmod: new Date(p.updated_at).toISOString().split('T')[0],
        priority: '0.8',
      })),
    ];
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>`;
    res.type('application/xml').send(xml);
  } catch {
    res.status(500).send('Sitemap unavailable');
  }
});

app.get('/robots.txt', (_req, res) => {
  const baseUrl = process.env.APP_URL || 'http://localhost:3000';
  res.type('text/plain').send(`User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: ${baseUrl}/sitemap.xml\n`);
});

// Pages
app.get('/api/pages', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pages ORDER BY sort_order, created_at DESC');
    const mapped = result.rows.map(r => ({
      id: r.id.toString(),
      slug: r.slug,
      title: r.title,
      pageType: r.template_type || 'landing',
      cityName: r.city_placeholder,
      countryName: r.country_placeholder,
      seo: {
        metaTitle: r.meta_title || '',
        metaDescription: r.meta_description || '',
        canonicalUrl: r.canonical_url || '',
        ogTitle: r.og_title || '',
        ogDescription: r.og_description || '',
        ogImage: r.og_image || '',
        twitterCard: 'summary_large_image',
        schemaType: 'Service',
        schemaData: r.schema_markup || '{}',
        robotsDirective: r.robots || 'index, follow'
      },
      sections: r.content?.sections || [],
      isPublished: r.is_published,
      createdAt: r.created_at,
      updatedAt: r.updated_at
    }));
    res.json({ success: true, pages: mapped });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pages' });
  }
});

app.post('/api/pages', async (req, res) => {
  const p = req.body;
  const cleanSlug = p.slug.toLowerCase().replace(/[^a-z0-9-/]/g, '-').replace(/^-+|-+$/g, '');

  try {
    const check = await pool.query('SELECT id FROM pages WHERE slug = $1', [cleanSlug]);
    if (check.rows.length > 0) return res.status(400).json({ error: `Slug "${cleanSlug}" exists.` });

    const content = p.sections ? { sections: p.sections } : { sections: [{ type: 'hero', title: p.title, content: 'Targeted strategies.' }] };
    
    await pool.query(
      `INSERT INTO pages (
        title, slug, content, is_published, template_type, city_placeholder, country_placeholder,
        meta_title, meta_description, canonical_url, robots, created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'index, follow', NOW(), NOW())`,
      [
        p.title, cleanSlug, JSON.stringify(content), p.isPublished ?? true, p.pageType || 'landing',
        p.cityName || '', p.countryName || '',
        p.seo?.metaTitle || `${p.title} | Cypher Swift`, 
        p.seo?.metaDescription || '', 
        p.seo?.canonicalUrl || `https://cypherswift.com/${cleanSlug}`
      ]
    );

    res.json({ success: true, message: 'Page created successfully' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to create page', details: err.message });
  }
});

app.put('/api/pages/:id', async (req, res) => {
  const { id } = req.params;
  const p = req.body;
  try {
    const content = p.sections ? { sections: p.sections } : { sections: [] };
    await pool.query(
      `UPDATE pages SET 
        title=$1, meta_title=$2, meta_description=$3, content=$4, is_published=$5, updated_at=NOW()
       WHERE id=$6`,
      [p.title, p.seo?.metaTitle, p.seo?.metaDescription, JSON.stringify(content), p.isPublished, id]
    );
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to update page', details: err.message });
  }
});

app.delete('/api/pages/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM pages WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete page' });
  }
});

// Generic Admin CMS Updates
app.get('/api/admin/table/:tableName', async (req, res) => {
  const { tableName } = req.params;
  const allowedTables = ['hero_section', 'services', 'industries', 'faqs', 'achievements', 'why_choose_us', 'process_steps', 'digital_marketing_content', 'target_audience', 'partner_logos', 'trusted_logos', 'case_studies', 'testimonials', 'about_mission_cards', 'about_core_pillars', 'about_hero_section', 'rnd_modules'];
  if (!allowedTables.includes(tableName)) return res.status(403).json({ error: 'Invalid table name' });

  try {
    let orderClause = 'ORDER BY created_at DESC';
    if (!['hero_section', 'about_hero_section'].includes(tableName)) {
      orderClause = 'ORDER BY sort_order ASC NULLS LAST, created_at DESC';
    }
    const result = await pool.query(`SELECT * FROM ${tableName} ${orderClause}`);
    res.json({ success: true, data: result.rows });
  } catch (err: any) {
    res.status(500).json({ error: `Failed to fetch from ${tableName}`, details: err.message });
  }
});

app.put('/api/admin/table/:tableName/:id', async (req, res) => {
  const { tableName, id } = req.params;
  const updates = { ...req.body };
  delete updates.id;
  delete updates.created_at;
  delete updates.updated_at;
  if (tableName !== 'case_studies' && tableName !== 'trusted_logos') {
    delete updates.image_public_id;
  }
  
  if (updates.hasOwnProperty('slug') && !updates.slug) {
    const rawTitle = updates.title || updates.name || '';
    if (rawTitle) {
      updates.slug = rawTitle.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }
  }
  
  // Whitelist tables to prevent SQL injection
  const allowedTables = ['hero_section', 'services', 'industries', 'faqs', 'achievements', 'why_choose_us', 'process_steps', 'digital_marketing_content', 'target_audience', 'partner_logos', 'trusted_logos', 'case_studies', 'testimonials', 'about_mission_cards', 'about_core_pillars', 'about_hero_section', 'rnd_modules'];
  if (!allowedTables.includes(tableName)) {
    return res.status(403).json({ error: 'Invalid table name' });
  }

  try {
    const keys = Object.keys(updates);
    const values = Object.values(updates);
    
    if (keys.length === 0) return res.json({ success: true });

    const setString = keys.map((k, i) => `${k} = $${i + 1}`).join(', ');
    const query = `UPDATE ${tableName} SET ${setString}, updated_at = NOW() WHERE id = $${keys.length + 1} RETURNING *`;
    
    const result = await pool.query(query, [...values, id]);
    res.json({ success: true, data: result.rows[0] });
  } catch (err: any) {
    console.error(`Error updating ${tableName}:`, err);
    res.status(500).json({ error: `Failed to update ${tableName}`, details: err.message });
  }
});

app.post('/api/admin/table/:tableName', async (req, res) => {
  const { tableName } = req.params;
  const data = { ...req.body };
  delete data.id;
  delete data.created_at;
  delete data.updated_at;
  if (tableName !== 'case_studies' && tableName !== 'trusted_logos') {
    delete data.image_public_id;
  }
  
  if (data.hasOwnProperty('slug') && !data.slug) {
    const rawTitle = data.title || data.name || '';
    if (rawTitle) {
      data.slug = rawTitle.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }
  }
  
  const allowedTables = ['services', 'industries', 'faqs', 'achievements', 'why_choose_us', 'process_steps', 'digital_marketing_content', 'target_audience', 'partner_logos', 'trusted_logos', 'case_studies', 'testimonials', 'about_mission_cards', 'about_core_pillars', 'rnd_modules'];
  if (!allowedTables.includes(tableName)) return res.status(403).json({ error: 'Invalid table name' });

  try {
    const keys = Object.keys(data);
    const values = Object.values(data);
    
    const colString = keys.join(', ');
    const valString = keys.map((_, i) => `$${i + 1}`).join(', ');
    const query = `INSERT INTO ${tableName} (${colString}, created_at, updated_at) VALUES (${valString}, NOW(), NOW()) RETURNING *`;
    
    const result = await pool.query(query, values);
    res.json({ success: true, data: result.rows[0] });
  } catch (err: any) {
    console.error(`Error inserting into ${tableName}:`, err);
    res.status(500).json({ error: `Failed to insert into ${tableName}`, details: err.message });
  }
});

app.delete('/api/admin/table/:tableName/:id', async (req, res) => {
  const { tableName, id } = req.params;
  const allowedTables = ['services', 'industries', 'faqs', 'achievements', 'why_choose_us', 'process_steps', 'digital_marketing_content', 'target_audience', 'partner_logos', 'trusted_logos', 'case_studies', 'testimonials', 'about_mission_cards', 'about_core_pillars', 'rnd_modules'];
  if (!allowedTables.includes(tableName)) return res.status(403).json({ error: 'Invalid table name' });

  try {
    await pool.query(`DELETE FROM ${tableName} WHERE id = $1`, [id]);
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: `Failed to delete from ${tableName}`, details: err.message });
  }
});

app.post('/api/ai/generate', async (req, res) => {
  res.json({ success: true, result: 'AI generated content' });
});

// ==========================================
// Admin CRUD Routes for Home Page Sections
// ==========================================

// --- Trusted Logos ---
app.get('/api/trusted-logos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM trusted_logos ORDER BY created_at ASC');
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.post('/api/trusted-logos', async (req, res) => {
  try {
    const { name, image_url, image_public_id } = req.body;
    const result = await pool.query(
      'INSERT INTO trusted_logos (name, image_url, image_public_id) VALUES ($1, $2, $3) RETURNING *',
      [name, image_url, image_public_id]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.put('/api/trusted-logos/:id', async (req, res) => {
  try {
    const { name, image_url, image_public_id } = req.body;
    const result = await pool.query(
      'UPDATE trusted_logos SET name=$1, image_url=$2, image_public_id=$3 WHERE id=$4 RETURNING *',
      [name, image_url, image_public_id, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.delete('/api/trusted-logos/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM trusted_logos WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

// --- Case Studies ---
app.get('/api/case-studies', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM case_studies ORDER BY created_at ASC');
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.post('/api/case-studies', async (req, res) => {
  try {
    const { title, category, description, image_url, image_public_id } = req.body;
    const result = await pool.query(
      'INSERT INTO case_studies (title, category, description, image_url, image_public_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, category, description, image_url, image_public_id]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.put('/api/case-studies/:id', async (req, res) => {
  try {
    const { title, category, description, image_url, image_public_id } = req.body;
    const result = await pool.query(
      'UPDATE case_studies SET title=$1, category=$2, description=$3, image_url=$4, image_public_id=$5 WHERE id=$6 RETURNING *',
      [title, category, description, image_url, image_public_id, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.delete('/api/case-studies/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM case_studies WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

// --- Industries ---
app.get('/api/industries', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM industries ORDER BY sort_order ASC');
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.post('/api/industries', async (req, res) => {
  try {
    const { name, icon, description, sort_order, is_active } = req.body;
    const result = await pool.query(
      'INSERT INTO industries (name, icon, description, sort_order, is_active) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, icon, description, sort_order, is_active]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.put('/api/industries/:id', async (req, res) => {
  try {
    const { name, icon, description, sort_order, is_active } = req.body;
    const result = await pool.query(
      'UPDATE industries SET name=$1, icon=$2, description=$3, sort_order=$4, is_active=$5 WHERE id=$6 RETURNING *',
      [name, icon, description, sort_order, is_active, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.delete('/api/industries/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM industries WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

// --- Testimonials ---
app.get('/api/testimonials', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM testimonials ORDER BY sort_order ASC');
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.post('/api/testimonials', async (req, res) => {
  try {
    const { name, company, role, avatar, content, rating, is_featured, sort_order, is_active } = req.body;
    const result = await pool.query(
      'INSERT INTO testimonials (name, company, role, avatar, content, rating, is_featured, sort_order, is_active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [name, company, role, avatar, content, rating, is_featured, sort_order, is_active]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.put('/api/testimonials/:id', async (req, res) => {
  try {
    const { name, company, role, avatar, content, rating, is_featured, sort_order, is_active } = req.body;
    const result = await pool.query(
      'UPDATE testimonials SET name=$1, company=$2, role=$3, avatar=$4, content=$5, rating=$6, is_featured=$7, sort_order=$8, is_active=$9 WHERE id=$10 RETURNING *',
      [name, company, role, avatar, content, rating, is_featured, sort_order, is_active, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.delete('/api/testimonials/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM testimonials WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

// --- FAQs ---
app.get('/api/faqs', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM faqs ORDER BY sort_order ASC');
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.post('/api/faqs', async (req, res) => {
  try {
    const { question, answer, category, sort_order, is_active } = req.body;
    const result = await pool.query(
      'INSERT INTO faqs (question, answer, category, sort_order, is_active) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [question, answer, category, sort_order, is_active]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.put('/api/faqs/:id', async (req, res) => {
  try {
    const { question, answer, category, sort_order, is_active } = req.body;
    const result = await pool.query(
      'UPDATE faqs SET question=$1, answer=$2, category=$3, sort_order=$4, is_active=$5 WHERE id=$6 RETURNING *',
      [question, answer, category, sort_order, is_active, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.delete('/api/faqs/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM faqs WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

async function startServer() {
  try {
    await pool.query('SELECT 1');
    console.log('✅ Connected to Supabase PostgreSQL database');
  } catch (err) {
    console.error('❌ Failed to connect to Supabase PostgreSQL:', err);
  }

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({ server: { middlewareMode: true }, appType: 'spa' });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => res.sendFile(path.join(distPath, 'index.html')));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Cypher Swift Express server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
