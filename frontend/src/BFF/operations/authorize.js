import { sessions } from '../sessions';
import { fetchUser } from './fetch-user';

export const authorization = async (login, password) => {
	const user = await fetchUser(login);

	if (!user) {
		return {
			error: 'Такого пользователя не существует',
			res: null,
		};
	}

	if (user.password !== password) {
		return {
			error: 'Неверный пароль',
			res: null,
		};
	}
	const session = await sessions.create({
		id: user.id,
		login: user.login,
		roleId: user.role_id,
	});

	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			roleId: user.role_id,
			session,
		},
	};
};
