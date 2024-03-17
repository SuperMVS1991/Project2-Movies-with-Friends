const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Genres extends Model {
    // checkPassword(loginPw) {
    //   return bcrypt.compareSync(loginPw, this.password);
    // }

}
Genres.init(
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        reference: {
            model: 'Movie',
            key: 'id',
        },
    },
}, {
    sequelize,
    tableName: 'genres',
    timestamps: false,
    underscored: true,
});


module.exports = Genres;