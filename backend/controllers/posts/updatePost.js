const Post = require('../../models/Post');

module.exports = async function (postId, newValue) {
	try {
		return Post.findByIdAndUpdate(postId, newValue, {
			returnDocument: 'after',
		}).populate({
			path: 'comments',
			populate: 'author',
		});
	} catch (e) {
		throw e;
	}
};
