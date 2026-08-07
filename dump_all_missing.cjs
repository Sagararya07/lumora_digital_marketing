const { Pool } = require('pg');
const fs = require('fs');
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  try {
    // 1. Fetch data
    const testimonialsRes = await pool.query('SELECT * FROM testimonials WHERE is_active = true ORDER BY sort_order');
    const trustedLogosRes = await pool.query('SELECT * FROM trusted_logos WHERE is_active = true ORDER BY sort_order');
    const aboutMissionCardsRes = await pool.query('SELECT * FROM about_mission_cards WHERE is_active = true ORDER BY sort_order');
    const aboutCorePillarsRes = await pool.query('SELECT * FROM about_core_pillars WHERE is_active = true ORDER BY sort_order');
    
    // 2. Map data
    const testimonials = testimonialsRes.rows.map(r => ({
      id: r.id.toString(),
      name: r.name,
      company: r.company,
      role: r.role,
      content: r.content,
      rating: r.rating || 5,
      avatar: r.avatar,
    }));
    const trustedLogos = trustedLogosRes.rows.map(r => ({
      id: r.id.toString(),
      name: r.name,
      image_url: r.image_url,
    }));
    const aboutMissionCards = aboutMissionCardsRes.rows.map(r => ({
      id: r.id.toString(),
      title: r.title,
      description: r.description,
      iconName: r.icon_name,
    }));
    const aboutCorePillars = aboutCorePillarsRes.rows.map(r => ({
      id: r.id.toString(),
      title: r.title,
      description: r.description,
      iconName: r.icon_name,
    }));

    // 3. Inject to initialData.ts
    let content = fs.readFileSync('src/data/initialData.ts', 'utf8');
    
    const fieldsToInject = {
        "testimonials": testimonials,
        "trustedLogos": trustedLogos,
        "aboutMissionCards": aboutMissionCards,
        "aboutCorePillars": aboutCorePillars
    };

    let injectedAny = false;
    
    // We can just append these keys directly after rndModules
    for (const [key, val] of Object.entries(fieldsToInject)) {
       if (!content.includes(`"${key}":`)) {
          // Find rndModules and insert after it
          const targetRegex = /"rndModules":\s*\[[\s\S]*?\n\s*\]/;
          if (targetRegex.test(content)) {
            const replacementStr = content.match(targetRegex)[0] + `,\n  "${key}": ${JSON.stringify(val, null, 4)}`;
            content = content.replace(targetRegex, replacementStr);
            injectedAny = true;
            console.log(`Successfully added ${key} to initialData.ts!`);
          } else {
             console.log(`Could not find rndModules to inject ${key} after.`);
          }
       } else {
         console.log(`${key} already exists in initialData.ts. Not replacing.`);
       }
    }
    
    if (injectedAny) {
      fs.writeFileSync('src/data/initialData.ts', content);
    }
    
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}
run();
