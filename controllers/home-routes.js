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

    res.render("landing", {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/about", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render("about", {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/discussion", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render("discussion", {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/profile", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render("profile", {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/welcome", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render("welcome", {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/friends", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render("friends", {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render("signup", {
      movies,
      logged_in: req.session.logged_in,
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
