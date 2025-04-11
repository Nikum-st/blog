import { useState } from 'react';
import styled from 'styled-components';
import { ErrorMessage, Icon } from '../../../../../../components';
import { Comment } from './components/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { selectIdUser, addNewCommentAsync } from '../../../../../../../store';
import { useRequestServer } from '../../../../../../../hooks';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState();
	const userId = useSelector(selectIdUser);
	const serverRequest = useRequestServer();
	const dispatch = useDispatch();
	const [error, setError] = useState(null);

	const handleCommentSubmit = async (postId, userId, content) => {
		if (!newComment) return;

		try {
			const result = await dispatch(
				addNewCommentAsync(serverRequest, postId, userId, content),
			);
			if (result.error) {
				setError(result.error);
				return;
			}
			setNewComment('');
		} catch (error) {
			console.error('Error submitting comment:', error);
		}
	};

	return (
		<div className={className}>
			{error && <ErrorMessage>{error}</ErrorMessage>}
			<div className="new-comment">
				<textarea
					value={newComment}
					placeholder="Комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					id="fa-paper-plane-o"
					margin="0 12px "
					size="28px"
					onClick={() => handleCommentSubmit(postId, userId, newComment)}
					cursor="pointer"
				/>
			</div>

			<div className="comments">
				{comments?.map(({ id, author, content, publisedAt }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publisedAt={publisedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	display: flex;
	width: 750px;
	margin: 0 auto;
	flex-direction: column;

	.new-comment {
		display: flex;
		width: 100%;
		margin: 70px 0 0;
		justify-content: center;
		align-items: baseline;

		textarea {
			width: 100%;
			height: 120px;
			font-size: 22px;
			resize: none;
			padding: 20px;
			border: 3px solid rgba(0, 0, 0, 0.73);
		}
	}
`;
