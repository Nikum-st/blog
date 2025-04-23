import { ACTION_TYPE, ROLE } from '../../../constants';
import { initialStateUser } from './initialStateUser';

export const userReducer = (state = initialStateUser, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.USER.SET_USER:
			return {
				...state,
				...payload,
			};
		case ACTION_TYPE.USER.LOG_OUT:
			return { id: null, login: null, roleId: ROLE.GUEST, session: null };
		default:
			return state;
	}
};
