import styled from 'styled-components';
import PropTypes from 'prop-types';

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
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	padding: 2px;
	height: auto;
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};
