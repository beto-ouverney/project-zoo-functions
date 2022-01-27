const data = require('../data/zoo_data');

const getSpeciesByRegion = (region) => data.species.filter((specie) => specie.location === region);

const regions = ['NE', 'NW', 'SE', 'SW'];

const animalsRegions = regions.map((region) => getSpeciesByRegion(region));

const defaultResult = () => animalsRegions.reduce((acum, species, index) => (
  {
    ...acum,
    [regions[index]]: species.map((specie) => specie.name),
  }
), {});

const includeNamesResult = () => animalsRegions.reduce((acum, species, ind) => (
  {
    ...acum,
    [regions[ind]]: species.map((animal) => (
      {
        [animal.name]: animal.residents.map((newAnimal) => newAnimal.name),
      })),
  }
), {});

const sortNamesResult = () => animalsRegions.reduce((acum, species, index) => (
  {
    ...acum,
    [regions[index]]: species.map((animal) => (
      {
        [animal.name]: animal.residents.map((newAnimal) => newAnimal.name).sort(),
      })),
  }
), {});

const sexNotSortResult = (sex) => animalsRegions.reduce((acum, species, index) => (
  {
    ...acum,
    [regions[index]]: species.map((animal) => (
      {
        [animal.name]: animal.residents.filter((nAn) => nAn.sex === sex).map((nnAn) => nnAn.name),
      })),
  }
), {});

const sexAndSortResult = (sex) => animalsRegions.reduce((acum, species, index) => (
  {
    ...acum,
    [regions[index]]: species.map((an) => (
      {
        [an.name]: an.residents.filter((nAn) => nAn.sex === sex).map((nnAn) => nnAn.name).sort(),
      })),
  }
), {});
//cond
function conditions(options) {
  if (!options.includeNames) {
    return defaultResult();
  }
  if (!options.sex) {
    if (options.sorted) {
      return sortNamesResult();
    }
    return includeNamesResult();
  }
  const maleOrFemale = options.sex;
  if (options.sorted) {
    return sexAndSortResult(maleOrFemale);
  }
  return sexNotSortResult(maleOrFemale);
}

function getAnimalMap(options) {
  if (options === undefined) {
    return defaultResult();
  }
  return conditions(options);
}

module.exports = getAnimalMap;
