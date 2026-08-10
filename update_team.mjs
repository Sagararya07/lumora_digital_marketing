import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  try {
    // Clear out old "Dentist" data
    await pool.query('DELETE FROM team_members');

    // Insert new Digital Marketing specific data
    await pool.query(`INSERT INTO team_members (name, role, specializations, image_url, description, sort_order) VALUES 
      ('Alexandra Hayes', 'Head of Strategy', 'Omnichannel Marketing, Predictive Analytics, Revenue Operations', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop', 'Alexandra leads our global strategy division with a laser focus on data-driven acquisition. She ensures every campaign hypothesis is backed by deep analytical insights and predictive modeling, driving sustainable growth for enterprise clients.', 1),
      ('Marcus Reynolds', 'Director of Performance Media', 'Programmatic Advertising, Google Ads, B2B Lead Gen', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop', 'Marcus manages our high-budget paid media campaigns. With over a decade of experience scaling B2B SaaS companies, he specializes in identifying low-CAC acquisition channels and automating bid strategies.', 2),
      ('Sarah Jenkins', 'Creative Director', 'Brand Storytelling, Video Production, UI/UX Design', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop', 'Sarah oversees all creative initiatives at Lumora, transforming complex data points into compelling visual narratives. Her work captures audience attention and drives scalable brand loyalty across international markets.', 3)
    `);

    console.log('team_members table updated with digital marketing data.');
  } catch (err) {
    console.error('Error updating team_members table:', err);
  } finally {
    pool.end();
  }
}

run();
