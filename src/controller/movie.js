const axios = require('axios')
axios.defaults.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'

module.exports = {

  /*
   * 获取电影列表
   * @tag in_theaters 正在热映
   * @tag coming_soon 即将上映
   * @tag top250 top250排行榜
   * @tag weekly 口碑榜
   * @tag us_box 北美票房榜
   * @tag new_movies 新片榜
   */
  async list (ctx) {
    let tag = ctx.params.tag
    let start = ctx.query.start || 0
    let count = ctx.query.count || 10
    const movieUrl = 'https://api.douban.com/v2/movie/'
    try {
      let res = await axios.get(`${movieUrl}${tag}?start=${start}&count=${count}`)
      console.log(res)
      ctx.body = res.data
    } catch (e) {
      ctx.body = 'error'
      console.log(e.Error)
    }
  },

  /*
   * 获取电影詳情
   */
  async item (ctx) {
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