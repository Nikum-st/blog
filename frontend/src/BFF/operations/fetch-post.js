import { getData } from '../api/get-dates';

export const fetchPost = async (postId) => {
	const [post, comments, users] = await Promise.all([
		getData(`posts/${postId}`),
		getData(`comments?post_id=${postId}`),
		getData(`users`),
	]);

	if (!post) {
		return null;
	}

	const userAndComment = comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.author_id);

		return {
			id: comment.id,
			content: comment.content,
			publisedAt: comment.publised_at,
			author: user.login,
		};
	});

	return {
		id: post.id,
		publisedAt: post.publised_at,
		imageUrl: post.image_url,
		title: post.title,
		content: post.content,
		comments: userAndComment,
	};
};
