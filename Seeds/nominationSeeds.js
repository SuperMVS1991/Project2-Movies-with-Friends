const { Nomination } = require('../models');

const movieNominationSeeds = [
    {
        movieId: 1,
        userId: 1,
        month: "January",
    },
    {
        movieId: 2,
        userId: 2,
        month: "February",
    },
    {
        movieId: 3,
        userId: 3,
        month: "March",
    },
    {
        movieId: 4,
        userId: 4,
        month: "April",
    },
];

const createMovieNominationSeeds = () => {
    return Nomination.bulkCreate(movieNominationSeeds);
};

module.exports = createMovieNominationSeeds;
