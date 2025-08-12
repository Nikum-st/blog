import { useTranslation } from 'react-i18next';
import styles from './Loader.module.css';

export const Loader = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.loader}>
			<div className={styles.text}>{t('Загрузка...')}</div>
		</div>
	);
};
