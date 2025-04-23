import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const deleteComment = async (id, sessionHash) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

	const access = await sessions.access(sessionHash, accessRoles);

	if (!access || !sessionHash) {
		throw new Error('Доступ запрещен');
	}
	await fetch(`http://localhost:3005/comments/${id}`, {
		method: 'DELETE',
	});
};
