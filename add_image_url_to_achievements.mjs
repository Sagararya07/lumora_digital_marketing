import 'dotenv/config';
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
async function run() {
  await pool.query(`ALTER TABLE achievements ADD COLUMN IF NOT EXISTS image_url TEXT`);
  console.log('Added image_url to achievements table');
  pool.end();
}
run();
