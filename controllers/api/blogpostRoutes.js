const router = require('express').Router();
const { BlogPost } = require('../../models');
const { update } = require('../../models/User');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateBlogPost = await BlogPost.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: { id: req.params.id },
      }
    );

    res.status(200).json(updateBlogPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    await BlogPost.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: 'BlogPost deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;