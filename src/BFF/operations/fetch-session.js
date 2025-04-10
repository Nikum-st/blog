import { getData } from '../api/get-dates';

export const fetchSession = async (hash) => {
	try {
		const sessions = await getData(`sessions`);

		const session = await sessions.find((s) => s.hash === hash);

		if (!session) {
			return null;
		}
		return session;
	} catch (error) {
		return error;
	}
};
