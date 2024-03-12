const mongoose = require('mongoose');
const Movie = require('../models/Movie');

// Import necessary modules and models

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movies-with-friends', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define an array of movie objects to seed
const movies = [
    {
        title: 'Movie 1',
        genre: 'Action',
        releaseYear: 2020,
    },
    {
        title: 'Movie 2',
        genre: 'Comedy',
        releaseYear: 2019,
    },
    // Add more movie objects as needed
];

// Function to seed movies
const seedMovies = async () => {
    try {
        // Delete existing movies
        await Movie.deleteMany();

        // Insert new movies
        await Movie.insertMany(movies);

        console.log('Movies seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding movies:', error);
        process.exit(1);
    }
};

// Call the seedMovies function to start seeding
seedMovies();