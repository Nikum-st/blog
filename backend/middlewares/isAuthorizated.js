const token = require('../helpers/token');
const User = require('../models/user');

module.exports = async function (req, res, next) {
	const tokenFromCookie = req.cookies.token;
	if (!tokenFromCookie) {
		return res.status(401).send({ error: 'Пользователь не авторизован' });
	}

	let tokenData;
	try {
		tokenData = await token.verify(tokenFromCookie);
	} catch (err) {
		return res.status(401).send({ error: 'Недействительный или просроченный токен' });
	}

	const user = await User.findOne({ _id: tokenData.id });
	if (!user) {
		return res.status(401).send({ error: 'Пользователь не найден' });
	}

	req.user = user;
	next();
};
