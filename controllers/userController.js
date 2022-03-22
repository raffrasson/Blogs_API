const { User } = require('../models');
const jwtGen = require('../helpers/jwtGen');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const repeatedUser = await User.findOne({ where: { displayName } }); // findOne visto no esquenta
  if (repeatedUser) return res.status(409).json({ message: 'User already registered' });
  
  const newUser = await User.create({ displayName, email, password, image });

  const token = jwtGen({ id: newUser.id, displayName });
  return res.status(201).json({ token });
};

module.exports = {
  create,
};