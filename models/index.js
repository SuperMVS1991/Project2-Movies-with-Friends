const User = require("./User");
const Genres = require("./genres");
const Movie = require("./Movie");
const Nomination = require("./Nomination");
const Rating = require("./rating");
const UserMovieVote = require("./Vote");

//USER INFO

User.hasMany(Rating, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

User.hasMany(Nomination, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

User.hasMany(UserMovieVote, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Movie.hasOne(Genres, {
  foreignKey: "id",
});

Movie.hasMany(Nomination, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Movie.hasMany(Rating, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Movie.hasMany(UserMovieVote, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

UserMovieVote.belongsTo(Movie, {
  foreignKey: "id",
});
Rating.belongsTo(User, {
  foreignKey: "id",
});
Nomination.belongsTo(User, {
  foreignKey: "id",
});
UserMovieVote.belongsTo(User, {
  foreignKey: "id",
});
Genres.belongsTo(Movie, {
  foreignKey: "id",
  onDelete: "CASCADE",
});
Nomination.belongsTo(Movie, {
  foreignKey: "id",
});
Rating.belongsTo(Movie, {
  foreignKey: "id",
});



module.exports = { User, Genres, Movie, Nomination, Rating, UserMovieVote };