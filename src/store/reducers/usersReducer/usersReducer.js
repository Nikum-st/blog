import { ACTION_TYPE } from '../../../constants';
// import initialStateUsers from './initialStateUsers';

const initialStateUsers = {};

export const usersReducer = (state = initialStateUsers, action) => {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
};
