import { server } from '../../../BFF/index';
import { ACTION_TYPE } from '../../../constants';

export const logOut = (sessionHash) => async (dispatch) => {
	await server.logOut(sessionHash);
	sessionStorage.removeItem('user');

	dispatch({ type: ACTION_TYPE.USER.LOG_OUT });

	return { type: ACTION_TYPE.USER.LOG_OUT };
};
