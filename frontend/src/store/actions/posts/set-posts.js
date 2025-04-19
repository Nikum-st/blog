import { ACTION_TYPE } from '../../../constants';

export const setPosts = (posts) => ({
	type: ACTION_TYPE.POSTS.SET_POSTS,
	payload: posts,
});
