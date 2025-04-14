import styled from 'styled-components';
import { Comments, PostContent } from './components';
import { Wrapper } from '../../../../components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useMatch } from 'react-router-dom';
import { useRequestServer } from '../../../../../hooks';
import { selectPost, setPostAsync } from '../../../../../store';
import { PostForm } from './components/PostForm/PostForm';

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost);
	const params = useParams();
	const dispatch = useDispatch();
	const serverRequest = useRequestServer();
	const isEditing = useMatch('/post/:id/edit');
	const isCreating = useMatch('/post');

	useEffect(() => {
		if (!isCreating) {
			dispatch(setPostAsync(serverRequest, params.id));
		}
	}, [dispatch, serverRequest, params.id, isCreating]);

	return (
		<Wrapper>
			{isEditing || isCreating ? (
				<PostForm {...(isCreating ? { isCreating } : { post, isCreating })} />
			) : (
				<div className={className}>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={params.id} />
				</div>
			)}
		</Wrapper>
	);
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
