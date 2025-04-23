const express = require('express');
const isAuthorizated = require('../middlewares/isAuthorizated');
const isAdmin = require('../middlewares/isAdmin');
const getPosts = require('../controllers/posts/getPosts');
const getPost = require('../controllers/posts/getPost');
const postMapper = require('../helpers/clientMappers/postMapper');
const addPost = require('../controllers/posts/addPost');
const updatePost = require('../controllers/posts/updatePost');
const deletePost = require('../controllers/posts/deletePost');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
	try {
		const { posts, lastPage } = await getPosts(
			req.query.search,
			req.query.limit,
			req.query.page,
		);

		return res
			.status(200)
			.send({ error: null, data: { posts: posts.map(postMapper), lastPage } });
	} catch (e) {
		if (e.name === 'CastError') {
			return res.send({ error: 'Некорректный адрес поста' });
		}
		return res.send({ error: e.message, data: null });
	}
});
router.get('/:id', async (req, res) => {
	try {
		const post = await getPost(req.params.id);

		return res.status(200).send({ error: null, data: postMapper(post) });
	} catch (e) {
		if (e.name === 'CastError') {
			return res.send({ error: 'Некорректный адрес поста' });
		}
		return res.send({ error: e.message, data: null });
	}
});

router.post('/', isAuthorizated, isAdmin, async (req, res) => {
	try {
		const newPost = await addPost({
			title: req.body.newTitle,
			imageUrl: req.body.newImage,
			content: req.body.newContent,
		});

		res.status(200).send({ error: null, data: postMapper(newPost) });
	} catch (e) {
		return res.send({ error: e.message, data: null });
	}
});

router.patch('/:id', isAuthorizated, isAdmin, async (req, res) => {
	try {
		const updatedPost = await updatePost(req.params.id, {
			title: req.body.newTitle,
			imageUrl: req.body.newImage,
			content: req.body.newContent,
		});

		res.status(200).send({ error: null, data: postMapper(updatedPost) });
	} catch (e) {
		return res.send({ error: e.message, data: null });
	}
});
router.delete('/:id', isAuthorizated, isAdmin, async (req, res) => {
	try {
		await deletePost(req.params.id);

		res.status(200).send({ error: null, data: true });
	} catch (e) {
		return res.send({ error: e.message, data: null });
	}
});

module.exports = router;
