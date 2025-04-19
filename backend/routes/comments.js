const express = require('express');
const commentMapper = require('../helpers/clientMappers/commentMapper');
const isAuthorizated = require('../middlewares/isAuthorizated');
const accessDeleteComment = require('../middlewares/accessDeleteComment');
const deleteComment = require('../controllers/comments/deleteComment');
const createComment = require('../controllers/comments/createComment');

const router = express.Router({ mergeParams: true });

router.post('/post/:id', isAuthorizated, async (req, res) => {
	try {
		const newComment = await createComment(req.params.id, {
			content: req.body.content,
			author: req.user.id,
		});

		return res.status(200).send({ error: null, data: commentMapper(newComment) });
	} catch (e) {
		return res.status(500).send({ error: e.message, data: null });
	}
});

router.delete(
	'/:commentId/post/:postId',
	isAuthorizated,
	accessDeleteComment,
	async (req, res) => {
		try {
			const postId = req.params.postId;
			const commentId = req.params.commentId;

			await deleteComment(commentId, postId);

			return res.status(200).send({ error: null, data: true });
		} catch (e) {
			return res.status(500).send({ error: e.message, data: null });
		}
	},
);

module.exports = router;
