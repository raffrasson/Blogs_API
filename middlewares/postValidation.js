const postSchema = require('../schemas/postSchema');

module.exports = async (req, _res, next) => {
  try {
    await postSchema.validate(req.body);
    return next();
  } catch (error) {
    return next(error);
    }
};