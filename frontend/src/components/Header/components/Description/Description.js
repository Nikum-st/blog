import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const DescriptionContainer = ({ className }) => {
	const { t } = useTranslation();
	return (
		<div className={className}>
			<i>{t('Веб-технологии')}</i>
			<i>{t('Написание кода')}</i>
			<i>{t('Разбор Ошибок')}</i>
		</div>
	);
};

export const Description = styled(DescriptionContainer)`
	font-size: 14px;
	line-height: 15px;
	display: flex;
	flex-direction: column;
	margin: 6px 205px;
`;
