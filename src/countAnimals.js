const data = require('../data/zoo_data');

const array = data.species;
function countAnimals(animal) {
  if (animal === undefined) {
    const count = array.map((element) => ({ [element.name]: element.residents.length }));
    const obj = Object.assign(...count);
    return obj;
  }
  const keys = Object.keys(animal);
  console.log(keys);
  const values = Object.values(animal);
  const filterName = (elementAnimal) => elementAnimal.name === values[0];
  const filterSex = (elementAnimal) => elementAnimal.sex === values[1];
  if (keys.includes('sex')) {
    const arrayAnimals = array.find(filterName).residents.filter(filterSex);
    return arrayAnimals.length;
  }
  if (keys.includes('specie')) {
    const arrayAnimals = array.find(filterName).residents;
    return arrayAnimals.length;
  }
}

console.log(countAnimals());

module.exports = countAnimals;
