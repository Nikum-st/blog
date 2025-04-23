import PropTypes from 'prop-types';

import styled from 'styled-components';

const LoginContainer = ({ className, children }) => (
	<div className={className}>{children}</div>
);

export const Login = styled(LoginContainer)`
	font-size: ${({ size } = `10px`) => size};
	font-weight: ${({ weight }) => weight};
	margin: ${({ margin } = 'auto') => margin};
`;

Login.propTypes = {
	children: PropTypes.node.isRequired,
};
