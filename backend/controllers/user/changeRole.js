const User = require('../../models/User');

module.exports = async (userId, newRole) => {
	try {
		const user = await User.findByIdAndUpdate(
			userId,
			{ roleId: newRole },
			{
				returnDocument: 'after',
			},
		);
		if (!user) {
			throw new Error('Изменяемый пользователь не найден');
		}

		return user;
	} catch (e) {
		throw e;
	}
};
