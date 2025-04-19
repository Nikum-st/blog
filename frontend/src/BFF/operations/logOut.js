import { sessions } from '../sessions';

export const logOut = async (sessionHash) => {
	await sessions.remove(sessionHash);
};
