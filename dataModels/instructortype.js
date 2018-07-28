/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('instructortype', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
		},
		instructorTypeName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'InstructorTypeName'
		}
	}, {
		tableName: 'instructortype'
	});
};
