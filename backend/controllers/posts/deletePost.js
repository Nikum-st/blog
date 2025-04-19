const Post = require('../../models/Post');

module.exports = async (postId) => {
	try {
		const post = await Post.findOneAndDelete({ _id: postId });
		if (!post) {
			throw new Error('Удаляемый пост не найден');
		}

		console.log(post);
	} catch (e) {
		throw e;
	}
};
