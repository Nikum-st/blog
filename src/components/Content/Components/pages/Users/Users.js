import { H2 } from '../../../../components';
import styled from 'styled-components';
import { TableHeader } from './components/TableHeader';
import { UserRaw } from './components/UserRaw';

export const UsersContainer = ({ className }) => {
	return (
		<div className={className}>
			<H2>Пользователи</H2>
			<TableHeader />
			<UserRaw />
		</div>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;
`;
