const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mixin = require('./mixin')

const postTable = {
  // 品牌名称
  title: {
    type: String,
    default: ''
  },
  // 品牌ID
  html: {
    type: Number,
    default: ''
  },
  // 品牌LOGO
  markdown: {
    type: String,
    default: ''
  },
  // 类目Id
  tags: {
    type: String,
    default: ''
  },
  postId: {
    type: Number,
    default: 1
  }
}

Object.assign(postTable, mixin)
module.exports = mongoose.model('mall_post', new mongoose.Schema(postTable))