const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  try {
    await pool.query(`
      ALTER TABLE about_hero_section
      ADD COLUMN IF NOT EXISTS mission_title TEXT,
      ADD COLUMN IF NOT EXISTS mission_heading TEXT,
      ADD COLUMN IF NOT EXISTS mission_text1 TEXT,
      ADD COLUMN IF NOT EXISTS mission_text2 TEXT,
      ADD COLUMN IF NOT EXISTS mission_stat1_value TEXT,
      ADD COLUMN IF NOT EXISTS mission_stat1_label TEXT,
      ADD COLUMN IF NOT EXISTS mission_stat2_value TEXT,
      ADD COLUMN IF NOT EXISTS mission_stat2_label TEXT;
    `);
    
    // Seed default data for the existing row
    await pool.query(`
      UPDATE about_hero_section 
      SET 
        mission_title = COALESCE(mission_title, 'OUR MISSION & VISION'),
        mission_heading = COALESCE(mission_heading, 'Eliminating Guesswork in Modern Customer Acquisition'),
        mission_text1 = COALESCE(mission_text1, 'Founded with a mission to replace vanity metrics with bottom-line growth, Lumora builds end-to-end digital acquisition funnels. We manage hyper-targeted search ads, paid social campaigns, technical SEO, and conversion optimization for enterprises, SaaS scale-ups, and regional market leaders.'),
        mission_text2 = COALESCE(mission_text2, 'Our global team operates across North America, Europe, the Middle East, and Asia-Pacific, managing high-performing campaigns tailored for local, national, and international buyer behaviors.'),
        mission_stat1_value = COALESCE(mission_stat1_value, '10+ Yrs'),
        mission_stat1_label = COALESCE(mission_stat1_label, 'Industry Leadership'),
        mission_stat2_value = COALESCE(mission_stat2_value, '15+ Countries'),
        mission_stat2_label = COALESCE(mission_stat2_label, 'Global Client Footprint')
      WHERE mission_title IS NULL;
    `);
    console.log('Successfully altered about_hero_section and seeded default text.');
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}
run();
