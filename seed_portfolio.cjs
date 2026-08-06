const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

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
    full_details: 'We built a custom ABM strategy targeting Fortune 500 CTOs, tripling Monthly Recurring Revenue (MRR) and decreasing sales cycle length by 2 months.',
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    icon: 'Cloud'
  },
  {
    title: 'DataSync Pro',
    category: 'B2B & IT SaaS',
    value: '10k+',
    short_description: 'Drove 10,000+ free trial signups via Technical SEO.',
    full_details: 'By overhauling their content strategy and technical SEO structure, organic traffic skyrocketed, leading to over 10,000 highly-qualified free trial signups in one quarter.',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    icon: 'Database'
  },
  {
    title: 'CyberDefend',
    category: 'B2B & IT SaaS',
    value: '$500k',
    short_description: 'Reduced customer churn, saving $500k annually.',
    full_details: 'Implemented an AI-driven email lifecycle campaign that nurtured existing users and identified churn risks, successfully recovering $500k in annual revenue.',
    image_url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    icon: 'ShieldCheck'
  },

  // Real Estate
  {
    title: 'Skyline Developers',
    category: 'Real Estate',
    value: '50+',
    short_description: 'Sold out 50+ luxury condos in record time.',
    full_details: 'We utilized 3D virtual tour ads on Meta and YouTube to attract high-net-worth buyers, successfully selling out the entire building 3 months ahead of schedule.',
    image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    icon: 'Building2'
  },
  {
    title: 'Urban Spaces Realty',
    category: 'Real Estate',
    value: '400%',
    short_description: 'Increased lead volume by 400% through Google Local Services.',
    full_details: 'By optimizing their Google Business Profile and running aggressive Local Services Ads, their agents received 400% more inbound calls from qualified home buyers.',
    image_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    icon: 'Home'
  },
  {
    title: 'Commercial Property Group',
    category: 'Real Estate',
    value: '$10M+',
    short_description: 'Sourced $10M+ in commercial leasing contracts.',
    full_details: 'Our targeted LinkedIn ad campaigns connected property managers with corporate relocation teams, directly sourcing over $10M in multi-year commercial leases.',
    image_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    icon: 'Briefcase'
  },

  // E-commerce
  {
    title: 'Fashion Nova Styles',
    category: 'E-commerce',
    value: '5x',
    short_description: 'Achieved a 5x Return on Ad Spend (ROAS) on TikTok.',
    full_details: 'We partnered with micro-influencers and ran viral TikTok ad campaigns, resulting in a 5x ROAS and a complete sell-out of their summer collection.',
    image_url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    icon: 'ShoppingBag'
  },
  {
    title: 'EcoLiving Goods',
    category: 'E-commerce',
    value: '200%',
    short_description: 'Doubled conversion rates with CRO and email flows.',
    full_details: 'Through A/B testing on product pages and implementing robust Klaviyo abandoned cart flows, we increased their overall store conversion rate by 200%.',
    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    icon: 'Leaf'
  },
  {
    title: 'TechGadgets Direct',
    category: 'E-commerce',
    value: '$1M',
    short_description: 'Generated $1M in Black Friday sales.',
    full_details: 'We orchestrated a multi-channel countdown campaign across Google Shopping, Meta, and email, driving $1M in revenue in just a single weekend.',
    image_url: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=800',
    icon: 'Smartphone'
  },

  // Manufacturing
  {
    title: 'Precision Parts Mfg',
    category: 'Manufacturing',
    value: '120+',
    short_description: 'Secured 120+ international B2B distributor leads.',
    full_details: 'By running highly technical Search Ads and developing whitepapers for lead capture, we connected them with over 120 qualified international distributors.',
    image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    icon: 'Factory'
  },
  {
    title: 'GreenEnergy Tech',
    category: 'Manufacturing',
    value: '60%',
    short_description: 'Lowered B2B lead acquisition cost by 60%.',
    full_details: 'We restructured their complex Google Ads account and implemented strict negative keyword lists, cutting wasted spend and reducing CPA by a massive 60%.',
    image_url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800',
    icon: 'Sun'
  },
  {
    title: 'Automotive Solutions',
    category: 'Manufacturing',
    value: '$5M',
    short_description: 'Drove $5M in new OEM contracts via LinkedIn.',
    full_details: 'Our ABM LinkedIn strategy targeted procurement managers at major auto brands, directly resulting in the signing of $5M worth of new OEM manufacturing contracts.',
    image_url: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=800',
    icon: 'Truck'
  }
];

async function seed() {
  try {
    // 1. Delete all existing achievements
    await pool.query('DELETE FROM achievements');
    console.log('Deleted all existing achievements.');

    // 2. Insert the 15 new cards
    for (let i = 0; i < newCards.length; i++) {
      const c = newCards[i];
      await pool.query(
        'INSERT INTO achievements (title, category, value, short_description, full_details, image_url, icon, sort_order, is_active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, true)',
        [c.title, c.category, c.value, c.short_description, c.full_details, c.image_url, c.icon, i]
      );
    }
    console.log('Successfully inserted 15 new categorized cards.');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    pool.end();
  }
}

seed();
