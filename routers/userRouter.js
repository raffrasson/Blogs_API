const express = require('express');
const { userController } = require('../controllers');  
const { userValidation, auth } = require('../middlewares');

const userRouter = express.Router();

userRouter.post('/user', userValidation, userController.create);
userRouter.get('/user', auth, userController.getAll);
userRouter.get('/user/:id', auth, userController.getById);

module.exports = userRouter;