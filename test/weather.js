const assert = require('assert')

const { weather } = require('../weather')

const input = {
  locationName: 'New York',
  postalCode: '10005'
}

describe('weather()', () => {

  it('should return weather', () => {
    return weather(input).then((response) => {
      assert.ok(typeof(response) === 'object')
    })
  })

  it('indicates failure when a string is passed instead of an object', () => {
    return weather('input').then((response) => {
      assert.equal(response, 'invalid input')
    })
  })

  it('should return error message if no input passed', () => {
    return weather().then((response) => {
      assert.equal(response, 'input is required')
    })
  })

})