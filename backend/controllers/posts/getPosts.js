const Post = require('../../models/Post');

module.exports = async function (search = '', limit = 9, page = 1) {
	try {
		const [posts, count] = await Promise.all([
			Post.find({ title: { $regex: search, $options: 'i' } })
				.limit(limit)
				.skip((page - 1) * limit)
				.sort({ createdAt: -1, _id: -1 })
				.populate({
					path: 'comments',
					populate: 'author',
				}),
			Post.countDocuments({ title: { $regex: search, $options: 'i' } }),
		]);

		return {
			posts,
			lastPage: Math.ceil(count / limit),
		};
	} catch (e) {
		throw e;
	}
};
