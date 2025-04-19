import { ACTION_TYPE } from '../../../constants';

export const addNewComment = (comment) => ({
	type: ACTION_TYPE.POST.ADD_COMMENT,
	payload: comment,
});
