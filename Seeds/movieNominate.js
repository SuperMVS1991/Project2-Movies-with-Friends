const { MovieNominate } = require('../models');
const movieNominateSeeds = [
    {
        title: 'The Shawshank Redemption',
        releaseYear: 1994,
        genre: 'Drama',
        director: 'Frank Darabont',
        userId: 1,
        vote: 5
    },
    {
        title: 'The Godfather',
        releaseYear: 1972,
        genre: 'Crime',
        director: 'Francis Ford Coppola',
        userId: 2,
        vote: 4
    },
    {
        title: 'The Dark Knight',
        releaseYear: 2008,
        genre: 'Action',
        director: 'Christopher Nolan',
        userId: 3,
        vote: 3
    },
];

const createMovieNominateSeeds = () => MovieNominate.bulkCreate(movieNominateSeeds, {
    individualHooks: true
});

module.exports = createMovieNominateSeeds;