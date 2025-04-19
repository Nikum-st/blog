const ROLE = require('../constants/role');

module.exports = async function (req, res, next) {
	const role = req.user.role;

	if (!role && !!role) {
		return res.status(401).send({ error: 'Пользователь не авторизован' });
	}

	if (role !== ROLE.ADMIN) {
		return res.status(403).send({ error: 'Доступ запрещен' });
	}

	next();
};
