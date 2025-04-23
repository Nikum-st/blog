import { request } from '../../../utils/request-server';
import { loading } from '../app/loading';
import { setPost } from './set-post';

export const setPostAsync = (postId) => async (dispatch) => {
	try {
		dispatch(loading(true));

		const { error, data } = await request(`/posts/${postId}`);

		if (!error) {
			dispatch(setPost(data));
		} else {
			console.error(error);
			throw new Error(error);
		}
	} catch (e) {
		console.error('Ошибка с запроса на сервер post:', e.message);
		throw e;
	} finally {
		dispatch(loading(false));
	}
};
