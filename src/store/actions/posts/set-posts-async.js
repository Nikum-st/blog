import { setPosts } from './set-posts';

export const setPostsAsync =
	(serverRequest, page, PAGINATION_LIMIT) => async (dispatch) => {
		try {
			const { posts, lastPage } = await serverRequest(
				'fetchAllPosts',
				page,
				PAGINATION_LIMIT,
			);
			dispatch(setPosts(posts));
			return lastPage;
		} catch (e) {
			console.error(e);
		}
	};
