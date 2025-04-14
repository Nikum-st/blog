import { ACTION_TYPE } from '../../../constants';

export const modalOpen = (confirm) => ({
	type: ACTION_TYPE.APP.OPEN_MODAL,
	payload: confirm,
});
