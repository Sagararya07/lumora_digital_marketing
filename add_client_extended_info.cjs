const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function run() {
  try {
    await pool.query(`
      ALTER TABLE clients 
      ADD COLUMN IF NOT EXISTS location TEXT,
      ADD COLUMN IF NOT EXISTS company_website TEXT,
      ADD COLUMN IF NOT EXISTS company_social_links TEXT,
      ADD COLUMN IF NOT EXISTS company_contact TEXT,
      ADD COLUMN IF NOT EXISTS employees_count TEXT,
      ADD COLUMN IF NOT EXISTS revenue TEXT,
      ADD COLUMN IF NOT EXISTS founder_name TEXT,
      ADD COLUMN IF NOT EXISTS cxo_name TEXT,
      ADD COLUMN IF NOT EXISTS cxo_contact TEXT,
      ADD COLUMN IF NOT EXISTS cxo_social_media TEXT,
      ADD COLUMN IF NOT EXISTS cxo_other TEXT,
      ADD COLUMN IF NOT EXISTS enriched_date TEXT;
    `);
    console.log("Updated clients table with extended info columns.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
run();
