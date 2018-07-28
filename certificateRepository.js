const models = require('./dataModels/memberCerts');

async function GetCerts() {
    return await models.MemberCerts.findAll();
}