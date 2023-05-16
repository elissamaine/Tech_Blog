const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newCommentData = await Comment.create({
      comment_text: req.body.comment_text,
      //post_id: req.body.post_id,
      user_id: req.session.user_id,
    });
    res.status(200).json(newCommentData);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.update(
      {
        comment_text: req.body.comment_text,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    await Comment.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: 'comment deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;