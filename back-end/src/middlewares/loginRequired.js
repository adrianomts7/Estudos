import jwt from 'jsonwebtoken';

export default (req, res, next) => {
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
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({ message: 'Token Invalido' });
  }
};
