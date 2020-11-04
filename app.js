const { weather } = require('./weather')
const { currentTime } = require('./time')

// Format response
const formatResponse = ({ timezone, name, main = {} }) => ({
  currentTime: currentTime(timezone),
  weather: `The Weather in ${name} is ${main.temp}°C`
})

// Get Weather and current time
const app = async(inputs) => {
  if (!inputs) {
    return 'input is required'
  }
  else if(typeof(inputs) !== 'object') {
    return 'invalid input'
  } 
  return Promise.all(inputs.map(async(input) => {
    return formatResponse( await weather(input))
  }))
  
}

module.exports = {
  app
}