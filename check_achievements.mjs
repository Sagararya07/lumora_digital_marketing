import 'dotenv/config';
import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
async function run() {
  const res = await pool.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'achievements'");
  console.log(res.rows);
  pool.end();
}
run();
