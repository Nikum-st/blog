import { generateDate } from '../utils/generate-date';
import { ROLE } from '../../constants/role';

export const addUserToServer = (login, password) =>
	fetch(`http://localhost:3005/users`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			login,
			password,
			role_id: ROLE.READER,
			registred_at: generateDate,
		}),
	}).then((createdUser) => createdUser.json());
