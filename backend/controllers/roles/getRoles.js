const ROLE = require('../../constants/role');

module.exports = () => {
	return [
		{
			id: ROLE.ADMIN,
			name: 'Администратор',
		},
		{
			id: ROLE.MODERATOR,
			name: 'Модератор',
		},
		{
			id: ROLE.READER,
			name: 'Читатель',
		},
	];
};
