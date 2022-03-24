const express = require('express');
const { create } = require('../controllers/categoriesController');  
const { categoriesValidation, auth } = require('../middlewares');

const categoriesRouter = express.Router();

categoriesRouter.post('/categories', auth, categoriesValidation, create);
// categoriesRouter.get('/categories', auth, categoriesController.getAll);
// categoriesRouter.get('/categories/:id', auth, categoriesController.getById);

module.exports = categoriesRouter;