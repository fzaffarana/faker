/* eslint-env jasmine */
'use strict'

const faker = require('../../')

describe('Faker Integration Test Suite', () => {
  it('should be fine', async () => {
    const fakeModule = {
      writeFile: () => {
        return `I'm a fake method`
      }
    }
    faker('fs', fakeModule)
    const fs = require('fs')
    expect(fs.writeFile()).toBe(`I'm a fake method`)
  })
})
