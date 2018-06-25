const router = require('./routerInstance')
/*
 * 获取电影列表
 * @tag in_theaters 正在热映
 * @tag coming_soon 即将上映
 * @tag top250 top250排行榜
 * @tag weekly 口碑榜
 * @tag us_box 北美票房榜
 * @tag new_movies 新片榜
 */
router.get('/movie/:tag', async (ctx, next) => {
  await next()
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
});

router.get('/movie/subject/:id', async (ctx, next) => {
  await next()
  let id = ctx.params.id
  const movieUrl = 'https://api.douban.com/v2/movie/subject/'
  try {
    let res = await axios.get(`${movieUrl}${id}`)
    ctx.body = res.data
  } catch (e) {
    ctx.body = 'error'
    console.log(e.Error)
  }
});