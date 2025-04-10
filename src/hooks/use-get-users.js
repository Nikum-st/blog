import { useEffect } from 'react';
import { fetchUsers } from '../BFF/operations';
import { useDispatch } from 'react-redux';
import { setUsers } from '../store';

export const useGetUsers = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getUsers = async () => {
			const users = await fetchUsers();
			if (!users) {
				console.error('Пользователи не найдены или произошла ошибка.');
				return;
			}
			dispatch(setUsers(users));
		};
		getUsers();
	}, [dispatch]);
};
