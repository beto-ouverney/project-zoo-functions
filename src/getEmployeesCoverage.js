const data = require('../data/zoo_data');

const { employees } = data;

const { species } = data;

const animalsByID = (id) => species.find((animal) => animal.id === id);

const testExists = (paramValue) => {
  const idsEmployee = employees.map((employee) => employee.id);
  const firstNameEmployee = employees.map((employee) => employee.firstName);
  const lastNameEmployee = employees.map((employee) => employee.lastName);
  if (idsEmployee.includes(paramValue)) {
    return employees.find((employee) => employee.id === paramValue);
  }
  if (firstNameEmployee.includes(paramValue)) {
    return employees.find((employee) => employee.firstName === paramValue);
  }
  if (lastNameEmployee.includes(paramValue)) {
    return employees.find((employee) => employee.lastName === paramValue);
  }
  return null;
};
const employeeCoverage = (employee) => {
  const { responsibleFor } = employee;
  const speciesEmployee = responsibleFor.map((animalID) => animalsByID(animalID));
  const coverage = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: speciesEmployee.map((animal) => animal.name),
    locations: speciesEmployee.map((animal) => animal.location),
  };
  return coverage;
};

const getAllEmployees = () => {
  const result = [];
  employees.forEach((employee) => {
    result.push(employeeCoverage(employee));
  });
  return result;
};

const getEmployee = (paramValue) => {
  const result = testExists(paramValue);
  if (result !== null) {
    return employeeCoverage(result);
  }
  throw new Error('Informações inválidas');
};
function getEmployeesCoverage(param) {
  if (param === undefined) {
    return getAllEmployees();
  }
  return getEmployee(Object.values(param)[0]);
}

module.exports = getEmployeesCoverage;
