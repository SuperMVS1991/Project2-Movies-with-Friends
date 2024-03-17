const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Nomination extends Model {
  }

Nomination.init(
     {
    nomination_id: {
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
    // genreid: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     references: {
    //         model: "genres",
    //         key: "id",
    //     }
    // },
    director: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'user_private',
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
