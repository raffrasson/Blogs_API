const { User } = require('../models');
const jwtGen = require('../helpers/jwtGen');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  const token = jwtGen({ email, password });
  return res.status(200).json({ token });
};

module.exports = { login };