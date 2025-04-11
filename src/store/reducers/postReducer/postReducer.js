import { ACTION_TYPE } from '../../../constants';

const initialStatePost = {};

export const postReducer = (state = initialStatePost, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.POST.SET_POST:
			return {
				...state,
				...payload,
			};
		case ACTION_TYPE.POST.ADD_COMMENT:
			return {
				...state,
				...state.comments.push(payload),
			};
		case ACTION_TYPE.POST.DELETE_COMMENT:
			return {
				...state,
				comments: state.comments.filter((com) => com.id !== payload),
			};
		default:
			return state;
	}
};
