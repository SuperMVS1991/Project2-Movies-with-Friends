const router = require('express').Router();
const { User } = require('../../models');
const { Op } = require("sequelize"); // Import Op from sequelize

// Get user's info
router.get('/me', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.status(401).json({ message: 'You are not logged in' });
      return;
    }
    const user = await User.findByPk(req.session.user_id);
    res.render('profile', { user }); // Render 'profile' view
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving user data');
  }
});

// Get user's friends's info
router.get('/friends', async (req, res) => {
  try {
    const friends = await User.findAll({
      where: {
        id: {
          [Op.ne]: req.session.user_id // Exclude the current user
        }
      }
    });
    res.render('friends', { friends }); // Render 'friends' view
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving user data');
  }
});

// Get user's nominated movies
router.get('/my-noms', async (req, res) => {
  try {
  const mynoms = await User.findByPk(req.session.user_id, {
  include: [{ model: Nomination }]
});
    res.render('mynoms', { mynoms }); // Render 'my nominations' view
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving user\'s nominations');
  }
});

// Get user's voting history
router.get('/my-votes', async (req, res) => {
  try {
    const myvotes = await User.findByPk(req.session.user_id, {
      include: [{ model: Vote }]
    });
    res.render('myvotes', { myvotes }); // Render 'my votes' view
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving user\'s voting history');
  }
});

module.exports = router;