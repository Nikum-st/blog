import styled from 'styled-components';

const TextContainer = ({ className }) => (
	<div className={className}>
		<p>Блог веб-разработчика</p>
		<p>nikitaumanskiy1998@mail.ru</p>
	</div>
);

export const Text = styled(TextContainer)`
	width: 190px;
	height: 50px;
	line-height: 4px;
	font-weight: 600;
	font-size: 15px;
	margin-top: 5px;
`;
