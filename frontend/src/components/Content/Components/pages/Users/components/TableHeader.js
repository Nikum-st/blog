import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const TableHeaderContainer = ({ className }) => {
	const { t } = useTranslation();
	return (
		<div className={className}>
			<div className="login-label">{t('Логин')}</div>
			<div className="date-rgistration-label">{t('Дата регистрации')}</div>
			<div className="role-label">{t('Роль')}</div>
		</div>
	);
};

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
