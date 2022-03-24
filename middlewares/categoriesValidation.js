const categorySchema = require('../schemas/categorySchema');

module.exports = async (req, _res, next) => {
  try {
    await categorySchema.validate(req.body);
    return next();
  } catch (error) {
    return next(error);
    }
};