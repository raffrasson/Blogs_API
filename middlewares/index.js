const errorHandler = require('./errorHandler');
const auth = require('./auth');
const userValidation = require('./userValidation');
const categoriesValidation = require('./categoriesValidation');
const postValidation = require('./postValidation');

module.exports = {
  errorHandler,
  auth,
  userValidation,
  categoriesValidation,
  postValidation,
};