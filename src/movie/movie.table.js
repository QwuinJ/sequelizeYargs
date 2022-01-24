const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const Actor = require('../actor/actor.table');

const Movie = sequelize.define(
	'Movie',
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
	},
	{
		tableName: 'Movies',
	}
);

Actor.belongsTo(Movie);

module.exports = Movie;
