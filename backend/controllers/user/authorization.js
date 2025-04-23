const User = require('../../models/user');
const bcrypt = require('bcrypt');
const token = require('../../helpers/token');

module.exports = async (login, password) => {
	try {
		if (!login) {
			throw new Error('Логин обязателен');
		}
		if (!password) {
			throw new Error('Пароль обязателен');
		}

		const user = await User.findOne({ login });

		if (!user) {
			throw new Error('Пользователь не найден');
		}

		const hashPassword = await bcrypt.compare(password, user.password);

		if (!hashPassword) {
			throw new Error('Пароль неверный');
		}

		const newToken = token.create({
			id: user._id,
			login: user.login,
			roleId: user.roleId,
		});

		return { user, token: newToken };
	} catch (e) {
		throw e;
	}
};
