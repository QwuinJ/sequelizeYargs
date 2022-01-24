const Actor = require('./actor.table');

exports.addActor = async (ActorObj) => {
	try {
		await Actor.sync();
		await Actor.create(ActorObj);
		console.log(`Added ${ActorObj} to database`);
	} catch (err) {
		console.log(err);
	}
};

exports.readActor = async (ActorObj) => {
	try {
		await Actor.sync();
		const result = await Actor.findOne({
			where: {
				name: ActorObj.name,
			},
		});
		if (!result) {
			console.log('not found');
		} else {
			console.log(result);
		}
	} catch (err) {
		console.log(err);
	}
};

exports.updateActor = async (updateObj) => {
	try {
		const newKey = updateObj.key;
		const newValue = updateObj.value;
		const oldName = updateObj.name;
		await Actor.sync();
		const result = await Actor.update(
			{ [newKey]: newValue },
			{ where: { name: oldName } }
		);
		await Actor.sync();
		const updatedActor = await Actor.findOne({ where: { name: oldName } });
		console.log(`\nUpdated actor\nName: ${updatedActor.dataValues.name}`);
	} catch (err) {
		console.log(err);
	}
};

exports.deleteActor = async (actorObj) => {
	try {
		await Actor.sync();
		await Actor.destroy({
			where: {
				name: actorObj.name,
			},
		});
	} catch (err) {
		console.log(err);
	}
};
