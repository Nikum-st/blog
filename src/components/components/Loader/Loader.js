import styles from './Loader.module.css';

export const Loader = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.text}>Загрузка...</div>
		</div>
	);
};
