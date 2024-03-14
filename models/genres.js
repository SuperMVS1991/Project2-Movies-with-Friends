const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

class Genre extends Model {
    // checkPassword(loginPw) {
    //   return bcrypt.compareSync(loginPw, this.password);
    // }

}
Genre.init(
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
        allowNull: true,
    },
}, {
    tableName: 'genres',
    timestamps: false,
    underscored: true,
});


module.exports = Genre;