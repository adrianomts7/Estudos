import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Adriano',
      sobrenome: 'Mateus',
      email: 'adriano@gmail.com',
      idade: 20,
      peso: 60,
      altura: 2.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
