import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../components';
import { logOut, selectSession } from '../../../../../store';

export const OutLog = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector(selectSession);

	const onLogOut = () => {
		dispatch(logOut(sessionUser));
	};

	return (
		<Icon id={'fa-sign-out'} size={'20px'} cursor={'pointer'} onClick={onLogOut} />
	);
};
