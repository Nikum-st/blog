import { getData } from '../api/get-dates';

export const fetchAllPosts = async () => {
	try {
		const posts = await getData('posts');

		if (!posts) {
			return null;
		}

		return posts.map((post) => ({
			id: post.id,
			publisedAt: post.publised_at,
			imageUrl: post.image_url,
			title: post.title,
			content: post.content,
		}));
	} catch (error) {
		throw new Error(error);
	}
};
