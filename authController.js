const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secreto';

exports.login = (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: 'Nome de usuário obrigatório' });
  }
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
};
