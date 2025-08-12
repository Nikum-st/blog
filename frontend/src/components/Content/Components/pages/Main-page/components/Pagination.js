import styled from 'styled-components';
import { Button } from '../../../../../components/Button/Button';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const PaginationContainer = ({ className, page, setPage, lastPage }) => {
	const { t } = useTranslation();
	return (
		<div className={className}>
			<Button
				disabled={page === 1}
				onClick={() => {
					setPage(1);
				}}
			>
				{t('В начало')}
			</Button>
			<Button
				disabled={page === 1}
				onClick={() => {
					setPage(page - 1);
				}}
			>
				{t('Предыдущая')}
			</Button>
			<div className="current-page">{t('Страница')}</div>
			<Button
				disabled={page === lastPage}
				onClick={() => {
					setPage(page + 1);
				}}
			>
				{t('Следующая')}
			</Button>
			<Button
				disabled={page === lastPage}
				onClick={() => {
					setPage(lastPage);
				}}
			>
				{t('В конец')}
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: center;
	margin: 0 0 20px;
	padding: 0 35px;

	& button {
		margin: 0 5px;
		width: 16%;
		display: flex;
		align-items: center;
	}

	& .current-page {
		width: 50%;
		height: 32px;
		line-height: 26px;
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		border: 1px solid #000;
	}
`;

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
	lastPage: PropTypes.number.isRequired,
};
