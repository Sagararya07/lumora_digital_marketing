import { Client } from 'pg';

const connectionString = 'postgresql://postgres:socialmedia%401234@db.gjbxeguiwtziomzuqivj.supabase.co:5432/postgres';

const client = new Client({
  connectionString,
});

async function run() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');
    
    // Get all tables in public schema
    const tablesRes = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    
    for (const row of tablesRes.rows) {
      const tableName = row.table_name;
      console.log(`\nTable: ${tableName}`);
      
      const columnsRes = await client.query(`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_schema = 'public' AND table_name = $1
      `, [tableName]);
      
      for (const col of columnsRes.rows) {
        console.log(`  - ${col.column_name} (${col.data_type})`);
      }
    }
    
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.end();
  }
}

run();
