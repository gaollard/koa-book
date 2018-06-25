const router = require('./routerInstance')

// 获取书籍列表
router.get('/book', async (ctx, next) => {
  await next()
  var id = ctx.params.id || 1220562
  let res = await axios.get(`https://api.douban.com/v2/book/${id}`)
  ctx.body = res.data
});

/**
 * 获取书籍详情
 * 1220562
 */
router.get('/book/:id', async (ctx, next) => {
  await next()
  let id = ctx.params.id
  let res = await axios.get(`https://api.douban.com/v2/book/${id}`)
  ctx.body = res.data
});