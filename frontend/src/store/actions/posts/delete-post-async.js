import { deletePost } from './delete-post';

export const deletePostAsync = (serverRequest, id) => async (dispatch) => {
	try {
		await serverRequest('deletePost', id);
		return dispatch(deletePost(id));
	} catch (e) {
		console.error(e);
	}
};
