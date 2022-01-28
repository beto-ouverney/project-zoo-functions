const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animalResidents = species.find((element) => element.name === animal).residents;
  return animalResidents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
