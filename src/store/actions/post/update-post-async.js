import { updatePost } from './update-post';

export const savePostAsync = (serverRequest, postId, editData) => async (dispatch) => {
	try {
		const { error, res } = await serverRequest('savePost', postId, editData);
		if (res) {
			dispatch(updatePost(res));
		}
		if (error) {
			console.error(error);
		}
		return res;
	} catch (e) {
		console.error(`Сбой при изменении поста на сервер:`, e);
	}
};
