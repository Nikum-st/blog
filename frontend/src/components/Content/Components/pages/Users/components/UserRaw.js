import styled from 'styled-components';
import { ErrorMessage, Icon } from '../../../../../components';
import { useState } from 'react';
import { ROLE } from '../../../../../../constants';
import { useDispatch } from 'react-redux';
import { deletUserAsync } from '../../../../../../store';
import { request } from '../../../../../../utils/request-server';

const UserRawContainer = ({ className, id, login, registredAt, roleId, roles, key }) => {
	const [selectedRole, setSelectedRole] = useState(roleId);
	const [error, setError] = useState(null);
	const [savedRole, setSavedRole] = useState(null);
	const dispatch = useDispatch();

	const handleChangeRole = ({ target }) => {
		setSelectedRole(target.value);
	};
	const saveRoleForUser = async (selectedRole, userId) => {
		const result = await request(`/admin/users/${userId}`, 'PATCH', {
			newRole: Number(selectedRole),
		});
		if (result.error) {
			setError(result.error);
		} else if (result.data) {
			setSavedRole(true);
		}
	};

	const deleteUser = async (userId) => {
		const result = await dispatch(deletUserAsync(userId));
		if (result.error) {
			setError(result.error);
		}
	};
	return (
		<>
			<div className={className} key={key}>
				<div className="login">{login}</div>
				<div className="date-registration">{registredAt}</div>
				<select value={selectedRole} onChange={handleChangeRole}>
					{roles
						?.filter(({ id }) => id !== ROLE.GUEST)
						.map(({ id, name }) => {
							return (
								<option key={id} value={id}>
									{name}
								</option>
							);
						})}
				</select>
				<div className="icons">
					<Icon
						id={'fa-floppy-o'}
						size={'24px'}
						margin="0px 0px 0px 10px"
						cursor={'pointer'}
						savedRole={savedRole}
						onClick={() => saveRoleForUser(selectedRole, id)}
					/>
					<Icon
						id="fa-trash-o"
						size="24px"
						margin="0px 0px 0px 10px"
						cursor="pointer"
						onClick={() => deleteUser(id)}
					/>
				</div>
			</div>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</>
	);
};

export const UserRaw = styled(UserRawContainer)`
	padding: 17px;
	border: 2px solid;
	display: flex;
	justify-content: space-between;
	width: 725px;
	align-items: center;
	margin: 10px;
	font-size: 19px;
	height: 56px;

	& .login {
		display: flex;
		width: 150px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	& .date-registration {
		text-align: center;
	}
	& .icons {
		display: flex;
	}
	& select {
		width: 161px;
		height: 36px;
		font-size: 18px;
	}
`;
