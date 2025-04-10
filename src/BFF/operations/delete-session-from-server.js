import { fetchSession } from './fetch-session';

export const deleteSessionFromServer = async (hash) => {
	const session = await fetchSession(hash);
	if (!session) {
		return;
	}
	fetch(`http://localhost:3005/sessions/${session.id}`, {
		method: 'DELETE',
	});
};
