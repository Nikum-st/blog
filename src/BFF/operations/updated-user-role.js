import { ROLE } from '../../constants';
import { sessions } from '../sessions';

export const updateUserRole = async (newRole, userId, sessionHash) => {
	try {
		const accessRoles = [ROLE.ADMIN];

		const access = await sessions.access(sessionHash, accessRoles);

		if (!access) {
			return { error: 'Доступ запрещен', res: null };
		}

		fetch(`http://localhost:3005/users/${userId}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				role_id: newRole,
			}),
		});
		return { error: null, res: true };
	} catch {
		return null;
	}
};
