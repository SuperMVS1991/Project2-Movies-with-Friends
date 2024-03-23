const { UserMovieVote } = require('../models');
const voteSeeds = [
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

const createVoteSeeds = () => UserMovieVote.bulkCreate(voteSeeds, {
    individualHooks: true
});

module.exports = createVoteSeeds;
