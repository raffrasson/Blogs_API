const loginSchema = require('../schemas/loginSchema');

module.exports = async (req, _res, next) => {
  try {
    await loginSchema.validateAsync(req.body);
    return next();
  } catch (error) {
    return next(error);
    }
};