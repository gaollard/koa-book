const {promisify} = require('util');
const redis = require("redis");

const client = redis.createClient({
  host: `39.108.138.156`,
  port: '6379',
  password: 'gaoxiong123.'
});

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

/**
 * @email: 1056834607@qq.com
 * @tpl redis链接错误发送邮件
 */
client.on("error", err => {
  console.log(err);
});

module.exports = {
  getAsync,
  setAsync
};
