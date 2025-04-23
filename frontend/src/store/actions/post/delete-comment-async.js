import { request } from '../../../utils/request-server';
import { deleteComment } from './delete-comment';

export const deleteCommentAsync = (id, postId) => async (dispatch) => {
	try {
		const result = await request(`/comments/${id}/post/${postId}`, 'DELETE');

		if (result.error) {
			console.error(`Сбой при удалении коментария на сервер:`, result.error);
		} else {
			dispatch(deleteComment(id));
		}
	} catch (e) {
		console.error(`Сбой при удалении коментария на сервер:`, e.message);
	}
};
