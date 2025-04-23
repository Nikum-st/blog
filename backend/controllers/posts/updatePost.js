const Post = require('../../models/Post');

module.exports = async function (postId, newValue) {
	try {
		const asdsad = Post.findByIdAndUpdate(postId, newValue, {
			returnDocument: 'after',
		});

		return asdsad;
	} catch (e) {
		throw e;
	}
};
