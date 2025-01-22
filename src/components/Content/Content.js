import styled from 'styled-components';
import { Routing } from './Components';

const ContentContainer = ({ className }) => {
	return (
		<main className={className}>
			<Routing />
		</main>
	);
};

export const Content = styled(ContentContainer)`
	text-align: center;
	padding: 100px 0px;
`;
