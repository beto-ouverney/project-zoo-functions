const data = require('../data/zoo_data');

const { employees } = data;

const { species } = data;

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((employee) => employee.id === id).responsibleFor[0];
  const findFirstAnimal = (animal) => animal.id === firstSpecie;
  const firstAnimal = species.find(findFirstAnimal).residents;
  // função retirada do stackoverflow para retirada do maior valor de uma propriedade de um array de objetos
  const bigger = Math.max(...firstAnimal.map((animal) => animal.age));
  const result = firstAnimal.find((animal) => animal.age === bigger);

  return Object.values(result);
}

module.exports = getOldestFromFirstSpecies;
