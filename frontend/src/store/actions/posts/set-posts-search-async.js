import { setPosts } from './set-posts';

export const setPostsSearchAsync = (serverRequest, searchValue) => async (dispatch) => {
	try {
		const postsSearched = await serverRequest('fetchSearch', searchValue);
		dispatch(setPosts(postsSearched));
	} catch (e) {
		console.error(e);
	}
};
