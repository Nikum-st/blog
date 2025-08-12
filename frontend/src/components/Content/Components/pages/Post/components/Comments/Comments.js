import { useState } from 'react';
import styled from 'styled-components';
import { ErrorMessage, Icon } from '../../../../../../components';
import { Comment } from './components/Comment';
import { useDispatch, useSelector } from 'react-redux';
import {
	addNewCommentAsync,
	selectPostId,
	selectRoleId,
} from '../../../../../../../store';
import { ROLE } from '../../../../../../../constants';
import { useTranslation } from 'react-i18next';

const CommentsContainer = ({ className, comments }) => {
	const [newComment, setNewComment] = useState();
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const postId = useSelector(selectPostId);
	const roleId = useSelector(selectRoleId);

	const { t } = useTranslation();

	const handleCommentSubmit = async (postId, content) => {
		if (!newComment) return;
		if (roleId === ROLE.GUEST) {
			setError(t('Зарегестрируйтесь'));
			return;
		}

		try {
			await dispatch(addNewCommentAsync(postId, { content })).catch((e) => {
				setError(e);
			});

			setNewComment('');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className={className}>
			{error && <ErrorMessage>{error}</ErrorMessage>}
			<div className="new-comment">
				<textarea
					value={newComment}
					placeholder={t('Комментарий...')}
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					id="fa-paper-plane-o"
					margin="0 12px "
					size="28px"
					onClick={() => handleCommentSubmit(postId, newComment)}
					cursor="pointer"
				/>
			</div>

			<div className="comments">
				{comments?.map(({ id, author, content, registredAt }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publisedAt={registredAt}
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
