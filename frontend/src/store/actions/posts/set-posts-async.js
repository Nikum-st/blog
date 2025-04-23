import { request } from '../../../utils/request-server';
import { loading } from '../app/loading';
import { setPosts } from './set-posts';

export const setPostsAsync = (searchValue, page, limit) => async (dispatch) => {
	try {
		dispatch(loading(true));
		const { error, data } = await request(
			`/posts?limit=${limit}&search=${searchValue}&page=${page}`,
		);

		if (error) {
			console.error(error);
			throw error;
		}

		dispatch(setPosts(data.posts));
		return data.lastPage;
	} catch (e) {
		console.error(e);
		throw e;
	} finally {
		dispatch(loading(false));
	}
};
