const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const count = species.map((element) => ({ [element.name]: element.residents.length }));
    const obj = Object.assign(...count);
    return obj;
  }
  const keys = Object.keys(animal);
  const values = Object.values(animal);
  const filterName = (elementAnimal) => elementAnimal.name === values[0];
  const filterSex = (elementAnimal) => elementAnimal.sex === values[1];
  const arrayAnimals = species.find(filterName).residents;
  if (keys.includes('sex')) {
    return arrayAnimals.filter(filterSex).length;
  }

  return arrayAnimals.length;
}

module.exports = countAnimals;
