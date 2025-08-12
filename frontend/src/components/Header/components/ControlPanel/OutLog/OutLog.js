import { useDispatch } from 'react-redux';
import { Icon } from '../../../../components';
import { logOut, modalOpen, CLOSE_MODAL } from '../../../../../store';
import { useTranslation } from 'react-i18next';

export const OutLog = () => {
	const dispatch = useDispatch();

	const { t } = useTranslation();

	const onLogOut = () => {
		dispatch(
			modalOpen({
				text: t('Уверены_выйти'),
				onConfirm: () => {
					dispatch(logOut());
					dispatch(CLOSE_MODAL);
				},
			}),
		);
	};

	return (
		<Icon id={'fa-sign-out'} size={'20px'} cursor={'pointer'} onClick={onLogOut} />
	);
};
