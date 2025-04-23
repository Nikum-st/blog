import { getData } from '../api/get-dates';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const fetchRolesFromServer = async (sessionHash) => {
	try {
		const accessRoles = [ROLE.ADMIN];

		const access = await sessions.access(sessionHash, accessRoles);

		if (!access || !sessionHash) {
			return { error: 'Доступ запрещен', res: null };
		}
		const roles = await getData('roles');

		return { error: null, res: roles };
	} catch {
		return null;
	}
};
