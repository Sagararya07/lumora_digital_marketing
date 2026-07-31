export type FieldType = 'text' | 'textarea' | 'number' | 'boolean' | 'select';

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
      { key: 'background_image', label: 'Background Image URL', type: 'text', colSpan: 2 },
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
      { key: 'short_description', label: 'Short Description', type: 'textarea', colSpan: 2 },
      { key: 'full_description', label: 'Full Description', type: 'textarea', colSpan: 2 },
      { key: 'icon', label: 'Icon (Lucide name)', type: 'text' },
      { key: 'slug', label: 'URL Slug', type: 'text' },
      { key: 'cta_text', label: 'CTA Text', type: 'text' },
      { key: 'sort_order', label: 'Sort Order', type: 'number' },
      { key: 'is_featured', label: 'Featured', type: 'boolean' },
      { key: 'is_active', label: 'Active', type: 'boolean' },
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
    label: 'Case Studies',
    canCreate: true,
    canDelete: true,
    fields: [
      { key: 'title', label: 'Client / Case Title', type: 'text', colSpan: 2 },
      { key: 'value', label: 'Key Metric Value', type: 'text' },
      { key: 'category', label: 'Industry / Category', type: 'text' },
      { key: 'short_description', label: 'Challenge Summary', type: 'textarea', colSpan: 2 },
      { key: 'full_details', label: 'Results & Testimonial', type: 'textarea', colSpan: 2 },
      { key: 'icon', label: 'Icon (Lucide name)', type: 'text' },
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
