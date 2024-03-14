// we need to seed 3 things: users, posts, and comments
var userSeeds = require('./userSeeds');
var genreSeeds = require('./genreSeeds');
var createMovieNominateSeeds = require('./movie_Nominate');
var user_Movie_VoteSeeds = require('./user_Movie_VoteSeeds');
var movieSeeds = require('./movieSeeds');
var sequelize = require('../config/connection');
const seedRating = require('./ratingSeeds');

// we need to seed 3 things: users, posts, and comments
function seedAll() {
  return sequelize.sync({ force: true }).then(async () => {
    await userSeeds();
    await movieSeeds();
    await genreSeeds();
    await seedRating();
    await createMovieNominateSeeds();
    // await movie_Nominate();
    await user_Movie_VoteSeeds();
    // await createUserMovieVoteSeeds();
    
  });
}
seedAll();