const categorySchema = require('../schema/category')

module.exports = {

  // 列表
  async list () {
    return await categorySchema.find({})
  },

  // 详情
  async detail () {

  },

  // 更新
  async update () {

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