import { ACTION_TYPE } from '../../../constants';

export const setPostsAsync = (serverRequest) => async (dispatch) => {
	try {
		const posts = await serverRequest('fetchAllPosts');
		return dispatch({
			type: ACTION_TYPE.POSTS.SET_POSTS,
			payload: posts,
		});
	} catch {}
};
