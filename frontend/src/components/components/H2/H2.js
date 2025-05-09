import PropTypes from 'prop-types';

import styled from 'styled-components';

const H2Container = ({ className, children }) => (
	<h2 className={className}>{children}</h2>
);

export const H2 = styled(H2Container)`
	margin: 40px 0px;
	text-align: ${({ textAlign }) => textAlign};
`;

H2.propTypes = {
	children: PropTypes.node,
};
