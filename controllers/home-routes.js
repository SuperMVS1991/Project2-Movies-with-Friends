const router = require("express").Router();
const { Movie, User } = require("../models");
const withAuth = require("../utilities/auth");



// route for the landing page
router.get('/layouts', (req, res) => {
  res.render('landing', { layout: 'landing' }); // Specify the 'landing' layout for this view
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

router.get("/landing", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render("landing", {
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
router.get("/", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/welcome");
    return;
  }

  res.render("landing");
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
