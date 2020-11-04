const axios = require('axios')

//Request Weather Data
const weatherAction = (input) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input.locationName}&appid=088961f14b49e274e10acdceeaf629a4&units=metric`)

module.exports = {
  weatherAction
}