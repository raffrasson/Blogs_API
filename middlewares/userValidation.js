const userSchema = require('../schemas/userSchema');

module.exports = async (req, _res, next) => {
  try {
    await userSchema.validate(req.body);
    return next();
  } catch (error) {
    return next(error);
    }
};