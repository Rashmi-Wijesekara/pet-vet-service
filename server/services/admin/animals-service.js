const Animals = require("../../utils/admin/Animals")

const addBreed = async (type, breeds) => {
	const added = await Animals.addBreed(type, breeds)
	return added
}

const getAllAnimals = async () => {
	const allAnimals = await Animals.getAllAnimals()
	return allAnimals
}

const getBreedsByAnimal = async (type)=> {
	const breedsList = await Animals.getBreedsByAnimal(type)
	return breedsList
}

const getFullData = async ()=> {
	const fullList = await Animals.getFullData();
	return fullList;
}

module.exports = {
	addBreed,
	getAllAnimals,
	getBreedsByAnimal,
	getFullData,
};
