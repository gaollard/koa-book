const Koa = require('koa');
const app = new Koa();
const https = require('https');
const http = require('http');

const router = require('./src/router/index');

const basePath = 'https://api.douban.com/v2/'

app.use(router.routes());

app.use(async (ctx, next) => {
  await next();
  ctx.set('Access-Control-Allow-Origin', '*');
});

app.listen(3002);