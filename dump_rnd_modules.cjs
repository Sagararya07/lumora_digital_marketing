const { Pool } = require('pg');
const fs = require('fs');
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  try {
    const res = await pool.query('SELECT * FROM rnd_modules WHERE is_active = true ORDER BY sort_order');
    const modules = res.rows.map(r => ({
      id: r.id.toString(),
      title: r.title,
      description: r.description,
      badge: r.badge,
      image_url: r.image_url
    }));

    let content = fs.readFileSync('src/data/initialData.ts', 'utf8');
    
    // Check if rndModules already exists
    if (content.includes('"rndModules":')) {
      console.log('rndModules already exists in initialData.ts. Not replacing.');
    } else {
      // Append it just before the export of initialSiteContent ends.
      // Wait, initialSiteContent ends with:
      //   "caseStudiesList": [ ... ]
      // };
      
      const targetRegex = /"caseStudiesList":\s*\[[\s\S]*?\n\s*\]/;
      if (targetRegex.test(content)) {
        const replacementStr = `"caseStudiesList": ` + content.match(targetRegex)[0].split('"caseStudiesList": ')[1] + `,\n  "rndModules": ${JSON.stringify(modules, null, 4)}`;
        content = content.replace(targetRegex, replacementStr);
        fs.writeFileSync('src/data/initialData.ts', content);
        console.log('Successfully added rndModules to initialData.ts!');
      } else {
         console.log('Could not find caseStudiesList to inject after.');
      }
    }
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}
run();
