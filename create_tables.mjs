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

  // Team Members Table
  await pool.query(`CREATE TABLE IF NOT EXISTS team_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    name TEXT NOT NULL, 
    role TEXT NOT NULL, 
    specializations TEXT, 
    image_url TEXT, 
    description TEXT, 
    sort_order INTEGER DEFAULT 0, 
    is_active BOOLEAN DEFAULT true, 
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );`);

  const teamMembers = await pool.query('SELECT COUNT(*) FROM team_members');
  if (teamMembers.rows[0].count === '0') {
    await pool.query(`INSERT INTO team_members (name, role, specializations, image_url, description, sort_order) VALUES 
      ('Alexandra Hayes', 'Head of Strategy', 'Omnichannel Marketing, Predictive Analytics, Revenue Operations', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop', 'Alexandra leads our global strategy division with a laser focus on data-driven acquisition. She ensures every campaign hypothesis is backed by deep analytical insights and predictive modeling, driving sustainable growth for enterprise clients.', 1),
      ('Marcus Reynolds', 'Director of Performance Media', 'Programmatic Advertising, Google Ads, B2B Lead Gen', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop', 'Marcus manages our high-budget paid media campaigns. With over a decade of experience scaling B2B SaaS companies, he specializes in identifying low-CAC acquisition channels and automating bid strategies.', 2),
      ('Sarah Jenkins', 'Creative Director', 'Brand Storytelling, Video Production, UI/UX Design', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop', 'Sarah oversees all creative initiatives at Lumora, transforming complex data points into compelling visual narratives. Her work captures audience attention and drives scalable brand loyalty across international markets.', 3)
    `);
  }

  console.log('Tables created and seeded');
  pool.end();
}
run();
