const Model = require('./model');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


class Calendar extends Model {
    constructor() {
        super();
        this.events = [];
    }
}

Calendar.init(
    {
        month-num: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        month-name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre-long-name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'TBD',
        },
       date-nom-start: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date-nom-end: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date-vote-start: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date-vote-end: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date-discuss-start: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date-discuss-end: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    
    {
        sequelize,
        modelName: 'calendar',
        timestamps: false,
        underscored: true,
    }
);


module.exports = Calendar;
