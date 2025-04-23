import { getData } from '../api/get-dates';
import { getCommentsCount } from '../utils/get-comments-count';

export const fetchSearch = async (searchValue) => {
	const posts = await getData(`posts`);
	if (!posts) {
		return;
	}
	const comments = await getData('comments');
	const postsFilterd = posts
		?.filter((post) =>
			post.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim()),
		)
		.map((post) => ({
			id: post.id,
			publisedAt: post.publised_at,
			imageUrl: post.image_url,
			title: post.title,
			content: post.content,
			commentsCount: getCommentsCount(comments, post.id),
		}));
	return postsFilterd;
};
