const router = require('express').Router();
const userRoutes = require('./userRoutes');
const  movieRoutes = require('./movieRoutes');
const genreRoutes = require('./genreRoutes');
const calendarRoutes = require('./calendarRoutes');
const nominationRoutes = require('./nominationRoutes');
const ratingRoutes = require('./ratingRoutes');

router.use('/movies', movieRoutes);
router.use('/genre', genreRoutes);
router.use('/calendar', calendarRoutes);
router.use('/nomination', nominationRoutes);
router.use('/rating', ratingRoutes);

router.use('/users', userRoutes);

// Example route to fetch a specific movie by ID
router.get('/movies/:id', (req, res) => {
    // Logic to fetch a movie by ID from database or external API
    
    // Replace this with your own implementation
    const movieId = req.params.id;
    const movie = { id: movieId, title: `Movie ${movieId}` };
    res.json(movie);
});

// Example route to add a new movie
router.post('/movies', (req, res) => {
    // Logic to add a new movie to the database
    // Replace this with your own implementation
    const newMovie = req.body;
    console.log('New Movie:', newMovie);
    res.json({ message: 'Movie added successfully' });
});

// Example route to update a movie by ID
router.put('/movies/:id', (req, res) => {
    // Logic to update a movie by ID in the database
    // Replace this with your own implementation
    const movieId = req.params.id;
    const updatedMovieData = req.body;
    console.log('Updated Movie Data:', updatedMovieData);
    res.json({ message: `Movie with ID ${movieId} updated successfully` });
});

// Example route to delete a movie by ID
router.delete('/movies/:id', (req, res) => {
    // Logic to delete a movie by ID from the database
    // Replace this with your own implementation
    const movieId = req.params.id;
    console.log('Movie ID to delete:', movieId);
    res.json({ message: `Movie with ID ${movieId} deleted successfully` });
});

module.exports = router;