const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mixin = require('./mixin')

const postTagTable = {
  // 标签名
  tagName: {
    type: String,
    default: ''
  },
  // 标签ID
  tagId: {
    type: Number,
    default: ''
  },
  // 标签Icon
  tagIcon: {
    type: String,
    default: ''
  },
  // 标签背景图
  tagBg: {
    type: String,
    default: ''
  },
  // 关注人数
  star: {
    type: Number,
    default: 0
  }
}

Object.assign(postTagTable, mixin)
module.exports = mongoose.model('mall_post_tag', new mongoose.Schema(postTagTable))