const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const array = data.species;
  const animalResidents = array.find((element) => element.name === animal).residents;
  return animalResidents.every((resident)=> resident.age >= age);
}

module.exports = getAnimalsOlderThan;
