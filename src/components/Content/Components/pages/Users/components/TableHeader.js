import styled from 'styled-components';

const TableHeaderContainer = ({ className }) => (
	<div className={className}>
		<div className="login-label">Логин</div>
		<div className="date-rgistration-label">Дата регистрации</div>
		<div className="role-label">Роль</div>
	</div>
);

export const TableHeader = styled(TableHeaderContainer)`
	display: flex;
	width: 725px;
	align-items: center;
	margin: 10px;
	font-size: 19px;

	& .login-label {
		padding-left: 9px;
		margin-right: 156px;
	}

	& .date-rgistration-label {
		margin-right: 102px;
	}

	& .role-label {
		margin-right: 50px;
	}
`;
