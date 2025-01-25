import { ACTION_TYPE } from '../../../constants';

export const setRoles = (roles) => ({
	type: ACTION_TYPE.ROLES.SET_ROLES,
	payload: roles,
});
