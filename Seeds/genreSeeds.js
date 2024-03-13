const sequelize = require('../config/connection');
const { Genre } = require('../models');
const genreSeeds = [
    {
        name: 'Action',
        description: 'Action movies are movies that are filled with action sequences and exciting moments.'
    },
    {
        name: 'Adventure',
        description: 'Adventure movies are movies that are filled with exciting moments and journeys.'
    },
    {
        name: 'Animation',
        description: 'Animation movies are movies that are filled with animated characters and exciting moments.'
    },
    {
        name: 'Comedy',
        description: 'Comedy movies are movies that are filled with funny moments and laughter.'
    },
    {
        name: 'Crime',
        description: 'Crime movies are movies that are filled with criminal activity and suspenseful moments.'
    },
    {
        name: 'Drama',
        description: 'Drama movies are movies that are filled with intense moments and emotional scenes.'
    },
    {
        name: 'Fantasy',
        description: 'Fantasy movies are movies that are filled with magical moments and mystical characters.'
    },
    {
        name: 'Horror',
        description: 'Horror movies are movies that are filled with scary moments and suspenseful scenes.'
    },
    {
        name: 'Musical',
        description: 'Musical movies are movies that are filled with musical numbers and exciting moments.'
    },
    {
        name: 'Mystery',
        description: 'Mystery movies are movies that are filled with suspenseful moments and mysterious scenes.'
    },
    {
        name: 'Romance',
        description: 'Romance movies are movies that are filled with romantic moments and emotional scenes.'
    },
    {
        name: 'Science Fiction',
        description: 'Science Fiction movies are movies that are filled with futuristic moments and exciting scenes.'
    },
    {
        name: 'Thriller',
        description: 'Thriller movies are movies that are filled with suspenseful moments and thrilling scenes.'
    },
    {
        name: 'War',
        description: 'War movies are movies that are filled with intense moments and action scenes.'
    },
    {
        name: 'Western',
        description: 'Western movies are movies that are filled with action scenes and exciting moments.'
    },
];

const seedGenres = () => Genre.bulkCreate(genreSeeds, { individualHooks: true });

module.exports = seedGenres;

