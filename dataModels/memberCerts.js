const data = require ('../data');

const MemberCerts = data.sequelize.define('memberCerts', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    memberId: { type: Sequelize.INTEGER },
    dojoId: { type: Sequelize.INTEGER },
    certificateTypeId: { type: Sequelize.INTEGER },
    rankText: { type: Sequelize.STRING },
    instructorId: { type: Sequelize.INTEGER },
    instructorTypeId: { type: Sequelize.INTEGER },
    fromDate: { type: Sequelize.DATE },
    thruDate: { type: Sequelize.DATE },
    completed: { type: Sequelize.BOOLEAN },
    tourneyId: { type: Sequelize.INTEGER },
    batchId: { type: Sequelize.STRING },
},
{ timestamps: false});

module.exports = {
    MemberCerts: MemberCerts
};
