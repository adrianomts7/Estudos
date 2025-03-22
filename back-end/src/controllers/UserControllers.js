import User from '../models/Users';

class UsersController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(500).json({ message: 'Erro ao cadastrar usuário', Error: e.message });
      console.log(e);
    }
  }
}

export default new UsersController();
