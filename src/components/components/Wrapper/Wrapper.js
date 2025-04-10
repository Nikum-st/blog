import { useSelector } from 'react-redux';
import { selectLoading } from '../../../store';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const Wrapper = ({ children, error }) => {
	const isLoading = useSelector(selectLoading);
	return isLoading ? (
		<Loader />
	) : error ? (
		<ErrorMessage>{error}</ErrorMessage>
	) : (
		children
	);
};
