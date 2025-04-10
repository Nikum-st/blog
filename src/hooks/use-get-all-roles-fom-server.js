import { useEffect } from 'react';
import { fetchRolesFromServer } from '../BFF/operations';
import { useDispatch } from 'react-redux';
import { setRoles } from '../store';

export const useGetRolesFromServer = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchRoles = async () => {
			const roles = await fetchRolesFromServer();
			if (!roles) {
				console.error('Роли не найдены или произошла ошибка.');
				return;
			}
			dispatch(setRoles(roles));
		};
		fetchRoles();
	}, []);
};
