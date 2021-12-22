const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.URI);

try {
	sequelize.authenticate();
} catch (e) {
	console.log(e);
}

module.exports = sequelize;
