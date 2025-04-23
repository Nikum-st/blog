const moment = require('moment');

module.exports = function (user) {
	return {
		login: user.login,
		registredAt: moment(new Date(user.createdAt)).format('L, HH:mm'),
		roleId: user.roleId,
		id: user._id,
	};
};
