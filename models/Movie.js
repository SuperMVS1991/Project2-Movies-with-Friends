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
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Movie",
    timestamps: false,
    underscored: true,
  }
);

module.exports = Movie;
