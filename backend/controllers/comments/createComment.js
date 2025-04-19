const Comment = require('../../models/Comment');
const Post = require('../../models/Post');

module.exports = async function (postId, comment) {
	try {
		const newComment = await Comment.create(comment);

		await Post.findByIdAndUpdate(postId, {
			$push: { comments: newComment },
		});

		await newComment.populate('author');

		return newComment;
	} catch (e) {
		throw e;
	}
};
