import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../components';
import { logOut, modalOpen, selectSession, CLOSE_MODAL } from '../../../../../store';

export const OutLog = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector(selectSession);

	const onLogOut = () => {
		dispatch(
			modalOpen({
				text: 'Вы уверены, что хотите выйти?',
				onConfirm: () => {
					dispatch(logOut(sessionUser));
					dispatch(CLOSE_MODAL);
				},
			}),
		);
	};

	return (
		<Icon id={'fa-sign-out'} size={'20px'} cursor={'pointer'} onClick={onLogOut} />
	);
};
