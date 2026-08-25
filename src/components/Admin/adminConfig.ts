export type FieldType = 'text' | 'textarea' | 'number' | 'boolean' | 'select' | 'image';

export interface FieldConfig {
  key: string;
  label: string;
  type: FieldType;
  options?: string[];
  colSpan?: 1 | 2;
}

export interface TableConfig {
  label: string;
  canCreate: boolean;
  canDelete: boolean;
  fields: FieldConfig[];
}

export const TABLE_CONFIGS: Record<string, TableConfig> = {
  hero_section: {
    label: 'Hero Section',
    canCreate: false,
    canDelete: false,
    fields: [
      { key: 'tagline', label: 'Badge Text', type: 'text', colSpan: 2 },
      { key: 'heading', label: 'Main Headline', type: 'textarea', colSpan: 2 },
      { key: 'subheading', label: 'Subheadline', type: 'textarea', colSpan: 2 },
      { key: 'primary_cta', label: 'Primary CTA Text', type: 'text' },
      { key: 'primary_cta_link', label: 'Primary CTA Link', type: 'text' },
      { key: 'secondary_cta', label: 'Secondary CTA Text', type: 'text' },
      { key: 'secondary_cta_link', label: 'Secondary CTA Link', type: 'text' },
      { key: 'background_image', label: 'Background Image', type: 'image', colSpan: 2 },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  digital_marketing_content: {
    label: 'What Is Digital Marketing',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'title', label: 'Title', type: 'text', colSpan: 2 },
      { key: 'content', label: 'Content', type: 'textarea', colSpan: 2 },
      { key: 'icon', label: 'Icon (Lucide name)', type: 'text' },
      { key: 'image_url', label: 'Custom Image (Overrides Icon)', type: 'image' },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  target_audience: {
    label: 'Target Audience',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'name', label: 'Audience Name', type: 'text', colSpan: 2 },
      { key: 'description', label: 'Description', type: 'textarea', colSpan: 2 },
      { key: 'icon', label: 'Icon (Lucide name)', type: 'text' },
      { key: 'image_url', label: 'Custom Image (Overrides Icon)', type: 'image' },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  services: {
    label: 'Services',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'title', label: 'Service Title', type: 'text', colSpan: 2 },
      { key: 'slug', label: 'URL Slug', type: 'text', colSpan: 2 },
      { key: 'short_description', label: 'Card Description', type: 'textarea', colSpan: 2 },
      { key: 'full_description', label: 'Page Details / Paragraphs', type: 'textarea', colSpan: 2 },
      { key: 'icon', label: 'Icon (Lucide name)', type: 'text' },
      { key: 'image_url', label: 'Service Image', type: 'image' },
      { key: 'badge', label: 'Card Badge (e.g., Viral Authority)', type: 'text' },
      { key: 'recommended_for', label: 'Recommended For Text', type: 'textarea', colSpan: 2 },
      { key: 'cta_text', label: 'CTA Text', type: 'text' },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_featured', label: 'Featured', type: 'boolean' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  icon_edit: {
    label: 'Service Icons',
    canCreate: false,
    canDelete: false,
    fields: [
      { key: 'title', label: 'Service Title', type: 'text', colSpan: 2 },
      { key: 'icon', label: 'Icon (Lucide name)', type: 'text', colSpan: 2 },
    ],
  },
  why_choose_us: {
    label: 'Why Choose Us',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'title', label: 'Title', type: 'text', colSpan: 2 },
      { key: 'description', label: 'Description', type: 'textarea', colSpan: 2 },
      { key: 'icon', label: 'Icon (Lucide name)', type: 'text' },
      { key: 'image_url', label: 'Custom Image (Overrides Icon)', type: 'image' },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  process_steps: {
    label: 'Our Process',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'step_number', label: 'Step Number', type: 'number' },
      { key: 'title', label: 'Step Title', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea', colSpan: 2 },
      { key: 'icon', label: 'Icon (Lucide name)', type: 'text' },
      { key: 'image_url', label: 'Custom Image (Overrides Icon)', type: 'image' },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  industries: {
    label: 'Industries',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'name', label: 'Industry Name', type: 'text', colSpan: 2 },
      { key: 'description', label: 'Description', type: 'textarea', colSpan: 2 },
      { key: 'icon', label: 'Icon (Lucide name)', type: 'text' },
      { key: 'image_url', label: 'Custom Image (Overrides Icon)', type: 'image' },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  faqs: {
    label: 'FAQs',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'question', label: 'Question', type: 'textarea', colSpan: 2 },
      { key: 'answer', label: 'Answer', type: 'textarea', colSpan: 2 },
      { key: 'category', label: 'Category', type: 'select', options: ['General', 'Pricing', 'Process', 'Results'] },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  achievements: {
    label: 'Portfolio Cards',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'image_url', label: 'Cover Image URL', type: 'image', colSpan: 2 },
      { key: 'title', label: 'Client / Case Title', type: 'text', colSpan: 2 },
      { key: 'value', label: 'Key Metric Value', type: 'text' },
      { key: 'category', label: 'Industry / Category', type: 'select', options: ['Healthcare', 'B2B & IT SaaS', 'Real Estate', 'E-commerce', 'Manufacturing'] },
      { key: 'short_description', label: 'Challenge Summary', type: 'textarea', colSpan: 2 },
      { key: 'full_details', label: 'Results & Testimonial', type: 'textarea', colSpan: 2 },
      { key: 'icon', label: 'Icon (Lucide name)', type: 'text' },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  case_studies: {
    label: 'Case Studies',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'image_url', label: 'Cover Image URL', type: 'image', colSpan: 2 },
      { key: 'title', label: 'Client / Case Title', type: 'text', colSpan: 2 },
      { key: 'category', label: 'Industry / Category', type: 'text' },
      { key: 'description', label: 'Description', type: 'textarea', colSpan: 2 },
    ],
  },
  partner_logos: {
    label: 'Trusted Partner & Client Logos',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'name', label: 'Company / Brand Name', type: 'text', colSpan: 2 },
      { key: 'logo_url', label: 'Company Logo Image URL', type: 'text', colSpan: 2 },
      { key: 'website_url', label: 'Company Website (Optional)', type: 'text' },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_active', label: 'Active in Marquee', type: 'boolean' },
    ],
  },
  first_time_visitors: {
    label: 'First Time Visitor Data',
    canCreate: false,
    canDelete: true,
    fields: [
      { key: 'name', label: 'Name', type: 'text' },
      { key: 'email', label: 'Email', type: 'text' },
      { key: 'number', label: 'Number', type: 'text' },
      { key: 'industry', label: 'Industry', type: 'text' },
      { key: 'message', label: 'Message', type: 'textarea', colSpan: 2 },
    ],
  },
  trusted_logos: {
    label: 'Trusted Logos (Images)',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'name', label: 'Company Name', type: 'text', colSpan: 2 },
      { key: 'image_url', label: 'Logo Image', type: 'image', colSpan: 2 },
    ],
  },

  about_mission_cards: {
    label: 'Mission & Vision Cards',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'title', label: 'Card Title', type: 'text', colSpan: 2 },
      { key: 'description', label: 'Description', type: 'textarea', colSpan: 2 },
      { key: 'icon_name', label: 'Icon (Lucide name)', type: 'text' },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  about_core_pillars: {
    label: 'Core Pillars (What Sets Lumora Apart)',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'title', label: 'Card Title', type: 'text', colSpan: 2 },
      { key: 'description', label: 'Description', type: 'textarea', colSpan: 2 },
      { key: 'icon_name', label: 'Icon (Lucide name)', type: 'text' },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  about_hero_section: {
    label: 'About Page Config (Hero & Mission)',
    canCreate: false,
    canDelete: false,
    fields: [
      { key: 'background_image', label: 'Hero Background Image', type: 'image', colSpan: 2 },
      { key: 'hero_badge', label: 'Hero Badge Text', type: 'text', colSpan: 2 },
      { key: 'hero_heading_1', label: 'Hero Main Heading', type: 'textarea', colSpan: 2 },
      { key: 'hero_heading_highlight', label: 'Hero Highlight Text', type: 'text', colSpan: 2 },
      { key: 'hero_description', label: 'Hero Description Paragraph', type: 'textarea', colSpan: 2 },
      { key: 'hero_primary_cta', label: 'Hero Primary CTA Button', type: 'text' },
      { key: 'hero_secondary_cta', label: 'Hero Secondary CTA Button', type: 'text' },
      { key: 'mission_title', label: 'Mission Badge (e.g. OUR MISSION & VISION)', type: 'text', colSpan: 2 },
      { key: 'mission_heading', label: 'Mission Heading', type: 'text', colSpan: 2 },
      { key: 'mission_text1', label: 'Mission Paragraph 1', type: 'textarea', colSpan: 2 },
      { key: 'mission_text2', label: 'Mission Paragraph 2', type: 'textarea', colSpan: 2 },
      { key: 'mission_stat1_value', label: 'Stat 1 Value (e.g. 10+ Yrs)', type: 'text' },
      { key: 'mission_stat1_label', label: 'Stat 1 Label (e.g. Industry Leadership)', type: 'text' },
      { key: 'mission_stat2_value', label: 'Stat 2 Value (e.g. 15+ Countries)', type: 'text' },
      { key: 'mission_stat2_label', label: 'Stat 2 Label (e.g. Global Client Footprint)', type: 'text' },
    ],
  },
  rnd_modules: {
    label: 'R&D Modules',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'title', label: 'Module Title', type: 'text', colSpan: 2 },
      { key: 'description', label: 'Description', type: 'textarea', colSpan: 2 },
      { key: 'badge', label: 'Badge Text', type: 'text' },
      { key: 'image_url', label: 'Upload Icon Image', type: 'image' },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  testimonials: {
    label: 'Testimonials',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'name', label: 'Author Name', type: 'text' },
      { key: 'company', label: 'Company', type: 'text' },
      { key: 'role', label: 'Role', type: 'text' },
      { key: 'avatar', label: 'Avatar Image', type: 'image' },
      { key: 'content', label: 'Feedback Content', type: 'textarea', colSpan: 2 },
      { key: 'rating', label: 'Rating (1-5)', type: 'number' },
      { key: 'is_featured', label: 'Featured', type: 'boolean' },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
  team_members: {
    label: 'Team Members',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'name', label: 'Member Name', type: 'text' },
      { key: 'role', label: 'Role / Designation', type: 'text' },
      { key: 'specializations', label: 'Specializations (comma separated)', type: 'text', colSpan: 2 },
      { key: 'image_url', label: 'Profile Photo', type: 'image' },
      { key: 'description', label: 'Description', type: 'textarea', colSpan: 2 },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
    ],
  },
};

export const SECTION_SETTINGS = [
  {
    key: 'hero_extended',
    label: 'Hero Stats & Highlight',
    fields: [
      { key: 'headlineHighlight', label: 'Headline Highlight Word', type: 'text' as FieldType },
      { key: 'statNumber', label: 'Stat Number', type: 'text' as FieldType },
      { key: 'statLabel', label: 'Stat Label', type: 'text' as FieldType },
      { key: 'statBadgeText', label: 'Stat Badge Text', type: 'text' as FieldType },
    ],
  },
  {
    key: 'what_is_section',
    label: 'What Is Section Headers',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' as FieldType, colSpan: 2 as const },
      { key: 'subtitle', label: 'Section Subtitle', type: 'text' as FieldType, colSpan: 2 as const },
      { key: 'descriptionParagraph2', label: 'Second Paragraph', type: 'textarea' as FieldType, colSpan: 2 as const },
    ],
  },
  {
    key: 'why_choose_section',
    label: 'Why Choose Us Headers',
    fields: [
      { key: 'title', label: 'Section Title', type: 'text' as FieldType, colSpan: 2 as const },
      { key: 'subtitle', label: 'Section Subtitle', type: 'text' as FieldType, colSpan: 2 as const },
    ],
  },
];
