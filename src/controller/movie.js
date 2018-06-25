const path = require('path')
const axios = require('axios')

module.exports = {
  async list (ctx, next) {
    let tag = ctx.params.tag
    let start = ctx.query.start || 0
    let count = ctx.query.count || 10
    const movieUrl = 'https://api.douban.com/v2/movie/'
    try {
      let res = await axios.get(`${movieUrl}${tag}?start=${start}&count=${count}`)
      ctx.body = res.data
    } catch (e) {
      ctx.body = 'error'
      console.log(e.Error)
    }
  },
  async item (ctx, next) {
    let id = ctx.params.id
    const movieUrl = 'https://api.douban.com/v2/movie/subject/'
    try {
      let res = await axios.get(`${movieUrl}${id}`)
      ctx.body = res.data
    } catch (e) {
      ctx.body = 'error'
      console.log(e.Error)
    }
  }
}