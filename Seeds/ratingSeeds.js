const sequelize = require('../config/connection');
const { Rating } = require('../models');

const ratingData = [
    {
        movieId: 1,
        userId: 1,
        title: 'Great movie!',
        rating: 5,
        review: 'I loved this movie!'
    },
    {
        movieId: 2,
        userId: 2,
        title: 'Good movie!',
        rating: 4,
        review: 'I liked this movie!'
    },
    {
        movieId: 3,
        userId: 3,
        title: 'It was okay.',
        rating: 3,
        review: 'I thought it was okay.'
    },
    {
        movieId: 4,
        userId: 4,
        title: 'Not my favorite.',
        rating: 2,
        review: 'I did not like this movie.'
    },
    {
        movieId: 5,
        userId: 5,
        title: 'Terrible movie!',
        rating: 1,
        review: 'I hated this movie!'
    },
];


const seedRating = () => User.bulkCreate(ratingData, {
    individualHooks: true
});

module.exports = seedRating;