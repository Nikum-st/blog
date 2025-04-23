import { deleteUser } from './delete-user';
import { loading } from '../app/loading';
import { request } from '../../../utils/request-server';

export const deletUserAsync = (userId) => async (dispatch) => {
	try {
		dispatch(loading(true));
		const result = await request(`/admin/users/${userId}`, 'DELETE');
		dispatch(deleteUser(userId));
		return result;
	} catch (e) {
		console.error(e);
	} finally {
		dispatch(loading(false));
	}
};
