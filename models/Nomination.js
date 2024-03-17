const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

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
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    release_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genre_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: "genres",
            key: "id",
        }
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'users',
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

});

module.exports = Nomination;
