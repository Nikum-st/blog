import { deleteUser } from './delete-user';
import { loading } from '../app/loading';

export const deletUserAsync = (serverRequest, userId) => async (dispatch) => {
	try {
		dispatch(loading(true));
		const result = await serverRequest('deleteUser', userId);
		dispatch(deleteUser(userId));
		return result;
	} catch (e) {
		console.error(e);
	} finally {
		dispatch(loading(false));
	}
};
