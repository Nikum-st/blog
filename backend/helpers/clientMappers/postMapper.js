const commentMapper = require('./commentMapper');

module.exports = function (post) {
	return {
		id: post._id,
		title: post.title,
		img: post.img,
		cotent: post.content,
		publishedAt: post.createdAt,
		comments: post?.comments?.map(commentMapper),
	};
};
