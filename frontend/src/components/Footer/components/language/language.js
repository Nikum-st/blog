import styled from 'styled-components';
import { Button } from '../../../components';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LanguageContainer = ({ className }) => {
	const [textButton, setTextButton] = useState('en');
	const { t, i18n } = useTranslation();

	const toggleLang = () => {
		const nextLang = i18n.language === 'en' ? 'ru' : 'en';
		setTextButton(() => (nextLang === 'en' ? 'ru' : 'en'));
		i18n.changeLanguage(nextLang);
	};

	return (
		<div className={className}>
			<div className="text">{t('Язык')}</div>
			<div style={{ display: 'flex' }}>
				<Button onClick={toggleLang} style={{ width: '35px' }}>
					{textButton}
				</Button>
			</div>
		</div>
	);
};

export const Language = styled(LanguageContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	.text {
		font-size: 12px;
		font-weight: 600;
		margin-bottom: 5px;
	}
`;
