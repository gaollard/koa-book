const fs = require('fs')
const util = require('util')
const readFileSync = util.promisify(fs.readFile)
const city = require('../local/city')

module.exports = {
  async getCity () {
    return Promise.resolve(city)
  }
}