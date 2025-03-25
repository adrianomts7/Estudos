import dotenv from 'dotenv';

import express from 'express';

import home from './src/routes/home';
import user from './src/routes/user';
import token from './src/routes/token';
import aluno from './src/routes/aluno';
import foto from './src/routes/foto';

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
