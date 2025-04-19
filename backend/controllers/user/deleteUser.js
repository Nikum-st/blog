const User = require('../../models/User');
module.exports = async (userId) => {
	try {
		const user = await User.findOneAndDelete({ _id: userId });
		if (!user) {
			throw new Error('Удаляемый пользователь не найден');
		}
	} catch (e) {
		throw e;
	}
};
