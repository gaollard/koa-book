const Koa = require('koa');
const app = new Koa();
const https = require('https');
const http = require('http');
const axios = require('axios');

const basePath = 'https://api.douban.com/v2/'

app.use(async (ctx, next) => {
  await next();
  ctx.set('Access-Control-Allow-Origin', '*');
});

app.use(async (ctx, next) => {
  let res = await axios.get('https://api.douban.com/v2/book/1220562');
  ctx.body = res.data;
});

app.listen(3000);
