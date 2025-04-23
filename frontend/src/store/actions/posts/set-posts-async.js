import { setPosts } from './set-posts';

export const setPostsAsync =
	(serverRequest, search, page, PAGINATION_LIMIT) => async (dispatch) => {
		try {
			const { posts, lastPage } = await serverRequest(
				'fetchAllPosts',
				search,
				page,
				PAGINATION_LIMIT,
			);
			dispatch(setPosts(posts));
			return lastPage;
		} catch (e) {
			console.error(e);
		}
	};
