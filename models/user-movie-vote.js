const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserMovieVote = sequelize.define('UserMovieVote', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'movies',
            key: 'id',
        },
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'users',
            key: 'id',
        },
    },
    vote: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = UserMovieVote;