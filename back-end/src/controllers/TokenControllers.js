import jwt from 'jsonwebtoken';
import User from '../models/Users';

class TokenControllers {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({ message: 'Email e password invalidos', Error: 'Email e password invalidos' });
    }

    const user = await User.findOne({ email: req.body.email });

    console.log(user);

    if (!user) {
      return res.status(400).json({ message: 'Usuario não encontrado', Error: 'Usuario não encontrado' });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: 'Senha invalida', Error: 'Senha invalida' });
    }

    const { _id: id } = user;
    const token = jwt.sign(
      { id, email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION },
    );

    return res.json({ token });
  }
}

export default new TokenControllers();
