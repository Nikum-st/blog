export const addSessionToServer = (hash, user) =>
	fetch(`http://localhost:3005/sessions`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			hash,
			user,
		}),
	}).then((createdSession) => createdSession.json());
