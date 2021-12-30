// copy over stuff from mongoDB files

require('./db/connection');
const yargs = require('yargs');
const { addMovie, readMovie, listMovies } = require('./movie/movie.functions');

const app = async (args) => {
	try {
		if (args.add) {
			console.log(`adding movie...`);
			const movieObj = {
				title: args.title,
				actor: args.actor,
			};
			await addMovie(movieObj);
		} else if (args.read) {
			console.log(`finding movie entry...`);
			const movieObj = {
				title: args.title,
			};
			await readMovie(movieObj);
		} else if (args.update) {
			const updateObj = {
				title: args.title,
				key: args.key,
				value: args.value,
			}
			await updateMovie 
		}
	} catch (e) {
		console.log(e);
	}
};

app(yargs.argv);
