import { ROLE } from '../../../constants/';
const userCurent = sessionStorage.getItem('user');

export const initialStateUser = JSON.parse(userCurent) || {
	id: null,
	login: null,
	roleId: ROLE.GUEST,
};
