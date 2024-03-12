const mongoose = require('mongoose');

const userMovieVoteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    vote: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
});

const UserMovieVote = mongoose.model('UserMovieVote', userMovieVoteSchema);

module.exports = UserMovieVote;