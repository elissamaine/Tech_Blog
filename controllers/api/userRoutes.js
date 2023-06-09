const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    
    const dataJustCreated = await User.findOne({
      where: { email: newUserData.email },
    });
    console.log(dataJustCreated);
    req.session.save(() => {
      req.session.user_id = dataJustCreated.id;
      req.session.logged_in = true;
      res.status(200).json(newUserData);
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userInput = await User.findOne({
      where: { email: req.body.email },
    });
    console.log('/n ------------ login user routes ---------- /n')
    if (!userInput) {
      res
        .status(400)
        .json({ message: 'Invalid username, please try again.' });
      return;
    }
    console.log('50');
    console.log(req.body.password);
    const validPassword = await userInput.checkPassword(
      req.body.password
    );
    console.log(validPassword);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Invalid password, please try again.' });
      return;
    }
    console.log('59');
    req.session.save(() => {
      req.session.user_id = userInput.id;
      req.session.logged_in = true;
      res.json({
        user: userInput,
        message: 'You are now logged in!',
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
      console.log('logged out');
    });
  } else {
    res.status(404).end();
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedUser = await User.update(req.body, {
      where: { id: req.params.id },
      individualHooks: true,
    });

    return res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.destroy({
      where: { id: req.params.id },
    });
    if (!userData) {
      res
        .status(404)
        .json({ message: 'No user was found with that ID' });
      return;
    }
    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;