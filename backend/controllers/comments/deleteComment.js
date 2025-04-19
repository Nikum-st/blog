const Comment = require('../../models/Comment');
const Post = require('../../models/Post');

module.exports = async (commentId, postId) => {
	try {
		await Comment.findByIdAndDelete(commentId);

		await Post.findByIdAndUpdate(postId, {
			$pull: { comments: commentId },
		});
	} catch (e) {
		throw e;
	}
};
