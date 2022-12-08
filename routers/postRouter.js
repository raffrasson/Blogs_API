const express = require('express');
const { create, getAll, getById } = require('../controllers/postController');  
const { postValidation, auth } = require('../middlewares');

const postRouter = express.Router();

postRouter.post('/post', auth, postValidation, create);
postRouter.get('/post', getAll);
postRouter.get('/post/:id', auth, getById);
postRouter.put('/post/:id', auth, getById);

module.exports = postRouter;