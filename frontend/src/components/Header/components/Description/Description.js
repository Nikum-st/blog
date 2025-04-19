import styled from 'styled-components';

const DescriptionContainer = ({ className }) => (
	<div className={className}>
		<i>Веб-технологии</i>
		<i>Написание кода</i>
		<i>Разбор Ошибок</i>
	</div>
);

export const Description = styled(DescriptionContainer)`
	font-size: 14px;
	line-height: 15px;
	display: flex;
	flex-direction: column;
	margin: 6px 205px;
`;
