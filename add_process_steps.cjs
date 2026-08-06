const fs = require('fs');

const extraSteps = [
  {
    "stepNumber": 6,
    "title": "A/B Optimization",
    "description": "A/B testing ad creatives, bidding strategies, and funnel copy to drive down cost-per-lead.",
    "duration": "Ongoing",
    "iconName": "Activity",
    "keyOutputs": [
      "A/B Test Results",
      "Conversion Optimization",
      "CPL Reduction"
    ]
  },
  {
    "stepNumber": 7,
    "title": "Reporting & Analytics",
    "description": "Transparent weekly lead attribution reporting and real-time dashboard analytics access.",
    "duration": "Ongoing",
    "iconName": "BarChart2",
    "keyOutputs": [
      "Weekly Reports",
      "Live Dashboard Access",
      "ROI Tracking"
    ]
  },
  {
    "stepNumber": 8,
    "title": "Growth Scaling",
    "description": "Re-allocating budget into winning channels and expanding market reach globally.",
    "duration": "Ongoing",
    "iconName": "TrendingUp",
    "keyOutputs": [
      "Budget Reallocation",
      "Market Expansion",
      "Revenue Growth"
    ]
  }
];

const dataPath = './src/data/initialData.ts';
let content = fs.readFileSync(dataPath, 'utf8');

// We need to inject these objects into the "process" array.
// Find the end of the 5th step.
const targetRegex = /(\s*"stepNumber": 5,[\s\S]*?"Scalable Budget Expansion"\s*\]\s*\})([\s\n]*\]\,\s*"industries":)/;

if (targetRegex.test(content)) {
  const match = content.match(targetRegex);
  
  // Format the extra steps as JSON strings to be injected
  const extraStr = extraSteps.map(step => JSON.stringify(step, null, 6)
    .replace(/\n/g, '\n      ')
    .replace(/^      \{/, '    {\n      ')
    .replace(/\}$/, '\n    }')).join(',\n');
  
  // Replace
  content = content.replace(targetRegex, `$1,\n${extraStr}$2`);
  
  fs.writeFileSync(dataPath, content);
  console.log('Successfully added steps 6, 7, 8 to initialData.ts');
} else {
  console.log('Could not find the target location to inject process steps.');
}
