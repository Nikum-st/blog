// import initialStatePosts from './initialStatePosts';

const initialStatePosts = {};

export const postsReducer = (state = initialStatePosts, action) => {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
};
