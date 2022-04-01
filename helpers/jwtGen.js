const jwt = require('jsonwebtoken');
 
const jwtConfig = {
  expiresIn: '1d',
};

const SECRET = process.env.JWT_SECRET || 'senha'; 

module.exports = (id, email) => jwt.sign({ data: id, email }, SECRET, jwtConfig);