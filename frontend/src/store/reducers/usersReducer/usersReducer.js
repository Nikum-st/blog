import { ACTION_TYPE } from '../../../constants';

const initialStateUsers = [];

export const usersReducer = (state = initialStateUsers, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.USERS.SET_USERS:
			return payload;
		case ACTION_TYPE.USERS.DELETE_USER:
			return state.filter((user) => user.id !== payload);
		default:
			return state;
	}
};
