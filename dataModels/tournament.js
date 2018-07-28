/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tournament', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Description'
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
		postalCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PostalCode'
		},
		tournDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'TournDate'
		}
	}, {
		tableName: 'tournament'
	});
};
