import moment from 'moment';
import styled from 'styled-components';
import 'moment/locale/ru';
import { useTranslation } from 'react-i18next';

const DateContainer = ({ className }) => {
	const { i18n } = useTranslation();

	moment.locale(i18n.language);
	return <div className={className}>{moment().format('LL')}</div>;
};

export const Date = styled(DateContainer)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 600;
	height: 29px;
	width: 137px;
`;
