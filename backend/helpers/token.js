const TOKEN_SECRET = process.env.TOKEN_SECRET;
const jwt = require('jsonwebtoken');

module.exports = {
	create: (id) => jwt.sign(id, TOKEN_SECRET, { expiresIn: '5d' }),
	verify: (id) => jwt.verify(id, TOKEN_SECRET),
};
