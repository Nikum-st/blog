import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconContainer = ({ className, id, onClick }) => (
	<div className={className} onClick={onClick}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	color: ${({ savedRole }) => (savedRole ? '#00000052' : '#000000')};
	font-size: ${({ size = '10px' }) => size};
	margin: ${({ margin = '0px' }) => margin};
	cursor: ${({ cursor = 'auto' }) => cursor};
`;

Icon.propTypes = {
	id: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};
