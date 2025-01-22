import { addUserToServer, getUser } from './utils';
import { sessions } from './utils/sessions';

export const server = {
	async logOut(session) {
		sessions.remove(session);
	},
	async authorization(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Такого пользователя не существует',
				res: null,
			};
		}

		if (user.password !== authPassword) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
	async registration(regLogin, regPassword) {
		const extendedUser = await getUser(regLogin);

		if (extendedUser) {
			return {
				error: 'Такой логин уже существует.Придумайте другой',
				res: null,
			};
		}

		const user = await addUserToServer(regLogin, regPassword);

		console.log(user);

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};
