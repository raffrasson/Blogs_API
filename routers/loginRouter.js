const express = require('express');
const { loginController } = require('../controllers');
const loginValidation = require('../middlewares/loginValidation');

const loginRouter = express.Router();
loginRouter.post('/login', loginValidation, loginController.login);

module.exports = loginRouter;