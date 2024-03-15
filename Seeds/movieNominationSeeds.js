const { movieNominationSeeds } = require('../models');
const movieNominationSeeds = [
    {
        title: 'The Shawshank Redemption',
        releaseYear: 1994,
        genreId: 3,
        director: 'Frank Darabont',
        userId: 1,
        vote: 5,
        month: 'January'
    },
    {
        title: 'The Godfather',
        releaseYear: 1972,
        genreId: 3,
        director: 'Francis Ford Coppola',
        userId: 2,
        vote: 4,
        month: 'February'
    },
    {
        title: 'The Dark Knight',
        releaseYear: 2008,
        genreId: 1,
        director: 'Christopher Nolan',
        userId: 3,
        vote: 3,
        month: 'March'
    },
];

const createmovieNominationSeeds = () => createmovieNominationSeeds.bulkCreate(movieNominationSeeds, {
    individualHooks: true
});

module.exports = createmovieNominationSeeds;