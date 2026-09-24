const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function run() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS client_proposals (
          id SERIAL PRIMARY KEY,
          client_id VARCHAR(50) REFERENCES clients(client_id) ON DELETE CASCADE,
          title VARCHAR(255) NOT NULL,
          file_url TEXT,
          amount DECIMAL(10,2),
          status VARCHAR(50) DEFAULT 'Pending',
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);
    console.log("Created client_proposals table.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
run();
