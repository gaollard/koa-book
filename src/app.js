const Koa = require('koa');
const app = new Koa();
const router = require('./router/index');
const views = require('koa-views');
const basePath = 'https://api.douban.com/v2/'
const serve = require("koa-static");

// 配置viws
app.use(views(`${__dirname}/views`, {
  map: {
    html: 'nunjucks'
  },
  extension: 'html'
}));

app.use(serve(__dirname+ "/public"));

app.use(router.routes());

app.use(async (ctx, next) => {
  await next();
  ctx.set('Access-Control-Allow-Origin', '*');
});

app.listen(3002);