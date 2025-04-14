import { ACTION_TYPE } from '../../../constants';

export const deletePost = (id) => ({ type: ACTION_TYPE.POSTS.DELETE_POST, payload: id });
