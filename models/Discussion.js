const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Discussion extends Model {}

Discussion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    discussionName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: 'users',
      key: 'id',
    },
    userPicture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userComment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Discussion", // Use modelName instead of tableName for Sequelize v6 and later
    timestamps: false,
    underscored: true,
  }
);

module.exports = Discussion;