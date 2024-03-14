const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model {
    // checkPassword(loginPw) {
    //   return bcrypt.compareSync(loginPw, this.password);
    // }

}
Rating.init(
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'Movie',
            key: 'id',
        },
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'users',
            key: 'id',
        },
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    review: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'ratings',
    timestamps: false,
    underscored: true,
});

module.exports = Rating;