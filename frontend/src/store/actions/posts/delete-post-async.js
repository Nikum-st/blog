import { request } from '../../../utils/request-server';
import { deletePost } from './delete-post';

export const deletePostAsync = (id) => async (dispatch) => {
	try {
		const { error } = await request(`/posts/${id}`, 'DELETE');
		if (!error) {
			console.error(error);
		} else {
			await dispatch(deletePost(id));
		}
	} catch (e) {
		console.error(e);
	}
};
