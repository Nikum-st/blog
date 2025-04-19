import { ACTION_TYPE } from '../../../constants';

export const deleteUser = (userId) => {
	return { type: ACTION_TYPE.USERS.DELETE_USER, payload: userId };
};
