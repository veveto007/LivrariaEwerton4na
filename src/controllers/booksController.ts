import { Request, Response } from 'express';
import { BookRepository } from '../repositories/bookRepository';
import { title } from 'process';

const bookRepository = new BookRepository();

export const getBooks = async (req: Request, res: Response) => {
  try {
    const product = await bookRepository.getAllBooks();
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar Livros' });
  }
};

export const addBooks = async (req: Request, res: Response) => {
  const { title, subtitle, price } = req.body;
  try {
    const product = await bookRepository.addBook(title, subtitle, price);
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar Livros' });
  }
};