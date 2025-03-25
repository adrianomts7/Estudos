const mongoose = require('mongoose');
const validator = require('validator');

const AlunosSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'O nome é um campo obrigatorio'],
    minlength: [3, 'O nome deve ter no minimo 3 caracteres'],
  },
  sobrenome: {
    type: String,
    required: [true, 'O sobrenome é um campo obrigatorio'],
    minlength: [4, 'O sobrenome deve conter no minimo 4 caracterees'],
  },
  email: {
    type: String,
    required: [true, 'O e-mail é obrigatorio'],
    unique: [true, 'E-mail já cadastrado'],
    validate: {
      validator: validator.isEmail,
      message: 'Email invalido',
    },
  },
  idade: {
    type: Number,
    required: [true, 'A idade é obrigatoria'],
    min: [5, 'A idade minima é 5 Anos'],
  },
  peso: {
    type: Number,
    required: [true, 'O peso é um campo obrigatorio'],
    min: [30, 'O peso deve maior que 0'],
  },
  altura: {
    type: Number,
    required: [true, 'Altira é um campo obrigatorio'],
    min: [1, 'Altura deve maior que 0'],
  },
  cadastradoEm: { type: Date, required: true, default: Date.now },
});

const Aluno = mongoose.model('Aluno', AlunosSchema);

export default Aluno;
