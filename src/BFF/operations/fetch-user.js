import { getData } from '../api/get-dates';

export const fetchUser = async (loginToFind) => {
	try {
		const users = await getData('users');
		if (!users) {
			return null;
		}
		return users.find(({ login }) => login === loginToFind);
	} catch (error) {
		return error;
	}
};
