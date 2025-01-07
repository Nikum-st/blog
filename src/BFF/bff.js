import { createSession } from './session';
import { addUserToServer, getUser } from './utils';
import { ROLE } from '../constants/role';

export const server = {
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
			res: createSession(user.role_id),
		};
	},
	async registration(regLogin, regPassword) {
		const user = await getUser(regLogin);

		if (user) {
			return {
				error: 'Такой логин уже существует.Придумайте другой',
				res: null,
			};
		}

		await addUserToServer(regLogin, regPassword);

		return {
			error: null,
			res: createSession(ROLE.READER),
		};
	},
};
