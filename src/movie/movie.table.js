const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');

const Movie = sequelize.define('Movie', {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	actor: {
		type: DataTypes.STRING,
	},
});

module.exports = Movies;
