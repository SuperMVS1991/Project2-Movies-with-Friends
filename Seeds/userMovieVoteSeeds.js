const sequelize = require('../config/connection');
const { UserMovieVote } = require('../models');
const userMovieVoteSeeds = [
    {
        userId: 1,
        movieId: 1,
        vote: 5
    },
    {
        userId: 1,
        movieId: 2,
        vote: 4
    },
    {
        userId: 1,
        movieId: 3,
        vote: 3
    },
    {
        userId: 2,
        movieId: 1,
        vote: 5
    },
    {
        userId: 2,
        movieId: 2,
        vote: 4
    },
    {
        userId: 2,
        movieId: 3,
        vote: 3
    }
];

const createUserMovieVoteSeeds = () => User.bulkCreate(userMovieVoteSeeds, {
    individualHooks: true
});

module.exports = createUserMovieVoteSeeds;
