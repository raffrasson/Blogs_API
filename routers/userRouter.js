const express = require('express');
const { userController } = require('../controllers');  
const userValidation = require('../middlewares/userValidation');

const userRouter = express.Router();

userRouter.post('/user', userValidation, userController.create);

module.exports = userRouter;