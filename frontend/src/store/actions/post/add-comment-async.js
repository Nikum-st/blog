import { request } from '../../../utils/request-server';
import { addNewComment } from './add-comment';

export const addNewCommentAsync = (postId, content) => async (dispatch) => {
	try {
		const { error, data } = await request(
			`/comments/post/${postId}`,
			'POST',
			content,
		);
		if (!error) {
			dispatch(addNewComment(data));
		} else {
			throw new Error(error);
		}
	} catch (e) {
		console.error(`Сбой при добавлении коментария на сервер:`, e);
	}
};
