const data = require('../data/zoo_data');

const { species } = data;

const { hours } = data;

const daysNames = Object.keys(hours);

const mondayObj = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },

};

const animals = species.map((animal) => animal.name);

const arrayOfficeHour = (param) => {
  const oHour = param.map((day) => (
    `Open from ${hours[day].open}am until ${hours[day].close}pm`));
  return oHour;
};

const days = (param) => param.reduce((acum, day, ind) =>
  (
    {
      ...acum,
      [param[ind]]: {
        officeHour: arrayOfficeHour(param)[ind],
        exhibition: species.filter((a) => a.availability.includes(param[ind])).map((e) => e.name),
      },
    }), {});

const getDefaultSchedule = (param) => {
  const schedule = days(param);
  if (param.includes('Monday')) {
    schedule.Monday.officeHour = 'CLOSED';
    schedule.Monday.exhibition = 'The zoo will be closed!';
  }
  return schedule;
};
function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return mondayObj;
  }
  if (daysNames.includes(scheduleTarget)) {
    const param = [];
    param.push(scheduleTarget);
    const result = getDefaultSchedule(param);
    return result;
  }
  if (animals.includes(scheduleTarget)) {
    const result = species.find((animal) => animal.name === scheduleTarget);
    return result.availability;
  }

  const schedule = getDefaultSchedule(daysNames);

  return schedule;
}

module.exports = getSchedule;
