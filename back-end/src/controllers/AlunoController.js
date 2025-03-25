import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.find().select('nome email');
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const user = await Aluno.create(req.body);

      return res.json(user);
    } catch (e) {
      return res.status(400).json({ message: 'Erro ao cadastrar aluno', Error: e.message });
    }
  }

  async show(req, res) {
    try {
      const { email } = req.params;

      if (!email) {
        return res.status(401).json({ message: 'E-mail invalido' });
      }

      const user = await Aluno.findOne({ email: req.params.email });

      if (!user) {
        return res.status(401).json({ message: 'Usuario não existe' });
      }

      return res.json(user);
    } catch (e) {
      return res.status(401).json({ message: 'Erro ao encontrar aluno' });
    }
  }

  async delete(req, res) {
    try {
      const { email } = req.params;

      if (!email) {
        return res.status(401).json({ message: 'E-mail invalido' });
      }

      const aluno = await Aluno.findOne({ email: req.params.email });

      if (!aluno) {
        return res.status(401).json({ message: 'Aluno não existe' });
      }

      const alunoApagado = await Aluno.findOneAndDelete(aluno);

      return res.json(alunoApagado);
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: 'Erro ao deletar usuario' });
    }
  }

  async update(req, res) {
    try {
      const { email } = req.params;

      if (!email) {
        return res.status(400).json({ message: 'E-mail invalido' });
      }

      const aluno = await Aluno.findOne({ email: req.params.email });

      if (!aluno) {
        return res.status(400).json({ message: 'Aluno não existe' });
      }

      const alunoAtualizado = await Aluno.findByIdAndUpdate(
        aluno,
        req.body,
        { new: true },
      );

      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({ message: 'Erro ao atualizar usuario' });
    }
  }
}

export default new AlunoController();
