const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserPublic extends Model { 
}

UserPublic.init(
  {
     user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   favorite_genres: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favorite_movies: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    about_me: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
   { 
    // Options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_public',
  }

);

module.exports = UserPrivate;
