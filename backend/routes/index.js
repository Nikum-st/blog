const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/user', require('./user'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));
router.use('/admin', require('./admin'));

module.exports = router;
