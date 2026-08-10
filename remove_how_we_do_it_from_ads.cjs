const fs = require('fs');
const path = 'src/data/initialData.ts';
let content = fs.readFileSync(path, 'utf8');

const pages = [
  'lead-generation/google-ads',
  'lead-generation/meta-ads',
  'lead-generation/youtube-ads',
  'lead-generation/linkedin-ads',
  'lead-generation/twitter-ads'
];

let modified = false;

for (const slug of pages) {
  const searchSlug = `"slug": "${slug}"`;
  let pageIdx = content.indexOf(searchSlug);
  if (pageIdx === -1) continue;
  
  const nextSlugIdx = content.indexOf('"slug": "', pageIdx + 10);
  const pageChunk = content.substring(pageIdx, nextSlugIdx !== -1 ? nextSlugIdx : content.length);
  
  const typeIdx = pageChunk.indexOf('"type": "how-we-do-it"');
  if (typeIdx !== -1) {
    console.log(`Found 'how-we-do-it' in page: ${slug}`);
    
    // Find the object start for this section
    const sectionStart = pageChunk.lastIndexOf('{', typeIdx);
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
        let startRemove = sectionStart;
        while(pageChunk[startRemove - 1] === ' ' || pageChunk[startRemove - 1] === '\n' || pageChunk[startRemove - 1] === '\r') {
            startRemove--;
        }
        if (pageChunk[startRemove - 1] === ',') {
            startRemove--;
        }
        
        const absoluteStartRemove = pageIdx + startRemove;
        const absoluteSectionEnd = pageIdx + sectionEnd;
        
        content = content.substring(0, absoluteStartRemove) + content.substring(absoluteSectionEnd + 1);
        modified = true;
    }
  }
}

if (modified) {
    fs.writeFileSync(path, content, 'utf8');
    console.log("Successfully removed 'how-we-do-it' sections from ad pages.");
} else {
    console.log("No modifications needed.");
}
