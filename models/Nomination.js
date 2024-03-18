const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User"); // Import the User model
const Movie = require("./Movie"); // Import the Movie model

class Nomination extends Model {
  }

Nomination.init(
     {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Movie',
            key: 'id',
        },
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    month: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize, 
    tableName: 'nomination',
    timestamps: true,
    underscored: true,

}
);

module.exports = Nomination;
