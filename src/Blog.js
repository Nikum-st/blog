import styled from 'styled-components';
import { Content, Footer, Header } from './components';

function BlogContainer({ className }) {
	return (
		<div className={className}>
			<Header />
			<Content />
			<Footer />
		</div>
	);
}
const Blog = styled(BlogContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1300px;
	min-height: 100%;
	background-color: #fff;
	margin: 0 auto;
`;
export default Blog;
