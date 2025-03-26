"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class TokenControllers {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({ message: 'Email e password invalidos', Error: 'Email e password invalidos' });
    }

    const user = await _Users2.default.findOne({ email: req.body.email });

    console.log(user);

    if (!user) {
      return res.status(400).json({ message: 'Usuario não encontrado', Error: 'Usuario não encontrado' });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: 'Senha invalida', Error: 'Senha invalida' });
    }

    const { _id: id } = user;
    const token = _jsonwebtoken2.default.sign(
      { id, email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION },
    );

    return res.json({ token });
  }
}

exports. default = new TokenControllers();
