const express = require('express');

const router = express.Router();

// GET route for the dashboard
router.get('/dashboard', (req, res) => {
    // Logic to fetch dashboard data from the database
    // Replace this with your own implementation

    const dashboardData = {
        // Sample data
        user: 'John Doe',
        totalMovies: 10,
        friends: ['Alice', 'Bob', 'Charlie']
    };

    res.json(dashboardData);
});

module.exports = router;