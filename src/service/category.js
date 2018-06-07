const categorySchema = require('../schema/category')
const errCodeMap = require('../config/errCodeMap')

module.exports = {

  // 列表
  async list () {
    const categorys = await categorySchema.find({})
    return Object.assign({
      data: {
        categorys
      }
    }, errCodeMap.SUCCESS)
  },

  // 增加
  async add ({categoryId, categoryName, categoryLogo}) {
    const categoryCreator = new categorySchema({categoryId, categoryName, categoryLogo});
    try {
      let saveRet = await categoryCreator.save();
      return {
        code: '0',
        msg: 'ok',
        data: null
      }
    } catch (e) {
      return {
        code: '1',
        msg: '新增类目失败',
        data: null
      }
    }
  },

  // 删除脏数据
  async clear () {
    return await categorySchema.remove({categoryId: 4})
  }
}