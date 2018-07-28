const data = require('../data');
const Sequelize = require('sequelize');

const Dojos = data.sequelize.define('dojo', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.STRING },
    style: { type: Sequelize.STRING },
    },
    {
        timestamps: false,
        freezeTableName: true
    });

module.exports = {
    Dojos: Dojos
};