import { ACTION_TYPE } from '../../../constants';

export const setUser = (user) => ({
	type: ACTION_TYPE.USER.SET_USER,
	payload: user,
});
