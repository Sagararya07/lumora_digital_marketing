const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function run() {
  try {
    await pool.query(`
      ALTER TABLE client_tasks 
      ADD COLUMN IF NOT EXISTS report_url TEXT,
      ADD COLUMN IF NOT EXISTS report_name TEXT;
    `);
    console.log("Updated client_tasks table with report columns.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
run();
