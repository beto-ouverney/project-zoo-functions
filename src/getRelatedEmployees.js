const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const filterEmployees = (employee) => employee.managers.includes(id);
  return employees.some(filterEmployees);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const filterEmployees = (employee) => employee.managers.includes(managerId);
    return employees.filter(filterEmployees).map((e) => `${e.firstName} ${e.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
