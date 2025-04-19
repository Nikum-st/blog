const Post = require('../../models/Post');

module.exports = async function (newPost) {
	try {
		return (await Post.create(newPost)).populate({
			path: 'comments',
			populate: 'author',
		});
	} catch (e) {
		throw e;
	}
};
