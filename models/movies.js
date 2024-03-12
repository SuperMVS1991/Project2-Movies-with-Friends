const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/connection");

const Movie = sequelize.define("Movie", {
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
});

module.exports = Movie;
