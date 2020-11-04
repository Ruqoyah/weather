const assert = require('assert')

const { app } = require('../app')

const inputs = [
  {
    locationName: 'New York',
    postalCode: '10005'
  },
  {
    locationName: 'Lagos',
    postalCode: '23401'
  }
]

describe('app()', () => {

  it('should return current time and weather', () => {
    return app(inputs).then((response) => {
      assert.ok(typeof (response) === 'object')
    })
  })

  it('indicates failure when a string is passed', () => {
    return app('inputs').then((response) => {
      assert.equal(response, 'invalid input')
    })
  })

  it('should return error message if no input passed', () => {
    return app().then((response) => {
      assert.equal(response, 'input is required')
    })
  })

})