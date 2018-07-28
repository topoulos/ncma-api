/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tourndivision', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Name'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Description'
		}
	}, {
		tableName: 'tourndivision'
	});
};
