'use strict'

// Modules
const Module = require('module')

// Module require method
const originalRequire = Module.prototype.require

class Faker {
  static create (name, module) {
    Module.prototype.require = function () {
      if (arguments[0] === name) {
        return module
      }
      return originalRequire.apply(this, arguments)
    }
  }
}

module.exports = Faker.create
