import { ACTION_TYPE } from '../../../constants';

export const loading = (ToF) => ({ type: ACTION_TYPE.APP.LOADING, payload: ToF });
