const data = require('../data');
const Sequelize = require('sequelize');

const MemberCerts = data.sequelize.define('membercerts', {
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		memberId: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'MemberID'
		},
		dojoId: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'DojoID'
		},
		certificateTypeId: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'CertificateTypeID'
		},
		rankText: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'RankText'
		},
		instructorId: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'InstructorID'
		},
		instructorTypeId: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'InstructorTypeID'
		},
		fromDate: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'FromDate'
		},
		thruDate: {
			type: Sequelize.DATE,
			allowNull: true,
			field: 'ThruDate'
		},
		completed: {
			type: Sequelize.BOOLEAN,
			allowNull: true,
			field: 'Completed'
		},
		tourneyId: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'TourneyID'
		},
		batchId: {
			type: Sequelize.STRING,
			allowNull: true,
			field: 'BatchID'
		}
	}, {
		tableName: 'membercerts'
	});

module.exports = {
    MemberCerts: MemberCerts
}
