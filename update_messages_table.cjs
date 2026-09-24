const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function run() {
  try {
    await pool.query(`
      ALTER TABLE client_messages 
      ADD COLUMN IF NOT EXISTS is_read BOOLEAN DEFAULT FALSE,
      ADD COLUMN IF NOT EXISTS notification_sent BOOLEAN DEFAULT FALSE;
    `);
    console.log("Updated client_messages table.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
run();
