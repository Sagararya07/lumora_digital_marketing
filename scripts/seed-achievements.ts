import pg from 'pg';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// We need to parse initialData.ts. Since it's a TS file with "export const initialSiteContent = ...", 
// we will just extract the JSON-like achievements array.
// But easier: compile it or run it via tsx. Let's use tsx logic.

async function run() {
  const client = await pool.connect();
  try {
    console.log('Truncating achievements table...');
    await client.query('TRUNCATE TABLE achievements RESTART IDENTITY CASCADE');
    
    // We will dynamically import the initialData file
    const { initialSiteContent } = await import('../src/data/initialData.ts');
    
    console.log(`Inserting ${initialSiteContent.achievements.length} achievements...`);
    
    let order = 0;
    for (const item of initialSiteContent.achievements) {
      const metric = item.metrics && item.metrics[0] ? item.metrics[0] : { label: '', value: '', change: '' };
      
      await client.query(
        `INSERT INTO achievements (
          title, category, value, short_description, full_details, image_url, sort_order, is_active, created_at, updated_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, true, NOW(), NOW())`,
        [
          item.clientName,
          item.industry,
          metric.value || '',
          item.challenge || '',
          item.results || '',
          item.image_url || '',
          order++
        ]
      );
    }
    
    console.log('Successfully inserted all achievements into DB!');
  } finally {
    client.release();
    await pool.end();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
