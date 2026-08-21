import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

pool.query("DELETE FROM dynamic_pages WHERE slug = 'paid-advertising-campaigns'", (err, res) => {
  console.log(err ? err : 'Deleted ' + (res ? res.rowCount : 0));
  pool.end();
});
