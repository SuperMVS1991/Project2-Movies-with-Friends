// Remove this from the project

/* const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Genre = sequelize.define('Genre', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    tableName: 'genres',
    timestamps: false,
    underscored: true,
});


module.exports = Genre; */