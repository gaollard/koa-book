const productSchema = require('../schema/product')
const errCodeMap = require('../config/errCodeMap')

module.exports = {

  // 列表
  async list () {
    const products = await productSchema.find({})
    return Object.assign({
      data: {
        products
      }
    }, errCodeMap.SUCCESS)
  },

  // 增加
  async add ({productName, brandName, brandId, productLogo, categoryId, categoryName}) {
    const all = await productSchema.find({})
    const productId = all.length + 1
    console.log(productId, productName, brandId)
    try {
      let ret = await productSchema.insertMany([{
        productName,
        productId,
        brandId,
        brandName,
        categoryId,
        categoryName
      }])
      return errCodeMap.SUCCESS
    } catch (e) {
      console.log(e)
      return {
        code: '1',
        msg: '新增品牌失败',
        data: null
      }
    }
  },

  // 获取商品详情
  async getProductInfo ({ productId }) {
    const list = await productSchema.find({ productId })
    const product = list[0]
    return Object.assign({
      data: product
    }, errCodeMap.SUCCESS)
  },

  // 删除脏数据
  async clear () {
    return await productSchema.remove({productId: ''})
  }
}