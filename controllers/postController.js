const { BlogPost, Category, User } = require('../models');
  
const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.tokenData;
  
  const newBlogPost = await BlogPost.create({ 
  title, content, userId: id, categoryIds, published: new Date(), updated: new Date() });
  
  const idCheck = async (idArray) => {
    const arrayCategories = [];
    for (let i = 0; i < idArray.length; i += 1) {
      const categoryId = Category.findAll({ where: { id: idArray[i] } });
      arrayCategories.push(categoryId);
    }
      return Promise.all(arrayCategories);
    };

  const compareCategory = await idCheck(categoryIds);
  if (!compareCategory.every((element) => 
    element.length > 0)) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  return res.status(201).json(newBlogPost);
};

const getAll = async (_req, res) => {
  const BlogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return res.status(200).json(BlogPosts);
};

const getById = async (req, res) => {
  const id = await req.params.id; 
  const post = await BlogPost.findByPk(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(BlogPost);
};

module.exports = {
  create,
  getAll,
  getById,
};