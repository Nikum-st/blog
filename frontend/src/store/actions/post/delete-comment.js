import { ACTION_TYPE } from '../../../constants';

export const deleteComment = (id) => ({
	type: ACTION_TYPE.POST.DELETE_COMMENT,
	payload: id,
});
