const brandSchema = require('../schema/brand')
const errCodeMap = require('../config/errCodeMap')

module.exports = {

  // 列表
  async list () {
    const brands = await brandSchema.find({})
    return Object.assign({
      data: {
        brands
      }
    }, errCodeMap.SUCCESS)
  },

  // 增加
  async add ({brandName, brandId, brandLogo, categoryId, categoryName}) {
    try {
      await brandSchema.insert({
        brandName,
        brandId,
        brandLogo,
        categoryId,
        categoryName
      })
      return errCodeMap.SUCCESS
    } catch (e) {
      return {
        code: '1',
        msg: '新增品牌失败',
        data: null
      }
    }
  },

  // 删除脏数据
  async clear () {
    return await brandSchema.remove({brandId: ''})
  }
}