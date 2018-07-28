/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('member', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LastName'
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'FirstName'
		},
		middleName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'MiddleName'
		},
		suffix: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Suffix'
		},
		address1: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Address1'
		},
		address2: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Address2'
		},
		address3: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Address3'
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'City'
		},
		stateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'StateID'
		},
		countryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'CountryID'
		},
		postalCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PostalCode'
		},
		homePhone: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'HomePhone'
		},
		cellPhone: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CellPhone'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Email'
		},
		dob: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DOB'
		},
		planId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'PlanID'
		},
		dojoId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'DojoID'
		},
		memberTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'MemberTypeID'
		},
		dateJoined: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DateJoined'
		},
		dateOfRank: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DateOfRank'
		},
		rankText: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RankText'
		},
		active: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'Active'
		},
		dateInactive: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DateInactive'
		},
		dateLastPaid: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'DateLastPaid'
		},
		comments: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Comments'
		}
	}, {
		tableName: 'member'
	});
};
