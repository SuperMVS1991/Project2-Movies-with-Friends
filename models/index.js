const User = require("./User");
const Genres = require("./Genres");
const Movie = require("./Movie");
const movieNominate = require("./Nomination");
const Rating = require("./rating");
const UserMovieVote = require("./Vote");

//USER INFO

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