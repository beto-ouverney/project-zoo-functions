const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  const filterSpeciesByid = (id) => data.species.id === id;
  if (ids.length === 1) {
    return data.find(filterSpeciesByid(ids));
  }
}

module.exports = getSpeciesByIds;
