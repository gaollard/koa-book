const utility = require('utility');
const { appName } = require('../config/app')

module.exports = {

  // 加密加盐
  md5Encode (pwd) {
    return utility.md5(`${pwd}&salt=WK1hg2d90l`)
  },

  // 参数校验
  checkParams (params) {
    for(let key in params) {
      if (key === '' || key === 'undefined' || key === null) {
        return false;
      }
    }
  },

  // 获取n个随机数
  getRandoms(n = 5) {
    let ret = '';
    for(let i = 0; i < n; i++) {
      ret += Math.floor(Math.random() * 10);
    }
    return ret;
  },

  // 生成用户登录token
  createLoginToken (mobile) {
    let randoms = this.getRandoms(5);
    return this.md5Encode(`${appName}_userkey_${mobile}_${randoms}`);
  },

  // 混淆用户密码
  encodePwd (str) {
    return this.md5Encode(str);
  }
}