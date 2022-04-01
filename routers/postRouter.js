const express = require('express');
const { create, getAll } = require('../controllers/postController');  
const { postValidation, auth } = require('../middlewares');

const postRouter = express.Router();

postRouter.post('/post', auth, postValidation, create);
postRouter.get('/post', auth, postValidation, getAll);
// postRouter.get('/post/:id', auth, postController.getById);

module.exports = postRouter;