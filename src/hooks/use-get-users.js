import { useEffect } from 'react';
import { getUsers } from '../BFF/utils';
import { useDispatch } from 'react-redux';
import { setUsers } from '../store';

export const useGetUsers = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getUsers();
			if (!users) {
				console.error('Пользователи не найдены или произошла ошибка.');
				return;
			}
			dispatch(setUsers(users));
		};
		fetchUsers();
	}, []);
};
