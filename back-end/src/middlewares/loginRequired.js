import jwt from 'jsonwebtoken';
import User from '../models/Users';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Precisa Fazer Login' });
  }

  const [, token] = authorization.split(' ');

  if (!token) {
    return res.status(401).json({ message: 'token invalido', Error: 'Formato de Token invalido' });
  }

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { _id, email } = dados;
    req.user = { _id, email };

    const user = await User.findOne({ email: req.user.email });

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
