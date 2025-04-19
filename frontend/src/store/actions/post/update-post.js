import { ACTION_TYPE } from '../../../constants';

export const updatePost = (updatedPost) => ({
	type: ACTION_TYPE.POST.UPDATE,
	payload: updatedPost,
});
