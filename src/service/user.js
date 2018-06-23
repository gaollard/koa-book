const userSchema = require('../schema/user')
const redisHandle = require('../database/redis')
const utils = require('../helper')
const errCodeMap = require('../config/errCodeMap')

/**
 * 18620343136 3573473a61b4c2afe23855e63aca6b3d
 */

module.exports = {

  /**
   * 创建并设置登录token
   * @param {*} mobile 手机号码
   */
  async _createAndSetLoginToken (mobile) {
    const loginToken = utils.createLoginToken(mobile);
    await redisHandle.setAsync(loginToken, mobile);
    return loginToken
  },

  /**
   * 判断密码是否正确
   */
  async _isPwdCorrect (mobile, password) {
    let list = await userSchema.find({ mobile })
    console.log(list)
    let findList = await userSchema.find({ mobile, password: utils.encodePwd(password) })
    return findList.length === 0 ? false : true
  },

  // 用户列表
  async list () {
    let list = await userSchema.find()
    return Object.assign({
      data: {
        list: list
      }
    }, errCodeMap.SUCCESS)
  },

  /**
   * 用户注册
   * @param username 用户昵称
   * @param mobile 手机号码
   * @param password 用户密码
   * @param {*} param0
   */
  async register ({username, mobile, password}) {
    let userExist = await userSchema.find({ mobile })
    if (userExist.length) {
      // 用户不存在
      return errCodeMap.MOBILE_EXIST
    }
    // 创建用户
    const userCreator = new userSchema({username, mobile, password: utils.encodePwd(password)})
    const userCreatorResult = await userCreator.save()
    const loginToken = await this._createAndSetLoginToken(mobile)
    return Object.assign({
      data: {
        token: loginToken
      }
    }, errCodeMap.SUCCESS)
  },

  /**
   * 用户登录
   * @param mobile 手机号码
   * @param password 登录密码
   * @param {*} param0
   */
  async login ({mobile, password}) {
    let existFind = await userSchema.find({ mobile })
    if (existFind.length === 0) {
      // 用户未注册
      return errCodeMap.USER_NOT_REGISTER
    }
    const isPwdCorrent = await this._isPwdCorrect(mobile, password)
    console.log(isPwdCorrent)
    if (!isPwdCorrent) {
      // 密码不正确
      return errCodeMap.LOGIN_PWD_ERROR
    }
    const loginToken = await this._createAndSetLoginToken(mobile)
    return Object.assign({
      data: {
        loginToken,
        userInfo: existFind[0]
      }
    }, errCodeMap.SUCCESS)
  },

  /**
   * 获取用户信息
   * @param {*} param0
   */
  async getUserInfo ({ loginToken }) {
    let mobile = await redisHandle.getAsync(loginToken);
    if (!mobile) {
      // 用户未登录
      return errCodeMap.USER_NOT_LOGIN
    }
    let userInfo = await userSchema.find({ mobile })
    return Object.assign({
      data: userInfo[0]
    }, errCodeMap.SUCCESS);
  },

  /**
   * 更新用户信息
   * @param {*} param0
   */
  async updateUserInfo ({loginToken, username, avatarUrl}) {

  }
}