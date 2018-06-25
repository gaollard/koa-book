const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mixin = require('./mixin')

const productTable = {
  // 商品名称
  productName: {
    type: String,
    default: ''
  },
  // 商品ID
  productId: {
    type: Number,
    default: 1
  },
  // 商品LOGO
  productLogo: {
    type: String,
    default: 'iPhone 6 Plus.png'
  },
  // 商品类目
  categoryId: {
    type: String,
    default: ''
  },
  // 商品品牌
  brandId: {
    type: String,
    default: ''
  },
  // 商品价格
  productPrice: {
    type: Number,
    default: 5000
  },
  // 商品出售量
  productSales: {
    type: Number,
    default: 1000
  },
  // 商品库存量
  productStock: {
    type: Number,
    default: 1000
  },
  // 商品标签
  productTags: {
    type: Array,
    default: []
  },
  // 商品描述 (富文本)
  productDescription: {
    type: String,
    default: ''
  },
  // 商品展示图片列表
  productLogoList: {
    type: Array,
    default: []
  },
  // 商品评论
  productReviews: {
    type: Array,
    default: []
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

Object.assign(productTable, mixin)
module.exports = mongoose.model('book_product', new mongoose.Schema(productTable))