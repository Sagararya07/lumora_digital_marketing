import 'dotenv/config';
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
async function run() {
  await pool.query(`CREATE TABLE IF NOT EXISTS about_hero_section (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
    background_image TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );`);
  
  // Seed default data if empty
  const res = await pool.query('SELECT COUNT(*) FROM about_hero_section');
  if (res.rows[0].count === '0') {
    await pool.query(`INSERT INTO about_hero_section (background_image) VALUES 
      ('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')
    `);
  }

  console.log('about_hero_section table created and seeded');
  pool.end();
}
run();
