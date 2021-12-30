const { Op } = require('sequelize/dist');
const Movie = require('./movie.table');

exports.addMovie = async (MovieObj) => {
	try {
		await Movie.sync();
		await Movie.create(MovieObj);
		console.log(`Added ${MovieObj.title} to database`);
	} catch (e) {
		console.log(e);
	}
};

exports.readMovie = async (movieObj) => {
	try {
		await Movie.sync();
		const result = await Movie.findOne({ where: { title: movieObj.title } });
		console.log(
			`\nResult:\nTitle: ${result.dataValues.title}\nActor: ${result.dataValues.actor}`
		);
	} catch (e) {
		console.log(e);
	}
};

exports.updateMovie = async (updateObj) => {
	try {
		await Movie.sync();
	} catch (e) {
		console.log(e);
	}
};
