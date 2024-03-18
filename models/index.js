/* const User = require("./User");
const Genres = require("./Genres");
const Movie = require("./Movie");
const Nomination = require("./Nomination"); // Renamed from 'movieNominate' for clarity
const Rating = require("./Rating"); // Assuming you have a Rating model defined
const UserMovieVote = require("./Vote"); // Assuming you have a UserMovieVote model defined */
const User = require("./User");
const Movie = require("./Movie");
const Genres = require("./genres");
const Nomination = require("./Nomination"); // Renamed from 'movieNominate' for clarity
const Rating = require("./rating"); // Assuming you have a Rating model defined
const UserMovieVote = require("./Vote"); // Assuming you have a UserMovieVote model defined

// Define associations
User.hasMany(Rating, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Nomination, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(UserMovieVote, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
Movie.hasMany(Nomination, { foreignKey: "movieId", onDelete: "CASCADE" });
Movie.hasMany(Rating, { foreignKey: "movieId", onDelete: "CASCADE" });
Movie.hasMany(UserMovieVote, { foreignKey: "movieId", onDelete: "CASCADE" });
Genres.belongsTo(Movie, { foreignKey: "movieId", onDelete: "CASCADE" });
Nomination.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE"});
Nomination.belongsTo(Movie, { foreignKey: "movieId", onDelete: "CASCADE" });
Rating.belongsTo(User, { foreignKey: "userId" });
Rating.belongsTo(Movie, { foreignKey: "movieId" });
UserMovieVote.belongsTo(User, { foreignKey: "userId" });
UserMovieVote.belongsTo(Movie, { foreignKey: "movieId" });
// Export models
module.exports = {
  User,
  Genres,
  Movie,
  Nomination,
  Rating,
  UserMovieVote,
};
