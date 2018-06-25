const path = require('path')
const axios = require('axios')

module.exports = {
  async item (ctx) {
    let id = ctx.params.id || 1220562
    let res = await axios.get(`https://api.douban.com/v2/book/${id}`)
    ctx.body = res.data
  }
}