const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mixin = require('./mixin')

const userTable = {
  // 用户昵称
  username: {
    type: String,
    default: ''
  },
  // 手机号码
  mobile: {
    type: String,
    default: ''
  },
  // 登录密码
  password: {
    type: String,
    default: ''
  },
  // 创建时间
  createTime: {
    type: Date,
    default: Date.now
  },
  // 更新时间
  updateTime: {
    type: Date,
    default: Date.now
  },
  ...mixin
}

const schema = new mongoose.Schema(userTable);
module.exports = mongoose.model('book_user', schema)