import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function migrate() {
  try {
    console.log('Adding slug column to services table...');
    await pool.query(`
      ALTER TABLE services ADD COLUMN IF NOT EXISTS slug TEXT;
      ALTER TABLE services ADD COLUMN IF NOT EXISTS features JSONB DEFAULT '[]'::jsonb;
      ALTER TABLE services ADD COLUMN IF NOT EXISTS deliverables JSONB DEFAULT '[]'::jsonb;
      ALTER TABLE services ADD COLUMN IF NOT EXISTS recommended_for TEXT;
      ALTER TABLE services ADD COLUMN IF NOT EXISTS badge TEXT;
    `);

    console.log('Generating slugs for existing rows...');
    const res = await pool.query('SELECT id, title FROM services WHERE slug IS NULL');
    for (const row of res.rows) {
      const slug = row.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      await pool.query('UPDATE services SET slug = $1 WHERE id = $2', [slug, row.id]);
    }

    console.log('Migration complete!');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    pool.end();
  }
}

migrate();
