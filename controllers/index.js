// Wrong code in this file, compare to class exercises
const Movie = require('./models/movies');

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const addMovie = async (req, res) => {
    const { title, director, year } = req.body;
    try {
        const newMovie = await Movie.create({ title, director, year });
        res.json({ message: 'Movie added successfully', movie: newMovie });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getMovies,
    addMovie,
};
