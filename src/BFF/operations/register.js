import { addUserToServer } from './add-user-to-server';
import { sessions } from '../sessions';
import { fetchUser } from './fetch-user';

export const registration = async (login, password) => {
	const extendedUser = await fetchUser(login);

	if (extendedUser) {
		return {
			error: 'Такой логин уже существует.Придумайте другой',
			res: null,
		};
	}

	const user = await addUserToServer(login, password);

	if (!user) {
		return {
			error: 'Ошибка при создании пользователя на сервер',
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
