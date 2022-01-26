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
    [regions[ind]]: species.map((elem) => (
      {
        [elem.name]: elem.residents.map((newElem) => newElem.name),
      })),
  }
), {});

const sortNamesResult = () => animalsRegions.reduce((acum, species, index) => (
  {
    ...acum,
    [regions[index]]: species.map((elem) => (
      {
        [elem.name]: elem.residents.map((newElem) => newElem.name).sort(),
      })),
  }
), {});

const sexNotSortResult = (sex) => animalsRegions.reduce((acum, species, index) => (
  {
    ...acum,
    [regions[index]]: species.map((el) => (
      { // el: element, nEl: new element, nnEl: new new element
        [el.name]: el.residents.filter((nEl) => nEl.sex === sex).map((nnEl) => nnEl.name),
      })),
  }
), {});

const sexAndSortResult = (sex) => animalsRegions.reduce((acum, species, index) => (
  {
    ...acum,
    [regions[index]]: species.map((el) => (
      { // el: element, nEl: new element, nnEl: new new element
        [el.name]: el.residents.filter((nEl) => nEl.sex === sex).map((nnEl) => nnEl.name).sort(),
      })),
  }
), {});

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
  if (options.sorted) { // filter by sex and sort
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
