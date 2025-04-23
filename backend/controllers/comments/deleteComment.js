const Comment = require('../../models/Comment');
const Post = require('../../models/Post');

module.exports = async (commentId, postId) => {
	try {
		const comment = await Comment.findByIdAndDelete(commentId);
		if (!comment) {
			throw new Error(`Удаляемый комментарий не найден`);
		}

		const post = await Post.findByIdAndUpdate(postId, {
			$pull: { comments: commentId },
		});

		if (!post) {
			throw new Error(`Пост не найден`);
		}
	} catch (e) {
		throw e;
	}
};
