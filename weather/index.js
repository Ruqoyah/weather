const { weatherAction } = require('../action')

// Get Weather based of location
const weather = async (input) => {
  if (!input) {
    return 'input is required'
  }
  else if(typeof(input) !== 'object') {
    return 'invalid input'
  } 
  try {
    const { data } = await weatherAction(input)

    return data

  } catch (error) {
    if (error.response) {
      throw new Error('An error occurred fetching weather')
    }
    throw new Error('An error occurred, please try again')
  }
}

module.exports = {
  weather
}