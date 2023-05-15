const router = require('express').Router();

const blogpostRoutes = require('./blogpostRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/blogposts', blogpostRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;