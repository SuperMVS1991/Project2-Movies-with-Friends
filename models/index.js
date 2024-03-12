// Import your models here
const User = require('./User');
const Movie = require('./Movie');

// Export your models here
module.exports = {
    User,
    Movie,
};
// Import your controllers here
const homeRoutes = require('./controllers/home-routes.js');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes');
