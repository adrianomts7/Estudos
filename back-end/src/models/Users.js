const mongoose = require('mongoose');
const validator = require('validator');

const UsersSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'O nome é obrigatorio'],
    minlength: [3, 'O nome deve ter no minimo 3 caracteres'],
  },
  email: {
    type: String,
    required: [true, 'O email é obrigatorio'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Email inválido',
    },
  },
  password: {
    type: String,
    required: [true, 'A senha é obrigatoria'],
    minlength: [3, 'A senha deve ter no minimo 3 caracteres'],
    maxlength: [15, 'A senha deve ter no maximo 15 caracteres'],
  },
  usuarioCriado: { type: Date, required: true, default: Date.now },

});

const Users = mongoose.model('Users', UsersSchema);

export default Users;
