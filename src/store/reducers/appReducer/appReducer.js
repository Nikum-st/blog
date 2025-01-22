import { ACTION_TYPE } from '../../../constants';
import { initialStateApp } from './inititalStateApp';

export const appReducer = (state = initialStateApp, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.USER.LOG_OUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			};

		default:
			return state;
	}
};
