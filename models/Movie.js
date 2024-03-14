const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Movie extends Model {
    // checkPassword(loginPw) {
    //   return bcrypt.compareSync(loginPw, this.password);
    // }
  }

Movie.init(
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
    tableName: "Movie",
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
