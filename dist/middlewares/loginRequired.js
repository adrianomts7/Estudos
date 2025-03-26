"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Precisa Fazer Login' });
  }

  const [, token] = authorization.split(' ');

  if (!token) {
    return res.status(401).json({ message: 'token invalido', Error: 'Formato de Token invalido' });
  }

  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { _id, email } = dados;
    req.user = { _id, email };

    const user = await _Users2.default.findOne({ email: req.user.email });

    console.log(user);

    if (!user) {
      return res.status(401).json({ message: 'Usuario invalido' });
    }

    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: 'Token Invalido' });
  }
};
