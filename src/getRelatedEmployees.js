const data = require('../data/zoo_data');

const array = data.employees;

function isManager(id) {
  // seu código aqui
  const filterEmployees = (employee) => employee.managers.includes(id);
  return array.some(filterEmployees);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const filterEmployees = (employee) => employee.managers.includes(managerId);
    return array.filter(filterEmployees);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
