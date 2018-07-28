/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('state', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		stateName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'StateName'
		},
		stateAbbrev: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'StateAbbrev'
		}
	}, {
		tableName: 'state'
	});
};
