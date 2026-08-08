const fs = require('fs');
let content = fs.readFileSync('src/data/initialData.ts', 'utf8');

const imageMap = {
  'Strategies Creations': '/images/services/strategy_creation.png',
  'Diagnose Marketing': '/images/services/diagnose_marketing.png',
  'Retarget Marketing': '/images/services/retarget_marketing.png',
  'Demand Generation': '/images/services/demand_generation.png',
  'High Quality Lead Generation': '/images/services/lead_generation.png',
  'Experts Monthly Audit': '/images/services/monthly_audit.png'
};

for (const [title, imagePath] of Object.entries(imageMap)) {
  // We need to replace the heroImage for the object with this title.
  // Because JSON/JS is tricky with regex across lines, let's use a function.
  
  const regex = new RegExp(`"title":\\s*"${title}"[\\s\\S]*?"heroImage":\\s*"[^"]+"`);
  content = content.replace(regex, match => {
    return match.replace(/"heroImage":\s*"[^"]+"/, `"heroImage": "${imagePath}"`);
  });
}

fs.writeFileSync('src/data/initialData.ts', content);
console.log('Updated initialData.ts with the new custom generated images.');
