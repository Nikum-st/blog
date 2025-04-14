import styled from 'styled-components';
import { H2 } from '../../../../../../components';
import { SpecialPanel } from '../SpecialPanel/SpecialPanel';
import { useNavigate } from 'react-router-dom';

const PostContentConatiner = ({ className, post }) => {
	const navigate = useNavigate();

	const editMode = () => {
		navigate(`/post/${post.id}/edit`);
	};

	return (
		<div className={className}>
			<img src={post.imageUrl} alt={post.id} />
			<H2 textAlign="left">{post.title}</H2>

			<SpecialPanel
				publisedAt={post.publisedAt}
				id={post.id}
				editButton={true}
				onClick={editMode}
			/>
			<div className="post-text">{post.content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentConatiner)`
	& img {
		width: 450px;
		float: left;
		margin: 0 57px 10px 0;
	}

	& i {
		position: relative;
		top: -1px;
	}
	& .post-text {
		text-align: justify;
		font-size: 20px;
	}
`;
