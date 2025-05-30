import styled from 'styled-components';
import { Routing } from './Components';
import { Modal } from '../components';

const ContentContainer = ({ className }) => {
	return (
		<main className={className}>
			<Routing />
			<Modal />
		</main>
	);
};

export const Content = styled(ContentContainer)`
	text-align: center;
	padding: 100px 0px;
`;
