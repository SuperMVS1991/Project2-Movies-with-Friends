const router = require("express").Router();
const { Movie, User, Nomination, Rating } = require("../models");
const withAuth = require("../utilities/auth");






// route for the landing page
router.get("/welcome", async (req, res) => {
 try {
   const movieData = await Movie.findAll({});
   const movies = movieData.map((movie) => movie.get({ plain: true }));
   console.log(movies);
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


router.get("/nomination", async (req, res) => {
 try {
   const nominationData = await Nomination.findAll({
     include: [{ model: Movie }]
   });


   const Noms = nominationData.map((movie) => movie.get({ plain: true }));
console.log(Noms);
   res.render("allTheNominations", {
     Noms,
     logged_in: req.session.logged_in,
   });
 } catch (err) {
   res.status(500).json(err);
 }
});


router.get("/movie/:id", async (req, res) => {
 try {
   const movieData = await Movie.findByPk(req.params.id, {
     include: [{
       model: Rating,
       include: [{
         model: User,
         attributes: ['user_name'] // Specify the attribute you want to include
       }]
     }]
   });


   const movie = movieData.get({ plain: true });
     console.log(movie);
   res.render("movie", {
     movie,
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