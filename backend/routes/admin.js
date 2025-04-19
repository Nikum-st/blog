const express = require('express');
const isAuthorizated = require('../middlewares/isAuthorizated');
const isAdmin = require('../middlewares/isAdmin');
const getUsers = require('../controllers/user/getUsers');
const deleteUser = require('../controllers/user/deleteUser');
const userMapper = require('../helpers/clientMappers/userMapper');
const getRoles = require('../controllers/roles/getRoles');
const changeRole = require('../controllers/user/changeRole');

const router = express.Router({ mergeParams: true });

router.get('/users', isAuthorizated, isAdmin, async (req, res) => {
	try {
		const users = await getUsers();
		const mappedUsers = users
			.filter((b) => b.id !== req.user.id)
			.map((b) => userMapper(b));

		return res.status(200).send({ error: null, data: mappedUsers });
	} catch (e) {
		return res.status(500).send({ error: e.message, data: null });
	}
});

router.delete('/users/:id', isAuthorizated, isAdmin, async (req, res) => {
	try {
		await deleteUser(req.params.id);

		return res.status(200).send({ error: null, data: true });
	} catch (e) {
		if (e.name === 'CastError') {
			return res.status(400).send({ error: 'Некорректный ID' });
		}
		return res.status(500).send({ error: e.message, data: null });
	}
});

router.patch('/users/:id', isAuthorizated, isAdmin, async (req, res) => {
	try {
		const updatedUser = await changeRole(req.params.id, req.body.newRole);

		return res.status(200).send({ error: null, data: userMapper(updatedUser) });
	} catch (e) {
		if (e.name === 'CastError') {
			return res.status(400).send({ error: 'Некорректный ID' });
		}
		return res.status(500).send({ error: e.message, data: null });
	}
});

router.get('/roles', isAuthorizated, isAdmin, (req, res) => {
	const roles = getRoles();
	return res.status(200).send({ error: null, data: roles });
});

module.exports = router;
