import User from '../models/Users';

class UsersController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { nome, email } = novoUser;
      return res.json({ nome, email });
    } catch (e) {
      return res.status(500).json({ message: 'Erro ao cadastrar usuário', Error: e.message });
    }
  }

  async index(req, res) {
    try {
      const users = await User.find().select('id nome email  password');
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findOne({ email: req.params.email });
      const { _id, nome, email } = user;
      return res.json({ _id, nome, email });
    } catch (e) {
      return res.status(400).json({ message: 'Erro ao procurar usuario', Error: e.message });
    }
  }

  async update(req, res) {
    try {
      if (!req.user.email) {
        return res.status(400).res.json({ message: 'Erro ao tentar atualizar usuario', Error: 'E-mail não informado' });
      }

      const user = await User.findOne({ email: req.user.email });
      const { nome, email } = user;

      if (!user) {
        res.status(400).json({ message: 'Usuario não cadastrado', Error: 'Usuario não cadastrado' });
      }

      const dadosAtualizados = await User.findOneAndUpdate(
        user,
        req.body,
        { new: true },
      );

      return res.json({ nome, email });
    } catch (e) {
      return res.status(400).json({ message: 'Erro ao atualizar o usuario', Error: e.message });
    }
  }

  async delete(req, res) {
    try {
      if (!req.user.email) {
        return res.status(400).json({ message: 'E-mail invalido' });
      }

      const user = await User.findOne({ email: req.user.email });

      if (!user) {
        return res.status(401).json({ message: 'Usuario não encontrado' });
      }

      const usuarioDeletado = await User.findOneAndDelete(user);

      return res.json('Usuario deletado: ', usuarioDeletado);
    } catch (e) {
      return res.status(400).json({ message: 'Erro ao deletar usuario' });
    }
  }
}

export default new UsersController();
