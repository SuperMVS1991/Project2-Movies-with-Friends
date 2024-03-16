const UserPrivate = require("./UserPrivate");
const UserPublic = require("./UserPublic");
const Genres = require("./Genres");
const Movie = require("./Movie");
const movieNominate = require("./Nomination");
const Rating = require("./rating");
const UserMovieVote = require("./Vote");
const UserPrivate = require("./UserPrivate");

//USER INFO
UserPrivate.hasOne(UserPublic, {
  foreignKey: "userId",
});
UserPublic.belongsTo(UserPrivate, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  });

User.hasMany(Rating, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.hasMany(movieNominate, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.hasMany(UserMovieVote, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Movie.hasOne(Genres, {
  foreignKey: "movieId",
});
// Genre.belongsTo(movieNominate, {
//     foreignKey: 'genreid',
//     onDelete: 'CASCADE'
// });
// movieNominate.hasMany(Genre, {
//     foreignKey: 'genreid'
// });



Movie.hasMany(movieNominate, {
  foreignKey: "movieId",
  onDelete: "CASCADE",
});

Movie.hasMany(Rating, {
  foreignKey: "movieId",
  onDelete: "CASCADE",
});

Movie.hasMany(UserMovieVote, {
  foreignKey: "movieId",
  onDelete: "CASCADE",
});




UserMovieVote.belongsTo(Movie, {
  foreignKey: "movieId",
});
Rating.belongsTo(User, {
  foreignKey: "userId",
});
movieNominate.belongsTo(User, {
  foreignKey: "userId",
});
UserMovieVote.belongsTo(User, {
  foreignKey: "userId",
});
Genres.belongsTo(Movie, {
  foreignKey: "movieId",
  onDelete: "CASCADE",
});
movieNominate.belongsTo(Movie, {
  foreignKey: "movieId",
});
Rating.belongsTo(Movie, {
  foreignKey: "movieId",
});

module.exports = { User, Genres, Movie, movieNominate, Rating, UserMovieVote };