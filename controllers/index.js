const router = require('express').Router();
const express = require('express');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

const app = express();
const PORT = process.env.PORT || 3000;

// Other routes using the default layout
app.get('/main', (req, res) => {
    res.render('main', { layout: 'main' }); // Will use the default 'main' layout
});

module.exports = router;