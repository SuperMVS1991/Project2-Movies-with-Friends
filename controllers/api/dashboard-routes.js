const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Movie = require('../models/Movie');

router.get('/dashboard', async (req, res) => {
    try {
        const userId = req.user.id; // Assuming you have user authentication middleware
        const user = await User.findByPk(userId);
        const totalMovies = await Movie.count({ where: { userId } });
        const friends = user.friends; // Assuming you have a 'friends' field in your User model
        const dashboardData = { user: user.name, totalMovies, friends };
        res.json(dashboardData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;