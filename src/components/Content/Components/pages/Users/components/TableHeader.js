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
	width: 530px;
	align-items: center;
	margin: 10px;
	font-size: 17px;

	& .login-label {
		padding-left: 9px;
		margin-right: 130px;
	}

	& .date-rgistration-label {
		margin-right: 63px;
	}

	& .role-label {
		margin-right: 49px;
	}
`;
