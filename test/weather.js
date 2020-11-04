const assert = require('assert')

const { weather } = require('../weather')

const input = {
  locationName: 'New York',
  postalCode: '10005'
}

describe('weather()', () => {

  it('should return weather', () => {
    assert.ok(typeof(weather(input)) === 'string')
  })

  it('indicates failure when a string is passed instead of an object', () => {
    assert.equal(weather('input'), 'invalid input')
  })

  it('should return error message if no input passed', () => {
    assert.equal(weather(), 'input is required')
  })

})