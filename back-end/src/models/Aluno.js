const mongoose = require('mongoose');

const AlunosSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  email: { type: String, required: true },
  idade: { type: Number, required: true },
  peso: { type: Number, required: true },
  altura: { type: Number, required: true },
  cadastradoEm: { type: Date, required: true, default: Date.now },
});

const Aluno = mongoose.model('Aluno', AlunosSchema);

export default Aluno;
