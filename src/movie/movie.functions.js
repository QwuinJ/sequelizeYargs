const Movie = require('./movie.table');

exports.addMovie = async () => {
	try {
		await Movie.sync();
		await Movie.create(MovieObj);
		console.log(`Added ${MovieObj.title} to database`);
	} catch (e) {
		console.log(e);
	}
};
