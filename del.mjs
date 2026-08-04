import 'dotenv/config';
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
async function run() {
  const res = await pool.query("DELETE FROM trusted_logos WHERE image_url LIKE '%sample.jpg%'");
  console.log(`Deleted ${res.rowCount} rows`);
  pool.end();
}
run();
