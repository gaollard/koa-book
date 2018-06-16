const Koa = require('koa')
const app = new Koa()
const router = require('./router/index')
const views = require('koa-views')
const basePath = 'https://api.douban.com/v2/'
const serve = require("koa-static")
const bodyParser = require('koa-bodyparser')

require('./database/mongodb')
require('./database/redis')

// views模板目录配置
app.use(views(`${__dirname}/views`, {
  map: {
    html: 'nunjucks'
  },
  extension: 'html'
}))

// 静态资源目录配置
app.use(serve(__dirname+ "/public"))

// Body解析
app.use(bodyParser({multipart: true}))

// 允许跨域访问
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  await next()
});

// 路由
app.use(router.routes())

app.listen(3003)