const axios = require('axios')

const weatherAction = (input) => {

  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input.locationName}&appid=088961f14b49e274e10acdceeaf629a4&units=metric`)
    .then(({ data }) => data)
    .catch((error) => error.response)
}

module.exports = {
  weatherAction
}