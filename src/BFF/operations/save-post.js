import { ROLE } from '../../constants';
import { sessions } from '../sessions';
import { generateDate } from '../utils/generate-date';

export const savePost = async (postId, postData, sessionHash) => {
	try {
		const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

		const access = await sessions.access(sessionHash, accessRoles);

		if (!access) {
			return { error: 'Доступ запрещен', res: null };
		}
		let resultJSON;
		if (postId) {
			resultJSON = await fetch(`http://localhost:3005/posts/${postId}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					content: postData.newContent,
					image_url: postData.newImage,
					title: postData.newTitle,
				}),
			});
		} else {
			resultJSON = await fetch(`http://localhost:3005/posts`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					content: postData.newContent,
					image_url: postData.newImage,
					title: postData.newTitle,
					publised_at: generateDate,
				}),
			});
		}

		const { id, content, title, image_url, publised_at } = await resultJSON.json();

		return {
			error: null,
			res: { id, content, title, imageUrl: image_url, publisedAt: publised_at },
		};
	} catch (e) {
		throw new Error(e);
	}
};
