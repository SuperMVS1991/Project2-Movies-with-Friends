const UserPrivate = require("./UserPrivate");
const Genres = require("./Genres");
const Movie = require("./Movie");
const Nomination = require("./Nomination"); // Renamed from 'movieNominate' for clarity
const Rating = require("./Rating"); // Assuming you have a Rating model defined
const UserMovieVote = require("./Vote"); // Assuming you have a UserMovieVote model defined

// Define associations
UserPrivate.hasMany(Rating, { foreignKey: "userId", onDelete: "CASCADE" });
UserPrivate.hasMany(Nomination, { foreignKey: "userId", onDelete: "CASCADE" });
UserPrivate.hasMany(UserMovieVote, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Movie.hasMany(Nomination, { foreignKey: "movieId", onDelete: "CASCADE" });
Movie.hasMany(Rating, { foreignKey: "movieId", onDelete: "CASCADE" });
Movie.hasMany(UserMovieVote, { foreignKey: "movieId", onDelete: "CASCADE" });

Genres.belongsTo(Movie, { foreignKey: "movieId", onDelete: "CASCADE" });
Nomination.belongsTo(UserPrivate, { foreignKey: "userId" });
Nomination.belongsTo(Movie, { foreignKey: "movieId", onDelete: "CASCADE" });
Rating.belongsTo(UserPrivate, { foreignKey: "userId" });
Rating.belongsTo(Movie, { foreignKey: "movieId" });
UserMovieVote.belongsTo(UserPrivate, { foreignKey: "userId" });
UserMovieVote.belongsTo(Movie, { foreignKey: "movieId" });

// Export models
module.exports = {
  UserPrivate,
  Genres,
  Movie,
  Nomination,
  Rating,
  UserMovieVote,
};
