const commentMapper = require('./commentMapper');
const moment = require('moment');

module.exports = function (post) {
	return {
		id: post._id,
		title: post.title,
		imageUrl: post.imageUrl,
		content: post.content,
		publishedAt: moment(new Date(post.createdAt || post.publisedAt)).format(
			'L, HH:mm',
		),
		comments: post?.comments?.map(commentMapper),
	};
};
