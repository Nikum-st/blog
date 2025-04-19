import { loading } from '../app/loading';
import { setPost } from './set-post';

export const setPostAsync = (serverRequest, postId) => async (dispatch) => {
	try {
		dispatch(loading(true));

		const post = await serverRequest('fetchPost', postId);

		dispatch(setPost(post));
		return post;
	} catch (e) {
		console.error('Ошибка с запроса на сервер post:', e);
		throw e;
	} finally {
		dispatch(loading(false));
	}
};
