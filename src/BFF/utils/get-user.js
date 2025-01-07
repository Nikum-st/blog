import { getData } from './get-dates';

export const getUser = async (loginToFind) => {
	const users = await getData('users');

	return users.find(({ login }) => login === loginToFind);
};
