const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
            model: 'movies',
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
});

module.exports = UserMovieVote;