const User = require('../../models/User');

module.exports = async function () {
	try {
		return await User.find();
	} catch (e) {
		throw e;
	}
};
