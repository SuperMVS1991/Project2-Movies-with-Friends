const express = require('express');
const router = express.Router();
const { Movie } = require('../../models');
// Define your API routes here

// Example route to fetch movies
// router.get('/', (req, res) => {const url = 'https://moviesminidatabase.p.rapidapi.com/movie/id/%7Bmovie_id%7D/cast/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e0fd7191d3msh744fc8740a01ac7p1081e7jsn8cd0c4f9b596',
// 		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
// 	}
// };
//     // Logic to fetch movies from database or external API
//     // Replace this with your own implementation
    
// });

router.get('/', async (req, res) => {
    try {
        const movieData = await Movie.findAll();
        res.status(200).json(movieData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// Example route to fetch a specific movie by ID
router.get('/:id', async (req, res) => {
    // Logic to fetch a movie by ID from database or external API
    // Replace this with your own implementation
    const movieId = req.params.id;
    const movieData = await Movie.findByPk(movieId);
    if (!movieData) {
        res.status(404).json({ message: 'No movie found with this id!' });
        return;
    }
    res.status(200).json(movieData);
});

// Example route to add a new movie


// Example route to update a movie by ID


module.exports = router;
