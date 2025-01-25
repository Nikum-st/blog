import { ACTION_TYPE } from '../../../constants';

const initialStateRoles = {};

export const rolesReducer = (state = initialStateRoles, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.ROLES.SET_ROLES:
			return payload;
		default:
			return state;
	}
};
