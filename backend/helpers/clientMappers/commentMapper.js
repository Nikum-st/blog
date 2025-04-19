module.exports = function (comment) {
	return {
		author: comment.author.login,
		registredAt: comment.createdAt,
		content: comment.content,
		id: comment._id,
	};
};
