import moment from 'moment';
import styled from 'styled-components';
import 'moment/locale/ru';

moment.locale('ru');

const DateContainer = ({ className }) => (
	<div className={className}>{moment().format('LL')}</div>
);

export const Date = styled(DateContainer)`
	font-size: 14px;
	font-weight: 600;
	height: 29px;
	width: 137px;
`;
