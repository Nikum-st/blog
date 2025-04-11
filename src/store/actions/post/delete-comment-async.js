import { deleteComment } from './delete-comment';

export const deleteCommentAsync = (serverRequest, id) => async (dispatch) => {
	try {
		await serverRequest('deleteComment', id);

		dispatch(deleteComment(id));
	} catch (e) {
		console.error(`Сбой при добавлении коментария на сервер:`, e);
	}
};
