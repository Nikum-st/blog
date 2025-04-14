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
		case ACTION_TYPE.APP.LOADING:
			return {
				...state,
				loading: payload,
			};
		case ACTION_TYPE.APP.OPEN_MODAL:
			return {
				...state,
				modal: {
					isOpen: true,
					text: payload.text,
					onConfirm: payload.onConfirm,
				},
			};
		case ACTION_TYPE.APP.CLOSE_MODAL:
			return initialStateApp;
		default:
			return state;
	}
};
