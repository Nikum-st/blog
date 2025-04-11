import { addNewComment } from './add-comment';

export const addNewCommentAsync =
	(serverRequest, postId, userId, content) => async (dispatch) => {
		try {
			const result = await serverRequest('addComment', postId, userId, content);
			if (result.res) {
				dispatch(addNewComment(result.res));
			}
			return result;
		} catch (e) {
			console.error(`Сбой при добавлении коментария на сервер:`, e);
		}
	};
