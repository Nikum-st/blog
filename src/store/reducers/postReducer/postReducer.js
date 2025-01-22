// import initialStatePost from './initialStatePost';

const initialStatePost = {};

export const postReducer = (state = initialStatePost, action) => {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
};
