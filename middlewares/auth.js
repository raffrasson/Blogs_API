const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.header.authorization; 

  if (!token) return res.status(401).json({ error: 'Token not found' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.tokenData = decoded.data;

    next();
  } catch (error) {
    if (error.name.includes('Token')) {
    return res.status(401).json({ error: 'Token expired or invalid' });
    }

    next(error);
  }
};