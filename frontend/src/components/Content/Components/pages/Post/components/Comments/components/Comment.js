import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteCommentAsync,
	modalOpen,
	selectLogin,
	selectRoleId,
	CLOSE_MODAL,
	selectPostId,
} from '../../../../../../../../store';
import { ROLE } from '../../../../../../../../constants';

const CommentContainer = ({ className, id, author, content, publisedAt }) => {
	const login = useSelector(selectLogin);
	const role = useSelector(selectRoleId);
	const postId = useSelector(selectPostId);
	const dispatch = useDispatch();

	const accessDelete = [ROLE.ADMIN, ROLE.MODERATOR];

	const handleDeleteComment = (id, postId) => {
		dispatch(
			modalOpen({
				text: 'Удалить коментарий?',
				onConfirm: () => {
					dispatch(deleteCommentAsync(id, postId));
					dispatch(CLOSE_MODAL);
				},
			}),
		);
	};

	return (
		<div className={className} key={id} id={id}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							id="fa-user-circle-o"
							size="21px"
							margin="0 5px"
							onClick={() => {}}
						/>
						{author || login}
					</div>
					<div className="published-at">
						<Icon
							id="fa-calendar-o"
							size="21px"
							margin="0 10px"
							onClick={() => {}}
						/>
						{publisedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{accessDelete.includes(role) && (
				<Icon
					id="fa-trash-o"
					size="28px"
					margin="0 0 0 10px"
					onClick={() => handleDeleteComment(id, postId)}
					cursor="pointer"
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;
	margin-top: 10px;

	& .comment {
		width: 93%;
		padding: 10px 5px;
		border: 3px solid rgba(0, 0, 0, 0.73);
	}
	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
		align-items: center;
	}

	& .published-at {
		display: flex;
		align-items: center;
		margin-right: 10px;
	}

	& .comment-text {
		text-align: left;
		font-size: 20px;
		margin: 10px auto;
		padding: 14px;
	}
`;
