import dotenv from 'dotenv';

import express from 'express';

import home from './routes/home';
import user from './routes/user';
import token from './routes/token';
import aluno from './routes/aluno';
import foto from './routes/foto';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/user', user);
    this.app.use('/tokens', token);
    this.app.use('/alunos', aluno);
    this.app.use('/fotos', foto);
  }
}

export default new App().app;
