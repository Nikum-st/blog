import styled from 'styled-components';

const ErrorMessageContainer = ({ className, children }) => (
	<div className={className}>{children}</div>
);

export const ErrorMessage = styled(ErrorMessageContainer)`
	display: flex;
	align-items: center;
	height: auto;
	padding: 10px;
	margin: 15px;
	background: #f65b5b75;
`;
