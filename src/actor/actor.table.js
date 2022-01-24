const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Actor = sequelize.define('Actor', {
	actor: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
	},
});

module.exports = Actor;
