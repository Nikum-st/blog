import { ErrorMessage, H2, Wrapper } from '../../../../components';
import styled from 'styled-components';
import { TableHeader } from './components/TableHeader';
import { UserRaw } from './components/UserRaw';
import { useEffect, useState } from 'react';
import { loading, selectIdUser, selectUsers, setUsers } from '../../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useRequestServer } from '../../../../../hooks/use-request-server';
import { useNavigate } from 'react-router-dom';
import { ROLE } from '../../../../../constants';
import { request } from '../../../../../utils/request-server';

export const UsersContainer = ({ className }) => {
	const [roles, setRoles] = useState([]);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const serverRequest = useRequestServer();
	const navigate = useNavigate();
	const users = useSelector(selectUsers);
	const userId = useSelector(selectIdUser);

	useEffect(() => {
		const getRoles = async () => {
			try {
				dispatch(loading(true));
				const [userResult, rolesResult] = await Promise.all([
					request('/admin/users'),
					request('/admin/roles'),
				]);
				if (userResult?.error || rolesResult?.error) {
					setError(userResult.error || rolesResult.error);
					setTimeout(() => {
						navigate('/');
					}, 1500);
				}
				setRoles(rolesResult?.data);
				dispatch(setUsers(userResult?.data));
			} catch (e) {
				console.error(e);
			} finally {
				dispatch(loading(false));
			}
		};
		getRoles();
	}, [dispatch, serverRequest, navigate]);

	return (
		<Wrapper error={error} access={[ROLE.ADMIN]}>
			<div className={className}>
				<H2>Пользователи</H2>
				<TableHeader />
				{!users || users.length === 0 ? (
					<ErrorMessage>Список пользователей пуст</ErrorMessage>
				) : (
					users
						.filter(({ id }) => id !== userId)
						.map(({ id, login, registredAt, roleId }) => (
							<UserRaw
								id={id}
								key={id}
								login={login}
								registredAt={registredAt}
								roleId={roleId}
								roles={roles}
							/>
						))
				)}
			</div>
		</Wrapper>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;
`;
