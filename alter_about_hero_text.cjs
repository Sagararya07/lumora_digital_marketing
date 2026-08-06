const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  try {
    await pool.query(`
      ALTER TABLE about_hero_section
      ADD COLUMN IF NOT EXISTS hero_badge TEXT,
      ADD COLUMN IF NOT EXISTS hero_heading_1 TEXT,
      ADD COLUMN IF NOT EXISTS hero_heading_highlight TEXT,
      ADD COLUMN IF NOT EXISTS hero_description TEXT,
      ADD COLUMN IF NOT EXISTS hero_primary_cta TEXT,
      ADD COLUMN IF NOT EXISTS hero_secondary_cta TEXT;
    `);
    
    // Seed default data for the existing row
    await pool.query(`
      UPDATE about_hero_section 
      SET 
        hero_badge = COALESCE(hero_badge, 'ABOUT LUMORA DIGITAL AGENCY'),
        hero_heading_1 = COALESCE(hero_heading_1, 'Pioneering the Future of Digital Scaling for'),
        hero_heading_highlight = COALESCE(hero_heading_highlight, 'Ambitious Global Brands'),
        hero_description = COALESCE(hero_description, 'At Lumora, we combine algorithmic precision, AI-driven campaign intelligence, and creative storytelling to turn digital attention into predictable pipeline revenue.'),
        hero_primary_cta = COALESCE(hero_primary_cta, 'Partner With Our Experts'),
        hero_secondary_cta = COALESCE(hero_secondary_cta, 'Explore Agency Home')
      WHERE hero_badge IS NULL;
    `);
    console.log('Successfully altered about_hero_section for hero text and seeded default text.');
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}
run();
