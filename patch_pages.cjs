const fs = require('fs');

const generateSections = (titlePrefix) => [
  {
    id: 'sec-overview',
    type: 'overview',
    title: 'Turning Awareness Into Qualified Demand For Your Business.',
    content: 'In competitive global markets, growth is no longer driven by isolated marketing campaigns—it requires a structured, full-funnel demand generation engine. Cypher Swift delivers Demand Generation services that help organizations consistently attract, engage, convert, and retain high-intent prospects across digital channels. We work with B2B enterprises, B2C brands, SaaS companies, startups, and global service providers to build demand systems that align marketing, sales, and revenue operations.',
    mediaUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    bullets: []
  },
  {
    id: 'sec-services',
    type: 'services-grid',
    title: titlePrefix + ' Solutions & Services',
    content: 'Explore our specialized products designed for exponential business growth.',
    cards: [
      {
        id: 'card-1',
        title: 'Digital Footprint (Digital Business & Platform)',
        description: 'Digital Footprint is the one-stop place to get the most accurate data about any service you are searching for business growth.',
        iconUrl: 'https://api.dicebear.com/7.x/shapes/svg?seed=1&backgroundColor=0f172a',
        linkUrl: '#'
      },
      {
        id: 'card-2',
        title: 'World-Tour (App Online Registration)',
        description: 'World Tour is your go-to app for getting personalized travel plans for any place in the world.',
        iconUrl: 'https://api.dicebear.com/7.x/shapes/svg?seed=2&backgroundColor=7c3aed',
        linkUrl: '#'
      },
      {
        id: 'card-3',
        title: 'Wealth-Fi (Order Online Food)',
        description: 'Health is Wealth. With Wealth-Fi, you can get Ayurvedic-inspired healthy food made by certified experts.',
        iconUrl: 'https://api.dicebear.com/7.x/shapes/svg?seed=3&backgroundColor=10b981',
        linkUrl: '#'
      },
      {
        id: 'card-4',
        title: 'Planfourge Strategy Map',
        description: 'Advanced strategic planning and roadmap software tailored for fast-moving startups.',
        iconUrl: 'https://api.dicebear.com/7.x/shapes/svg?seed=4&backgroundColor=f59e0b',
        linkUrl: '#'
      },
      {
        id: 'card-5',
        title: 'Product Roadmap Alignment',
        description: 'Align your teams and stakeholders with clear, visual product roadmaps and feature prioritization.',
        iconUrl: 'https://api.dicebear.com/7.x/shapes/svg?seed=5&backgroundColor=3b82f6',
        linkUrl: '#'
      }
    ]
  },
  {
    id: 'sec-case-study',
    type: 'case-study',
    title: 'Client Success & Transformation',
    content: 'How we helped scale a global enterprise.',
    caseStudy: {
      clientName: 'Apex Global Enterprises',
      metrics: [
        { label: 'Revenue Growth', value: '+340%' },
        { label: 'CPL Reduction', value: '-45%' },
        { label: 'New Markets', value: '12' }
      ],
      challenge: 'Apex was struggling to unify their marketing data and execute multi-channel campaigns efficiently across different regions.',
      solution: 'We implemented a full-funnel digital strategy leveraging AI automation, tailored ad creatives, and localized SEO to capture high-intent buyers globally.'
    }
  }
];

const dataFile = 'src/data/initialData.ts';
let code = fs.readFileSync(dataFile, 'utf8');

// Find all occurrences of "sections: ["
let result = '';
let index = 0;

while (true) {
  let startIdx = code.indexOf('sections: [', index);
  if (startIdx === -1) {
    result += code.slice(index);
    break;
  }
  
  result += code.slice(index, startIdx);
  
  // Find the matching closing bracket
  let bracketCount = 0;
  let endIdx = startIdx + 'sections: '.length;
  
  for (let i = endIdx; i < code.length; i++) {
    if (code[i] === '[') bracketCount++;
    if (code[i] === ']') bracketCount--;
    
    if (bracketCount === 0) {
      endIdx = i + 1;
      break;
    }
  }
  
  // Append new sections
  result += 'sections: ' + JSON.stringify(generateSections('Advanced'), null, 2).replace(/\n/g, '\n    ');
  
  index = endIdx;
}

fs.writeFileSync(dataFile, result);
console.log('Mock data updated robustly!');
