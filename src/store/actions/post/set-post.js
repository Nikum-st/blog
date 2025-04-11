import { ACTION_TYPE } from '../../../constants';

export const setPost = (post) => ({
	type: ACTION_TYPE.POST.SET_POST,
	payload: post,
});
