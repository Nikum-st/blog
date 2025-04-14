import { ACTION_TYPE } from '../../../constants';

const initialStatePosts = [];

export const postsReducer = (state = initialStatePosts, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.POSTS.SET_POSTS:
			return [...state, ...payload];
		case ACTION_TYPE.POSTS.DELETE_POST:
			return state.filter((post) => post.id !== payload);
		default:
			return state;
	}
};
