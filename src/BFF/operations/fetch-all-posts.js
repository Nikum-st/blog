import { getData } from '../api/get-dates';
import { getPosts } from '../api/get-posts';
import { getCommentsCount } from '../utils/get-comments-count';

export const fetchAllPosts = async (page, limit) => {
	try {
		const comments = await getData('comments');
		const { posts, lastPage } = await getPosts(page, limit);

		return {
			lastPage,
			posts: posts.map((post) => ({
				id: post.id,
				publisedAt: post.publised_at,
				imageUrl: post.image_url,
				title: post.title,
				content: post.content,
				commentsCount: getCommentsCount(comments, post.id),
			})),
		};
	} catch (error) {
		throw new Error(error);
	}
};
