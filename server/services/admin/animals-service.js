const Animals = require("../../utils/admin/Animals")

const addBreed = async (type, breeds) => {
	const added = await Animals.addBreed(type, breeds)
	return added
}

const getAllAnimals = async () => {}

const getBreedsByAnimal = async ()=> {}

const getFullData = async ()=> {}

module.exports = {
	addBreed,
	getAllAnimals,
	getBreedsByAnimal,
	getFullData,
};
