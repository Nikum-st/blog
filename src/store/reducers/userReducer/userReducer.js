import { ACTION_TYPE } from '../../../constants';
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
			return {
				...initialStateUser,
			};
		default:
			return state;
	}
};
