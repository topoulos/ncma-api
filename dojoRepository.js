const models = require('./dataModels/dojos');

async function getDojos() {
    return await models.Dojos.findAll();
}

module.exports = {
    getDojos: getDojos
};