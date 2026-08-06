const fs = require('fs');

const caseStudiesList = [
  {
    "id": "case-healthcare-1",
    "title": "MedTech Solutions",
    "category": "Healthcare",
    "description": "Increased patient acquisition through targeted local SEO and Google Ads.",
    "image_url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-healthcare-2",
    "title": "Dental Care Network",
    "category": "Healthcare",
    "description": "Boosted online bookings by 150% in 6 months.",
    "image_url": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-healthcare-3",
    "title": "Global Pharma Inc.",
    "category": "Healthcare",
    "description": "Generated $2M+ in pipeline for new medical device launch.",
    "image_url": "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-b2b-1",
    "title": "CloudScale SaaS",
    "category": "B2B & IT SaaS",
    "description": "Tripled Enterprise MRR using Account-Based Marketing (ABM).",
    "image_url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-b2b-2",
    "title": "DataSync Pro",
    "category": "B2B & IT SaaS",
    "description": "Drove 10,000+ free trial signups via Technical SEO.",
    "image_url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-b2b-3",
    "title": "CyberDefend",
    "category": "B2B & IT SaaS",
    "description": "Reduced customer churn, saving $500k annually.",
    "image_url": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-realestate-1",
    "title": "Skyline Developers",
    "category": "Real Estate",
    "description": "Sold out 50+ luxury condos in record time.",
    "image_url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-realestate-2",
    "title": "Urban Spaces Realty",
    "category": "Real Estate",
    "description": "Increased lead volume by 400% through Google Local Services.",
    "image_url": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-realestate-3",
    "title": "Commercial Property Group",
    "category": "Real Estate",
    "description": "Sourced $10M+ in commercial leasing contracts.",
    "image_url": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-ecomm-1",
    "title": "Fashion Nova Styles",
    "category": "E-commerce",
    "description": "Achieved a 5x Return on Ad Spend (ROAS) on TikTok.",
    "image_url": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-ecomm-2",
    "title": "EcoLiving Goods",
    "category": "E-commerce",
    "description": "Doubled conversion rates with CRO and email flows.",
    "image_url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "case-ecomm-3",
    "title": "TechGadgets Direct",
    "category": "E-commerce",
    "description": "Generated $1M in Black Friday sales.",
    "image_url": "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=800"
  }
];

const dataPath = './src/data/initialData.ts';
let content = fs.readFileSync(dataPath, 'utf8');

const regex = /"workingHours":\s*"Mon - Sat: 9:00 AM - 8:00 PM IST \/ Global 24\/7 Support"[\s\S]*?\n\s*\}\n\s*\};/;

const replacement = `"workingHours": "Mon - Sat: 9:00 AM - 8:00 PM IST / Global 24/7 Support"
  },
  "caseStudiesList": ${JSON.stringify(caseStudiesList, null, 2)}
};`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(dataPath, content);
  console.log('Successfully added caseStudiesList to initialData.ts');
} else {
  console.log('Could not find the target string to replace.');
}
