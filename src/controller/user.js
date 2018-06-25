const userService = require('../service/user')

module.exports = {

  // 用户列表
  async list (ctx) {
    let ret = await userService.list()
    ctx.body = ret;
  },

  // 用户注册
  async register (ctx) {
    const { username, mobile, password } = ctx.request.body
    let ret = await userService.register({username, mobile, password})
    ctx.body = ret;
  },

  // 用戶登錄
  async login (ctx) {
    const { mobile, password } = ctx.request.body
    let ret = await userService.login({mobile, password})
    ctx.body = ret;
  },

  // 获取用户信息
  async getUserInfo (ctx) {
    let { loginToken } = ctx.request.body
    let ret = await userService.getUserInfo({ loginToken })
    ctx.body = ret;
  }
}