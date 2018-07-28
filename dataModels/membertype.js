/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('membertype', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'ID'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Name'
		}
	}, {
		tableName: 'membertype'
	});
};
