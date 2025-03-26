"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class AlunoController {
  async index(req, res) {
    const alunos = await _Aluno2.default.find().select('nome email');
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const user = await _Aluno2.default.create(req.body);

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

      const user = await _Aluno2.default.findOne({ email: req.params.email });

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

      const aluno = await _Aluno2.default.findOne({ email: req.params.email });

      if (!aluno) {
        return res.status(401).json({ message: 'Aluno não existe' });
      }

      const alunoApagado = await _Aluno2.default.findOneAndDelete(aluno);

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

      const aluno = await _Aluno2.default.findOne({ email: req.params.email });

      if (!aluno) {
        return res.status(400).json({ message: 'Aluno não existe' });
      }

      const alunoAtualizado = await _Aluno2.default.findByIdAndUpdate(
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

exports. default = new AlunoController();
