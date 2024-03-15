const User = require('./User');
// const Calendar = require('./calendar');
const Genre = require('./genres');
const Movie = require('./Movie');
const movieNominate = require('./movie_nominate');
const Rating = require('./rating');
const UserMovieVote = require('./user_movie_vote');

User.hasMany(Rating, {

    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Rating.belongsTo(User, {
    foreignKey: 'userId'
});

User.hasMany(movieNominate, {

    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
movieNominate.belongsTo(User, {
    foreignKey: 'userId'
});

User.hasMany(UserMovieVote, {
    
        foreignKey: 'userId',
        onDelete: 'CASCADE'
});
    UserMovieVote.belongsTo(User, {
        foreignKey: 'userId'
});

    Genre.belongsTo(Movie, {
        foreignKey: 'movieId',
        onDelete: 'CASCADE'
    });
    Movie.hasOne(Genre, {
        foreignKey: 'movieId'
    });
    // Genre.belongsTo(movieNominate, {
    //     foreignKey: 'genreid',
    //     onDelete: 'CASCADE'
    // });
    // movieNominate.hasMany(Genre, {
    //     foreignKey: 'genreid'
    // });
    Movie.hasMany(movieNominate, {
        foreignKey: 'movieId',
        onDelete: 'CASCADE'
    });
    movieNominate.belongsTo(Movie, {
        foreignKey: 'movieId'
    });
    Movie.hasMany(Rating, {
        foreignKey: 'movieId',
        onDelete: 'CASCADE'
    });
    Rating.belongsTo(Movie, {
        foreignKey: 'movieId'
    });
    Movie.hasMany(UserMovieVote, {
        foreignKey: 'movieId',
        onDelete: 'CASCADE'
    });
    UserMovieVote.belongsTo(Movie, {
        foreignKey: 'movieId'
    });
    
    module.exports = { User, Genre, Movie, movieNominate, Rating, UserMovieVote };