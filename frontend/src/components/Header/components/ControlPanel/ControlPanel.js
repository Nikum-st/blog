import styled from 'styled-components';
import { Icon, Login } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../components';
import { useSelector } from 'react-redux';
import { selectLogin, selectRoleId } from '../../../../store';
import { OutLog } from './OutLog/OutLog';
import { ROLE } from '../../../../constants';

const Container = styled.div`
	display: flex;
	align-items: center;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const roleId = useSelector(selectRoleId);
	const login = useSelector(selectLogin);

	const roleAllowed = [ROLE.ADMIN];
	return roleId === ROLE.GUEST ? (
		<Container>
			<Link to="/login">
				<Button width="85px">Войти</Button>
			</Link>
		</Container>
	) : roleAllowed.includes(roleId) ? (
		<div className={className}>
			<Container>
				<Login size="15px" margin="0px 10px" weight="500">
					{login}
				</Login>
				<OutLog />
			</Container>
			<Container>
				<div onClick={() => navigate(-1)}>
					<Icon
						id={'fa-backward'}
						margin="4px 10px 0px 6px"
						size={'20px'}
						cursor={'pointer'}
					/>
				</div>
				<Link to="/post">
					<Icon
						id={'fa-file-text-o'}
						margin="4px 10px 0px 6px"
						size={'20px'}
						cursor={'pointer'}
					/>
				</Link>
				<Link to="/users">
					<Icon
						id={'fa-users'}
						margin="4px 10px 0px 6px"
						size={'20px'}
						cursor={'pointer'}
					/>
				</Link>
			</Container>
		</div>
	) : (
		<Container>
			<Login size="25px" margin="0px 10px" weight="500">
				{login}
			</Login>
			<OutLog />
		</Container>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 218px;
	height: 57px;
`;
