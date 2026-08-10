const fs = require('fs');
const path = 'src/data/initialData.ts';
let content = fs.readFileSync(path, 'utf8');

const pages = [
  'lead-generation',
  'social-media-marketing',
  'seo',
  'performance-marketing',
  'retargeting-marketing',
  'ai-marketing-automation',
  'paid-advertising-campaigns',
  'target-audience-reach',
  'influencer-marketing',
  'strategies-creations',
  'diagnose-marketing',
  'retarget-marketing',
  'demand-generation',
  'high-quality-lead-generation',
  'experts-monthly-audit'
];

let modified = false;

for (const slug of pages) {
  const pageIdx = content.indexOf(`"slug": "${slug}"`);
  if (pageIdx === -1) continue;
  
  const nextSlugIdx = content.indexOf('"slug": "', pageIdx + 10);
  const pageChunk = content.substring(pageIdx, nextSlugIdx !== -1 ? nextSlugIdx : content.length);
  
  const adsIdx = pageChunk.indexOf('"title": "Ads We Manage"');
  if (adsIdx !== -1) {
    console.log(`Found 'Ads We Manage' in page: ${slug}`);
    
    // Find the object start for this section
    const sectionStart = pageChunk.lastIndexOf('{', adsIdx);
    let openBraces = 0;
    let sectionEnd = -1;
    for(let i = sectionStart; i < pageChunk.length; i++) {
        if(pageChunk[i] === '{') openBraces++;
        if(pageChunk[i] === '}') {
            openBraces--;
            if(openBraces === 0) {
                sectionEnd = i;
                break;
            }
        }
    }
    
    if (sectionEnd !== -1) {
        // Find if there's a comma before this section
        let startRemove = sectionStart;
        while(pageChunk[startRemove - 1] === ' ' || pageChunk[startRemove - 1] === '\n' || pageChunk[startRemove - 1] === '\r') {
            startRemove--;
        }
        if (pageChunk[startRemove - 1] === ',') {
            startRemove--;
        }
        
        // Remove from the main content string using absolute positions
        const absoluteStartRemove = pageIdx + startRemove;
        const absoluteSectionEnd = pageIdx + sectionEnd;
        
        content = content.substring(0, absoluteStartRemove) + content.substring(absoluteSectionEnd + 1);
        modified = true;
    }
  }
}

if (modified) {
    fs.writeFileSync(path, content, 'utf8');
    console.log("Successfully removed 'Ads We Manage' sections.");
} else {
    console.log("No modifications needed.");
}
