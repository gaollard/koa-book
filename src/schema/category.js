const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mixin = require('./mixin')

const categoryTable = {
  // 类目名称
  categoryName: {
    type: String,
    default: ''
  },
  // 类目ID
  categoryId: {
    type: Number,
    default: ''
  },
  // 类目LOGO
  categoryLogo: {
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
  }
}

Object.assign(categoryTable, mixin)
module.exports = mongoose.model('book_category', new mongoose.Schema(categoryTable))
