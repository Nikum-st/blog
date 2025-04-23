import { ROLE } from '../../constants';
import { sessions } from '../sessions';

export const deletePost = async (postId, sessionHash) => {
	try {
		const accessRoles = [ROLE.ADMIN];

		const access = await sessions.access(sessionHash, accessRoles);

		if (!access || !sessionHash) {
			throw new Error('Доступ запрещен');
		}
		await fetch(`http://localhost:3005/posts/${postId}`, {
			method: 'DELETE',
		});
	} catch (e) {
		console.error(e);
	}
};
