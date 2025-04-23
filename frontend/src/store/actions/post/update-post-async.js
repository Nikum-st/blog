import { request } from '../../../utils/request-server';
import { updatePost } from './update-post';

export const savePostAsync = (postId, newdata) => async (dispatch) => {
	try {
		let result = { error: null, data: {} };
		if (postId) {
			result = await request(`/posts/${postId}`, 'PATCH', newdata);
		} else {
			result = await request(`/posts`, 'POST', newdata);
		}

		if (!result.error) {
			dispatch(updatePost(result.data));
			return result.data;
		} else {
			console.error(result.error);
			throw result.error;
		}
	} catch (e) {
		console.error(`Сбой при изменении поста на сервер:`, e);
		throw new Error(`Нет связи с сервером. Попробуйте позже`);
	}
};
