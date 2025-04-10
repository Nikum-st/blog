import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const deleteUser = async (userId, sessionHash) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(sessionHash, accessRoles);

	if (!access || !sessionHash) {
		return { error: 'Доступ запрещен', res: null };
	}
	fetch(`http://localhost:3005/users/${userId}`, {
		method: 'DELETE',
	});
	return { error: null, res: true };
};
