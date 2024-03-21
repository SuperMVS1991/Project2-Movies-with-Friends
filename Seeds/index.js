// we need to seed 3 things: users, posts, and comments
var userSeeds = require('./userSeeds');
var genreSeeds = require('./genreSeeds');
var nominationSeeds = require('./nominationSeeds');
var movieSeeds = require('./movieSeeds');
var sequelize = require('../config/connection');
const seedRating = require('./ratingSeeds'); 



// we need to seed 3 things: users, posts, and comments
function seedAll() {
  return sequelize.sync({ force: true }).then(async () => {
    await userSeeds();
    await movieSeeds(); 
    console.log('Movie seeds complete!'); 
    console.log(movieSeeds) 
    await genreSeeds();
    await seedRating();
    await nominationSeeds(); 
    console.log('Seeding complete!');
  });
}
seedAll();