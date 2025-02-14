const moment = require('moment');

module.exports = function (date, format) {
  if (!date) return ''; // Handle missing or invalid dates
  return moment(date).format(format);
};