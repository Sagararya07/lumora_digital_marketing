import 'dotenv/config';
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  await pool.query(`CREATE TABLE IF NOT EXISTS rnd_modules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    badge TEXT NOT NULL,
    image_url TEXT,
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );`);

  // Seed default data if empty
  const res = await pool.query('SELECT COUNT(*) FROM rnd_modules');
  if (res.rows[0].count === '0') {
    const defaultModules = [
      {
        title: 'Predictive Buyer Journey Engine',
        description: 'Simulates conversion probabilities across 10,000+ audience pathways before allocating live media spend.',
        badge: 'Machine Learning',
        image_url: 'https://cdn-icons-png.flaticon.com/512/2043/2043102.png',
        sort_order: 1
      },
      {
        title: 'Automated Multi-Touch Attribution',
        description: 'Tracks every user touchpoint across search, social, and email to allocate budget to high-converting channels.',
        badge: 'Real-Time Data',
        image_url: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
        sort_order: 2
      },
      {
        title: 'Autonomous AI Lead Qualification',
        description: 'Interactive AI chatbots and automated scoring sequences verify intent before handing off leads to sales teams.',
        badge: 'Automation',
        image_url: 'https://cdn-icons-png.flaticon.com/512/4711/4711987.png',
        sort_order: 3
      },
      {
        title: 'Creative Resonance Computer Vision',
        description: 'AI visual analysis evaluates ad creative elements (colors, copy layout, imagery) against historic ROAS benchmarks.',
        badge: 'Computer Vision',
        image_url: 'https://cdn-icons-png.flaticon.com/512/2919/2919864.png',
        sort_order: 4
      }
    ];

    for (const mod of defaultModules) {
      await pool.query(
        'INSERT INTO rnd_modules (title, description, badge, image_url, sort_order) VALUES ($1, $2, $3, $4, $5)',
        [mod.title, mod.description, mod.badge, mod.image_url, mod.sort_order]
      );
    }
  }

  console.log('rnd_modules table created and seeded');
  pool.end();
}
run();
