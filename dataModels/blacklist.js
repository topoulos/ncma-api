/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('blacklist', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		formerMemberId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FormerMemberID'
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'FirstName'
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LastName'
		},
		reason: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Reason'
		},
		dateListed: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'DateListed'
		}
	}, {
		tableName: 'blacklist'
	});
};
