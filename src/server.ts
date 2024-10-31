import express from 'express';
//import booksRoutes from './routes/booksRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Utilizando as rotas de usuários
//app.use(booksRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});