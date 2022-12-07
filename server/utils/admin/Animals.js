const mongoose = require("mongoose");
const arrayDiff = require("../../functions/ArrayDiff");
const model__animal = require("../../models/admin/animal-model");

const addBreed = async (type, breeds) => {
	let animal = new model__animal({
		type: type,
		breeds: breeds,
	});

	const breedsList = await model__animal
		.find({ type: type })
		.exec();

	if (breedsList.length === 0) {
		// add new animal type with its relavent breeds
		try {
			await animal.save();
		} catch (e) {
			console.log(e);
			return "db error";
		}
		return animal;
	}

	let availability = false;
	let addingList = [];
	let availableBreeds = breedsList[0].breeds;

	// console.log("available =====>");
	// console.log(availableBreeds);

	// console.log("add req ====>")
	// console.log(breeds)

	addingList = arrayDiff.arr_diff(availableBreeds, breeds);
	// console.log("difference ====>")
	// console.log(addingList);

	// avoid repititive items
	let newBreedList = Array.from(
		new Set(availableBreeds.concat(addingList))
	);

	if (addingList.length === 0) {
		return "already available";
	}

	console.log("updated breeds list ====>");
	console.log(newBreedList);

	await model__animal.updateOne(
		{ type: type },
		{ $set: { breeds: newBreedList } }
	);

	const upadatedAnimal = await model__animal
		.find({ type: type })
		.exec();

	return upadatedAnimal;

	// breedsList[0].breeds.forEach(breedAvailable => {
	// 	breeds.forEach(breedToAdd => {

	// 		console.log("breedsList => "+ breedAvailable)
	// 		console.log("breedsToAdd => "+ breedToAdd)
	// 		console.log("")

	// 		if(breedAvailable === breedToAdd){
	// 			availability = true
	// 			return
	// 		}
	// 	})
	// });

	// if(availability === true){
	// 	return "already available"
	// }
};

const getAllAnimals = async () => {
	return await model__animal.find(
		{},
		{
			type: 1,
			breeds: 1,
		}
	);
};

const getBreedsByAnimal = async () => {};

const getFullData = async () => {};

module.exports = {
	addBreed,
	getAllAnimals,
	getBreedsByAnimal,
	getFullData,
};
