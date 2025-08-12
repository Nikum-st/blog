import styled from 'styled-components';
import { Button } from '../../../components';
import { useTranslation } from 'react-i18next';

const LanguageContainer = ({ className }) => {
	const { t, i18n } = useTranslation();

	const toggleLang = () => {
		const nextLang = i18n.language === 'en' ? 'ru' : 'en';

		i18n.changeLanguage(nextLang);
	};

	return (
		<div className={className}>
			<div className="text">{t('Язык')}</div>
			<div style={{ display: 'flex' }}>
				<Button onClick={toggleLang} style={{ width: 'auto' }}>
					en
				</Button>
				<Button onClick={toggleLang} style={{ width: 'auto' }}>
					ru
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
