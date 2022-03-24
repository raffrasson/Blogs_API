const { Category } = require('../models');

const create = async (req, res) => {
  const { name } = req.body;

  const repeatedCategory = await Category.findOne({ where: { name } }); // findOne visto no esquenta
  if (repeatedCategory) return res.status(409).json({ message: 'Category already registered' });
  
  const newCategory = await Category.create({ name });

  return res.status(201).json(newCategory);
};

const getAll = async (_req, res) => {
  const Categorys = await Category.findAll();
  return res.status(200).json(Categorys);
};

const getById = async (req, res) => {
  const id = await req.params.id; 
  const category = await Category.findByPk(id);
  if (!category) return res.status(404).json({ message: 'Category does not exist' });
  return res.status(200).json(category);
};

module.exports = {
  create,
  getAll,
  getById,
};