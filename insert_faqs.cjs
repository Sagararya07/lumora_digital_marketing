const fs = require('fs');
const path = 'src/data/initialData.ts';
let content = fs.readFileSync(path, 'utf8');

const pages = [
  { slug: 'lead-generation', title: 'Lead Generation' },
  { slug: 'social-media-marketing', title: 'Social Media Marketing' },
  { slug: 'seo', title: 'Search Engine Optimization (SEO)' },
  { slug: 'performance-marketing', title: 'Performance Marketing' },
  { slug: 'retargeting-marketing', title: 'Retargeting Marketing' },
  { slug: 'ai-marketing-automation', title: 'AI Marketing Automation' },
  { slug: 'paid-advertising-campaigns', title: 'Paid Advertising Campaigns' },
  { slug: 'target-audience-reach', title: 'Target Audience Reach' },
  { slug: 'influencer-marketing', title: 'Influencer Marketing' },
  { slug: 'strategies-creations', title: 'Strategies Creations' },
  { slug: 'diagnose-marketing', title: 'Diagnose Marketing' },
  { slug: 'retarget-marketing', title: 'Retarget Marketing' },
  { slug: 'demand-generation', title: 'Demand Generation' },
  { slug: 'high-quality-lead-generation', title: 'High Quality Lead Generation' },
  { slug: 'experts-monthly-audit', title: 'Experts Monthly Audit' }
];

for (const page of pages) {
  const pageIdx = content.indexOf('"slug": "' + page.slug + '"');
  if (pageIdx === -1) continue;
  
  const sectionsArrIdx = content.indexOf('"sections": [', pageIdx);
  if (sectionsArrIdx === -1) continue;
  
  const faqBlock = `
      ,
      {
        "id": "faq-${page.slug}-" + Math.floor(Math.random()*10000),
        "type": "faq",
        "title": "Frequently Asked Questions",
        "content": "",
        "cards": [
          {
            "id": "faq-1",
            "title": "What exactly do your ${page.title} services include?",
            "description": "Our ${page.title} services provide end-to-end strategy, execution, and continuous optimization tailored to your unique business goals. We focus on driving measurable growth and maximizing your ROI."
          },
          {
            "id": "faq-2",
            "title": "How long does it take to see results from ${page.title}?",
            "description": "While initial improvements and quick wins can often be seen within the first few weeks, comprehensive ${page.title} campaigns typically show significant, scalable growth in 3-6 months."
          },
          {
            "id": "faq-3",
            "title": "Why should we choose Cypher Swift for ${page.title}?",
            "description": "With years of industry expertise, transparent reporting, and a proven track record of scaling businesses, we deliver unparalleled ${page.title} solutions that directly impact your bottom line."
          }
        ]
      }`;

  // Find where this page's sections array ends
  let openBrackets = 0;
  let endOfSections = -1;
  for (let i = sectionsArrIdx; i < content.length; i++) {
    if (content[i] === '[') openBrackets++;
    if (content[i] === ']') {
      openBrackets--;
      if (openBrackets === 0) {
        endOfSections = i;
        break;
      }
    }
  }

  const sectionStr = content.substring(sectionsArrIdx, endOfSections);
  if (sectionStr.includes('"type": "faq"')) {
      console.log('Skipping ' + page.slug + ' as it already has an FAQ section.');
      continue;
  }

  if (endOfSections !== -1) {
    content = content.substring(0, endOfSections) + faqBlock + '\n    ' + content.substring(endOfSections);
  }
}

fs.writeFileSync(path, content, 'utf8');
console.log("Injected FAQ sections successfully!");
