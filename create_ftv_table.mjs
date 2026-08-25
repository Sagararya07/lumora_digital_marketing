import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS first_time_visitors (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      number TEXT,
      industry TEXT,
      message TEXT,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`);
    console.log('first_time_visitors table created successfully.');
  } catch (error) {
    console.error('Error creating table:', error);
  } finally {
    pool.end();
  }
}

run();
