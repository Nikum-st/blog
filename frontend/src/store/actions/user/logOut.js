import { ACTION_TYPE } from '../../../constants';
import { request } from '../../../utils/request-server';

export const logOut = () => async (dispatch) => {
	try {
		await request('/user/logout', 'POST');
	} catch (e) {
		console.error(e);
	}

	sessionStorage.removeItem('user');

	dispatch({ type: ACTION_TYPE.USER.LOG_OUT });
};
