const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');


class Calendar extends Model {
    constructor() {
        super();
        this.events = [];
    }
}

Calendar.init(
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
        start: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: 'calendar',
        timestamps: false,
        underscored: true,
    },
    {
        sequelize,
        modelName: 'Calendar',
    }

);


module.exports = Calendar;