export const getCommentsCount = (comments = [], postId) => {
	const postComments = comments.filter(({ post_id: commentPostId }) => {
		return commentPostId === postId;
	});

	return postComments.length;
};
