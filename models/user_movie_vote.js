const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class UserMovieVote extends Model {
    // checkPassword(loginPw) {
    //   return bcrypt.compareSync(loginPw, this.password);
    // }

}

UserMovieVote.init(

{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    vote: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'user_movie_votes',
    timestamps: false,
    underscored: true,
});

module.exports = UserMovieVote;