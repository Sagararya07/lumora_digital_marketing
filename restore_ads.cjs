const fs = require('fs');
const path = 'src/data/initialData.ts';
let content = fs.readFileSync(path, 'utf8');

const sectionToAdd = `        {
          "id": "sec-ads-we-manage",
          "type": "scrollable-cards",
          "title": "Ads We Manage",
          "cards": [
            {
              "id": "card-google",
              "title": "Google Ads",
              "description": "Search, Display, Shopping, Performance Max & YouTube Ads",
              "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
              "linkUrl": "lead-generation/google-ads"
            },
            {
              "id": "card-meta",
              "title": "Meta Ads",
              "description": "Facebook & Instagram Ads that build brand, leads & sales",
              "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
              "linkUrl": "lead-generation/meta-ads"
            },
            {
              "id": "card-youtube",
              "title": "YouTube Ads",
              "description": "Video Ads that increase brand awareness and drive conversions",
              "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
              "linkUrl": "lead-generation/youtube-ads"
            },
            {
              "id": "card-linkedin",
              "title": "LinkedIn Ads",
              "description": "B2B Leads, Brand Building & Targeted Outreach for Professionals",
              "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
              "linkUrl": "lead-generation/linkedin-ads"
            },
            {
              "id": "card-twitter",
              "title": "Twitter (X) Ads",
              "description": "Promote your business and engage with your target audience",
              "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
              "linkUrl": "lead-generation/twitter-ads"
            }
          ]
        },`;

const searchStr = `"slug": "lead-generation",`;
const pageIdx = content.indexOf(searchStr);
if (pageIdx !== -1) {
    const sectionsIdx = content.indexOf('"sections": [', pageIdx);
    if (sectionsIdx !== -1) {
        const insertIdx = sectionsIdx + '"sections": ['.length;
        content = content.substring(0, insertIdx) + '\n' + sectionToAdd + content.substring(insertIdx);
        fs.writeFileSync(path, content, 'utf8');
        console.log("Successfully restored Ads We Manage to lead-generation.");
    }
}
