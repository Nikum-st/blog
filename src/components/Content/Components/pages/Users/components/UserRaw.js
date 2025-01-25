import styled from 'styled-components';
import { Icon } from '../../../../../components';
import { useSelector } from 'react-redux';
import { selectRolesFromServer, selectUsers } from '../../../../../../store';
import { useGetUsers, useGetRolesFromServer } from '../../../../../../hooks';

const UserRawContainer = ({ className }) => {
	useGetUsers();
	useGetRolesFromServer();
	const users = useSelector(selectUsers);
	const roles = useSelector(selectRolesFromServer);

	return (
		<div>
			{users.map(({ id, login, registredAt, roleId }) => (
				<div className={className} key={id}>
					<div className="login">{login}</div>
					<div className="date-registration">{registredAt}</div>
					<select
						value={roleId}
						onChange={(e) => console.log(`Изменение роли: ${e.target.value}`)}
					>
						<option value={roles[0].id}>{roles[0].name}</option>
						<option value={roles[1].id}>{roles[1].name}</option>
						<option value={roles[2].id}>{roles[2].name}</option>
						<option value={roles[3].id}>{roles[3].name}</option>
					</select>
					<div className="icons">
						<Icon
							id={'fa-floppy-o'}
							size={'18px'}
							margin="0px 0px 0px 10px"
							cursor={'pointer'}
							onClick={() =>
								console.log(`Сохранить пользователя с ID: ${id}`)
							}
						/>
						<Icon
							id="fa-trash-o"
							size="18px"
							margin="0px 0px 0px 10px"
							cursor="pointer"
							onClick={() =>
								console.log(`Удалить пользователя с ID: ${id}`)
							}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export const UserRaw = styled(UserRawContainer)`
	padding: 17px;
	border: 2px solid;
	display: flex;
	justify-content: space-between;
	width: 540px;
	align-items: center;
	margin: 10px;
	font-size: 17px;

	& .login {
		display: flex;
		width: 150px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	& .date-registration {
		width: 120px;
		text-align: center;
	}
	& .icons {
		display: flex;
	}
`;
