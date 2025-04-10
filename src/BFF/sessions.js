import { addSessionToServer, fetchSession, deleteSessionFromServer } from './operations';

export const sessions = {
	async create(user) {
		const hash = Math.random().toFixed(50);

		await addSessionToServer(hash, user);

		return hash;
	},
	async remove(hash) {
		await deleteSessionFromServer(hash);
	},
	async access(hash, accessRoles) {
		const session = await fetchSession(hash);
		if (!hash) {
			return false;
		}
		return !!session.user && accessRoles.includes(session.user.roleId);
	},
};
