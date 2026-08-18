const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    const res = await pool.query("SELECT * FROM faqs");
    for (const row of res.rows) {
      let changed = false;
      let newQuestion = row.question;
      let newAnswer = row.answer;
      
      const regex = /cypher\s*swift/gi;

      if (newQuestion && newQuestion.match(regex)) {
        newQuestion = newQuestion.replace(regex, 'Lumora');
        changed = true;
      }
      if (newAnswer && newAnswer.match(regex)) {
        newAnswer = newAnswer.replace(regex, 'Lumora');
        changed = true;
      }
      
      if (changed) {
        console.log(`Updating FAQ ID ${row.id}...`);
        await pool.query("UPDATE faqs SET question = $1, answer = $2 WHERE id = $3", [newQuestion, newAnswer, row.id]);
      }
    }
    console.log("Done updating faqs table.");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    pool.end();
  }
}

run();
