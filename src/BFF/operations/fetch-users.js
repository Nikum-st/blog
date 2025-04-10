import { ROLE } from '../../constants';
import { getData } from '../api/get-dates';
import { sessions } from '../sessions';

export const fetchUsers = async (sessionHash) => {
	try {
		const accessRoles = [ROLE.ADMIN];

		const access = await sessions.access(sessionHash, accessRoles);

		if (!access) {
			return { error: 'Доступ запрещен', res: null };
		}
		const users = await getData('users');
		if (!users) {
			return { error: 'Проблема с получением пользователей с сервера', res: null };
		}
		return {
			error: null,
			res: users.map((user) => ({
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				registredAt: user.registred_at,
			})),
		};
	} catch {
		return null;
	}
};
