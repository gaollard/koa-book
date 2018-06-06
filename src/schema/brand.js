const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mixin = require('./mixin')

const brandTable = {
  // 品牌名称
  brandName: {
    type: String,
    default: ''
  },
  // 品牌ID
  brandId: {
    type: Number,
    default: ''
  },
  // 品牌LOGO
  brandLogo: {
    type: String,
    default: ''
  },
  // 类目Id
  categoryId: {
    type: String,
    default: ''
  },
  // 类目名称
  categoryName: {
    type: String,
    default: ''
  }
}

Object.assign(brandTable, mixin)
module.exports = mongoose.model('book_brand', new mongoose.Schema(brandTable))