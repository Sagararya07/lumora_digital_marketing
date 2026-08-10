import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  try {
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

    // Seed default data if empty
    const teamMembersCount = await pool.query('SELECT COUNT(*) FROM team_members');
    if (teamMembersCount.rows[0].count === '0') {
      await pool.query(`INSERT INTO team_members (name, role, specializations, image_url, description, sort_order) VALUES 
        ('Dr. Emily Peterson', 'Senior General Dentist', 'Cavity Treatment, Endodontics, Tooth Restoration', 'https://images.unsplash.com/photo-1594824436998-dd1eb0525b6a?q=80&w=600&auto=format&fit=crop', 'Dr. Emily Peterson has over 10 years of experience, specializing in personalized care. She focuses on individualized treatment in a calm environment and emphasizes prevention and oral hygiene.', 1),
        ('John Smith', 'Head of Strategy', 'SEO, Programmatic Ads, Conversion Optimization', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop', 'John leads our global strategy team with a focus on data-driven omnichannel acquisition. He ensures every campaign hypothesis is backed by deep analytical insights and predictive modeling.', 2),
        ('Sarah Jenkins', 'Creative Director', 'Brand Storytelling, Video Production, UI/UX Design', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop', 'Sarah oversees all creative initiatives, transforming complex data points into compelling visual narratives that capture audience attention and drive scalable brand loyalty.', 3)
      `);
    }

    console.log('team_members table created and seeded successfully.');
  } catch (err) {
    console.error('Error creating team_members table:', err);
  } finally {
    pool.end();
  }
}

run();
