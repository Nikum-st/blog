import styled from 'styled-components';
import { Comments, PostContent } from './components';
import { Wrapper } from '../../../../components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useRequestServer } from '../../../../../hooks';
import { selectPost, setPostAsync } from '../../../../../store';

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost);
	const params = useParams();
	const dispatch = useDispatch();
	const serverRequest = useRequestServer();

	useEffect(() => {
		dispatch(setPostAsync(serverRequest, params.id));
	}, [dispatch, serverRequest, params.id]);

	return (
		<Wrapper>
			<div className={className}>
				<PostContent post={post} />
				<Comments comments={post.comments} postId={params.id} />
			</div>
		</Wrapper>
	);
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
