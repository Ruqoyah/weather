const moment = require('moment')

const currentTime = (timezone) => {
  if (!timezone) {
    return 'input is required';
  }
  else if(isNaN(timezone)) {
    return 'invalid input'
  } 
  return moment().utcOffset(timezone).format("h:mm:ss A")
}

module.exports = {
  currentTime
}