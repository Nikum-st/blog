import { ROLE } from '../../../constants';
import { removeComment } from './remove-comment';

export const createSession = (roleId) => {
	const session = {
		logOut() {
			return Object.keys(session).forEach((key) => delete session[key]);
		},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment();
			break;
		}
		case ROLE.MODERATOR: {
			session.removeComment = removeComment();
			break;
		}
		case ROLE.READER: {
			break;
		}
		default:
	}

	return session;
};
