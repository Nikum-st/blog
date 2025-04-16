import { ACTION_TYPE } from '../../../constants';

export const setPostsAsync =
	(serverRequest, page, PAGINATION_LIMIT) => async (dispatch) => {
		try {
			const { posts, lastPage } = await serverRequest(
				'fetchAllPosts',
				page,
				PAGINATION_LIMIT,
			);
			dispatch({
				type: ACTION_TYPE.POSTS.SET_POSTS,
				payload: posts,
			});
			return lastPage;
		} catch (e) {
			console.error(e);
		}
	};
