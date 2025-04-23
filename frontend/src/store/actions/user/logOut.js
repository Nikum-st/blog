import { ACTION_TYPE } from '../../../constants';
import { request } from '../../../utils/request-server';

export const logOut = () => async (dispatch) => {
	await request('/user/logout', 'POST');

	sessionStorage.removeItem('user');

	dispatch({ type: ACTION_TYPE.USER.LOG_OUT });
};
