import styled from 'styled-components';
import { Text } from './components/Text/Text';
import { Date } from './components/Date/Date';
import { Weather } from './components/Weather/Weather';

const FooterContainer = ({ className }) => (
	<footer className={className}>
		<Text />
		<div style={{ display: `flex` }}>
			<Date />
			<Weather />
		</div>
	</footer>
);

export const Footer = styled(FooterContainer)`
	display: flex;
	position: fixed;
	justify-content: space-between;
	bottom: 0;
	height: 80px;
	width: 1300px;
	background: #fff;
	box-shadow: 0px -3px 15px #405060;
	padding: 10px 30px;
`;
