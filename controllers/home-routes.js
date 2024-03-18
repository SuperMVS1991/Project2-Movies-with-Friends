const router = require("express").Router();
const { Movie, User } = require("../models");
const withAuth = require("../utilities/auth");

router.get("/", async (req, res) => {
  try {
    const movieData = await Movie.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ["name"],
      //   },
      // ],
    });

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render("welcome", {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/movie/:id", async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const movie = movieData.get({ plain: true });

    res.render("movie", {
      ...movie,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Movie }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// const express = require('express');
// const app = express();

// // Import the router
// const router = require('./router');

// // Mount the router at the root path
// app.use('/', router);

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
