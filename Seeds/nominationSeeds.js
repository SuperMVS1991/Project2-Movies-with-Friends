const { Nomination } = require('../models');
const movieNominationSeeds = [
    {
        title: 'The Shawshank Redemption',
        release_year: 1994,
        // genreId: 3,
        director: 'Frank Darabont',
        userId: 1,
        month: 'January'
    },
    {
        title: 'The Godfather',
        release_year: 1972,
        // genreId: 3,
        director: 'Francis Ford Coppola',
        userId: 2,
        month: 'February'
    },
    {
        title: 'The Dark Knight',
        release_year: 2008,
        // genreId: 1,
        director: 'Christopher Nolan',
        userId: 1,
        month: 'March'
    },
];

const createmovieNominationSeeds = () => Nomination.bulkCreate(movieNominationSeeds, {
    individualHooks: true
});

module.exports = createmovieNominationSeeds;