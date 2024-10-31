import pool from '../config/database';

const createSalesTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS sales (
        id SERIAL PRIMARY KEY,
        quantity_books INTEGER NOT NULL,
        total_price NUMERIC(10,2) NOT NULL,
        client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
        book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
        data_sale TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await client.query(queryText);
    console.log('Tabela "sales" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    client.release();
  }
};

createSalesTable().then(() => process.exit(0));