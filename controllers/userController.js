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

const getAll = async (_req, res) => {
  const users = await User.findAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const id = await req.params.id; 
  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = {
  create,
  getAll,
  getById,
};