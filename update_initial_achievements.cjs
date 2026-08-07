const fs = require('fs');

const newCards = [
  // Healthcare
  {
    title: 'MedTech Solutions',
    category: 'Healthcare',
    value: '300+',
    short_description: 'Increased patient acquisition through targeted local SEO and Google Ads.',
    full_details: 'Our data-driven approach resulted in a 300+ increase in monthly patient inquiries, optimizing their local presence and reducing Cost Per Acquisition (CPA) by 40%.',
    image_url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    icon: 'HeartPulse'
  },
  {
    title: 'Dental Care Network',
    category: 'Healthcare',
    value: '150%',
    short_description: 'Boosted online bookings by 150% in 6 months.',
    full_details: 'We completely revamped their booking funnel and ran hyper-local Facebook and Instagram campaigns, leading to a massive 150% surge in booked appointments.',
    image_url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    icon: 'Activity'
  },
  {
    title: 'Global Pharma Inc.',
    category: 'Healthcare',
    value: '$2M+',
    short_description: 'Generated $2M+ in pipeline for new medical device launch.',
    full_details: 'Through a combination of LinkedIn B2B lead generation and programmatic display ads, we successfully launched their new device to hospital administrators globally.',
    image_url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800',
    icon: 'Stethoscope'
  },

  // B2B & IT SaaS
  {
    title: 'CloudScale SaaS',
    category: 'B2B & IT SaaS',
    value: '3x',
    short_description: 'Tripled Enterprise MRR using Account-Based Marketing (ABM).',
    full_details: 'We implemented a multi-touch ABM strategy on LinkedIn, increasing demo requests by 3x and closing $5M+ in new annual recurring revenue.',
    image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    icon: 'Cloud'
  },
  {
    title: 'CyberDefend Pro',
    category: 'B2B & IT SaaS',
    value: '45%',
    short_description: 'Reduced cost-per-lead by 45% in highly competitive cyber security space.',
    full_details: 'By optimizing Google Search campaigns and creating high-converting landing pages, we slashed CPL by 45% while doubling lead volume.',
    image_url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    icon: 'Shield'
  },
  {
    title: 'DataSync Platforms',
    category: 'B2B & IT SaaS',
    value: '500+',
    short_description: 'Secured 500+ webinar attendees for product launch.',
    full_details: 'We utilized Facebook and LinkedIn ads to drive a highly targeted audience to their virtual product launch, resulting in a record-breaking 500+ attendees.',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    icon: 'Database'
  },

  // Real Estate
  {
    title: 'Luxury Estates Dubai',
    category: 'Real Estate',
    value: '$50M+',
    short_description: 'Sold $50M+ in luxury off-plan properties through Facebook lead gen.',
    full_details: 'We created immersive video ads showcasing luxury properties and targeted high-net-worth individuals, resulting in over $50M in closed sales.',
    image_url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    icon: 'Building'
  },
  {
    title: 'Urban Living Realty',
    category: 'Real Estate',
    value: '200%',
    short_description: 'Increased agent inquiries by 200% via Google Ads.',
    full_details: 'We completely restructured their Google Ads account, focusing on high-intent search terms. This led to a 200% increase in qualified inquiries for their agents.',
    image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    icon: 'Home'
  },
  {
    title: 'Commercial Spaces Ltd.',
    category: 'Real Estate',
    value: '40%',
    short_description: 'Increased commercial lease applications by 40%.',
    full_details: 'By leveraging LinkedIn Ads targeting business owners and office managers, we boosted applications for commercial leases by 40% in just 3 months.',
    image_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    icon: 'Briefcase'
  },

  // E-commerce
  {
    title: 'Fashion Nova UK',
    category: 'E-commerce',
    value: '5x',
    short_description: '5x Return on Ad Spend (ROAS) during Black Friday.',
    full_details: 'We designed a comprehensive cross-channel strategy (Facebook, Instagram, Google Shopping) that resulted in a massive 5x ROAS during their biggest sale of the year.',
    image_url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    icon: 'ShoppingBag'
  },
  {
    title: 'Organic Skincare Co.',
    category: 'E-commerce',
    value: '60%',
    short_description: 'Increased repeat customer rate by 60% through email marketing.',
    full_details: 'We implemented automated email flows (abandoned cart, welcome series, win-back) that drastically improved customer retention and increased repeat purchases by 60%.',
    image_url: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    icon: 'Droplet'
  },
  {
    title: 'Tech Gadgets Store',
    category: 'E-commerce',
    value: '2x',
    short_description: 'Doubled conversion rate through CRO and TikTok Ads.',
    full_details: 'We optimized their product pages for conversions and launched engaging TikTok ad campaigns, effectively doubling their overall website conversion rate.',
    image_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    icon: 'Smartphone'
  },

  // Manufacturing
  {
    title: 'SteelWorks Industrial',
    category: 'Manufacturing',
    value: '$10M+',
    short_description: 'Generated $10M+ in B2B pipeline via LinkedIn & SEO.',
    full_details: 'We combined targeted LinkedIn outreach with technical SEO to capture high-value search intent, generating over $10M in qualified B2B pipeline.',
    image_url: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800',
    icon: 'Factory'
  },
  {
    title: 'AutoParts Global',
    category: 'Manufacturing',
    value: '85%',
    short_description: 'Increased distributor inquiries by 85% globally.',
    full_details: 'By running multi-language Google Ads campaigns across Europe and Asia, we successfully increased inquiries from international distributors by 85%.',
    image_url: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800',
    icon: 'Settings'
  },
  {
    title: 'EcoPackaging Solutions',
    category: 'Manufacturing',
    value: '3x',
    short_description: 'Tripled organic traffic in 8 months.',
    full_details: 'Our comprehensive content strategy and technical SEO improvements resulted in a 3x increase in organic traffic, establishing them as an industry thought leader.',
    image_url: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=800',
    icon: 'Package'
  }
];

const mappedAchievements = newCards.map((r, i) => ({
  id: `case-${i + 1}`,
  clientName: r.title,
  industry: r.category || 'General',
  location: r.category?.includes('Dubai') ? 'Dubai & UK' : 'Global',
  metrics: [{ label: 'Key Result', value: r.value || 'N/A', change: '+100%' }],
  challenge: r.short_description || 'Scaling revenue in a competitive market.',
  solution: r.short_description || '',
  results: r.full_details || r.short_description || '',
  testimonial: {
    quote: `Cypher Swift completely transformed our approach to ${r.category || 'digital marketing'}. Highly recommended!`,
    author: `VP of Marketing, ${r.title}`,
    role: 'Client'
  },
  image_url: r.image_url
}));

let content = fs.readFileSync('src/data/initialData.ts', 'utf8');

const targetRegex = /"achievements":\s*\[[\s\S]*?\],\s*"process":/;

if (targetRegex.test(content)) {
  const replacementStr = `"achievements": ${JSON.stringify(mappedAchievements, null, 4)},\n  "process":`;
  const indentedReplacement = replacementStr.split('\n').map(line => '  ' + line).join('\n').replace(/^  "achievements"/, '"achievements"');
  
  content = content.replace(targetRegex, indentedReplacement);
  fs.writeFileSync('src/data/initialData.ts', content);
  console.log('Successfully updated initialData.ts achievements!');
} else {
  console.log('Regex did not match.');
}
