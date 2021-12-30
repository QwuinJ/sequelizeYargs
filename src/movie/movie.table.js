const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Movie = sequelize.define('Movie', {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	actor: {
		type: DataTypes.STRING,
	},
});

module.exports = Movie;
