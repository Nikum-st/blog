module.exports = function (user) {
	return {
		login: user.login,
		registredAt: user.createdAt,
		role: user.role,
		id: user._id,
	};
};
