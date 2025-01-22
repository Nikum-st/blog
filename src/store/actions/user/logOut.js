import { server } from '../../../BFF/server';
import { ACTION_TYPE } from '../../../constants';

export const logOut = (session) => {
	server.logOut(session);

	return { type: ACTION_TYPE.USER.LOG_OUT };
};
