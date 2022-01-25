const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  console.log(...ids);
  const array = data.species;
  return array.filter((element) => ids.includes(element.id));
}
module.exports = getSpeciesByIds;
