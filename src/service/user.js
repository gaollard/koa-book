const userSchema = require('../schema/user')
const redisHandle = require('../database/redis')
const utils = require('../helper')
const errCodeMap = require('../config/errCodeMap')

module.exports = {

  // 注册
  async register ({username, mobile, password}) {
    let userExist = await userSchema.find({ mobile })
    if (userExist.length) {
      return errCodeMap.MOBILE_EXIST
    }
    // 创建用户
    const userCreator = new userSchema({username, mobile, password: utils.encodePwd(password)})
    const userCreatorResult = await userCreator.save()
    // 创建登录token
    const loginToken = utils.createLoginToken(mobile);
    await redisHandle.setAsync(loginToken, mobile);
    return Object.assign({
      data: {
        token: loginToken
      }
    }, errCodeMap.SUCCESS)
  },

  // 获取用户信息
  async getUserInfo ({ loginToken }) {
    console.log(loginToken);
    let mobile = await redisHandle.getAsync(loginToken);
    if (!!mobile) {
      return {
        errCodeMap.USER_NOT_LOGIN
      }
    }
    console.log(loginToken);
    return mobile;
  }
}