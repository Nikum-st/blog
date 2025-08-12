import styled from 'styled-components';
import { Icon } from '../../../components';
import { FirstWord } from './components/FirstWord';
import { SecondWord } from './components/SecondWord';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LogoContainer = ({ className }) => {
	const { t } = useTranslation();
	return (
		<Link to="/" className={className}>
			<Icon id="fa-code" size="48px" margin="13px" cursor="pointer" />
			<div>
				<FirstWord>{t('Блог')}</FirstWord>
				<SecondWord>{t('веб-разработчика')}</SecondWord>
			</div>
		</Link>
	);
};

export const Logo = styled(LogoContainer)`
	display: flex;
	flex-direction: row;
	margin-top: -23px;
	cursor: pointer;
`;
