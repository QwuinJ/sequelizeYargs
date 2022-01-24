const Actor = require('../actor/actor.table');
const Movie = require('./movie.table');

exports.addMovie = async (MovieObj) => {
	try {
		await Movie.sync();
		await Movie.create(MovieObj, {
			include: [
				{
					association: Actor,
				},
			],
		});
		console.log(`Added ${MovieObj.title} to database`);
	} catch (e) {
		console.log(e);
	}
};

exports.readMovie = async (movieObj) => {
	try {
		await Movie.sync();
		const result = await Movie.findOne({ where: { title: movieObj.title } });
		if (!result) {
			console.log('not found');
		} else {
			console.log(
				`\nResult:\nTitle: ${result.dataValues.title}\nActor: ${result.dataValues.actor}\nID: ${result.dataValues.id}`
			);
		}
	} catch (e) {
		console.log(e);
	}
};

exports.updateMovie = async (updateObj) => {
	try {
		const newKey = updateObj.key;
		const newValue = updateObj.value;
		const oldTitle = updateObj.title;
		await Movie.sync();
		await Movie.update({ [newKey]: newValue }, { where: { title: oldTitle } });
		await Movie.sync();
		const updatedMovie = await Movie.findOne({ where: { title: oldTitle } });
		console.log(
			`\nUpdated movie\nTitle: ${updatedMovie.dataValues.title} \nActor: ${updatedMovie.dataValues.actor}`
		);
	} catch (e) {
		console.log(e);
	}
};

exports.deleteMovie = async (movieObj) => {
	try {
		await Movie.sync();
		await Movie.destroy({
			where: {
				title: movieObj.title,
			},
		});
	} catch (e) {
		console.log(e);
	}
};
