const moment = require('moment')

//Get current time
const currentTime = (timezone) => {
  if (!timezone) {
    return 'input is required'
  }
  else if(typeof(timezone) !== 'number') {
    return 'invalid input'
  } 

  const timezoneInMinutes = timezone / 60
  return moment().utcOffset(timezoneInMinutes).format("h:mm:ss A")
}

module.exports = {
  currentTime
}