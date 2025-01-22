import styled from 'styled-components';
import { Logo } from './components/Logo/Logo';
import { Description } from './components/Description/Description';
import { ControlPanel } from './components/ControlPanel/ControlPanel';

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Description />
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	display: flex;
	position: fixed;
	justify-content: space-between;
	top: 0;
	height: 80px;
	width: 1300px;
	padding: 10px 30px;
	box-shadow: 0px 3px 15px #405060;
	background: #fff;
`;
