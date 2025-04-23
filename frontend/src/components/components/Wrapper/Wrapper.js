import { useSelector } from 'react-redux';
import { selectLoading, selectRoleId } from '../../../store';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { checkAccess } from '../../../utils/check-access';
import PropTypes from 'prop-types';

export const Wrapper = ({ children, error, access }) => {
	const role = useSelector(selectRoleId);
	const isLoading = useSelector(selectLoading);
	const accessError = !!checkAccess(access, role) ? null : 'Доступ запрещен';

	return isLoading ? (
		<Loader />
	) : accessError ? (
		<ErrorMessage>{accessError}</ErrorMessage>
	) : error ? (
		<ErrorMessage>{error}</ErrorMessage>
	) : (
		children
	);
};

Wrapper.propTypes = {
	error: PropTypes.string,
	access: PropTypes.array,
};
