const Post = require('../../models/Post');

module.exports = async function (postId) {
	try {
		const post = await Post.findById(postId).populate({
			path: 'comments',
			populate: 'author',
		});

		if (!post) {
			throw new Error('Пост не найден');
		}
		return post;
	} catch (e) {
		throw e;
	}
};
