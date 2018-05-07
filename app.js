const Koa = require('koa');
const app = new Koa();
const https = require('https');
const http = require('http');
const axios = require('axios');

app.use(async ctx => {
  let res = await axios.get('http://music.163.com/weapi/personalized/newsong', {
    headers: {
      'Host': 'music.163.com',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      'Referer': 'http://music.163.com/m/',
      'origin': 'http://music.163.com',
      'Cookie': '_iuqxldmzr_=32; _ntes_nnid=6121a3b2087d6ddc4754beb8120e5809,1502120725605; _ntes_nuid=6121a3b2087d6ddc4754beb8120e5809; usertrack=ZUcIhln1i+SIRwIXqd08Ag==; _ga=GA1.2.774705209.1509264366; vjuids=12ccebb7e.160645598f3.0.4b640d7573619; __gads=ID=496baea4a4472ea7:T=1513511823:S=ALNI_MYlqql8Ml6a8-b_zEAQHI7Dy9CrRQ; UM_distinctid=162c466d56542b-0d23e396bd855f-336c7b05-13c680-162c466d5662ba; vjlast=1513511820.1523713498.21; vinfo_n_f_l_n3=066f9f7687d33eab.1.2.1513511819538.1515769750469.1523715164385; WM_TID=ocl8npVDy1CSys0Ush1LW4a%2BMgzx%2Bh%2B0; JSESSIONID-WYYY=IBYO8%2B1yyXEwxgU8Nkunv43sPmXGiPEBYKB27jiI4ynCDH%2FmqC%2B34kOyvWw3yv5jpG9z%2FqqWWOAYUHAVYdXos%2Bfqxd%2BwhTUEeppTs5P5WuMNCDdz6ojx%5CGlH204PC1QX2GzVy6zfCIF4cZNlJu%5CTOptbQe3r%5CI0PUbB5kasvOCCiKarZ%3A1525709559909; __utma=94650624.41870168.1502120726.1525570928.1525707760.3; __utmc=94650624; __utmz=94650624.1525707760.3.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmb=94650624.4.10.1525707760'
    }
  });
  console.log(res.headers);
  ctx.body = 'Hello World';
});

app.listen(3000);