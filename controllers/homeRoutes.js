const router = require('express').Router();
const withAuth = require('../utils/auth');
const { BlogPost, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));

    res.render('homepage', {
      blogPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;