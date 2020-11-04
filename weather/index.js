const { weatherAction } = require('../action');

const weather = (input) => {
  if (!input) {
    return 'input is required';
  }
  else if(typeof(input) !== 'object') {
    return 'invalid input'
  } 
  return weatherAction(input)
    .then((response) => response)
    .catch(() => 'An error occured')
}

module.exports = {
  weather
}