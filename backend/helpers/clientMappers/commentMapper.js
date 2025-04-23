const moment = require('moment');

module.exports = function (comment) {
	return {
		author: comment.author?.login,
		registredAt: moment(new Date(comment.createdAt)).format('L, HH:mm'),
		content: comment.content,
		id: comment._id,
	};
};
