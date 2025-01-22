import styled from 'styled-components';

const ButtonContainer = ({ className, children, width, ...props }) => (
	<button className={className} {...props}>
		{children}
	</button>
);

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	border: 2px solid #000000;
	background: #dbd8d8;
	width: ${({ width = '10px' }) => width};
	margin-right: 4px;
	cursor: pointer;
	padding: 2px;
	height: auto;
`;
