const assert = require('assert')

const { currentTime } = require('../time')

const time = new Date().toLocaleString("en-US", {timeZone: "Africa/Lagos"}).split(',')[1].trim()

describe('currentTime()', () => {

  it('should return current time', () => {
    assert.ok(typeof(currentTime(3600)) === 'string')
  })

  it('indicates failure when passed an invalid value', () => {
    assert.equal(currentTime('timezone'), 'invalid input')
  })

  it('should return error message if no input passed', () => {
    assert.equal(currentTime(), 'input is required')
  })

})