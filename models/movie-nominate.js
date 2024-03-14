const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/connection");

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
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'users',
            key: 'id',
        },
    },
    vote: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'movies',
    timestamps: false,
    underscored: true,

});

module.exports = Movie;
