const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function run() {
  try {
    await pool.query("ALTER TABLE clients ADD COLUMN IF NOT EXISTS password_hash VARCHAR(255);");
    console.log("Added password_hash column to clients table.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
run();
