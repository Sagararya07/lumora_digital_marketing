import express from 'express';
import path from 'path';
// import removed for dynamic import later
import { GoogleGenAI } from '@google/genai';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { initialSiteContent } from './src/data/initialData.js';
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
  WhoShouldUseItem,
  TeamMember
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

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
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
    rndModulesRes,
    teamMembersRes
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
    pool.query('SELECT * FROM rnd_modules WHERE is_active = true ORDER BY sort_order'),
    pool.query('SELECT * FROM team_members WHERE is_active = true ORDER BY sort_order')
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
    title: 'Why Choose Lumora?',
    subtitle: 'Built for High-Growth Enterprises, SMEs & Ambitious Brands',
  });

  const navigationVisibility = parseJsonSetting(settingsMap['navigation_visibility'], {
    showHome: true,
    showAbout: true,
    showPortfolio: true,
    showRnd: true,
    showConsultation: true,
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
    slug: r.slug,
    title: r.title,
    shortDescription: r.short_description,
    fullDescription: r.full_description,
    iconName: r.icon,
    features: r.features && r.features.length ? r.features : (r.short_description ? r.short_description.split('.').filter(Boolean).slice(0, 4).map((s: string) => s.trim()) : ['Strategy', 'Execution', 'Reporting']),
    deliverables: r.deliverables && r.deliverables.length ? r.deliverables : ['Monthly Reports', 'Performance Dashboard', 'Strategy Sessions'],
    recommendedFor: r.recommended_for || (r.is_featured ? 'High-Growth Brands' : 'Growing Businesses'),
    badge: r.badge || (r.is_featured ? 'Featured' : undefined),
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

  const aboutHero = aboutHeroRes.rows[0] || undefined;

  const rndModules = rndModulesRes.rows.map(r => ({
    id: r.id.toString(),
    title: r.title,
    description: r.description,
    badge: r.badge,
    image_url: r.image_url
  }));

  const teamMembers = teamMembersRes.rows.map(r => ({
    id: r.id.toString(),
    name: r.name,
    role: r.role,
    specializations: r.specializations ? r.specializations.split(',').map((s: string) => s.trim()) : [],
    imageUrl: r.image_url,
    description: r.description
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
    teamMembers,
    contactInfo: {
      phone: settingsMap['phone'] || settingsMap['contact_phone'] || '+91 999 888 7766',
      whatsapp: settingsMap['whatsapp'] || settingsMap['contact_whatsapp'] || '+91 999 888 7766',
      email: settingsMap['email'] || settingsMap['contact_email'] || 'consult@lumora.expert',
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
      siteName: settingsMap['site_name'] || 'Lumora',
      siteTagline: settingsMap['site_tagline'] || 'Digital Marketing Agency',
      footerTagline: settingsMap['footer_tagline'] || '',
      consultationHeading: settingsMap['consultation_heading'] || 'What Are Your Business Requirements?',
      consultationSubheading: settingsMap['consultation_subheading'] || 'Book a free consultation with our experts.',
    },
    navigationVisibility
  };
}

// API ROUTES

app.get('/api/content', async (req, res) => {
  try {
    const data = await getSiteContent();
    res.json({ success: true, data });
  } catch (err: any) {
    console.error('Failed to load site content from DB:', err);
    // Fallback: return initialSiteContent so the frontend always has data
    res.json({ success: true, data: initialSiteContent });
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

// Email Notification Helper targeting cypherswiftinfotech@gmail.com, support@lumora.expert, and digitalmarketing@lumora.expert
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
  const targetEmails = 'cypherswiftinfotech@gmail.com, support@lumora.expert, digitalmarketing@lumora.expert, consult@lumora.expert';

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
      <p style="font-size: 11px; color: #9ca3af; text-align: center;">This notification was automatically sent by Lumora Lead Management System to <strong>${targetEmails}</strong>.</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Lumora Lead Alert" <${process.env.SMTP_USER || 'no-reply@lumora.ai'}>`,
      to: targetEmails,
      subject: `🔥 New Lead Submission: ${leadData.name || leadData.email} (${servicesStr})`,
      html: htmlContent,
    });
    console.log(`[Email Notification] Successfully sent lead alert email to ${targetEmails}`);
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

// --- First Time Visitors with OTP Verification ---

// In-memory OTP cache. Key: email, Value: { code, expiresAt }
const otpCache = new Map<string, { code: string; expiresAt: number }>();

app.post('/api/send-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required.' });

  // Generate a 6-digit OTP
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  // Set expiration to 5 minutes from now
  const expiresAt = Date.now() + 5 * 60 * 1000;

  otpCache.set(email, { code, expiresAt });

  // Use the same nodemailer logic
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.GMAIL_USER || process.env.SMTP_USER || '',
      pass: process.env.GMAIL_PASS || process.env.SMTP_PASS || '',
    },
  });

  try {
    await transporter.sendMail({
      from: `"Lumora Security" <${process.env.GMAIL_USER || 'no-reply@lumora.expert'}>`,
      to: email,
      subject: `Your Verification Code for Lumora`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px;">
          <h2 style="color: #2563eb;">Welcome to Lumora!</h2>
          <p style="color: #4b5563;">Your email verification code is:</p>
          <div style="font-size: 24px; font-weight: bold; padding: 15px; background: #f3f4f6; text-align: center; letter-spacing: 5px; border-radius: 8px;">
            ${code}
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">This code will expire in 5 minutes.</p>
        </div>
      `,
    });
    console.log(`[OTP] Sent to ${email}: ${code}`);
    res.json({ success: true, message: 'OTP sent successfully.' });
  } catch (err: any) {
    console.error(`[OTP Error] Failed to send email to ${email}: ${err.message}`);
    res.status(500).json({ error: 'Failed to send OTP email.', details: err.message });
  }
});

app.post('/api/first-time-visitors', async (req, res) => {
  const { name, email, number, company_name, industry, message } = req.body;
  
  if (!email || !number) {
    return res.status(400).json({ error: 'Email and Phone number are required.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO first_time_visitors (name, email, number, company_name, industry, message, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *`,
      [name, email, number, company_name, industry, message]
    );

    // Optionally trigger the same email notification logic
    sendLeadEmailNotification({
      name,
      email,
      phone: number,
      companyName: company_name || industry,
      message: message ? message + " (First Time Visitor Form)" : "(First Time Visitor Form)",
      sourcePage: 'First Time Visitor Popup'
    }).catch(err => console.error("Email notification failed", err));

    res.json({ success: true, message: 'First time visitor data submitted successfully.' });
  } catch (err: any) {
    res.status(500).json({ error: 'Failed to submit first time visitor data', details: err.message });
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
    const check = await pool.query('SELECT * FROM site_settings WHERE key = $1', [key]);
    let result;
    if (check.rows.length === 0) {
      result = await pool.query(
        'INSERT INTO site_settings (key, value, updated_at) VALUES ($1, $2, NOW()) RETURNING *',
        [key, value]
      );
    } else {
      result = await pool.query(
        'UPDATE site_settings SET value = $1, updated_at = NOW() WHERE key = $2 RETURNING *',
        [value, key]
      );
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
    const mapped = result.rows.map(r => {
      const parsedContent = typeof r.content === 'string' ? JSON.parse(r.content || '{}') : (r.content || {});
      return {
      id: r.id.toString(),
      slug: r.slug,
      title: r.title,
      pageType: r.template_type || 'landing',
      cityName: r.city_placeholder,
      countryName: r.country_placeholder,
      seo: {
        metaTitle: r.meta_title || '',
        metaDescription: r.meta_description || '',
        keywords: parsedContent.metaKeywords || '',
        canonicalUrl: r.canonical_url || '',
        ogTitle: r.og_title || '',
        ogDescription: r.og_description || '',
        ogImage: r.og_image || '',
        twitterCard: 'summary_large_image',
        schemaType: 'Service',
        schemaData: r.schema_markup || '{}',
        robotsDirective: r.robots || 'index, follow'
      },
      heroImage: parsedContent.heroImage,
      sections: parsedContent.sections || [],
      isPublished: r.is_published,
      sortOrder: r.sort_order,
      position: parsedContent.position || 'Both',
      createdAt: r.created_at,
      updatedAt: r.updated_at
    };
    });
    res.json({ success: true, pages: mapped });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pages' });
  }
});

app.post('/api/pages', async (req, res) => {
  const p = req.body;
  const cleanSlug = p.slug.toLowerCase().replace(/[^a-z0-9-/]/g, '-').replace(/^-+|-+$/g, '');

  try {
    const metaTitle = p.meta_title || p.seo?.metaTitle || `${p.title} | Lumora`;
    const metaDesc = p.meta_description || p.seo?.metaDescription || '';
    const metaKwd = p.meta_keywords || p.seo?.keywords || '';
    const canonicalUrl = p.canonical_url || p.seo?.canonicalUrl || `https://lumora.expert/${cleanSlug}`;

    const content = {
      heroImage: p.heroImage || p.hero_image,
      overviewContent: p.overviewContent || p.overview_content,
      heroBadge: p.heroBadge || p.hero_badge,
      serviceFeatures: p.serviceFeatures,
      serviceDeliverables: p.serviceDeliverables,
      serviceRecommendedFor: p.serviceRecommendedFor,
      sections: p.sections || [{ type: 'hero', title: p.title, content: 'Targeted strategies.' }],
      position: p.position || 'Both',
      metaKeywords: metaKwd
    };

    // Check if a page with this slug already exists
    const existing = await pool.query('SELECT id FROM pages WHERE slug = $1', [cleanSlug]);

    let savedId: number;
    if (existing.rows.length > 0) {
      // Page exists in DB — do an UPDATE instead of INSERT
      savedId = existing.rows[0].id;
      await pool.query(
        `UPDATE pages SET
          title=$1, meta_title=$2, meta_description=$3, content=$4,
          is_published=$5, sort_order=$6, updated_at=NOW()
         WHERE id=$7`,
        [p.title, metaTitle, metaDesc, JSON.stringify(content), p.isPublished ?? true, p.sortOrder || 0, savedId]
      );
    } else {
      // New page — INSERT
      const result = await pool.query(
        `INSERT INTO pages (
          title, slug, content, is_published, template_type, city_placeholder, country_placeholder,
          meta_title, meta_description, canonical_url, robots, sort_order, created_at, updated_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'index, follow', $11, NOW(), NOW()) RETURNING id`,
        [
          p.title, cleanSlug, JSON.stringify(content), p.isPublished ?? true, p.pageType || 'service',
          p.cityName || '', p.countryName || '',
          metaTitle, metaDesc, canonicalUrl,
          p.sortOrder || 0
        ]
      );
      savedId = result.rows[0].id;
    }

    res.json({ success: true, message: 'Page saved successfully', id: savedId });
  } catch (err: any) {
    console.error('POST /api/pages error:', err);
    res.status(500).json({ error: 'Failed to create page', details: err.message });
  }
});

app.put('/api/pages/:id', async (req, res) => {
  const { id } = req.params;
  const p = req.body;
  try {
    const cleanSlug = p.slug ? p.slug.toLowerCase().replace(/[^a-z0-9-/]/g, '-').replace(/^-+|-+$/g, '') : null;
    
    if (cleanSlug) {
      const check = await pool.query('SELECT id FROM pages WHERE slug = $1 AND id != $2', [cleanSlug, id]);
      if (check.rows.length > 0) return res.status(400).json({ error: `Slug "${cleanSlug}" exists.` });
    }

    const metaTitle = p.meta_title || p.seo?.metaTitle || p.title;
    const metaDesc = p.meta_description || p.seo?.metaDescription || '';
    const metaKwd = p.meta_keywords || p.seo?.keywords || '';

    const content = {
      heroImage: p.heroImage || p.hero_image,
      overviewContent: p.overviewContent || p.overview_content,
      heroBadge: p.heroBadge || p.hero_badge,
      serviceFeatures: p.serviceFeatures,
      serviceDeliverables: p.serviceDeliverables,
      serviceRecommendedFor: p.serviceRecommendedFor,
      sections: p.sections || [],
      position: p.position || 'Both',
      metaKeywords: metaKwd
    };

    if (cleanSlug) {
      await pool.query(
        `UPDATE pages SET 
          title=$1, slug=$2, meta_title=$3, meta_description=$4, content=$5, is_published=$6, sort_order=$7, updated_at=NOW()
         WHERE id=$8`,
        [p.title, cleanSlug, metaTitle, metaDesc, JSON.stringify(content), p.isPublished ?? true, p.sortOrder || 0, id]
      );
    } else {
      await pool.query(
        `UPDATE pages SET 
          title=$1, meta_title=$2, meta_description=$3, content=$4, is_published=$5, sort_order=$6, updated_at=NOW()
         WHERE id=$7`,
        [p.title, metaTitle, metaDesc, JSON.stringify(content), p.isPublished ?? true, p.sortOrder || 0, id]
      );
    }
    res.json({ success: true });
  } catch (err: any) {
    console.error('PUT /api/pages error:', err);
    res.status(500).json({ error: 'Failed to update page', details: err.message, stack: err.stack });
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
  const allowedTables = ['hero_section', 'services', 'industries', 'faqs', 'achievements', 'why_choose_us', 'process_steps', 'digital_marketing_content', 'target_audience', 'partner_logos', 'trusted_logos', 'case_studies', 'testimonials', 'about_mission_cards', 'about_core_pillars', 'about_hero_section', 'rnd_modules', 'team_members', 'first_time_visitors'];
  if (!allowedTables.includes(tableName)) return res.status(403).json({ error: 'Invalid table name' });

  try {
    let orderClause = 'ORDER BY created_at DESC';
    if (tableName === 'hero_section') {
      orderClause = 'ORDER BY updated_at DESC';
    } else if (tableName === 'about_hero_section' || tableName === 'first_time_visitors') {
      orderClause = 'ORDER BY created_at DESC';
    } else {
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
  const allowedTables = ['hero_section', 'services', 'industries', 'faqs', 'achievements', 'why_choose_us', 'process_steps', 'digital_marketing_content', 'target_audience', 'partner_logos', 'trusted_logos', 'case_studies', 'testimonials', 'about_mission_cards', 'about_core_pillars', 'about_hero_section', 'rnd_modules', 'team_members'];
  if (!allowedTables.includes(tableName)) {
    return res.status(403).json({ error: 'Invalid table name' });
  }

  try {
    const keys = Object.keys(updates);
    const values = Object.values(updates);
    
    if (keys.length === 0) return res.json({ success: true });

    const setString = keys.map((k, i) => `${k} = $${i + 1}`).join(', ');
    const updateQueryTail = tableName === 'about_hero_section' ? '' : ', updated_at = NOW()';
    const query = `UPDATE ${tableName} SET ${setString}${updateQueryTail} WHERE id = $${keys.length + 1} RETURNING *`;
    
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
  
  const allowedTables = ['services', 'industries', 'faqs', 'achievements', 'why_choose_us', 'process_steps', 'digital_marketing_content', 'target_audience', 'partner_logos', 'trusted_logos', 'case_studies', 'testimonials', 'about_mission_cards', 'about_core_pillars', 'rnd_modules', 'team_members'];
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
  const allowedTables = ['services', 'industries', 'faqs', 'achievements', 'why_choose_us', 'process_steps', 'digital_marketing_content', 'target_audience', 'partner_logos', 'trusted_logos', 'case_studies', 'testimonials', 'about_mission_cards', 'about_core_pillars', 'rnd_modules', 'first_time_visitors'];
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

// --- ICP Submissions ---
app.get('/api/icp-submissions', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM icp_submissions ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.post('/api/icp-submissions', async (req, res) => {
  try {
    const { company_name, email, website, contact_name, role, business_model, industry, monthly_budget, primary_goal } = req.body;
    const result = await pool.query(
      'INSERT INTO icp_submissions (company_name, email, website, contact_name, role, business_model, industry, monthly_budget, primary_goal) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [company_name, email, website, contact_name, role, business_model, industry, monthly_budget, primary_goal]
    );
    res.json({ success: true, data: result.rows[0] });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});
app.patch('/api/icp-submissions/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const result = await pool.query(
      'UPDATE icp_submissions SET status=$1 WHERE id=$2 RETURNING *',
      [status, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.post('/api/icp-submissions/:id/send-discovery', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM icp_submissions WHERE id=$1', [req.params.id]);
    const lead = result.rows[0];
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    if (!lead.email) return res.status(400).json({ error: 'Lead has no email address' });

    const targetUrl = `${req.protocol}://${req.get('host')}/discovery/${lead.id}`;
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || process.env.GMAIL_USER || '',
        pass: process.env.SMTP_PASS || process.env.GMAIL_PASS || '',
      },
    });

    await transporter.sendMail({
      from: `"Lumora Strategy Team" <${process.env.SMTP_USER || process.env.GMAIL_USER || 'no-reply@lumora.expert'}>`,
      to: lead.email,
      subject: 'Next Step: Discovering Your Growth Potential',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
          <h2>Hi ${lead.contact_name},</h2>
          <p>Thank you for submitting your details. Our strategy team has reviewed your profile and we'd love to learn more about ${lead.company_name}.</p>
          <p>Please take 2 minutes to fill out the deep-dive discovery form so we can prepare a tailored strategy for you.</p>
          <a href="${targetUrl}" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0;">Complete Discovery Form</a>
          <p>Best,<br>The Lumora Team</p>
        </div>
      `
    });

    res.json({ success: true });
  } catch (err: any) {
    console.error('Error sending discovery email:', err);
    res.status(500).json({ error: 'Failed to send email. SMTP Error: ' + err.message });
  }
});

// --- Discovery Submissions ---
app.get('/api/discovery-submissions', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT d.*, i.company_name, i.contact_name 
      FROM icp_discovery_submissions d
      JOIN icp_submissions i ON d.icp_id = i.id
      ORDER BY d.created_at DESC
    `);
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.post('/api/discovery-submissions', async (req, res) => {
  try {
    const { icp_id, primary_product, avg_deal_size, sales_cycle, pain_points, competitors, marketing_challenges } = req.body;
    const result = await pool.query(
      'INSERT INTO icp_discovery_submissions (icp_id, primary_product, avg_deal_size, sales_cycle, pain_points, competitors, marketing_challenges) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [icp_id, primary_product, avg_deal_size, sales_cycle, pain_points, competitors, marketing_challenges]
    );
    res.json({ success: true, data: result.rows[0] });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

// --- Client Lifecycle Management ---

app.get('/api/admin/stats', async (req, res) => {
  try {
    const clientsRes = await pool.query('SELECT COUNT(*) FROM clients');
    const projectsRes = await pool.query("SELECT COUNT(DISTINCT client_id) FROM client_tasks WHERE is_completed = false");
    const proposalsRes = await pool.query("SELECT COUNT(*) FROM client_proposals WHERE status = 'Pending'");
    const activityRes = await pool.query("SELECT COUNT(*) FROM client_messages WHERE created_at > NOW() - INTERVAL '24 HOURS'");
    
    res.json({
      totalClients: clientsRes.rows[0].count,
      activeProjects: projectsRes.rows[0].count,
      pendingProposals: proposalsRes.rows[0].count,
      recentActivity: activityRes.rows[0].count
    });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.get('/api/clients', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clients ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.get('/api/clients/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clients WHERE client_id=$1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Client not found' });
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.delete('/api/clients/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM client_messages WHERE client_id=$1', [req.params.id]);
    await pool.query('DELETE FROM client_tasks WHERE client_id=$1', [req.params.id]);
    const result = await pool.query('DELETE FROM clients WHERE client_id=$1 RETURNING *', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Client not found' });
    res.json({ success: true, deleted: result.rows[0] });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: 'Database error', details: err.message });
  }
});

app.post('/api/clients/convert/:icpId', async (req, res) => {
  try {
    const icpRes = await pool.query('SELECT * FROM icp_submissions WHERE id=$1', [req.params.icpId]);
    const lead = icpRes.rows[0];
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    if (lead.status === 'Converted') return res.status(400).json({ error: 'Lead already converted' });

    // Check if client with this email already exists
    const existingClient = await pool.query('SELECT * FROM clients WHERE email=$1', [lead.email]);
    if (existingClient.rows.length > 0) {
      // If client already exists, just update this ICP submission to Converted to get it off the board
      await pool.query("UPDATE icp_submissions SET status='Converted' WHERE id=$1", [req.params.icpId]);
      return res.status(400).json({ error: 'A client with this email already exists.' });
    }

    const clientCountRes = await pool.query('SELECT COUNT(*) FROM clients');
    const count = parseInt(clientCountRes.rows[0].count) + 1;
    const clientId = `CLI-${count.toString().padStart(4, '0')}`;

    const result = await pool.query(
      `INSERT INTO clients (client_id, company_name, contact_name, email, industry, business_model, details, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, 'Onboarding') RETURNING *`,
      [clientId, lead.company_name, lead.contact_name, lead.email, lead.industry, lead.business_model, JSON.stringify(lead)]
    );

    // Update ICP submission status so it can't be converted again
    await pool.query("UPDATE icp_submissions SET status='Converted' WHERE id=$1", [req.params.icpId]);

    // Send real email
    const setupLink = `${process.env.APP_URL || 'http://localhost:3000'}/portal?setup=true&email=${encodeURIComponent(lead.email)}`;
    
    try {
      await transporter.sendMail({
        from: `"Lumora Admin" <${process.env.GMAIL_USER}>`,
        to: lead.email,
        subject: 'Welcome to your Client Portal - Setup Your Account',
        html: `
          <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h2 style="color: #111827;">Welcome to Lumora, ${lead.contact_name}!</h2>
            <p style="color: #4b5563; line-height: 1.5;">Your client account has been successfully created. You can now access your dedicated workspace to view proposals, manage tasks, and communicate directly with our team.</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${setupLink}" style="background-color: #5B8EE2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Setup Your Password</a>
            </div>
            <p style="color: #6b7280; font-size: 12px; margin-top: 40px;">If the button doesn't work, copy and paste this link into your browser:<br>${setupLink}</p>
          </div>
        `
      });
      console.log(`Setup email sent to ${lead.email}`);
    } catch (emailErr) {
      console.error('Failed to send email. Check your GMAIL_USER and GMAIL_PASS in .env', emailErr);
    }

    res.json({ success: true, client: result.rows[0] });
  } catch (err: any) { 
    console.error(err);
    res.status(500).json({ error: 'Database error', details: err.message }); 
  }
});

app.get('/api/clients/:id/messages', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM client_messages WHERE client_id=$1 ORDER BY created_at ASC', [req.params.id]);
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.post('/api/clients/:id/messages', async (req, res) => {
  try {
    const { sender, message } = req.body;
    let shouldNotify = false;

    if (sender === 'admin') {
      // Check if there are any unread messages that we ALREADY sent a notification for.
      // If none exist, we will send an email for THIS message, and mark it as notification_sent = true.
      const notifiedCheck = await pool.query(
        "SELECT id FROM client_messages WHERE client_id=$1 AND sender='admin' AND is_read=FALSE AND notification_sent=TRUE LIMIT 1", 
        [req.params.id]
      );
      if (notifiedCheck.rows.length === 0) {
        shouldNotify = true;
      }
    }

    const result = await pool.query(
      'INSERT INTO client_messages (client_id, sender, message, notification_sent) VALUES ($1, $2, $3, $4) RETURNING *',
      [req.params.id, sender, message, shouldNotify]
    );

    if (shouldNotify) {
      const clientRes = await pool.query('SELECT contact_name, email FROM clients WHERE client_id=$1', [req.params.id]);
      if (clientRes.rows.length > 0) {
        const client = clientRes.rows[0];
        const portalLink = `${process.env.VITE_APP_URL || 'http://localhost:3000'}/portal/messages`;
        
        try {
          await transporter.sendMail({
            from: `"Lumora Admin" <${process.env.GMAIL_USER}>`,
            to: client.email,
            subject: 'New Message from Lumora Team',
            html: `
              <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                <h2 style="color: #111827;">New Message, ${client.contact_name}</h2>
                <p style="color: #4b5563; line-height: 1.5;">You have received a new message regarding your project.</p>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${portalLink}" style="background-color: #5B8EE2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Messages</a>
                </div>
              </div>
            `
          });
        } catch (err) { console.error('Email failed:', err); }
      }
    }

    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.put('/api/clients/:id/messages/read', async (req, res) => {
  try {
    // When client reads, mark all admin messages as read
    await pool.query("UPDATE client_messages SET is_read=TRUE WHERE client_id=$1 AND sender='admin'", [req.params.id]);
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.post('/api/clients/:id/messages/notify', async (req, res) => {
  try {
    const clientRes = await pool.query('SELECT contact_name, email FROM clients WHERE client_id=$1', [req.params.id]);
    if (clientRes.rows.length > 0) {
      const client = clientRes.rows[0];
      const portalLink = `${process.env.VITE_APP_URL || 'http://localhost:3000'}/portal/messages`;
      try {
        await transporter.sendMail({
          from: `"Lumora Admin" <${process.env.GMAIL_USER}>`,
          to: client.email,
          subject: 'Reminder: Unread Messages from Lumora',
          html: `
            <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="color: #111827;">Hello ${client.contact_name},</h2>
              <p style="color: #4b5563; line-height: 1.5;">This is a friendly reminder that you have unread messages waiting in your client portal.</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${portalLink}" style="background-color: #5B8EE2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Messages</a>
              </div>
            </div>
          `
        });
      } catch (err) { console.error('Email failed:', err); }
    }
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.put('/api/clients/messages/:id', async (req, res) => {
  try {
    const { message } = req.body;
    const result = await pool.query(
      'UPDATE client_messages SET message=$1, is_edited=TRUE WHERE id=$2 RETURNING *',
      [message, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.delete('/api/clients/messages/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM client_messages WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

// --- Meetings ---
app.get('/api/clients/:id/meetings', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM client_meetings WHERE client_id=$1 ORDER BY created_at DESC', [req.params.id]);
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.post('/api/clients/:id/meetings', async (req, res) => {
  try {
    const { title, description, option1, option2, option3 } = req.body;
    const result = await pool.query(
      'INSERT INTO client_meetings (client_id, title, description, option1, option2, option3) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [req.params.id, title, description, option1, option2, option3]
    );
    
    // Fetch client email to send notification
    const clientRes = await pool.query('SELECT contact_name, email FROM clients WHERE client_id=$1', [req.params.id]);
    if (clientRes.rows.length > 0) {
      const client = clientRes.rows[0];
      const portalLink = `${process.env.VITE_APP_URL || 'http://localhost:3000'}/portal/meetings`;
      try {
        await transporter.sendMail({
          from: `"Lumora Admin" <${process.env.GMAIL_USER}>`,
          to: client.email,
          subject: `Meeting Proposed: ${title}`,
          html: `
            <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="color: #111827;">Hello ${client.contact_name},</h2>
              <p style="color: #4b5563; line-height: 1.5;">We have proposed a new meeting regarding: <strong>${title}</strong></p>
              <p style="color: #4b5563; line-height: 1.5;">Please review the proposed times and select the one that works best for you.</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${portalLink}" style="background-color: #5B8EE2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Select Meeting Time</a>
              </div>
            </div>
          `
        });
      } catch (err) { console.error('Email failed:', err); }
    }
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.put('/api/clients/meetings/:id/select', async (req, res) => {
  try {
    const { selected_option } = req.body;
    const result = await pool.query(
      "UPDATE client_meetings SET selected_option=$1, status='Scheduled' WHERE id=$2 RETURNING *",
      [selected_option, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.delete('/api/clients/meetings/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM client_meetings WHERE id=$1', [req.params.id]);
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.put('/api/clients/meetings/:id/complete', async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE client_meetings SET status='Completed' WHERE id=$1 RETURNING *",
      [req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});


app.get('/api/clients/:id/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM client_tasks WHERE client_id=$1 ORDER BY created_at ASC', [req.params.id]);
    res.json(result.rows);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.post('/api/clients/:id/tasks', async (req, res) => {
  try {
    const { title, description, start_date, end_date } = req.body;
    const result = await pool.query(
      'INSERT INTO client_tasks (client_id, title, description, start_date, end_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [req.params.id, title, description, start_date || null, end_date || null]
    );

    // Fetch client email to send notification
    const clientRes = await pool.query('SELECT contact_name, email FROM clients WHERE client_id=$1', [req.params.id]);
    if (clientRes.rows.length > 0) {
      const client = clientRes.rows[0];
      const portalLink = `${process.env.VITE_APP_URL || 'http://localhost:3000'}/portal/tasks`;
      
      try {
        await transporter.sendMail({
          from: `"Lumora Admin" <${process.env.GMAIL_USER}>`,
          to: client.email,
          subject: `New Goal Assigned: ${title}`,
          html: `
            <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="color: #111827;">New Goal Added, ${client.contact_name}</h2>
              <p style="color: #4b5563; line-height: 1.5;">Our team has assigned a new goal/task to your project: <strong>"${title}"</strong>.</p>
              ${description ? `<p style="color: #4b5563; line-height: 1.5;"><em>${description}</em></p>` : ''}
              <div style="text-align: center; margin: 30px 0;">
                <a href="${portalLink}" style="background-color: #5B8EE2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Your Goals</a>
              </div>
            </div>
          `
        });
      } catch (emailErr) {
        console.error('Failed to send task email', emailErr);
      }
    }

    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.put('/api/clients/tasks/:taskId', async (req, res) => {
  try {
    // Determine which fields are provided to update
    const { title, description, start_date, end_date, is_completed } = req.body;
    
    // Build dynamic query
    let queryArgs: any[] = [];
    let setClauses = [];
    
    if (title !== undefined) {
      queryArgs.push(title);
      setClauses.push(`title = $${queryArgs.length}`);
    }
    if (description !== undefined) {
      queryArgs.push(description);
      setClauses.push(`description = $${queryArgs.length}`);
    }
    if (start_date !== undefined) {
      queryArgs.push(start_date || null);
      setClauses.push(`start_date = $${queryArgs.length}`);
    }
    if (end_date !== undefined) {
      queryArgs.push(end_date || null);
      setClauses.push(`end_date = $${queryArgs.length}`);
    }
    if (is_completed !== undefined) {
      queryArgs.push(is_completed);
      setClauses.push(`is_completed = $${queryArgs.length}`);
    }
    
    if (setClauses.length === 0) return res.json({ success: true });
    
    queryArgs.push(req.params.taskId);
    const query = `UPDATE client_tasks SET ${setClauses.join(', ')} WHERE id = $${queryArgs.length} RETURNING *`;
    
    const result = await pool.query(query, queryArgs);
    res.json(result.rows[0]);
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

function hashPassword(password: string) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

app.post('/api/clients/set-password', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashed = hashPassword(password);
    const result = await pool.query(
      'UPDATE clients SET password_hash=$1 WHERE email=$2 RETURNING *',
      [hashed, email]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Client not found.' });
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.post('/api/clients/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await pool.query('SELECT * FROM clients WHERE email=$1', [email]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'No client account found for this email.' });
    
    const client = result.rows[0];
    if (!client.password_hash) {
      return res.status(400).json({ error: 'Account not set up. Please use your setup link.' });
    }
    
    if (client.password_hash !== hashPassword(password)) {
      return res.status(401).json({ error: 'Invalid password.' });
    }
    
    res.json({ success: true, client });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

// --- Proposals Routes ---
app.get('/api/clients/:id/proposals', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM client_proposals WHERE client_id=$1 ORDER BY created_at DESC', [req.params.id]);
    res.json({ proposals: result.rows });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.post('/api/clients/:id/proposals', async (req, res) => {
  try {
    const { title, file_url, amount, status } = req.body;
    const result = await pool.query(
      'INSERT INTO client_proposals (client_id, title, file_url, amount, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [req.params.id, title, file_url, amount, status || 'Pending']
    );

    // Fetch client email to send notification
    const clientRes = await pool.query('SELECT contact_name, email FROM clients WHERE client_id=$1', [req.params.id]);
    if (clientRes.rows.length > 0) {
      const client = clientRes.rows[0];
      const portalLink = `${process.env.VITE_APP_URL || 'http://localhost:3000'}/portal/proposals`;
      
      try {
        await transporter.sendMail({
          from: `"Lumora Admin" <${process.env.GMAIL_USER}>`,
          to: client.email,
          subject: `New Proposal/Invoice: ${title}`,
          html: `
            <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="color: #111827;">New Proposal Received, ${client.contact_name}</h2>
              <p style="color: #4b5563; line-height: 1.5;">A new proposal/invoice titled <strong>"${title}"</strong> for the amount of <strong>$${amount}</strong> has been uploaded to your client portal.</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${portalLink}" style="background-color: #5B8EE2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Proposal & Pay</a>
              </div>
              <p style="color: #6b7280; font-size: 12px; margin-top: 40px;">If the button doesn't work, copy and paste this link into your browser:<br>${portalLink}</p>
            </div>
          `
        });
        console.log(`Proposal email sent to ${client.email}`);
      } catch (emailErr) {
        console.error('Failed to send proposal email', emailErr);
      }
    }

    res.json({ success: true, proposal: result.rows[0] });
  } catch (err) { 
    console.error(err);
    res.status(500).json({ error: 'Database error' }); 
  }
});

app.post('/api/clients/proposals/:id/notify', async (req, res) => {
  try {
    const proposalRes = await pool.query('SELECT * FROM client_proposals WHERE id=$1', [req.params.id]);
    if (proposalRes.rows.length === 0) return res.status(404).json({ error: 'Proposal not found' });
    const proposal = proposalRes.rows[0];

    const clientRes = await pool.query('SELECT contact_name, email FROM clients WHERE client_id=$1', [proposal.client_id]);
    if (clientRes.rows.length > 0) {
      const client = clientRes.rows[0];
      const portalLink = `${process.env.VITE_APP_URL || 'http://localhost:3000'}/portal/proposals`;
      
      try {
        await transporter.sendMail({
          from: `"Lumora Admin" <${process.env.GMAIL_USER}>`,
          to: client.email,
          subject: `Reminder: Action Required on Proposal "${proposal.title}"`,
          html: `
            <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="color: #111827;">Hello ${client.contact_name},</h2>
              <p style="color: #4b5563; line-height: 1.5;">This is a friendly reminder that you have a pending proposal (<strong>${proposal.title}</strong>) waiting for your review.</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${portalLink}" style="background-color: #5B8EE2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Proposal</a>
              </div>
            </div>
          `
        });
      } catch (err) { console.error('Email failed:', err); }
    }
    res.json({ success: true });
  } catch (err) { res.status(500).json({ error: 'Database error' }); }
});

app.put('/api/clients/proposals/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const result = await pool.query(
      'UPDATE client_proposals SET status=$1 WHERE id=$2 RETURNING *',
      [status, req.params.id]
    );
    res.json({ success: true, proposal: result.rows[0] });
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
    const { createServer: createViteServer } = await import('vite');
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

if (!process.env.VERCEL) {
  startServer();
}

export default app;
