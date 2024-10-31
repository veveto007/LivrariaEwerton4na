import { Pool } from 'pg';
import pool from '../config/database';
import { Books } from '../models/booksModels';

export class BookRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  // Método para buscar todos os usuários
  async getAllBooks(): Promise<Books[]> {
    const { rows } = await this.pool.query('SELECT * FROM books');
    return rows;
  }

  // Método para adicionar um novo usuário
  async addBook(title: string, subtitle: string, price: number): Promise<Books> {
    const queryText = 'INSERT INTO books(title, subtitle, price) VALUES($1, $2, $3) RETURNING *';
    const { rows } = await this.pool.query(queryText, [title, subtitle, price]);
    return rows[0];
  }
}