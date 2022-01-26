const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const filterChild = (entrant) => entrant.age < 18;
  const childCount = entrants.filter(filterChild).length;
  const filterAdult = (entrant) => entrant.age >= 18 && entrant.age < 50;
  const adultCount = entrants.filter(filterAdult).length;
  const filterSenior = (entrant) => entrant.age >= 50;
  const seniorCount = entrants.filter(filterSenior).length;
  const obj = (adult, child, senior) => ({
    adult,
    child,
    senior,
  });
  return obj(adultCount, childCount, seniorCount);
}

function calculateEntry(entrants) {
  //  entrants.length  retorna undefined quando um objeto vazio entra como param
  if (entrants !== undefined && entrants.length !== undefined) {
    const people = countEntrants(entrants);
    const keys = Object.keys(people);
    const total = keys.reduce((acum, key) => acum + people[key] * prices[key], 0);

    return total;
  }
  return 0;
}
module.exports = { calculateEntry, countEntrants };
