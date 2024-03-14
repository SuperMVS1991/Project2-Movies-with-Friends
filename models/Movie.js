const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");


// const sequelize = require("../config/connection");
// const sequelize = new Sequelize("database_name", "username", "password", {
//   dialect: "mysql",
//   host: "localhost",
// });

const movie = sequelize.define(
  "movie",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "genres",
        key: "id",
      },
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "movie",
    timestamps: false,
    underscored: true,
  }
);

// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// const Movie = sequelize.define('Movie', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     releaseYear: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
//     genre: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     director: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// }, {
//     tableName: 'movies',
//     timestamps: false,
//     underscored: true,

//     // Define your movie model attributes here
// });

module.exports = Movie;
