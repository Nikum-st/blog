import styled from 'styled-components';
import { Comments, PostContent } from './components';
import { Wrapper } from '../../../../components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useMatch } from 'react-router-dom';
import { selectPost, selectRoleId, setPostAsync } from '../../../../../store';
import { PostForm } from './components/PostForm/PostForm';

const PostContainer = ({ className }) => {
	const [error, setError] = useState(null);
	const post = useSelector(selectPost);
	const role = useSelector(selectRoleId);
	const params = useParams();
	const dispatch = useDispatch();
	const isEditing = !!useMatch('/post/:id/edit');
	const isCreating = !!useMatch('/post');

	useEffect(() => {
		if (!isCreating) {
			dispatch(setPostAsync(params.id)).catch((e) =>
				setError(e.message || 'Нет связи с сервером. Попробуйте позже'),
			);
		}
	}, [dispatch, params.id, isCreating, isEditing, role]);

	return (
		<Wrapper error={error}>
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
