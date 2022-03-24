const categorySchema = require('../schemas/categorySchema');

module.exports = async (req, _res, next) => {
  try {
    await categorySchema.validateAsync(req.body);
    return next();
  } catch (error) {
    return next(error);
    }
};