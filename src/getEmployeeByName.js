const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const array = data.employees;
  const finder = (employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      return true;
    }
  };
  const employee = array.find(finder);
  return employee === undefined ? {} : employee;
}
module.exports = getEmployeeByName;
