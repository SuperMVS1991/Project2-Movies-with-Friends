const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class movieNominate extends Model {
    // checkPassword(loginPw) {
    //   return bcrypt.compareSync(loginPw, this.password);
    // }
  }

movieNominate.init(
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
    // genreId: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     references: {
    //         model: "genres",
    //         key: "id",
//     // },
// },
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
    },
    month: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize, 
    tableName: 'movieNominate',
    timestamps: false,
    underscored: true,

});

module.exports = movieNominate;
