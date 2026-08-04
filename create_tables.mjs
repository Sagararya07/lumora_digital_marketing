import 'dotenv/config';
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
async function run() {
  await pool.query(`CREATE TABLE IF NOT EXISTS about_mission_cards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    title TEXT NOT NULL, 
    description TEXT NOT NULL, 
    icon_name TEXT NOT NULL, 
    sort_order INTEGER DEFAULT 0, 
    is_active BOOLEAN DEFAULT true, 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );`);
  
  await pool.query(`CREATE TABLE IF NOT EXISTS about_core_pillars (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    title TEXT NOT NULL, 
    description TEXT NOT NULL, 
    icon_name TEXT NOT NULL, 
    sort_order INTEGER DEFAULT 0, 
    is_active BOOLEAN DEFAULT true, 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );`);

  // Seed default data if empty
  const missionCards = await pool.query('SELECT COUNT(*) FROM about_mission_cards');
  if (missionCards.rows[0].count === '0') {
    await pool.query(`INSERT INTO about_mission_cards (title, description, icon_name, sort_order) VALUES 
      ('Omnichannel Funnel Scaling', 'Google Ads, Meta, LinkedIn & Programmatic', 'Globe2', 1),
      ('AI Campaign Automation', 'Real-time automated bidding & AI creative testing', 'Zap', 2),
      ('100% Attribution Transparency', 'Live client dashboard tracking CAC, leads & ROI', 'CheckCircle2', 3)
    `);
  }

  const corePillars = await pool.query('SELECT COUNT(*) FROM about_core_pillars');
  if (corePillars.rows[0].count === '0') {
    await pool.query(`INSERT INTO about_core_pillars (title, description, icon_name, sort_order) VALUES 
      ('Data-Driven Strategy', 'Every campaign hypothesis is validated using historical search trends and conversion benchmarks.', 'BarChart3', 1),
      ('Certified Premier Partners', 'Accredited Google Premier, Meta Business, and HubSpot marketing strategists managing your budget.', 'Award', 2),
      ('Relentless ROI Focus', 'We optimize down to Customer Acquisition Cost (CAC) and customer lifetime value (LTV).', 'TrendingUp', 3)
    `);
  }

  console.log('Tables created and seeded');
  pool.end();
}
run();
