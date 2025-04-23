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
		const hashPassword = await bcrypt.hash(password, 10);

		const newUser = await User.create({ password: hashPassword, login });

		const newToken = token.create({
			id: newUser._id,
			login: newUser.login,
			roleId: newUser.roleId,
		});

		return { user: newUser, token: newToken };
	} catch (e) {
		throw e;
	}
};
