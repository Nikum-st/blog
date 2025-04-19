import { ROLE } from '../constants/role';
import { sessions } from '../sessions';
import { generateDate } from '../utils/generate-date';

export const addComment = async (postId, userId, content, sessionHash) => {
	try {
		const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

		const access = await sessions.access(sessionHash, accessRoles);

		if (!access) {
			return { error: 'Необходимо зарегистрироваться', res: null };
		}

		const newCommentJSON = await fetch(`http://localhost:3005/comments`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				publised_at: generateDate,
				author_id: userId,
				post_id: postId,
				content,
			}),
		});

		const newComment = await newCommentJSON.json();

		return {
			error: null,
			res: {
				id: newComment.id,
				authorId: newComment.author_id,
				postId: newComment.post_id,
				content: newComment.content,
				publisedAt: newComment.publised_at,
			},
		};
	} catch (error) {
		throw new Error(`Ошибка при добавлении комментария:${error}`);
	}
};
